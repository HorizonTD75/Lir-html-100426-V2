/**
 * Centralized SEO configuration.
 * When the final production domain is ready, update SITE_URL here — every
 * canonical, OG URL, sitemap reference and structured-data URL will follow.
 */

export const SITE_URL = "https://lirelia.fr";
export const SITE_NAME = "LirElia";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LirElia",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "Expert en basse vision depuis 25 ans. Bilans fonctionnels, aides à la lecture et accompagnement personnalisé pour les personnes malvoyantes, atteintes de DMLA, glaucome ou autres pathologies visuelles.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33768474235",
    contactType: "customer service",
    availableLanguage: "French",
  },
  sameAs: [],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LirElia",
  url: SITE_URL,
  description:
    "Accompagnement expert en basse vision : bilans fonctionnels, aides à la lecture, conseils et solutions adaptées.",
  inLanguage: "fr-FR",
};

/** Helper: build a BreadcrumbList JSON-LD from an array of {name, path} items. */
export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
