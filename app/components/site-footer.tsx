import Link from "next/link";
import { domainName, navLinks, phoneHref, phoneNumber, siteName } from "@/app/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/35">
      <div className="shell grid gap-8 py-10 text-center md:grid-cols-[1.3fr_0.8fr_0.9fr] md:gap-10 md:py-12 md:text-left">
        <div className="space-y-4">
          <p className="eyebrow">{domainName}</p>
          <h2 className="font-display text-3xl text-white">{siteName}</h2>
          <p className="mx-auto max-w-xl text-white/70 md:mx-0">
            Traditional Vedic astrology guidance presented with a modern,
            trustworthy, and mobile-friendly experience.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-xl text-white">Explore</h3>
          <div className="flex flex-col gap-2 text-white/70">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
            <Link href="/faq" className="footer-link">
              FAQ
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-xl text-white">Contact</h3>
          <a href={phoneHref} className="footer-link">
            {phoneNumber}
          </a>
        </div>
      </div>
    </footer>
  );
}
