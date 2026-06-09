import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, CONTACT } from "@/lib/landing-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40 pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Practical, mentor-led UI UX Design Course in Chennai. Learn Figma, user research,
            wireframing and prototyping — build a real portfolio and launch your design career.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Phone className="h-4 w-4 text-primary" /> {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.emailHref} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
          </a>
          <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {CONTACT.address}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-border px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jeevi Academy. All rights reserved. · UI UX Design Course in Chennai
        </p>
      </div>
    </footer>
  );
}
