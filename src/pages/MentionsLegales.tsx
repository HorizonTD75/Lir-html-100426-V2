import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mentions légales | LirElia"
        description="Mentions légales du site LirElia : éditeur, hébergeur, contact, propriété intellectuelle et informations légales."
        canonicalPath="/mentions-legales"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
              Mentions légales du site LirElia
            </h1>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Éditeur du site</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le site LirElia.fr est édité par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              HORIZON TD — Société par actions simplifiée (SAS)<br />
              Siège social : 4-6 rue Pierre Louÿs, 75116 Paris, France<br />
              SIREN : 840 698 039 — SIRET (siège) : 840 698 039 00012<br />
              TVA intracommunautaire : FR39840698039<br />
              Activité (NAF/APE) : 4791B – Vente à distance sur catalogue spécialisé<br />
              Email : contact@lirelia.fr<br />
              Capital social : 1000 €<br />
              Immatriculée au RCS de Paris sous le numéro 840 698 039.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Directeur de la publication</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Sylvain DE JOUSSINEAU DE TOURDONNET (dirigeant de HORIZON TD).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Hébergeur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le site LirElia.fr est hébergé par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Shopify Inc.<br />
              151 rue O'Connor, Rez-de-chaussée<br />
              Ottawa (Ontario) K2P 2L8, Canada<br />
              Téléphone : +1 613 241 2828
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Contact</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Pour toute question, vous pouvez nous contacter à : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Propriété intellectuelle</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Sauf mention contraire, l'ensemble des contenus du site (textes, visuels, logos, éléments graphiques, structure) est protégé. Toute reproduction ou utilisation sans autorisation préalable écrite est interdite.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Responsabilité</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les informations présentées sur LirElia.fr sont fournies à titre informatif. HORIZON TD s'efforce d'assurer leur exactitude et leur mise à jour, sans garantir l'absence d'erreurs ou d'omissions. L'éditeur ne pourra être tenu responsable des dommages liés à l'utilisation du site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Liens externes</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Le site peut contenir des liens vers des sites tiers. HORIZON TD n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
