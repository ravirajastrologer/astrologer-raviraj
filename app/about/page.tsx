import { PageHero } from "@/app/components/page-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata } from "@/app/seo";
import { trustPoints, whatsappHref } from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "About Raviraj Astro | Raviraj Gaur Vedic Astrologer",
  description:
    "Learn about Raviraj Gaur, also known as Raviraj Astro, a Vedic astrologer offering online astrology consultation, relationship guidance, horoscope reading, and spiritual support for clients worldwide.",
  path: "/about",
  image: "/hero-about-ai.png",
  keywords: [
    "Raviraj Astro",
    "Raviraj Astrologer",
    "Raviraj Gaur",
    "Vedic Astrologer",
    "Online Astrology Consultation",
    "Relationship Guidance",
    "Horoscope Reading",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A thoughtful Vedic astrology practice built around clarity, trust, and personal guidance."
        description="Raviraj Gaur is a dedicated astrologer and spiritual consultant offering personalized guidance based on Vedic astrology for love, marriage, career, family concerns, and spiritual direction."
        imageSrc="/hero-about-ai.png"
        imageAlt="Luxury still life with astrological manuscript, kundli chart, brass lamp, and spiritual objects"
        primaryHref="/contact"
        primaryLabel="Book A Consultation"
        secondaryHref={whatsappHref}
        secondaryLabel="Chat On WhatsApp"
      />

      <section className="shell section-spacing">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal className="feature-panel">
            <p className="eyebrow">Personalized Approach</p>
            <h2 className="font-display text-4xl text-white">
              Guidance focused on real concerns, not generic predictions
            </h2>
            <p className="text-white/72">
              Each consultation is positioned to help people gain clarity,
              confidence, and a more grounded perspective on the decisions they
              are facing right now.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="content-panel">
            <p>
              Through horoscope analysis, relationship consultations, career
              insights, and spiritual remedies, Raviraj Gaur helps clients
              understand patterns, timing, and practical next steps with calm
              and care.
            </p>
            <p>
              The overall brand direction combines traditional spiritual depth
              with a premium modern presentation that feels professional,
              mobile-friendly, and easy to trust.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((point, index) => (
            <ScrollReveal key={point} delay={index * 80} className="stat-card">
              <strong>{point}</strong>
              <span>
                Presented with clarity and care so visitors can understand the
                consultation value quickly.
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
