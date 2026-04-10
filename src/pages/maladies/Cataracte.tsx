import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Activity,
  Clock,
  Stethoscope,
  HeartPulse,
  Lightbulb,
  Phone,
  ShieldCheck,
  Scissors,
  Baby } from
"lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import cataracteHeroImage from "@/assets/cataracte-hero.jpg";
import cataracteSchemaImage from "@/assets/cataracte-schema-oeil.jpg";
import cataracteVisionImage from "@/assets/cataracte-vision-comparaison.jpg";

const Cataracte = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="La Cataracte – Symptômes, Traitement et Vision | LirElia"
        description="Tout savoir sur la cataracte : symptômes, diagnostic, opération et conseils pour vivre avec. Aides visuelles et accompagnement basse vision."
        canonicalPath="/maladies-yeux/cataracte"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "La Cataracte – Symptômes, Diagnostic et Traitement",
          "description": "Guide complet sur la cataracte : définition, symptômes, causes, opération et aides visuelles pour mieux vivre avec cette maladie des yeux.",
          "about": { "@type": "MedicalCondition", "name": "Cataracte" }
        }} />
      
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
          <div className="container">
            <ol className="flex items-center gap-2 text-lg">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><Link to="/maladies-yeux" className="text-muted-foreground hover:text-primary transition-colors">Maladies des yeux</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><span className="text-foreground font-semibold">La Cataracte</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={cataracteHeroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                La Cataracte : causes, symptômes et solutions
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                La cataracte est l'une des maladies des yeux les plus fréquentes. Liée au vieillissement du cristallin, elle affecte progressivement la vision mais se traite très efficacement par une opération chirurgicale courante.
              </p>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">60%</p>
                <p className="text-lg text-foreground">des personnes de plus de 85 ans sont concernées</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2 whitespace-nowrap">600&nbsp;000</p>
                <p className="text-lg text-foreground">opérations de la cataracte par an en France</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">90%</p>
                <p className="text-lg text-foreground">de réussite fonctionnelle de l'opération dès le lendemain</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2 whitespace-nowrap">&lt;15&nbsp;min</p>
                <p className="text-lg text-foreground">durée de l'intervention chirurgicale</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Dans cette page</h2>
              <Card className="p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                  "Qu'est-ce que la cataracte ?",
                  "Symptômes et signes d'alerte",
                  "Causes et facteurs de risque",
                  "Diagnostic de la cataracte",
                  "L'opération de la cataracte",
                  "Cataracte congénitale",
                  "Vivre avec la cataracte",
                  "Cataracte et basse vision"].
                  map((item, index) =>
                  <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  )}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Cataract */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que la cataracte ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La cataracte est une <strong>opacification du cristallin</strong>, la lentille naturelle de l'œil située derrière l'iris. Le cristallin joue un rôle essentiel dans la mise au point des images sur la rétine. Lorsqu'il s'opacifie, la lumière ne passe plus correctement et la vision devient floue, voilée ou trouble.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Ce phénomène commence naturellement vers l'âge de 45 ans, mais devient souvent gênant après 60 ans. Le cristallin est recouvert de protéines, les <strong>cristallines</strong>, qui deviennent moins homogènes avec le temps, provoquant une diffraction de l'image et un éblouissement accru.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    La cataracte peut toucher un seul œil, mais affecte généralement les deux yeux. Heureusement, c'est l'une des rares maladies de la vision dont on peut <strong>guérir complètement</strong> grâce à une opération chirurgicale très courante et très bien maîtrisée.
                  </p>
                </Card>

                {/* Schémas illustratifs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="elevated" className="p-6">
                    <img
                      src={cataracteSchemaImage}
                      alt="Illustration d'un œil atteint de cataracte montrant l'opacification du cristallin"
                      className="w-full rounded-xl mb-4"
                    />
                    <p className="text-foreground text-center font-semibold">
                      Œil atteint de cataracte : le cristallin devient opaque
                    </p>
                  </Card>
                  <Card variant="elevated" className="p-6">
                    <img
                      src={cataracteVisionImage}
                      alt="Comparaison entre une vision normale et une vision affectée par la cataracte"
                      className="w-full rounded-xl mb-4"
                    />
                    <p className="text-foreground text-center font-semibold">
                      Vision normale (gauche) vs vision avec cataracte (droite)
                    </p>
                  </Card>
                </div>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>À retenir :</strong> la cataracte entraîne également une <Link to="/maladies-yeux/presbytie" className="text-primary underline hover:text-primary/80">presbytie</Link> (vision floue de près) et une <Link to="/maladies-yeux/myopie" className="text-primary underline hover:text-primary/80">myopie</Link> (vision floue de loin), car l'opacification altère la souplesse du cristallin et ses capacités de mise au point.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Symptômes et signes d'alerte
                  </h2>
                  <p className="text-lg text-muted-foreground">Reconnaître les premiers signes de la cataracte</p>
                </div>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  La cataracte évolue de façon très progressive. La vue faiblit au cours des années et c'est souvent un examen de la vision qui permet de diagnostiquer la maladie. Les patients se plaignent d'abord d'images aux couleurs ternes, d'une vision moins nette et d'une gêne par forte lumière.
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Les signes les plus courants</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                  "La lecture devient difficile",
                  "La vision est floue, voilée",
                  "L'éblouissement par la lumière ou les phares",
                  "Distorsion des formes : image vue comme dans le brouillard",
                  "Les couleurs sont ternes et jaunies",
                  "La vision de loin se détériore",
                  "Les contrastes sont moins francs",
                  "Diminution globale de l'acuité visuelle",
                  "Des taches ou points noirs dans le champ de vision (plus rare)"].
                  map((symptom, i) =>
                  <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </li>
                  )}
                </ul>
              </Card>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Stethoscope className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Conseil :</strong> si vous constatez une baisse progressive de votre vision ou une gêne accrue à la lumière, consultez un ophtalmologiste. Un dépistage précoce permet de suivre l'évolution et de programmer l'intervention au moment le plus adapté.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Causes et facteurs de risque
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Facteur principal</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Le <strong>vieillissement</strong> est la cause principale de la cataracte. Le cristallin perd de sa transparence et de sa souplesse avec l'âge. 10 % des moins de 65 ans sont concernés, 20 % après 65 ans et jusqu'à 60 % après 85 ans.
                  </p>
                </Card>

                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Facteurs aggravants</h3>
                  <ul className="space-y-3">
                    {[
                    { label: "Le diabète", detail: "Accélère l'opacification du cristallin" },
                    { label: "Le tabagisme", detail: "Facteur de risque avéré" },
                    { label: "L'exposition aux UV", detail: "Soleil sans protection adaptée" },
                    { label: "Les corticoïdes", detail: "Usage prolongé" },
                    { label: "Traumatismes oculaires", detail: "Cataracte dite traumatique" }].
                    map((factor, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{factor.label}</span>
                          <p className="text-muted-foreground">{factor.detail}</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </Card>
              </div>

              <Card variant="muted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Certains troubles visuels préexistants, comme une <strong><Link to="/maladies-yeux/myopie" className="text-primary underline hover:text-primary/80">forte myopie</Link></strong>, un <strong><Link to="/maladies-yeux/glaucome" className="text-primary underline hover:text-primary/80">glaucome</Link></strong> ou un <strong>décollement de rétine</strong>, peuvent favoriser l'apparition d'une cataracte dite secondaire. Un suivi ophtalmologique régulier est recommandé.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Diagnostic de la cataracte
                </h2>
              </div>

              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Le diagnostic de la cataracte repose sur un <strong>examen complet de l'œil</strong> effectué par un ophtalmologiste. Au cours de cet examen, le spécialiste mesure l'acuité visuelle et recherche tout dépôt opaque dans le cristallin à l'aide d'un ophtalmoscope.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  L'ophtalmologue vérifie également l'absence d'autres maladies associées en examinant le fond de l'œil et en prenant diverses mesures (pression intraoculaire, dilatation de la pupille). En fonction de la gravité de la cataracte, différentes options de traitement sont proposées.
                </p>
                <Card variant="highlighted" className="p-4">
                  <p className="text-foreground font-semibold text-lg">
                    💡 La chirurgie n'est recommandée que lorsque les aides à la vision ne suffisent plus et que la cataracte handicape significativement le quotidien. Il n'y a pas d'âge limite pour l'opération.
                  </p>
                </Card>
              </Card>
            </div>
          </div>
        </section>

        {/* Surgery */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    L'opération de la cataracte
                  </h2>
                  <p className="text-lg text-muted-foreground">Un acte chirurgical courant et très bien maîtrisé</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Le déroulement</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le chirurgien réalise une incision de 2 millimètres dans le sac cristallin pour introduire une petite sonde à ultrasons. Celle-ci désagrège et aspire le cristallin endommagé, puis un <strong>cristallin artificiel</strong> (implant en forme de lentille) est posé à sa place.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    L'opération dure <strong>moins de 15 minutes</strong> et se fait sous anesthésie locale (collyre et injection). Un simple pansement est posé sur l'œil opéré, à retirer le lendemain. Lorsque les deux yeux sont touchés, les interventions sont espacées de 15 jours à un mois.
                  </p>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Après l'opération</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le patient peut rentrer chez lui quelques heures après l'intervention. Dès le lendemain, la vue s'améliore significativement. Des traitements anti-inflammatoires sont prescrits pour quelques semaines.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground font-semibold text-lg">
                      💡 Le taux de réussite fonctionnelle de l'opération de la cataracte est de 90&nbsp;% dès le lendemain de l'intervention. Les personnes de plus de 85 ans qui en bénéficient récupèrent souvent une meilleure autonomie physique et cognitive.
                    </p>
                  </Card>
                </Card>

                <Card variant="muted" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Complications possibles</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Les complications post-opératoires sont <strong>très rares</strong>. Elles peuvent inclure :
                  </p>
                  <ul className="space-y-2">
                    {[
                    "Endophtalmie (infection rare prévenue par l'hygiène stricte)",
                    "Déchirure ou décollement de rétine (risque accru en cas de myopie forte)",
                    "Œdème maculaire (traité par collyres anti-inflammatoires)",
                    "Rupture capsulaire (réparable par changement de modèle d'implant)"].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    )}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Congenital Cataract */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Baby className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  La cataracte congénitale
                </h2>
              </div>

              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  La cataracte ne touche pas uniquement les personnes âgées. Il existe une forme <strong>congénitale</strong>, présente dès la naissance ou peu après. Elle peut être causée par une maladie contractée par la mère pendant la grossesse (toxoplasmose, rubéole, herpès génital) ou par un trouble génétique comme la trisomie 21.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Les signes comprennent une vision floue, une sensibilité à la lumière et parfois un <Link to="/maladies-yeux/nystagmus" className="text-primary underline hover:text-primary/80">nystagmus</Link> (mouvement involontaire des yeux). Heureusement, la cataracte congénitale peut être traitée chirurgicalement dans les premiers mois de vie.
                </p>
                <Card variant="highlighted" className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-foreground">
                      <strong className="text-lg">Un diagnostic et un traitement précoces</strong> sont essentiels pour prévenir toute perte de vision permanente chez l'enfant.
                    </p>
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </section>

        {/* Living with Cataract */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Vivre avec la cataracte au quotidien
                </h2>
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                L'opération de la cataracte n'est pas programmée dès les premiers symptômes. Il faut donc parfois vivre avec une vue affaiblie pendant une période. Des aides visuelles existent pour améliorer le quotidien en attendant l'intervention.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Lunettes adaptées</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les lunettes correctrices peuvent compenser la presbytie et la myopie causées par la cataracte. L'ophtalmologiste adapte régulièrement les verres à l'évolution de la maladie.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Éclairage adapté</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les lampes basse vision sont recommandées pour la lecture. Elles permettent d'ajuster la température de couleur et l'intensité d'éclairage pour renforcer les contrastes.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Aides électroniques</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les loupes électroniques et télé-agrandisseurs permettent d'ajuster le grossissement, le contraste et les couleurs pour une lecture plus confortable au quotidien.
                  </p>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision">
                    Découvrir les aides à la lecture
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/vivre-basse-vision">
                    Vivre au quotidien avec la basse vision
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Link to basse vision */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-secondary shrink-0 mt-1" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Cataracte et basse vision
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      La cataracte, lorsqu'elle est opérée, se résout dans la grande majorité des cas. Cependant, certains patients conservent des séquelles visuelles après l'opération, ou ne peuvent pas être opérés immédiatement. Dans ces situations, un <strong>accompagnement en basse vision</strong> peut aider à maintenir l'autonomie et le confort de lecture.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      Le Visiopraticien LirElia peut vous accompagner pour identifier les aides les plus adaptées et mettre en place des stratégies concrètes pour mieux vivre au quotidien.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="default" asChild>
                        <Link to="/bilans-bassevision">
                          Découvrir les bilans basse vision
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/visiopraticien">
                          Le Visiopraticien LirElia
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un bilan pour mieux comprendre votre situation visuelle
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Que la cataracte soit en cours d'évolution ou que des difficultés persistent après l'opération, le bilan basse vision permet de faire le point sur votre vision fonctionnelle et de trouver des solutions concrètes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/maladies-yeux">
                    Autres maladies des yeux
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Cataracte;