import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/seo";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/hero-astrologer-ai.png`, `${siteUrl}/hero-home-object-ai.png`],
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/hero-about-ai.png`],
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteUrl}/hero-services-ai.png`],
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${siteUrl}/hero-blog-ai.png`],
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteUrl}/hero-contact-ai.png`],
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${siteUrl}/hero-faq-ai.png`],
    },
  ];
}
