/**
 * SEOHead — JSON-LD only.
 *
 * All meta tags (title, description, canonical, OG, Twitter) are handled
 * statically by the synchronous script in index.html.  This component
 * MUST NOT inject any <title>, <meta>, <link rel="canonical"> or other
 * SEO-related HTML tags.  It exists solely to render JSON-LD structured
 * data blocks that cannot be expressed in the static script.
 *
 * RULE — PERMANENT:
 *   • Never add Helmet / react-helmet-async usage here.
 *   • Never create meta tags via JavaScript in any component.
 *   • All SEO tags live in index.html as static HTML or in the
 *     synchronous pre-React script.
 */

interface SEOHeadProps {
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  title?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  description?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  canonicalPath?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogImage?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogImageAlt?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogType?: string;
  /** JSON-LD structured data — the only prop that produces output. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({ jsonLd }: SEOHeadProps) => {
  if (!jsonLd) return null;

  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};

export default SEOHead;
