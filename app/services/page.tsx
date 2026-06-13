import Image from "next/image";
import { PageHero } from "@/app/components/page-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata } from "@/app/seo";
import { services } from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "Love Astrology, Marriage Astrology & Horoscope Reading Services",
  description:
    "Explore Vedic astrology services including love astrology, marriage astrology, horoscope reading, birth chart reading, career astrology, and spiritual remedies.",
  path: "/services",
  image: "/hero-services-ai.png",
  keywords: [
    "Love Astrology",
    "Marriage Astrology",
    "Horoscope Reading",
    "Birth Chart Reading",
    "Career Astrology",
    "Spiritual Remedies",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consultation services designed around life decisions, relationships, purpose, and spiritual balance."
        description="Explore the main Vedic astrology and spiritual consultation services offered across personal, emotional, professional, and family concerns."
        imageSrc="/hero-services-ai.png"
        imageAlt="Premium astrology tools and consultation objects arranged in a luxury dark blue setting"
        primaryHref="/contact"
        primaryLabel="Book Your Service"
        secondaryHref="/faq"
        secondaryLabel="View FAQ"
      />

      <section className="shell section-spacing">
        <div className="service-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 70} className="service-card">
              <div className="service-image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={900}
                  className="service-image"
                />
              </div>
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
