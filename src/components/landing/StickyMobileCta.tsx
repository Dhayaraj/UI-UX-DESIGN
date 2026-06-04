import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/landing-config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border glass-strong p-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          id="call-now"
          href={CONTACT.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          id="book-free-counselling"
          href="#enquiry"
          className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--accent)_60%,transparent)]"
        >
          <MessageCircle className="h-4 w-4" /> Free Counselling
        </a>
      </div>
    </div>
  );
}
