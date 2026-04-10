import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const CharteClub = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Charte du Club LirElia — Règles de bienveillance | LirElia"
        description="Charte du Club LirElia : règles de bienveillance, confidentialité et respect pour des échanges sereins entre personnes malvoyantes et aidants."
        canonicalPath="/charte-club-lirelia"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Charte du Club LirElia
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Échanges en visio pour personnes malvoyantes et aidants
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Préambule</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Club LirElia est un espace d'échange, de dialogue et de soutien proposé par LirElia. Il réunit, à intervalles réguliers, des personnes malvoyantes, avec ou sans leurs aidants, autour d'un animateur LirElia. Ce club a pour vocation de permettre à chacun de partager, dans un cadre rassurant et respectueux, ses préoccupations, ses expériences, ses questions liées à la malvoyance, à la vie quotidienne, à l'autonomie, aux aides techniques, aux démarches ou plus simplement au vécu personnel.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Club LirElia n'est pas un lieu de jugement, ni un lieu de polémique. C'est un lieu de parole, d'écoute, de lien social et de bienveillance.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1. Esprit du club</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le Club LirElia repose sur les valeurs suivantes :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>la bienveillance ;</li>
              <li>le respect de la personne et de son rythme ;</li>
              <li>l'écoute attentive ;</li>
              <li>la convivialité ;</li>
              <li>la liberté de parole ;</li>
              <li>la confidentialité ;</li>
              <li>l'entraide entre participants.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Chaque participant est accueilli avec considération, quels que soient son âge, sa situation, son niveau de vision, son parcours ou son aisance à s'exprimer.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2. Objet des rencontres</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les rencontres du Club LirElia ont pour but de :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>rompre l'isolement ;</li>
              <li>favoriser les échanges entre personnes vivant des situations proches ;</li>
              <li>permettre l'expression des besoins, difficultés et ressentis du quotidien ;</li>
              <li>partager des conseils d'expérience dans un cadre mesuré et respectueux ;</li>
              <li>renforcer la confiance, l'autonomie et le lien humain.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les thèmes abordés peuvent concerner, par exemple, la lecture, les déplacements, l'éclairage, les aides visuelles, la vie à domicile, les démarches, les relations avec les proches, le moral, l'organisation du quotidien ou les adaptations utiles.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3. Engagements des participants</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En rejoignant le Club LirElia, chaque participant s'engage à :
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Respecter la parole d'autrui</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Chacun doit pouvoir parler sans être interrompu, moqué, contredit agressivement ou mis en difficulté.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Écouter sans juger</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les vécus sont différents. Il ne s'agit pas de comparer les souffrances, ni de hiérarchiser les difficultés, mais d'accueillir la parole de chacun avec respect.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Parler librement, sans obligation</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Personne n'est obligé de prendre la parole. Être présent, écouter, intervenir peu ou beaucoup : tout cela est légitime.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Rester courtois et apaisé</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les propos agressifs, humiliants, discriminatoires, déplacés ou injurieux ne sont pas admis.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Respecter l'intimité de chacun</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Chaque participant reste libre de dire ce qu'il souhaite, sans pression pour raconter davantage que ce qu'il veut partager.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Contribuer à un climat rassurant</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le club doit rester un moment agréable, utile et humain pour tous.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4. Confidentialité</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La confidentialité est une règle essentielle du Club LirElia.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Tout ce qui est partagé pendant les rencontres doit rester dans le cadre du club, sauf accord explicite de la personne concernée.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les participants s'engagent à ne pas diffuser à l'extérieur :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>les témoignages entendus ;</li>
              <li>les informations personnelles confiées ;</li>
              <li>les coordonnées, situations familiales ou médicales évoquées ;</li>
              <li>les images, captures d'écran, enregistrements audio ou vidéo de la réunion.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Aucune réunion ne doit être enregistrée sans information claire préalable et accord explicite de LirElia ainsi que des participants concernés.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5. Place de l'animateur LirElia</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              L'animateur LirElia veille au bon déroulement des échanges. Son rôle est notamment de :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>accueillir les participants ;</li>
              <li>rappeler le cadre de la rencontre ;</li>
              <li>favoriser une parole équilibrée ;</li>
              <li>permettre à chacun de s'exprimer s'il le souhaite ;</li>
              <li>reformuler avec tact lorsque cela aide à la compréhension ;</li>
              <li>recentrer les échanges si nécessaire ;</li>
              <li>préserver une ambiance respectueuse, simple et rassurante.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              L'animateur agit avec bienveillance, patience, écoute et empathie. Il veille à ne pas infantiliser les participants et à respecter leur expérience de vie, leur autonomie et leur dignité.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">6. Limites du cadre</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le Club LirElia est un espace d'échange et de soutien. Il ne remplace pas :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>une consultation médicale ;</li>
              <li>un suivi ophtalmologique ;</li>
              <li>un avis de professionnel de santé ;</li>
              <li>un accompagnement psychologique ou social individualisé ;</li>
              <li>un service d'urgence.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les témoignages et conseils partagés pendant les rencontres relèvent de l'expérience personnelle. Ils ne constituent pas des prescriptions médicales ni des diagnostics. En cas d'inquiétude médicale, de dégradation de la vision, de souffrance psychique importante ou de situation urgente, il convient de se tourner vers les professionnels compétents.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">7. Bon usage des rencontres en visio</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour faciliter les échanges et rendre les rencontres plus confortables pour tous, chacun est invité à respecter quelques règles simples :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>se connecter dans un environnement aussi calme que possible ;</li>
              <li>parler chacun son tour ;</li>
              <li>couper son micro lorsqu'on ne parle pas, si besoin ;</li>
              <li>annoncer son prénom avant de prendre la parole lorsque cela facilite la compréhension ;</li>
              <li>éviter les conversations parallèles ;</li>
              <li>rester patient face aux éventuelles difficultés techniques ;</li>
              <li>prévenir simplement si l'on doit quitter la réunion avant la fin.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              L'activation de la caméra peut être encouragée lorsque cela améliore la qualité relationnelle, mais elle ne doit pas devenir une contrainte rigide pour une personne malvoyante ou un aidant en difficulté technique.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">8. Respect des personnes et des différences</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le Club LirElia accueille des participants aux parcours variés. La diversité des situations, des opinions, des niveaux d'autonomie, des caractères et des sensibilités doit être respectée. Aucun participant ne doit subir de remarque blessante concernant :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>son âge ;</li>
              <li>son handicap ;</li>
              <li>son niveau de perte visuelle ;</li>
              <li>sa façon de parler ;</li>
              <li>son vécu ;</li>
              <li>son aidant ou sa famille ;</li>
              <li>ses choix de vie.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">9. En cas de non-respect de la charte</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de non-respect de la présente charte, LirElia se réserve le droit :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>de rappeler oralement les règles pendant la rencontre ;</li>
              <li>d'interrompre un échange devenu inadapté ;</li>
              <li>de suspendre l'accès d'un participant à une séance ;</li>
              <li>ou, dans les cas répétés ou graves, d'exclure une personne du Club LirElia.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Ces mesures visent uniquement à protéger le groupe, sa qualité d'écoute et la sécurité relationnelle de chacun.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">10. Adhésion à la charte</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La participation à une rencontre du Club LirElia implique l'acceptation pleine et entière de la présente charte.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Chaque participant reconnaît rejoindre un espace fondé sur la confiance, le respect, la discrétion et la bienveillance.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Le Club LirElia a pour ambition de rester un lieu simple, humain et utile, où l'on peut parler de la malvoyance et de la vie quotidienne sans peur d'être jugé, et avec le sentiment d'être compris.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CharteClub;
