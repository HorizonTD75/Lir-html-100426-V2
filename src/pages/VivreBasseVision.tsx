import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Home, 
  BookOpen,
  Tv,
  Sun,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Heart,
  Coffee,
  Smartphone,
  Lamp,
  Palette,
  ShoppingBag,
  MessageCircle,
  HandHeart,
  Stethoscope,
  EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";
import readingMagnifierImage from "@/assets/reading-magnifier.jpg";
import tabletAccessibilityImage from "@/assets/tablet-accessibility.jpg";
import accessibleKitchenImage from "@/assets/accessible-kitchen-600.jpg";
import seniorWomanStreetImage from "@/assets/senior-woman-street.jpg";
import vivreHeroImage from "@/assets/vivre-basse-vision-hero-800.jpg";

const VivreBasseVision = () => {
  const dailyActivities = [
    {
      icon: BookOpen,
      title: "Lire et écrire malgré une déficience visuelle",
      tips: [
        "Utiliser des loupes électroniques ou optiques adaptées",
        "Privilégier un éclairage directionnel sur le document",
        "Agrandir les caractères sur les écrans et tablettes",
        "Utiliser des supports inclinés pour réduire la fatigue",
        "Prendre des pauses régulières pour reposer les yeux"
      ]
    },
    {
      icon: Tv,
      title: "Regarder la télévision",
      tips: [
        "S'asseoir à une distance adaptée de l'écran",
        "Utiliser des télé-agrandisseurs si nécessaire",
        "Régler le contraste et la luminosité de l'écran",
        "Éviter les reflets sur l'écran",
        "Utiliser les sous-titres en gros caractères"
      ]
    },
    {
      icon: Smartphone,
      title: "Accessibilité des écrans et du numérique",
      tips: [
        "Activer le mode d'accessibilité (VoiceOver, TalkBack)",
        "Augmenter la taille des polices et icônes",
        "Utiliser le mode sombre si la lumière vous gêne",
        "Activer la fonction loupe intégrée",
        "Utiliser la synthèse vocale pour les textes longs"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Faire ses courses",
      tips: [
        "Préparer une liste avec de gros caractères",
        "Utiliser une loupe portative pour lire les étiquettes",
        "Privilégier les magasins bien éclairés",
        "Demander de l'aide au personnel si besoin",
        "Utiliser des applications de lecture à haute voix"
      ]
    }
  ];

  const homeAdaptations = [
    {
      icon: Lamp,
      title: "L'éclairage adapté",
      description: "Un éclairage adapté à la basse vision est essentiel. Privilégiez les lampes directionnelles pour la lecture, évitez les zones d'ombre et les éblouissements.",
      tips: [
        "Lampe de bureau orientable sur chaque poste de lecture",
        "Éclairage uniforme dans les couloirs et escaliers",
        "Éviter les ampoules trop blanches qui peuvent éblouir",
        "Installer des variateurs d'intensité"
      ]
    },
    {
      icon: Palette,
      title: "Les contrastes visuels",
      description: "Utiliser des contrastes forts aide à mieux repérer les objets et les limites des espaces pour les personnes malvoyantes.",
      tips: [
        "Marquer les marches d'escalier avec des bandes contrastées",
        "Utiliser de la vaisselle de couleur contrastante",
        "Choisir des interrupteurs de couleur différente du mur",
        "Placer des repères tactiles ou colorés sur les appareils"
      ]
    },
    {
      icon: Home,
      title: "L'organisation du domicile",
      description: "Un logement bien aménagé réduit la fatigue visuelle, prévient les chutes et améliore l'autonomie au quotidien.",
      tips: [
        "Toujours ranger les objets au même endroit",
        "Dégager les passages et éviter les obstacles au sol",
        "Utiliser des boîtes étiquetées en gros caractères",
        "Installer des mains courantes dans les zones de circulation"
      ]
    }
  ];

  const outdoorTips = [
    {
      title: "Déplacements et mobilité",
      items: [
        "Porter des lunettes filtrantes contre l'éblouissement",
        "Utiliser une canne blanche si le champ visuel est réduit",
        "Repérer les trajets habituels et leurs points de repère",
        "Éviter les heures de forte affluence si possible"
      ]
    },
    {
      title: "Transports accessibles",
      items: [
        "Demander les titres de transport en gros caractères",
        "Utiliser les applications d'aide au transport accessibles",
        "Signaler sa situation au personnel si besoin d'aide",
        "Repérer les lignes et arrêts réguliers à l'avance"
      ]
    },
    {
      title: "Vie sociale et sorties",
      items: [
        "Prévenir vos interlocuteurs de votre déficience visuelle",
        "Demander aux gens de se présenter quand ils vous abordent",
        "Se placer à un endroit bien éclairé pour voir les visages",
        "Ne pas hésiter à demander de l'aide pour lire un menu"
      ]
    }
  ];

  const leisureActivities = [
    {
      icon: BookOpen,
      title: "Lecture",
      description: "Livres audio, liseuses à gros caractères, aides à la lecture optiques et électroniques"
    },
    {
      icon: Tv,
      title: "Cinéma & Théâtre",
      description: "Audiodescription, places adaptées, accompagnement"
    },
    {
      icon: Coffee,
      title: "Cuisine & Jardinage",
      description: "Ustensiles adaptés, repères tactiles, éclairage ciblé"
    },
    {
      icon: Users,
      title: "Rencontres",
      description: "Clubs basse vision, visioconférences, groupes de parole"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Vivre avec la Basse Vision : Conseils Pratiques au Quotidien"
        description="Comment continuer à lire, cuisiner et sortir malgré la malvoyance ? Conseils concrets d'un expert pour adapter votre domicile et garder votre autonomie."
        canonicalPath="/vivre-basse-vision"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 pb-32">
          <div className="absolute inset-0">
            <img src={vivreHeroImage} alt="Personne malvoyante lisant avec une loupe chez elle" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Vivre au quotidien avec une basse vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Des solutions concrètes et des conseils pratiques pour maintenir votre autonomie et votre qualité de vie malgré une malvoyance.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <Heart className="w-10 h-10 text-secondary shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      La basse vision n'est pas une fatalité
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      Que la cause soit une DMLA, un glaucome ou une autre maladie de l'œil, la basse vision peut être accompagnée. En adaptant l'environnement, le matériel et les habitudes, il est possible de mieux utiliser la vision restante et de préserver son autonomie. Ce guide vous propose des aides concrètes pour chaque aspect de votre vie quotidienne.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Daily Activities Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Intro with images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={readingMagnifierImage} 
                    alt="Personne malvoyante utilisant une loupe pour lire" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Aides à la lecture</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={tabletAccessibilityImage} 
                    alt="Utilisation d'une tablette avec accessibilité visuelle" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Écrans accessibles</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={accessibleKitchenImage} 
                    alt="Cuisine adaptée pour personne malvoyante" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Maison sécurisée</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Les activités du quotidien avec une basse vision
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Des adaptations simples et des aides techniques pour continuer à profiter de vos activités préférées malgré une vision réduite.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {dailyActivities.map((activity, index) => (
                  <Card key={index} variant="elevated" className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <activity.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {activity.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {activity.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-lg text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Home Adaptations Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Aménager son domicile pour mieux voir
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Un logement bien adapté réduit la fatigue visuelle, prévient les chutes et favorise le maintien à domicile.
              </p>
              
              <div className="space-y-8">
                {homeAdaptations.map((adaptation, index) => (
                  <Card key={index} className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                            <adaptation.icon className="w-6 h-6 text-secondary-foreground" />
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-foreground">
                            {adaptation.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {adaptation.description}
                        </p>
                      </div>
                      <div className="lg:w-2/3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {adaptation.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-lg text-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Section - Restructured: Row 1 = image + 2 blocks, Row 2 = full-width */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Autonomie à l'extérieur : mobilité et vie sociale
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Conseils pour se déplacer en sécurité et maintenir une vie sociale active malgré la malvoyance
                  </p>
                </div>
              </div>

              {/* Row 1: Image + 2 blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Column 1: Image */}
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={seniorWomanStreetImage} 
                    alt="Personne malvoyante se déplaçant en ville" 
                    className="w-full h-full object-cover object-center min-h-[280px]" loading="eager" decoding="async" width={1440} height={500} />
                </div>

                {/* Column 2: Déplacements */}
                <Card variant="elevated" className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {outdoorTips[0].title}
                  </h3>
                  <ul className="space-y-3">
                    {outdoorTips[0].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-lg text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Column 3: Transports */}
                <Card variant="elevated" className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {outdoorTips[1].title}
                  </h3>
                  <ul className="space-y-3">
                    {outdoorTips[1].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-lg text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Row 2: Full-width Vie sociale */}
              <Card variant="elevated" className="p-4 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  {outdoorTips[2].title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outdoorTips[2].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Leisure Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Continuer ses loisirs malgré la malvoyance
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Avec les bonnes aides techniques et adaptations, vous pouvez continuer à profiter de vos passions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {leisureActivities.map((activity, index) => (
                  <Card key={index} className="p-4 sm:p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <activity.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {activity.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre les maladies - enriched, moved after loisirs */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <EyeOff className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Mieux comprendre les maladies des yeux
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      DMLA, glaucome, rétinopathie diabétique, cataracte… Comprendre l'origine de votre basse vision vous aide à mieux agir au quotidien et à choisir les aides visuelles les plus adaptées.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Les maladies des yeux ne sont généralement pas visibles de l'extérieur. L'entourage, les collègues ou les passants ne perçoivent pas toujours le handicap visuel. Les personnes malvoyantes sont ainsi souvent incomprises dans leurs difficultés du quotidien — une réalité d'autant plus importante à comprendre pour mieux accompagner et mieux vivre avec la basse vision.
                    </p>
                    <Button variant="outline" size="default" asChild>
                      <Link to="/maladies-yeux">
                        Découvrir les maladies des yeux
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Offer Section - Reworked with Bilan CTA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Un accompagnement personnalisé pour mieux vivre au quotidien
              </h2>
              <p className="text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
                Le bilan basse vision est la première étape pour retrouver confort et autonomie dans votre vie de tous les jours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card variant="elevated" className="p-4 sm:p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    Faire le point sur votre vue
                  </h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                    Le visiopraticien évalue votre vision fonctionnelle, analyse vos difficultés concrètes et identifie vos priorités pour mieux voir au quotidien.
                  </p>
                </Card>
                <Card variant="highlighted" className="p-4 sm:p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <HandHeart className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    Tester des aides adaptées
                  </h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                    Loupes, télé-agrandisseurs, éclairage adapté, filtres… Vous essayez les aides techniques les plus adaptées à vos besoins de lecture et d'autonomie.
                  </p>
                </Card>
                <Card variant="elevated" className="p-4 sm:p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    Un plan d'action concret
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vous repartez avec un compte-rendu précis, des recommandations claires et un plan d'adaptation personnalisé pour améliorer votre quotidien.
                  </p>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir nos bilans basse vision
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Club Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8">
                <MessageCircle className="w-5 h-5" />
                <span className="text-lg font-semibold">Rompre l'isolement, partager, s'entraider</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Rejoignez le Club LirElia
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Vivre avec une basse vision peut être isolant. Le Club LirElia vous permet de rencontrer d'autres personnes malvoyantes, d'échanger des conseils pratiques pour le quotidien et de partager vos expériences lors de visioconférences thématiques.
              </p>
              <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
                Chaque mois, un thème différent : aides à la lecture, vie numérique, bien-être, témoignages d'aidants… Un espace bienveillant pour avancer ensemble.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/club">
                    Découvrir le Club
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/aidants">
                    Espace aidants
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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

export default VivreBasseVision;
