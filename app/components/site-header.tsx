"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, phoneHref, whatsappHref } from "@/app/site-data";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="header-action-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v2.3a1.78 1.78 0 0 1-1.94 1.78A17.6 17.6 0 0 1 3 3.94 1.78 1.78 0 0 1 4.77 2h2.3a1.78 1.78 0 0 1 1.78 1.53l.39 3.12a1.78 1.78 0 0 1-.51 1.49l-1.66 1.66a14.2 14.2 0 0 0 7.13 7.13l1.66-1.66a1.78 1.78 0 0 1 1.49-.51l3.12.39A1.78 1.78 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="header-action-icon"
      fill="currentColor"
    >
      <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2C6.55 2 2.1 6.45 2.1 11.92c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.88 9.88 0 0 0 4.72 1.2h.01c5.47 0 9.92-4.45 9.92-9.92a9.85 9.85 0 0 0-2.9-6.95ZM12.03 20.14h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.31a8.18 8.18 0 0 1-1.27-4.36c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.22-8.14 8.22Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.8.96-.14.17-.29.19-.54.07-.25-.13-1.05-.38-2-1.22-.74-.66-1.24-1.46-1.39-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.07-.13-.56-1.34-.77-1.84-.2-.47-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.17 1.68 2.56 4.08 3.59.57.25 1.02.39 1.37.49.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="header-menu-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {open ? (
        <>
          <path d="M6 6 18 18" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-wrap">
        <div className={`header-bar ${isMenuOpen ? "header-bar-menu-open" : ""}`}>
          <div className="header-desktop-nav">
            <nav className="nav-row" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="nav-link-label">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link
            href="/"
            className="brand-mark brand-mark-center header-desktop-brand"
            aria-label="Astrologer Raviraj Home"
          >
            <Image
              src="/logo-astrologer-raviraj.svg"
              alt="Astrologer Raviraj logo"
              width={320}
              height={90}
              className="brand-logo-image"
              priority
            />
          </Link>

          <div className="header-mobile-top">
            <Link
              href="/"
              className="brand-mark brand-mark-center"
              aria-label="Astrologer Raviraj Home"
              style={{
                justifyContent: "flex-start",
              }}
            >
              <Image
                src="/logo-astrologer-raviraj.svg"
                alt="Astrologer Raviraj logo"
                width={320}
                height={90}
                className="brand-logo-image"
                priority
              />
            </Link>

            <button
              type="button"
              className="header-menu-toggle"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation-panel"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <MenuIcon open={isMenuOpen} />
            </button>
          </div>

          <div className="header-desktop-actions">
            <a
              href={whatsappHref}
              className="button button-primary header-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </a>
            <a
              href={phoneHref}
              className="header-icon-button"
              aria-label="Call Raviraj"
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneIcon />
            </a>
            <a
              href={whatsappHref}
              className="header-icon-button"
              aria-label="Chat on WhatsApp"
              onClick={() => setIsMenuOpen(false)}
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div
            id="primary-navigation-panel"
            className={`header-mobile-panel ${isMenuOpen ? "header-mobile-panel-open" : ""}`}
          >
            <nav className="header-mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link header-mobile-link ${isActive ? "nav-link-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="nav-link-label">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="header-mobile-actions">
              <a
                href={whatsappHref}
                className="button button-primary header-cta"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </a>
              <div className="header-mobile-icon-row">
                <a
                  href={phoneHref}
                  className="header-icon-button"
                  aria-label="Call Raviraj"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PhoneIcon />
                </a>
                <a
                  href={whatsappHref}
                  className="header-icon-button"
                  aria-label="Chat on WhatsApp"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
