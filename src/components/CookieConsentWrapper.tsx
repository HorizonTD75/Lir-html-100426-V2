import { useState, useEffect } from "react";
import CookieConsentBanner from "./CookieConsentBanner";
import { initConsent } from "@/lib/cookieConsent";

/**
 * Global wrapper that initialises consent on mount and listens
 * for the custom event to re-show the preferences banner.
 */
const CookieConsentWrapper = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    initConsent();
    const handler = () => setKey((k) => k + 1);
    window.addEventListener("lirelia:open-cookie-prefs", handler);
    return () => window.removeEventListener("lirelia:open-cookie-prefs", handler);
  }, []);

  return <CookieConsentBanner key={key} />;
};

export default CookieConsentWrapper;
