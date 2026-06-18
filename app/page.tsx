import Image from "next/image";
import Link from "next/link";
import { ScrollParallax } from "@/app/components/scroll-parallax";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata, getBreadcrumbSchema } from "@/app/seo";
import {
  blogPosts,
  consultationSteps,
  heroHighlights,
  services,
  whatsappHref,
  whyPeopleChoose,
} from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "Raviraj Astro | Vedic Astrologer, Horoscope Reading & Online Consultation",
  description:
    "Raviraj Gaur, also known as Raviraj Astro and searched as Raviraj astrologer, offers online Vedic astrology consultation for love, marriage, career, horoscope reading, kundli analysis, and spiritual remedies.",
  path: "/",
  image: "/hero-astrologer-ai.png",
  keywords: [
    "Raviraj Astro",
    "Raviraj Astrologer",
    "Astrologer Raviraj",
    "Vedic Astrologer",
    "Online Astrology Consultation",
    "Astrology Consultation Online",
    "Love Astrology",
    "Marriage Astrology",
    "Horoscope Reading",
    "Birth Chart Reading",
  ],
});

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 2);
  const featuredHighlights = heroHighlights.slice(0, 3);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: "Home", path: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Professional Vedic Guidance</p>
            <h1 className="hero-title hero-title-home">
              Raviraj Gaur
              <span>Vedic Astrologer</span>
              <span>& Spiritual Consultant</span>
            </h1>
            <p className="hero-copy">
              Raviraj Gaur, also known to many visitors as Raviraj Astro,
              provides personalized Vedic astrology guidance for love,
              marriage, career, family concerns, horoscope reading, and
              spiritual clarity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="button button-primary">
                Book Consultation
              </Link>
              <a href={whatsappHref} className="button button-secondary">
                Chat on WhatsApp
              </a>
            </div>

            <div className="hero-chip-row">
              {featuredHighlights.map((item) => (
                <div key={item} className="hero-chip">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <ScrollParallax className="hero-image-shell" speed={-0.05}>
              <div className="hero-image-frame">
                <Image
                  src="/hero-home-object-ai.png"
                  alt="Luxury face-free astrology still life with kundli chart, brass lamp, and sacred consultation objects"
                  width={1200}
                  height={1400}
                  priority
                  className="hero-image"
                />
              </div>
            </ScrollParallax>

            <ScrollParallax className="hero-floating-card hero-floating-card-one" speed={0.11}>
              <span className="hero-floating-number">08+</span>
              <p>Specialized consultation categories presented clearly.</p>
            </ScrollParallax>

            <ScrollParallax className="hero-floating-card hero-floating-card-two" speed={0.08}>
              <span className="hero-floating-number">24/7</span>
              <p>Fast inquiry flow through WhatsApp and direct contact.</p>
            </ScrollParallax>
          </div>
        </div>
      </section>

      <section className="shell section-spacing">
        <ScrollReveal className="section-heading section-heading-compact">
          <p className="eyebrow">Why Choose Raviraj Gaur</p>
          <h2>Trusted astrology guidance for love, marriage, career, and life clarity.</h2>
        </ScrollReveal>

        <div className="home-value-grid">
          <ScrollReveal delay={80} className="stat-grid">
            <div className="stat-card">
              <strong>Personal Guidance</strong>
              <span>Each consultation is focused on your unique question, timing, and situation.</span>
            </div>
            <div className="stat-card">
              <strong>Relationship Support</strong>
              <span>Get insight for love, marriage, breakup concerns, and emotional confusion.</span>
            </div>
            <div className="stat-card">
              <strong>Career & Business Clarity</strong>
              <span>Understand better timing, decisions, and next steps for work and growth.</span>
            </div>
            <div className="stat-card">
              <strong>Simple Booking</strong>
              <span>Reach out quickly through WhatsApp or contact forms for easy consultation requests.</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180} className="feature-panel feature-panel-compact">
            <p className="eyebrow">Vedic Astrology Services</p>
            <h3 className="font-display text-3xl text-white">
              Meaningful spiritual guidance for real-life problems
            </h3>
            <p className="text-white/72">
              If you are searching for Raviraj astrologer or astrologer
              Raviraj, this platform brings together love astrology, marriage
              guidance, career astrology, family problem support, horoscope
              reading, and spiritual remedies in one trusted place.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="shell section-spacing">
        <ScrollReveal className="section-heading section-heading-compact">
          <p className="eyebrow">Main Services</p>
          <h2>Focused consultations presented in a sharper, cleaner grid.</h2>
        </ScrollReveal>

        <div className="home-service-grid">
          {featuredServices.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 70}
              className="service-card service-card-compact"
            >
              <div className="service-image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={900}
                  className="service-image"
                />
              </div>
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/services" className="button button-secondary">
            View All Services
          </Link>
        </div>
      </section>

      <section className="shell section-spacing">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="feature-panel">
            <p className="eyebrow">How Consultation Works</p>
            <h2 className="font-display text-4xl text-white">
              A simple process from first inquiry to personal guidance
            </h2>
            <p className="text-white/70">
              The website is designed to make it easy for visitors to ask a
              question, understand the service, and move forward with clarity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="quote-grid">
            {consultationSteps.map((step) => (
              <div key={step.title} className="quote-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="shell section-spacing">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Why Clients Reach Out</p>
          <h2>Meaningful guidance for emotional, practical, and spiritual questions.</h2>
        </ScrollReveal>

        <div className="quote-grid">
          {whyPeopleChoose.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 90} className="quote-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="shell section-spacing">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Blog Section</p>
          <h2>Helpful content that strengthens credibility and search presence.</h2>
        </ScrollReveal>

        <div className="blog-grid">
          {featuredPosts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 90} className="blog-card">
              <span className="blog-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/blog" className="button button-primary">
            Explore Blog Layout
          </Link>
        </div>
      </section>

      <section className="shell section-spacing">
        <ScrollReveal className="feature-panel">
          <p className="eyebrow">Online Vedic Astrologer</p>
          <h2 className="font-display text-4xl text-white">
            Raviraj Astro consultations for people seeking clarity and direction
          </h2>
          <div className="space-y-4 text-white/72">
            <p>
              People often search for Raviraj Astro, Raviraj astrologer, or
              astrologer Raviraj when they need guidance for relationship
              confusion, marriage timing, career decisions, business growth,
              family concerns, or spiritual balance.
            </p>
            <p>
              This website is built around those needs with service pages,
              consultation information, and direct WhatsApp access so visitors
              can quickly understand the guidance available and take the next
              step with confidence.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
