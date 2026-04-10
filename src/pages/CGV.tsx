import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const CGV = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conditions Générales de Vente (CGV) | LirElia"
        description="Conditions générales de vente LirElia : commandes, paiement, livraison, rétractation, garanties, retours, service client et responsabilités."
        canonicalPath="/cgv"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
              Conditions générales de vente (CGV)
            </h1>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Dernière mise à jour : 17/02/2026
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1. Identité du vendeur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Les présentes CGV sont proposées par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              HORIZON TD — Société par actions simplifiée (SAS)<br />
              Siège social : 4-6 rue Pierre Louÿs, 75116 Paris, France<br />
              SIREN : 840 698 039 — SIRET (siège) : 840 698 039 00012<br />
              TVA intracommunautaire : FR39840698039<br />
              Email : contact@lirelia.fr
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              (ci-après « le Vendeur »)
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2. Objet — Champ d'application</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Les présentes CGV régissent :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-2 space-y-1">
              <li>la vente en ligne de produits (ex. loupes, lunettes, aides visuelles, accessoires),</li>
              <li>la vente de services (ex. consultations de conseil/orientation en basse vision),</li>
              <li>la vente de formations et/ou contenus numériques (le cas échéant),</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              proposés sur le site LirElia.fr (ci-après « le Site »). Elles s'appliquent aux ventes conclues à distance auprès de consommateurs et, sauf stipulation contraire, auprès de professionnels (des règles spécifiques peuvent s'appliquer aux professionnels).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3. Informations précontractuelles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les caractéristiques essentielles, le prix, et le cas échéant les informations d'utilisation/compatibilité (formations/numérique), figurent sur les fiches du Site. En cas de contradiction, les présentes CGV prévalent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4. Commande</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La commande est validée lorsque :
            </p>
            <ol className="list-decimal pl-6 text-lg text-foreground leading-relaxed mb-2 space-y-1">
              <li>le Client sélectionne les produits/services,</li>
              <li>vérifie le récapitulatif (prix, quantités, frais),</li>
              <li>accepte les CGV,</li>
              <li>procède au paiement,</li>
              <li>reçoit une confirmation de commande (email).</li>
            </ol>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Vendeur se réserve le droit de refuser/annuler une commande en cas de motif légitime (ex. fraude, incident de paiement, informations manifestement erronées).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5. Prix</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les prix sont indiqués en euros, TTC, hors frais de livraison éventuels (précisés avant validation). Le Vendeur peut modifier ses prix à tout moment ; le prix applicable est celui affiché au moment de la commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">6. Paiement</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le paiement est exigible immédiatement à la commande (sauf mention contraire). Moyens de paiement : CB / Apple Pay / PayPal / autres via Shopify Payments, etc. La commande est réputée acceptée après confirmation du paiement.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">7. Livraison des produits</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.1 Zone et délais</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Produits livrés : France métropolitaine. Délais indicatifs : 5 jours ouvrés à compter de l'expédition (variables selon transporteurs).
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.2 Frais et transfert des risques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les frais de livraison sont indiqués avant la validation. Le transfert des risques intervient à la remise au Client (ou au tiers désigné), conformément au droit applicable.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.3 Réserves</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Client est invité à vérifier l'état du colis à la livraison et à formuler toute réserve utile auprès du transporteur et du Vendeur dans les meilleurs délais.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">8. Prestations de services (consultations) et formations</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.1 Nature des consultations</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les consultations proposées sur le Site sont des prestations de conseil, d'information et d'orientation liées à la basse vision. Elles ne constituent pas un acte médical, ni un diagnostic, ni une prise en charge d'urgence. En cas d'urgence médicale : composer le 15 ou le 112.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.2 Réservation</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La réservation se fait en ligne via le Site. Le Client choisit un créneau et procède au paiement si la prestation est payante.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.3 Conditions techniques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le Client est responsable de disposer d'un équipement et d'une connexion internet compatibles. En cas d'impossibilité technique imputable au Client, la prestation peut être considérée comme réalisée (voir 8.4).
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.4 Report / annulation / retard / absence</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Politique standard (à adapter) :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>Annulation / report possible jusqu'à 48h avant le créneau.</li>
              <li>En-deçà : avoir partiel.</li>
              <li>En cas de retard du Client : la prestation peut être écourtée sans réduction de prix.</li>
              <li>En cas de non-présentation : prestation due.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.5 Formations et contenus numériques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Lorsque la formation inclut un accès numérique (vidéos, PDF, espace membre), les modalités d'accès sont précisées sur la page de vente : durée d'accès, prérequis, restrictions de partage, etc.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">9. Droit de rétractation (Clients consommateurs)</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.1 Principe</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le consommateur dispose d'un délai de 14 jours pour exercer son droit de rétractation d'un contrat conclu à distance, sans avoir à motiver sa décision.
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>Vente de biens (produits) : délai de 14 jours à compter de la réception du bien.</li>
              <li>Prestations de services : délai de 14 jours à compter de la conclusion du contrat.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.2 Exercice</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Pour exercer le droit de rétractation, le Client notifie sa décision au Vendeur :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>par email à contact@lirelia.fr, ou</li>
              <li>par tout écrit dénué d'ambiguïté.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.3 Effets et remboursement</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de rétractation valable, le Vendeur rembourse les sommes dues (y compris les frais de livraison standard le cas échéant) au plus tard dans les 14 jours à compter de l'information de la décision.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.4 Renvoi des produits</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le Client renvoie les produits au plus tard dans les 14 jours suivant la notification de rétractation. Sauf mention contraire, les frais de retour sont à la charge du Client.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Adresse de retour (sauf instruction différente communiquée) :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              HORIZON TD — Retours LirElia.fr, 4-6 rue Pierre Louÿs, 75116 Paris, France
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les produits doivent être retournés dans un état permettant leur remise en vente (avec accessoires, notice, emballage si possible). Toute dépréciation résultant de manipulations autres que nécessaires peut engager la responsabilité du Client.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.5 Services commencés pendant le délai de rétractation</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Si le Client demande expressément le démarrage d'une prestation avant la fin du délai de rétractation et se rétracte ensuite, il doit payer un montant proportionnel au service fourni jusqu'à la notification de rétractation.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">9.6 Exceptions au droit de rétractation</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le droit de rétractation ne s'applique notamment pas :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>aux services pleinement exécutés avant la fin du délai, si l'exécution a commencé avec l'accord exprès du Client et reconnaissance de la perte du droit une fois la prestation exécutée ;</li>
              <li>aux contenus numériques fournis sans support matériel si l'exécution a commencé avec accord exprès et renoncement (le cas échéant) ;</li>
              <li>aux biens nettement personnalisés, et autres cas prévus par la loi.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Important (à prévoir dans le tunnel de réservation/paiement) : pour une consultation planifiée dans les 14 jours, ajouter une case « Je demande l'exécution avant la fin du délai de rétractation » + une case de reconnaissance de perte du droit si la prestation est pleinement exécutée.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">10. Garanties légales (produits)</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">10.1 Garantie légale de conformité</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le consommateur bénéficie de la garantie légale de conformité (biens neufs, d'occasion, reconditionnés) : le vendeur doit délivrer un bien conforme et répond des défauts de conformité.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">10.2 Garantie des vices cachés</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le consommateur bénéficie également de la garantie légale des vices cachés (Code civil, art. 1641).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">11. Service après-vente — Réclamations</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Pour toute question, réclamation, SAV ou retour : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Client est invité à préciser : numéro de commande, produit/service concerné, description, photos si utile.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">12. Médiation de la consommation (B2C)</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Conformément au Code de la consommation, le consommateur peut recourir gratuitement à un médiateur de la consommation après démarche préalable écrite auprès du Vendeur.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">13. Données personnelles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les traitements de données personnelles sont décrits dans la page <a href="/politique-de-confidentialite" className="text-primary underline underline-offset-4 hover:text-primary/80">Politique de confidentialité</a> (RGPD) du Site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">14. Force majeure</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Aucune partie ne pourra être tenue responsable d'un manquement dû à un événement de force majeure au sens de la jurisprudence française.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">15. Modification des CGV</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Vendeur peut modifier les CGV à tout moment. Les CGV applicables sont celles en vigueur au jour de la commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">16. Droit applicable — Litiges</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Les CGV sont soumises au droit français. À défaut d'accord amiable et après recours éventuel à la médiation (B2C), les tribunaux compétents seront saisis conformément aux règles de droit commun.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
