import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getConsent,
  acceptAll,
  refuseAll,
  saveConsent,
  type CookieConsent,
} from "@/lib/cookieConsent";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    acceptAll();
    setVisible(false);
  };
  const handleRefuse = () => {
    refuseAll();
    setVisible(false);
  };
  const handleSavePrefs = () => {
    saveConsent(analytics, marketing);
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="true"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Panel */}
      <div className="relative w-full max-w-xl mx-3 sm:mx-4 mb-3 sm:mb-0 bg-card rounded-2xl shadow-xl border border-border p-4 sm:p-6 md:p-8 animate-in slide-in-from-bottom-4 fade-in duration-300">
        {!showPrefs ? (
          /* ── First level ── */
          <>
            <div className="flex items-start gap-3 mb-5">
              <Shield className="w-7 h-7 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                  Votre vie privée nous importe
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  LirElia utilise des cookies nécessaires au bon fonctionnement du site et, avec votre accord,
                  des cookies de mesure d'audience et de services tiers afin d'améliorer votre expérience.
                  Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  En savoir plus dans notre{" "}
                  <Link to="/politique-cookies" className="text-primary underline underline-offset-4 hover:text-primary/80">
                    politique de cookies
                  </Link>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button
                variant="default"
                size="lg"
                className="w-full text-base"
                onClick={handleAccept}
              >
                Tout accepter
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-base"
                onClick={handleRefuse}
              >
                Tout refuser
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full text-base"
                onClick={() => setShowPrefs(true)}
              >
                <Settings className="w-4 h-4 mr-1" />
                Personnaliser
              </Button>
            </div>
          </>
        ) : (
          /* ── Preferences level ── */
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-xl font-bold text-foreground">
                Paramétrer mes cookies
              </h2>
              <button
                onClick={() => setShowPrefs(false)}
                className="p-2 rounded-lg hover:bg-muted"
                aria-label="Retour"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground">Cookies nécessaires</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Indispensables au fonctionnement du site et à la mémorisation de vos préférences.
                  </p>
                </div>
                <Switch checked disabled aria-label="Cookies nécessaires — toujours actifs" />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground">Mesure d'audience</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Permettent de mieux comprendre la fréquentation du site afin d'améliorer les contenus et l'expérience utilisateur.
                  </p>
                </div>
                <Switch
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  aria-label="Cookies de mesure d'audience"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground">Services tiers / marketing</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Permettent d'activer certains services externes, contenus intégrés ou outils de communication et de suivi.
                  </p>
                </div>
                <Switch
                  checked={marketing}
                  onCheckedChange={setMarketing}
                  aria-label="Cookies de services tiers et marketing"
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="default"
                size="lg"
                className="w-full text-base"
                onClick={handleSavePrefs}
              >
                Enregistrer mes choix
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;

/**
 * Reopens the cookie preferences banner.
 * Clears stored consent so the banner shows again in preferences mode.
 */
export function openCookiePreferences() {
  localStorage.removeItem("lirelia_cookie_consent_v1");
  // Force a re-render by dispatching a custom event
  window.dispatchEvent(new CustomEvent("lirelia:open-cookie-prefs"));
}
