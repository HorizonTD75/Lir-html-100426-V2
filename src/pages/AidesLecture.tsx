import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight, Search, Lightbulb, Monitor, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import aidesLectureHero from "@/assets/aides-lecture-hero.jpg";
import loupeVerre from "@/assets/loupe-verre.jpg";
import loupeElectronique from "@/assets/loupe-electronique.jpg";
import lampeLecture from "@/assets/lampe-lecture.jpg";
import teleAgrandisseur from "@/assets/tele-agrandisseur.jpg";

const CALENDLY_URL = "#calendly-placeholder";

const categories = [
  {
    id: "loupe-verre",
    link: "/aides-lecture-bassevision/loupes-verre",
    icon: Search,
    title: "Loupe en verre : grossissement optique simple et immédiat",
    image: loupeVerre,
    imageAlt: "Illustration aquarelle d'une loupe en verre posée sur un livre ouvert",
    intro: `La loupe en verre est l'outil d'aide à la lecture le plus connu. Elle permet un grossissement optique direct, sans électronique, grâce à une lentille convergente en verre ou en matériau optique de haute qualité.`,
    usages: [
      "Lire des textes imprimés : livres, journaux, courriers",
      "Consulter des étiquettes, notices ou factures",
      "Effectuer des tâches de précision en vision rapprochée",
    ],
    avantages: [
      "Vision encore exploitable de près",
      "Besoin ponctuel de grossissement",
      "Utilisation simple, sans réglage ni batterie",
    ],
    limites: [
      "Grossissement fixe, non réglable",
      "Dépend fortement de la qualité de l'éclairage ambiant",
    ],
    cta: "Découvrir les loupes de lecture adaptées",
    semantic: "loupe de lecture, loupe optique, grossissement visuel, lecture rapprochée, vision de près, aide visuelle optique, loupe pour malvoyant, loupe lecture basse vision",
  },
  {
    id: "loupe-electronique",
    link: "/aides-lecture-bassevision/loupes-electroniques",
    icon: Monitor,
    title: "Loupe électronique : grossissement variable et contraste renforcé",
    image: loupeElectronique,
    imageAlt: "Illustration aquarelle d'une loupe électronique portable affichant du texte agrandi",
    intro: `La loupe électronique, aussi appelée loupe numérique, utilise une caméra et un écran pour afficher le texte agrandi. Elle permet un grossissement puissant, réglable, avec des modes de contraste adaptés à la basse vision.`,
    usages: [
      "Zoom variable, souvent de ×2 à ×20",
      "Inversions de contraste : blanc sur noir, jaune sur noir…",
      "Lecture prolongée sans fatigue excessive",
    ],
    avantages: [
      "Vision plus altérée ou déficience centrale",
      "Besoin de réglages fins (zoom, contraste)",
      "Lecture régulière ou prolongée, à domicile ou en déplacement",
    ],
    limites: [
      "Nécessite une batterie ou une alimentation",
      "Prix plus élevé qu'une loupe optique classique",
    ],
    cta: "Être orienté(e) vers une loupe électronique adaptée",
    semantic: "loupe électronique malvoyant, loupe numérique, zoom lecture, contraste élevé, aide visuelle électronique, agrandisseur portable basse vision",
  },
  {
    id: "lampes",
    link: "/aides-lecture-bassevision/lampes",
    icon: Lightbulb,
    title: "Lampes de lecture : voir mieux grâce à un éclairage maîtrisé",
    image: lampeLecture,
    imageAlt: "Illustration aquarelle d'une lampe de bureau éclairant un livre ouvert",
    intro: `Un éclairage inadapté est l'une des premières causes de fatigue visuelle chez les personnes malvoyantes. Les lampes de lecture spécifiques basse vision sont conçues pour améliorer la perception du texte sans éblouir.`,
    usages: [
      "Température de couleur adaptée à la sensibilité visuelle",
      "Orientation précise de la lumière sur la zone de lecture",
      "Intensité réglable pour s'adapter à chaque moment",
    ],
    avantages: [
      "Complément indispensable aux loupes et agrandisseurs",
      "Vision sensible à la lumière ou à l'éblouissement",
      "Lecture prolongée avec un confort accru",
    ],
    limites: [
      "Ne corrige pas le grossissement à elle seule",
      "Nécessite un positionnement adapté pour éviter les reflets",
    ],
    cta: "Optimiser mon éclairage de lecture",
    semantic: "lampe de lecture malvoyant, éclairage basse vision, lumière anti-éblouissement, fatigue visuelle, lampe adaptée, éclairage adapté malvoyant",
  },
  {
    id: "tele-agrandisseur",
    link: "/aides-lecture-bassevision/tele-agrandisseurs",
    icon: Eye,
    title: "Télé-agrandisseur : confort maximal pour lire longtemps",
    image: teleAgrandisseur,
    imageAlt: "Illustration aquarelle d'une personne utilisant un télé-agrandisseur avec grand écran",
    intro: `Le télé-agrandisseur est une aide à la lecture avancée permettant d'afficher des documents sur un grand écran, avec un grossissement élevé et très stable. Il est particulièrement recommandé pour la lecture prolongée et les déficiences visuelles sévères.`,
    usages: [
      "Lecture prolongée de livres, journaux, documents",
      "Travail sur documents papier ou écriture manuscrite",
      "Usage quotidien pour les déficiences visuelles sévères",
    ],
    avantages: [
      "Grand confort visuel sur écran large",
      "Posture améliorée, mains libres",
      "Réduction majeure de la fatigue visuelle",
    ],
    limites: [
      "Encombrement plus important qu'une loupe portable",
      "Investissement financier conséquent",
    ],
    cta: "Découvrir les télé-agrandisseurs",
    semantic: "télé agrandisseur malvoyant, vidéo agrandisseur, lecture écran agrandi, basse vision sévère, agrandisseur de documents, aide lecture DMLA",
  },
];

