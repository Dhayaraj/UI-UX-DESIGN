import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-surface/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const tracking = useRef<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data: Record<string, string> = {};
    for (const key of TRACKING_KEYS) {
      const v = params.get(key);
      if (v) data[key] = v;
    }
    data.referrer = document.referrer || "";
    data.current_page_url = window.location.href;
    data.landing_path = window.location.pathname;
    data.user_agent = navigator.userAgent;
    tracking.current = data;
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      mobile: String(fd.get("mobile") || ""),
      email: String(fd.get("email") || ""),
      current_status: String(fd.get("current_status") || ""),
      preferred_mode: String(fd.get("preferred_mode") || ""),
      ...tracking.current,
    };

    try {
      const res = await fetch("/api/leads/uiux", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success ring-1 ring-success/30">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">Thank you! 🎉</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your enquiry has been received. Our course advisor will reach out shortly to schedule your
          free counselling session.
        </p>
        <Button variant="heroOutline" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass flex flex-col gap-4 rounded-2xl p-6 sm:p-8" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="lead-name" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="Your full name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-mobile" className="text-sm font-medium text-foreground">
            Mobile Number
          </label>
          <input id="lead-mobile" name="mobile" type="tel" required maxLength={20} autoComplete="tel" placeholder="e.g. 98765 43210" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input id="lead-email" name="email" type="email" required maxLength={255} autoComplete="email" placeholder="you@example.com" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-status" className="text-sm font-medium text-foreground">
            Current Status
          </label>
          <select id="lead-status" name="current_status" defaultValue="" required className={inputClass}>
            <option value="" disabled>Select one</option>
            <option value="Student">Student</option>
            <option value="Fresher">Fresher / Graduate</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Career Switcher">Career Switcher</option>
            <option value="Freelancer">Freelancer</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-mode" className="text-sm font-medium text-foreground">
            Preferred Training Mode
          </label>
          <select id="lead-mode" name="preferred_mode" defaultValue="" required className={inputClass}>
            <option value="" disabled>Select one</option>
            <option value="Offline - Chennai">Offline — Chennai</option>
            <option value="Online Live">Online Live</option>
            <option value="Corporate Training">Corporate Training</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      {status === "error" ? (
        <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-2.5 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button id="enquire-now" type="submit" variant="hero" size="xl" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send /> Book My Free Counselling
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted about the course. We respect your privacy.
      </p>
    </form>
  );
}
