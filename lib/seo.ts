import type { Metadata } from "next";
import { offers } from "./content";
import { homeDescription, site, SITE_URL } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: `/${string}`;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${site.name} – ${site.owner}, ${site.profession} in Hamburg-${site.district}`,
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function medicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#praxis`,
    name: site.name,
    description: homeDescription,
    url: SITE_URL,
    image: `${SITE_URL}/images/reinhard-naupert.jpg`,
    telephone: site.phone.e164,
    email: site.email,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: "Hamburg",
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Hamburg" },
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: site.profession,
    },
    employee: {
      "@type": "Person",
      name: site.owner,
      jobTitle: site.profession,
      url: `${SITE_URL}/person`,
    },
    knowsAbout: offers.flatMap((section) =>
      section.groups.flatMap((group) => group.items),
    ),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
