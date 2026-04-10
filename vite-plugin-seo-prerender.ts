import { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";

interface RouteSEO {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://lirelia.fr";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Vite plugin that generates per-route HTML files at build time
 * with pre-populated SEO meta tags in the <head>.
 * 
 * Crawlers (Google, Facebook, Twitter) get correct meta tags 
 * from the initial HTML without needing JS execution.
 * The SPA still bootstraps normally for interactive users.
 */
export function seoPrerender(routes: RouteSEO[]): Plugin {
  return {
    name: "vite-plugin-seo-prerender",
    enforce: "post",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
      const indexHtml = path.join(distDir, "index.html");

      if (!fs.existsSync(indexHtml)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping.");
        return;
      }

      const template = fs.readFileSync(indexHtml, "utf-8");

      for (const route of routes) {
        const ogImage = route.ogImage || DEFAULT_OG_IMAGE;
        const ogType = route.ogType || "website";
        const canonicalUrl = `${BASE_URL}${route.canonical}`;

        // Build meta tags to inject
        const metaTags = [
          `<title>${escapeHtml(route.title)}</title>`,
          `<meta name="description" content="${escapeAttr(route.description)}">`,
          `<link rel="canonical" href="${escapeAttr(canonicalUrl)}">`,
          `<meta property="og:title" content="${escapeAttr(route.title)}">`,
          `<meta property="og:description" content="${escapeAttr(route.description)}">`,
          `<meta property="og:url" content="${escapeAttr(canonicalUrl)}">`,
          `<meta property="og:type" content="${escapeAttr(ogType)}">`,
          `<meta property="og:image" content="${escapeAttr(ogImage)}">`,
          `<meta name="twitter:card" content="summary_large_image">`,
          `<meta name="twitter:title" content="${escapeAttr(route.title)}">`,
          `<meta name="twitter:description" content="${escapeAttr(route.description)}">`,
          `<meta name="twitter:image" content="${escapeAttr(ogImage)}">`,
        ];

        if (route.jsonLd) {
          metaTags.push(
            `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`
          );
        }

        const injection = metaTags.join("\n    ");

        // Replace the generic <title> and inject route-specific tags right after <head>
        let html = template;
        
        // Remove generic title from template
        html = html.replace(/<title>[^<]*<\/title>/, "");
        // Remove generic meta description
        html = html.replace(/<meta\s+name="description"[^>]*>/, "");
        // Remove generic og:title, og:description, og:image, og:type
        html = html.replace(/<meta\s+property="og:title"[^>]*>/g, "");
        html = html.replace(/<meta\s+property="og:description"[^>]*>/g, "");
        html = html.replace(/<meta\s+property="og:image"[^>]*>/g, "");
        html = html.replace(/<meta\s+property="og:type"[^>]*>/g, "");
        // Remove generic twitter tags
        html = html.replace(/<meta\s+name="twitter:title"[^>]*>/g, "");
        html = html.replace(/<meta\s+name="twitter:description"[^>]*>/g, "");
        html = html.replace(/<meta\s+name="twitter:image"[^>]*>/g, "");
        html = html.replace(/<meta\s+name="twitter:card"[^>]*>/g, "");

        // Inject after <head> opening
        html = html.replace("<head>", `<head>\n    ${injection}`);

        // Write the route-specific HTML file
        const routePath = route.path.replace(/^\//, "");
        const outputDir = path.join(distDir, routePath);
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf-8");

        console.log(`[seo-prerender] Generated: /${routePath}/index.html`);
      }
    },
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
