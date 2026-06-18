import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { whatsappHref } from "@/app/site-data";
import { getOrganizationSchema, getPersonSchema, getWebsiteSchema, rootMetadata } from "@/app/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cinzel.variable} h-full scroll-smooth antialiased`}
    >
      <body className="site-body min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="background-mesh" aria-hidden="true">
          <span className="aurora aurora-one" />
          <span className="aurora aurora-two" />
          <span className="stars" />
        </div>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
        <a href={whatsappHref} className="whatsapp-float">
          Chat on WhatsApp
        </a>
      </body>
    </html>
  );
}
