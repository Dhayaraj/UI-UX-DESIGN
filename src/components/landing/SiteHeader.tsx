import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { CONTACT, NAV_LINKS } from "@/lib/landing-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-card" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button id="call-now" asChild variant="heroOutline" size="default">
            <a href={CONTACT.phoneHref}>
              <Phone /> Call Now
            </a>
          </Button>
          <Button id="book-free-counselling" asChild variant="hero" size="default">
            <a href="#enquiry">Book Free Counselling</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="glass-strong border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button id="call-now" asChild variant="heroOutline">
                <a href={CONTACT.phoneHref}>
                  <Phone /> Call
                </a>
              </Button>
              <Button id="book-free-counselling" asChild variant="hero">
                <a href="#enquiry" onClick={() => setOpen(false)}>
                  Counselling
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
