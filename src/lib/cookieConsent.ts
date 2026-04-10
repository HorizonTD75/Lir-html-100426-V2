/**
 * Cookie Consent Manager for LirElia
 * Manages user cookie preferences, conditional script loading,
 * and server-side consent traceability (RGPD).
 */

import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "lirelia_cookie_consent_v1";
const VISITOR_ID_KEY = "lirelia_visitor_id";
const BANNER_VERSION = 1;

export interface CookieConsent {
  version: number;
  date: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

/** Get or create a stable anonymous visitor ID (UUIDv4-like). */
function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

/** Read stored consent, or null if none exists. */
export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

/** Log consent choice to the database (fire-and-forget). */
function logConsentToDb(analytics: boolean, marketing: boolean) {
  const visitorId = getOrCreateVisitorId();
  supabase
    .from("cookie_consents")
    .insert({
      visitor_id: visitorId,
      consent_given: true,
      analytics,
      marketing,
      banner_version: BANNER_VERSION,
      page_url: window.location.href,
      user_agent: navigator.userAgent?.slice(0, 512) || null,
    })
    .then(({ error }) => {
      if (error) console.warn("Cookie consent log failed:", error.message);
    });
}

/** Persist consent choices. */
export function saveConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    version: BANNER_VERSION,
    date: new Date().toISOString(),
    necessary: true,
    analytics,
    marketing,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  applyConsent(consent);
  logConsentToDb(analytics, marketing);
  return consent;
}

/** Accept all categories. */
export function acceptAll(): CookieConsent {
  return saveConsent(true, true);
}

/** Refuse all optional categories. */
export function refuseAll(): CookieConsent {
  return saveConsent(false, false);
}

// ── Script injection helpers ────────────────────────────────────────

let analyticsLoaded = false;
let marketingLoaded = false;

function loadAnalyticsScripts() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  // Ahrefs Analytics
  if (!document.querySelector('script[src*="analytics.ahrefs.com"]')) {
    const s = document.createElement("script");
    s.src = "https://analytics.ahrefs.com/analytics.js";
    s.dataset.key = "3BzY2HAnG0uK+RQzOCQFQw";
    s.async = true;
    document.head.appendChild(s);
  }

  // Microsoft Clarity
  if (!document.querySelector('script[src*="clarity.ms"]')) {
    const s = document.createElement("script");
    s.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w0a3r6p98n");`;
    document.head.appendChild(s);
  }
}

function loadMarketingScripts() {
  if (marketingLoaded) return;
  marketingLoaded = true;
  // No marketing scripts present yet — placeholder for future pixels
}

/** Apply consent by loading or skipping scripts. */
export function applyConsent(consent: CookieConsent) {
  if (consent.analytics) loadAnalyticsScripts();
  if (consent.marketing) loadMarketingScripts();
}

/** On app start, apply stored consent if it exists. */
export function initConsent() {
  const consent = getConsent();
  if (consent) applyConsent(consent);
}
