import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <div className="page-hero-copy-card">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title">{title}</h1>
            <p className="page-copy">{description}</p>
            <div className="page-hero-actions">
              {primaryHref && primaryLabel ? (
                <Link href={primaryHref} className="button button-primary">
                  {primaryLabel}
                </Link>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Link href={secondaryHref} className="button button-secondary">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="page-hero-visual">
          <div className="page-hero-image-frame">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1000}
              className="page-hero-image"
              priority
            />
            <div className="page-hero-orbit" aria-hidden="true" />
          </div>
          <div className="page-hero-note">
            <span className="page-hero-note__label">{eyebrow}</span>
            <p>Online Vedic astrology consultation with simple WhatsApp contact and clear personal guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
