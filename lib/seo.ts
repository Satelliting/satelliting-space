import type { Metadata } from "next";
import { site } from "@/content/site";

// Served by app/opengraph-image.tsx and app/twitter-image.tsx. Listed explicitly
// because a page's openGraph/twitter object would otherwise drop inherited images.
const socialAlt = `${site.legalName} - remote-first web design and development studio`;
export const openGraphImages = [
  { url: "/opengraph-image", width: 1200, height: 630, alt: socialAlt },
];
export const twitterImages = [{ url: "/twitter-image", width: 1200, height: 630, alt: socialAlt }];

type PageSeo = {
  /** Page-specific title; the layout's title template appends the brand. */
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for the canonical and Open Graph URLs. */
  path: string;
};

/**
 * Open Graph and Twitter metadata replace (not merge with) the parent's, so
 * every page needs the full set. Building it in one place keeps them in sync
 * with the canonical URL.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: `${title} | ${site.legalName}`,
      description,
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.legalName}`,
      description,
      images: twitterImages,
    },
  };
}

export function absoluteUrl(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/opengraph-image`,
    description: site.description,
    email: site.email,
    sameAs: [site.github],
    areaServed: "Worldwide",
    serviceType: ["Web design", "Web development", "Website hosting and maintenance"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageSchema(
  type: "AboutPage" | "ContactPage" | "CollectionPage",
  { title, description, path }: PageSeo,
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en-US",
  };
}
