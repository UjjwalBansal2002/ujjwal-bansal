import type { Metadata } from "next";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";
import { SEO_METADATA, PERSONAL_INFO } from "@/data/portfolioData";
import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateFaqSchema,
  generateSoftwareAppSchemas
} from "@/utils/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SEO_METADATA.siteUrl),
  title: {
    default: SEO_METADATA.title,
    template: "%s | Ujjwal Bansal — Senior Android Developer"
  },
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  authors: [{ name: SEO_METADATA.author, url: SEO_METADATA.siteUrl }],
  creator: SEO_METADATA.author,
  publisher: SEO_METADATA.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: SEO_METADATA.siteUrl,
    types: {
      "application/rss+xml": `${SEO_METADATA.siteUrl}/feed.xml`
    }
  },
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    url: SEO_METADATA.siteUrl,
    siteName: "Ujjwal Bansal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ujjwal Bansal — Senior Android Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    creator: "@ujjwalbansal",
    images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personLd = generatePersonSchema();
  const websiteLd = generateWebSiteSchema();
  const faqLd = generateFaqSchema();
  const appsLd = generateSoftwareAppSchemas();

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="alternate" type="application/rss+xml" title="Ujjwal Bansal Blog RSS" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appsLd) }}
        />
      </head>
      <body className="bg-[#050816] text-[#f3f4f6] font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-white">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
