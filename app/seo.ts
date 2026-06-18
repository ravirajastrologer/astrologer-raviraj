import type { Metadata } from "next";
import {
  brandAliases,
  phoneNumber,
  primaryDomain,
  siteDescription,
  siteName,
  siteTitle,
  whatsappHref,
} from "@/app/site-data";

export const siteUrl = `https://${primaryDomain}`;

export const defaultKeywords = [
  "Raviraj Astro",
  "Raviraj Astrologer",
  "Astrologer Raviraj",
  "Raviraj Astro website",
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
    metadataBase: new URL(siteUrl),
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
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
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
    "@id": `${siteUrl}/#organization`,
    name: siteTitle,
    alternateName: brandAliases,
    description: siteDescription,
    url: siteUrl,
    image: absoluteUrl("/hero-astrologer-ai.png"),
    telephone: phoneNumber,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: phoneNumber,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [whatsappHref],
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi"],
    knowsAbout: [
      "Vedic Astrology",
      "Love Astrology",
      "Marriage Astrology",
      "Horoscope Reading",
      "Career Astrology",
      "Business Astrology",
      "Spiritual Remedies",
      "Kundli Reading",
    ],
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

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteName,
    alternateName: brandAliases,
    description: siteDescription,
    url: siteUrl,
    image: absoluteUrl("/hero-astrologer-ai.png"),
    telephone: phoneNumber,
    sameAs: [whatsappHref],
    jobTitle: "Vedic Astrologer and Spiritual Consultant",
    knowsAbout: [
      "Vedic Astrology",
      "Love Astrology",
      "Marriage Astrology",
      "Horoscope Reading",
      "Birth Chart Reading",
      "Career Astrology",
      "Business Astrology",
      "Spiritual Remedies",
    ],
    worksFor: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteTitle,
    alternateName: brandAliases,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getFaqSchema(
  items: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
