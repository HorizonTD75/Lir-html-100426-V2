import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Politique de confidentialité | LirElia"
        description="Politique de confidentialité LirElia : données collectées, finalités, conservation, droits RGPD, cookies et contact pour exercer vos droits."
        canonicalPath="/politique-de-confidentialite"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-muted-foreground text-lg mb-10 italic">
              Dernière mise à jour : 17/02/2026
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1) Qui est responsable du traitement ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le responsable du traitement est :<br />
              HORIZON TD (SAS)<br />
              4-6 rue Pierre Louÿs, 75116 Paris, France<br />
              Email : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2) Quelles données collectons-nous ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Lorsque vous utilisez nos formulaires (contact / demande d'information), nous pouvons collecter :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Téléphone</li>
              <li>Contenu du message (description de votre demande)</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>Important (basse vision) :</strong> nous vous invitons à ne pas indiquer d'informations médicales détaillées dans le champ libre. Si vous en indiquez malgré tout, cela peut constituer une donnée de santé au sens du RGPD.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3) Pourquoi traitons-nous vos données (finalités) ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Nous traitons vos données pour :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>Répondre à votre demande (information, orientation, prise de contact)</li>
              <li>Vous recontacter si nécessaire (email / téléphone)</li>
              <li>Assurer le suivi de votre demande</li>
              <li>Mesurer l'audience du site (Google Analytics) uniquement si vous y consentez via le bandeau cookies.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4) Sur quelles bases légales ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Selon le cas :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li><strong>Mesures précontractuelles :</strong> répondre à une demande de contact/devis/rendez-vous.</li>
              <li><strong>Intérêt légitime :</strong> gérer et sécuriser les échanges, améliorer le service (hors cookies non essentiels).</li>
              <li><strong>Consentement :</strong> cookies de mesure d'audience (Google Analytics) et, le cas échéant, si vous choisissez d'indiquer des informations de santé dans votre message (via une case dédiée sur le formulaire, recommandée).</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5) Qui reçoit vos données (destinataires) ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Vos données sont destinées :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>À HORIZON TD (accès limité aux personnes habilitées)</li>
              <li>À nos prestataires techniques nécessaires au fonctionnement</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Nous ne vendons pas vos données.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">6) Où sont hébergées les données ? Transferts hors UE</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les données issues des formulaires sont stockées dans une base sécurisée. Selon la configuration des services utilisés (Shopify / Google), certaines données peuvent être traitées en dehors de l'Union européenne. Lorsque des transferts hors UE existent, ils doivent être encadrés par des garanties appropriées (ex. clauses contractuelles types) et une information transparente.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">7) Combien de temps conservons-nous vos données ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              <strong>Demandes (prospects / contacts) :</strong> conservation jusqu'à 3 ans à compter du dernier contact émanant de vous, puis suppression ou archivage limité si nécessaire (preuves/obligations).
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>Cookies :</strong> durées indiquées dans la page Cookies (et selon vos choix).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">8) Cookies et mesure d'audience (Google Analytics)</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Nous utilisons :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>Des cookies strictement nécessaires au fonctionnement du site</li>
              <li>Des cookies de mesure d'audience (Google Analytics) uniquement avec votre consentement, via le bandeau cookies, sauf configuration entrant dans une exemption très encadrée.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous pouvez modifier votre choix à tout moment via "Gérer mes cookies" (lien en bas de page).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">9) Sécurité</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Nous mettons en place des mesures de sécurité techniques et organisationnelles adaptées :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>Contrôle des accès</li>
              <li>Habilitations</li>
              <li>Séparation des droits</li>
              <li>Stockage sécurisé avec règles d'accès et accès restreint aux personnes autorisées</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">10) Vos droits</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Conformément au RGPD, vous disposez notamment des droits :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>d'accès, de rectification, d'effacement</li>
              <li>d'opposition, de limitation</li>
              <li>(selon les cas) de portabilité</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Pour exercer vos droits : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a> (merci d'indiquer votre identité et la demande concernée).
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous pouvez aussi déposer une réclamation auprès de la CNIL.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">11) Sous-traitants — information utile</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Nos sous-traitants techniques mettent à disposition un Data Processing Addendum (DPA) encadrant leur rôle de sous-traitant et leurs engagements.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
