import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeet Gill | Ontario Realtor | HomeLife Miracle Realty",
    template: "%s | Jeet Gill",
  },
  description:
    "Jeet Gill helps families buy, sell, lease, and invest in homes across Ontario, including Brampton, Mississauga, Caledon, and Milton.",
  keywords: [
    "Jeet Gill realtor",
    "Brampton realtor",
    "Mississauga real estate",
    "Caledon homes",
    "Milton realtor",
    "Ontario real estate agent",
    "HomeLife Miracle Realty Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Jeet Gill Real Estate",
    title: "Jeet Gill | Ontario Realtor",
    description:
      "Premium real estate guidance for families buying, selling, and leasing across Ontario.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Gill | Ontario Realtor",
    description:
      "Buy, sell, lease, and invest with a polished real estate experience across Ontario.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Jeet Gill",
  brand: "HomeLife Miracle Realty",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brampton",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Ontario", "Brampton", "Mississauga", "Caledon", "Milton"],
  url: siteUrl,
  description:
    "Jeet Gill is an Ontario realtor helping families buy, sell, lease, and invest across Brampton, Mississauga, Caledon, Milton, and beyond.",
};
