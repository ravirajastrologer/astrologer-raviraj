import { PageHero } from "@/app/components/page-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata } from "@/app/seo";
import { faqs } from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "Astrology Consultation FAQ",
  description:
    "Find answers about online astrology consultation, WhatsApp booking, horoscope reading, relationship guidance, and how Raviraj Gaur works with clients worldwide.",
  path: "/faq",
  image: "/hero-faq-ai.png",
  keywords: [
    "Online Astrology Consultation",
    "Horoscope Reading",
    "Relationship Guidance",
    "Vedic Astrologer FAQ",
    "Marriage Astrology",
  ],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers that make booking and consultation expectations clearer."
        description="This FAQ page helps visitors understand how consultations work, what to share before a session, and how to contact Raviraj Gaur quickly."
        imageSrc="/hero-faq-ai.png"
        imageAlt="Face-free astrology FAQ visual with chart, lamp, parchment, and organized notes"
        primaryHref="/contact"
        primaryLabel="Contact Now"
        secondaryHref="/services"
        secondaryLabel="Browse Services"
      />

      <section className="shell section-spacing">
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 70}>
              <details className="faq-card" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
