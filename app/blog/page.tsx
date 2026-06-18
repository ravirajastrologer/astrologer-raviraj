import { PageHero } from "@/app/components/page-hero";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { buildPageMetadata } from "@/app/seo";
import { blogPosts } from "@/app/site-data";

export const metadata = buildPageMetadata({
  title: "Raviraj Astro Blog | Horoscope Reading & Relationship Guidance",
  description:
    "Read Raviraj Astro articles on horoscope reading, career astrology, relationship guidance, spiritual remedies, and online astrology consultation insights.",
  path: "/blog",
  image: "/hero-blog-ai.png",
  keywords: [
    "Raviraj Astro Blog",
    "Raviraj Astrologer Articles",
    "Horoscope Reading",
    "Relationship Guidance",
    "Online Astrology Consultation",
    "Career Astrology",
    "Astrology Blog",
  ],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Astrology insights, remedies, and practical guidance for everyday life decisions."
        description="Explore articles designed to help visitors understand horoscope guidance, career timing, remedies, and the value of personalized consultation."
        imageSrc="/hero-blog-ai.png"
        imageAlt="Elegant editorial astrology workspace with books, journal, and manuscript pages"
        primaryHref="/contact"
        primaryLabel="Start A Consultation"
        secondaryHref="/services"
        secondaryLabel="See Services"
      />

      <section className="shell section-spacing">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 90} className="blog-card">
              <span className="blog-tag">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <div className="text-sm text-amber-200">{post.excerpt}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
