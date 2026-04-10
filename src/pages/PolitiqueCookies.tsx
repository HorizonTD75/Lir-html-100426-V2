import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { openCookiePreferences } from "@/components/CookieConsentBanner";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Politique de cookies | LirElia"
        description="Politique de cookies de LirElia : types de cookies utilisés, durée de conservation et gestion de vos préférences."
        canonicalPath="/politique-cookies"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
              Politique de cookies
            </h1>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Un cookie est un petit fichier texte déposé sur votre navigateur lorsque vous visitez un site internet.
              Il permet de stocker des informations relatives à votre navigation afin de faciliter votre expérience
              lors de vos prochaines visites.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Quels cookies sont utilisés sur LirElia ?</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">Cookies nécessaires</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Ces cookies sont indispensables au fonctionnement du site. Ils permettent notamment de mémoriser
              vos préférences de consentement. Ils ne collectent aucune donnée à des fins publicitaires et
              ne peuvent pas être désactivés.
            </p>
            <ul className="text-lg text-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
              <li><strong>lirelia_cookie_consent_v1</strong> — Stocke votre choix de consentement cookies. Durée : 12 mois.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">Cookies de mesure d'audience</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Ces cookies permettent de comprendre comment les visiteurs utilisent le site, quelles pages
              sont les plus consultées et comment améliorer l'expérience. Les données sont anonymisées.
            </p>
            <ul className="text-lg text-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
              <li><strong>Ahrefs Analytics</strong> — Outil d'analyse du trafic et du référencement. Durée : selon le service.</li>
              <li><strong>Microsoft Clarity</strong> — Outil d'analyse du comportement utilisateur (cartes de chaleur, enregistrements anonymisés). Durée : selon le service.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">Cookies de services tiers / marketing</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Ces cookies permettent d'activer certains services externes, contenus intégrés ou outils de communication
              et de suivi. Ils ne sont déposés qu'avec votre consentement explicite. Aucun cookie marketing n'est
              actuellement actif sur le site LirElia.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Durée de conservation</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Votre choix de consentement est conservé pendant 12 mois. Les cookies de mesure d'audience
              ont une durée de vie variable selon les outils utilisés, généralement inférieure à 13 mois
              conformément aux recommandations de la CNIL.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Comment modifier votre choix ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur le lien
              « Gérer mes cookies » situé en bas de chaque page du site.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <button
                onClick={() => openCookiePreferences()}
                className="text-primary underline underline-offset-4 hover:text-primary/80 cursor-pointer"
              >
                Modifier mes préférences maintenant
              </button>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">En savoir plus</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Pour en savoir plus sur la protection de vos données personnelles, consultez notre{" "}
              <a href="/politique-de-confidentialite" className="text-primary underline underline-offset-4 hover:text-primary/80">
                politique de confidentialité
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueCookies;
