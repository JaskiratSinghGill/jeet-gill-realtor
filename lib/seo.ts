import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeet Gill | GTA Realtor | HomeLife Miracle Realty",
    template: "%s | Jeet Gill",
  },
  description:
    "Jeet Gill helps families buy, sell, and invest in homes across Brampton, Mississauga, Caledon, Milton, and the Greater Toronto Area.",
  keywords: [
    "Jeet Gill realtor",
    "Brampton realtor",
    "Mississauga real estate",
    "Caledon homes",
    "Milton realtor",
    "GTA real estate agent",
    "HomeLife Miracle Realty Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Jeet Gill Real Estate",
    title: "Jeet Gill | GTA Realtor",
    description:
      "Premium real estate guidance for families buying and selling across the Greater Toronto Area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Gill | GTA Realtor",
    description:
      "Buy, sell, and invest with a polished real estate experience across Brampton, Mississauga, Caledon, and Milton.",
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
  areaServed: ["Brampton", "Mississauga", "Caledon", "Milton", "Greater Toronto Area"],
  url: siteUrl,
  description:
    "Jeet Gill is a GTA realtor helping families buy, sell, and invest across Brampton, Mississauga, Caledon, and Milton.",
};