const AidesLecture = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Aides à la Lecture Basse Vision | LirElia"
        description="Loupe, lampe ou télé-agrandisseur : quelle aide choisir pour la basse vision ? Comparatif complet et conseil personnalisé gratuit."
        canonicalPath="/aides-lecture-bassevision"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Aides à la lecture pour malvoyants",
          "description": "Conseil et accompagnement dans le choix d'aides à la lecture pour personnes malvoyantes : loupes, lampes, télé-agrandisseurs.",
          "provider": { "@type": "Organization", "name": "LirElia" },
          "serviceType": "Conseil en aides visuelles basse vision"
        }}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={aidesLectureHero}
              alt=""
              className="w-full h-full object-cover opacity-20"
              aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
                Aides à la lecture pour malvoyants
              </h1>
              <p className="font-serif text-2xl text-primary-foreground/80 mb-4">
                Retrouver le plaisir de lire, même en cas de basse vision
              </p>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
                Lorsque la vision baisse, lire devient difficile, fatigant, parfois décourageant.
                Pourtant, il existe aujourd'hui de nombreuses <strong>aides à la lecture</strong> permettant 
                de retrouver un accès confortable au texte — que ce soit pour lire un livre, un courrier, un journal, 
                une notice ou un écran.
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Les équipements d'aide à la lecture ne remplacent pas les lunettes médicales, mais les complètent. Ils agissent sur :
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "L'agrandissement des caractères",
                  "Le contraste du texte",
                  "L'éclairage adapté",
                  "La réduction de la fatigue visuelle",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-primary-foreground/90">
                    <Check className="w-6 h-6 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Chez LirElia, nous sélectionnons et expliquons ces solutions pour vous aider à choisir 
                l'outil le plus adapté à votre vision, à vos usages et à votre quotidien.
              </p>
              <Button variant="secondary" size="lg" className="text-xl" asChild>
                <Link to="/contact-conseil?sujet=aide-choix">
                  Être conseillé(e) pour choisir mon aide
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Vague */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* PANORAMA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Les grandes catégories d'aides à la lecture
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Il existe plusieurs familles de dispositifs d'aide à la lecture pour personnes malvoyantes, chacune répondant 
                à des besoins visuels spécifiques : vision centrale diminuée, besoin de grossissement ponctuel, 
                lecture prolongée, sensibilité à l'éblouissement…
              </p>
            </div>

            {/* Grille des 4 catégories en cartes résumées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="group"
                >
                  <Card variant="elevated" className="h-full text-center">
                    <CardHeader className="items-center pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                        <cat.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{cat.id === "loupe-verre" ? "Loupes en verre" : cat.id === "loupe-electronique" ? "Loupes électroniques" : cat.id === "lampes" ? "Lampes adaptées" : "Télé-agrandisseurs"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {cat.id === "loupe-verre" && "Grossissement optique simple pour la lecture ponctuelle."}
                        {cat.id === "loupe-electronique" && "Zoom réglable et contraste renforcé sur écran."}
                        {cat.id === "lampes" && "Éclairage maîtrisé pour réduire la fatigue visuelle."}
                        {cat.id === "tele-agrandisseur" && "Grand écran et confort maximal pour lire longtemps."}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Sections détaillées — layout plus compact */}
            {categories.map((cat, index) => (
              <section
                key={cat.id}
                id={cat.id}
                className={`py-16 ${index < categories.length - 1 ? "border-b-2 border-border" : ""}`}
              >
                {/* Image + Icon/Title row */}
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                  <div className="w-full md:w-64 lg:w-72 shrink-0 rounded-2xl overflow-hidden shadow-card border-2 border-border">
                    <img
                      src={cat.image}
                      alt={cat.imageAlt}
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <cat.icon className="w-7 h-7" />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {cat.intro}
                    </p>
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {cat.id === "lampes" ? "Points forts" : "Usages principaux"}
                    </h3>
                    <ul className="space-y-3">
                      {cat.usages.map((usage, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg">
                          <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                          <span>{usage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">Pour qui ?</h3>
                    <ul className="space-y-2">
                      {cat.avantages.map((av, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-foreground">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <span>{av}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">Limites</h3>
                    <ul className="space-y-2">
                      {cat.limites.map((lim, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                          <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" size="lg" asChild>
                  <Link to={cat.link}>
                    {cat.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                {/* Mots-clés sémantiques (visually hidden for SEO) */}
                <p className="sr-only">{cat.semantic}</p>
              </section>
            ))}
          </div>
        </section>

        <ComparisonSection />

        {/* ACCOMPAGNEMENT FINAL */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Une aide à la lecture efficace commence par un bon conseil
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Il n'existe pas une aide à la lecture universelle, mais une <strong>combinaison adaptée</strong> à 
                chaque personne, à chaque pathologie visuelle et à chaque usage.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Chez LirElia, nous privilégions l'évaluation des besoins réels, les tests concrets, 
                et un accompagnement humain et progressif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="text-xl" asChild>
                  <Link to="/contact-conseil?sujet=aide-choix">
                    Faire le point sur mes besoins de lecture
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    RDV pour un appel
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AidesLecture;
