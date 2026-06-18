import { ContactForm } from "@/app/components/contact-form";
import { PageHero } from "@/app/components/page-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata } from "@/app/seo";
import { phoneHref, phoneNumber, whatsappHref } from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "Contact Raviraj Astro For Online Astrology Consultation",
  description:
    "Contact Raviraj Gaur, also searched as Raviraj Astro, for online astrology consultation, love astrology, marriage astrology, horoscope reading, relationship guidance, and birth chart support.",
  path: "/contact",
  image: "/hero-contact-ai.png",
  keywords: [
    "Contact Raviraj Astro",
    "Raviraj Astrologer Contact",
    "Online Astrology Consultation",
    "Astrology Consultation Online",
    "Love Astrology",
    "Marriage Astrology",
    "Relationship Guidance",
    "Birth Chart Reading",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation, ask a question, or start your WhatsApp conversation right away."
        description="The contact experience is built to feel simple and premium: quick call access, direct WhatsApp support, and a booking form that prepares your message instantly."
        imageSrc="/hero-contact-ai.png"
        imageAlt="Luxury consultation desk with phone, planner, brass diya, and astrology notes"
        primaryHref={whatsappHref}
        primaryLabel="Chat On WhatsApp"
        secondaryHref={phoneHref}
        secondaryLabel="Call Now"
      />

      <section className="shell section-spacing">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="feature-panel">
            <p className="eyebrow">Direct Contact</p>
            <h2 className="font-display text-4xl text-white">
              Easy booking flow for mobile and desktop users
            </h2>
            <div className="space-y-3 text-white/72">
              <p>Phone: {phoneNumber}</p>
              <p>WhatsApp: Fast response flow for consultation requests</p>
              <p>Worldwide-friendly consultation setup</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={phoneHref} className="button button-secondary">
                Call {phoneNumber}
              </a>
              <a href={whatsappHref} className="button button-primary">
                Open WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
