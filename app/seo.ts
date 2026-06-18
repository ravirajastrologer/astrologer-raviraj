import type { Metadata } from "next";
import {
  phoneNumber,
  primaryDomain,
  siteDescription,
  siteName,
  siteTitle,
  whatsappHref,
} from "@/app/site-data";

export const siteUrl = `https://${primaryDomain}`;

export const defaultKeywords = [
  "Vedic Astrologer",
  "Online Astrology Consultation",
  "Love Astrology",
  "Marriage Astrology",
  "Horoscope Reading",
  "Relationship Guidance",
  "Astrology Consultation Online",
  "Birth Chart Reading",
  "Career Astrology",
  "Business Astrology",
  "Spiritual Remedies",
  "Kundli Reading",
  "Astrologer in India",
  "WhatsApp Astrology Consultation",
  "Raviraj Gaur",
];

function withSiteTitle(title?: string) {
  if (!title) {
    return siteTitle;
  }

  return `${title} | ${siteName}`;
}

function uniqueKeywords(keywords: string[]) {
  return [...new Set([...keywords, ...defaultKeywords])];
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/hero-astrologer-ai.png",
}: {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = withSiteTitle(title);
  const pageKeywords = uniqueKeywords(keywords);
  const imageUrl = absoluteUrl(image);

  return {
    title: title ?? siteTitle,
    description,
    keywords: pageKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description,
      siteName,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "Astrology",
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  keywords: defaultKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Astrology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName,
    locale: "en_IN",
    images: [
      {
        url: absoluteUrl("/hero-astrologer-ai.png"),
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl("/hero-astrologer-ai.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteTitle,
    description: siteDescription,
    url: siteUrl,
    telephone: phoneNumber,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: phoneNumber,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [whatsappHref],
    areaServed: "Worldwide",
    serviceType: [
      "Vedic Astrology Consultation",
      "Online Astrology Consultation",
      "Love Astrology Guidance",
      "Marriage Astrology",
      "Horoscope Reading",
      "Birth Chart Reading",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@type": "Person",
      name: siteName,
    },
  };
}
