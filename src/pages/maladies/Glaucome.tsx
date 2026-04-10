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
  Baby,
  Clock,
  Zap,
  Stethoscope,
  HeartPulse,
  Lightbulb,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import glaucomeHeroImage from "@/assets/glaucome-hero.jpg";

const Glaucome = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Le Glaucome – Comprendre, Dépister et Agir | LirElia"
        description="Tout savoir sur le glaucome : formes, symptômes, dépistage, traitements et conseils pour vivre avec cette maladie des yeux."
        canonicalPath="/maladies-yeux/glaucome"
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Le Glaucome",
          "description": "Tout savoir sur le glaucome : formes, symptômes, dépistage, traitements et conseils pour vivre avec cette maladie des yeux.",
          "url": "https://lirelia.fr/maladies-yeux/glaucome",
          "about": {
            "@type": "MedicalCondition",
            "name": "Glaucome",
            "description": "Maladie de l'œil caractérisée par une atteinte du nerf optique, souvent liée à une pression intraoculaire élevée."
          }
        }}
      />
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
              <li><span className="text-foreground font-semibold">Le Glaucome</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={glaucomeHeroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Le Glaucome : dépistage, traitement et prévention
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                Le glaucome est une maladie silencieuse qui touche le nerf optique. Bien compris et dépisté à temps, il peut être traité efficacement pour préserver votre vision. Voici tout ce que vous devez savoir.
              </p>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">10%</p>
                <p className="text-lg text-foreground">des personnes de plus de 70 ans sont atteintes</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">800 000</p>
                <p className="text-lg text-foreground">personnes traitées en France</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">500 000</p>
                <p className="text-lg text-foreground">personnes atteintes sans le savoir</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">2ᵉ</p>
                <p className="text-lg text-foreground">cause de cécité dans les pays développés</p>
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
                    "Qu'est-ce que le glaucome ?",
                    "Les différentes formes",
                    "Symptômes et signes d'alerte",
                    "Causes et facteurs de risque",
                    "Diagnostic et dépistage",
                    "Traitements disponibles",
                    "Vivre avec le glaucome",
                    "Le glaucome en quelques chiffres",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Glaucoma */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que le glaucome ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le glaucome correspond à une <strong>augmentation de la pression à l'intérieur de l'œil</strong> (pression intra-oculaire). Cette hyper-pression comprime progressivement le nerf optique, entraînant des lésions irréversibles au niveau du nerf, de la rétine et de la cornée.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Il se place en seconde position, juste après la <Link to="/maladies-yeux/dmla" className="text-primary underline hover:text-primary/80">DMLA</Link>, parmi les causes de cécité dans les pays développés.
                  </p>
                </Card>

                <Card variant="highlighted" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Petit précis anatomique</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    L'humeur aqueuse est un liquide sécrété en continu qui remplit une poche donnant à l'œil sa forme bombée. Ce liquide s'évacue via un filtre (le <strong>trabéculum</strong>), situé dans l'angle entre l'iris et la cornée (l'angle irido-cornéen). C'est cette évacuation qui régule la pression dans l'œil. Le glaucome survient lorsque cet angle se modifie, gênant l'évacuation du liquide. Celui-ci s'accumule alors et vient augmenter la pression intra-oculaire.
                  </p>
                </Card>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Bonne nouvelle :</strong> soigner le glaucome permet de <strong>stopper l'avancée des lésions</strong>. C'est pourquoi le dépistage précoce est si important : plus la maladie est détectée tôt, plus la vision peut être préservée.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forms of Glaucoma */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Activity className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Les différentes formes de glaucome
                  </h2>
                  <p className="text-lg text-muted-foreground">Chaque forme a ses propres caractéristiques et prise en charge</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Chronic / Slow */}
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Le glaucome chronique</h3>
                      <p className="text-secondary font-semibold">Forme lente, « à angle ouvert »</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    C'est la <strong>forme la plus courante</strong>. Elle concerne la majorité des patients atteints de glaucome. Elle se déclenche de façon silencieuse vers l'âge de 45 ou 50 ans : l'angle entre la cornée et l'iris reste ouvert mais l'évacuation du liquide aqueux diminue progressivement.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La maladie altère progressivement les fonctions visuelles, <strong>sans symptôme apparent pendant une bonne dizaine d'années</strong>. Les premières difficultés visuelles ne se déclarent qu'après cette longue période silencieuse, ce qui rend le dépistage d'autant plus important.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground font-semibold">
                      💡 Le glaucome chronique touche d'abord la vision périphérique. Sans dépistage, le patient se rend souvent compte de la maladie lorsque la vision centrale est déjà atteinte.
                    </p>
                  </Card>
                </Card>

                {/* Acute */}
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Le glaucome aigu</h3>
                      <p className="text-secondary font-semibold">Forme rapide, « à angle fermé »</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Cette forme est plus rare mais constitue une <strong>urgence médicale</strong>. L'angle irido-cornéen se ferme de manière brutale, bloquant l'humeur aqueuse dans sa poche. La pression intra-oculaire monte brutalement, causant des douleurs intenses.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Il apparaît souvent à cause de prédispositions familiales, de maladies comme l'<Link to="/maladies-yeux/hypermetropie" className="text-primary underline hover:text-primary/80">hypermétropie</Link> ou la <Link to="/maladies-yeux/cataracte" className="text-primary underline hover:text-primary/80">cataracte</Link>, ou encore suite à un stress ou la prise de certains médicaments.
                  </p>
                  <Card variant="muted" className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <strong>Le patient doit réagir vite</strong> pour enrayer les lésions et ne pas perdre sa qualité de vision. Consultez en urgence.
                      </p>
                    </div>
                  </Card>
                </Card>

                {/* Congenital */}
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <Baby className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Le glaucome congénital</h3>
                      <p className="text-secondary font-semibold">De la naissance à 3 ans</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Causé par un défaut de formation de l'œil, il apparaît dès les premiers mois de vie mais peut se déclarer jusqu'à l'âge de 3 ans. L'hérédité joue un rôle : si un membre de la famille a été touché, les parents doivent faire dépister leur enfant.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La forme juvénile, apparaissant à l'adolescence, est également héréditaire. Les familles à risque se font donc dépister.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground">
                      <strong>Il doit être pris en charge en urgence</strong> pour que l'enfant ne subisse aucune séquelle visuelle.
                    </p>
                  </Card>
                </Card>

                {/* Primitif / Secondaire */}
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Glaucome primitif et glaucome secondaire
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Glaucome primitif</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Il survient de manière spontanée. Il peut s'agir d'un glaucome congénital (chez le nourrisson de 2 à 4 mois) ou d'un glaucome primitif de l'adulte, se manifestant par la fermeture de l'angle irido-cornéen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Glaucome secondaire</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Il apparaît suite aux complications d'une autre maladie (diabète, tumeur de l'œil, uvéites…) ou après la prise de corticoïdes. L'arrêt de ces derniers devient alors impératif pour stopper l'augmentation de la pression intra-oculaire.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Symptômes et signes d'alerte
                  </h2>
                  <p className="text-lg text-muted-foreground">Reconnaître les signaux pour agir à temps</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Glaucome chronique (forme lente)
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Le glaucome chronique arrive <strong>sans frapper</strong>. L'augmentation de la pression intra-oculaire n'est pas perceptible et commence sournoisement à causer des dégâts. Si des symptômes sont ressentis, ils sont plutôt liés aux conséquences déjà installées.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground font-semibold text-base">
                      ➡️ Pour éviter la malvoyance, un <strong>dépistage est recommandé dès 50 ans</strong>.
                    </p>
                  </Card>
                </Card>

                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-destructive" />
                    Glaucome aigu (forme rapide)
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    Les symptômes apparaissent <strong>immédiatement</strong> et doivent alerter :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Douleur forte à l'œil",
                      "Rougeur oculaire",
                      "Vue soudainement brouillée, avec des halos colorés autour des lumières vives",
                      "Maux de tête autour de l'orbite jusqu'à l'arrière du crâne",
                      "Vomissements",
                    ].map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                        <ChevronRight className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                  <p className="text-destructive font-semibold mt-4 text-base">
                    ⚠️ Ces symptômes nécessitent une prise en charge en urgence.
                  </p>
                </Card>
              </div>

              <Card variant="elevated" className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Baby className="w-5 h-5 text-accent-foreground" />
                  Glaucome congénital chez le nourrisson
                </h3>
                <p className="text-lg text-muted-foreground mb-3">Les symptômes suivants doivent vous alerter :</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Larmoiement excessif, générant un fort clignement des yeux",
                    "Liquide clair qui donne un œil embué",
                    "Enfant grognon (à cause de la douleur et de la gêne), qui se frotte les yeux",
                    "L'œil commence ensuite à gonfler, devient globuleux avec une cornée à l'aspect de verre dépoli",
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      {symptom}
                    </li>
                  ))}
                </ul>
                <Card variant="highlighted" className="p-4">
                  <p className="text-foreground font-semibold">
                    Contactez immédiatement votre médecin ou les urgences pour libérer la tension du globe oculaire et éviter les lésions irréversibles.
                  </p>
                </Card>
              </Card>
            </div>
          </div>
        </section>

        {/* Causes & Risk Factors */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Causes et facteurs de risque
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Forme lente</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    La forme lente du glaucome <strong>n'a pas de causes connues</strong>. Elle peut toucher n'importe quelle personne dès 50 ans. Une forte myopie peut entraîner une forme spécifique : le glaucome pigmentaire.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Forme congénitale</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    L'hérédité a une influence importante. Si un membre de la famille a été touché par un glaucome congénital, il est crucial de faire dépister l'enfant. Cependant, des enfants sans antécédents peuvent aussi être concernés.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Forme aiguë</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    Les facteurs de risque identifiés :
                  </p>
                  <ul className="space-y-1">
                    {[
                      "Prédispositions génétiques",
                      "Très forte myopie",
                      "Cataracte",
                      "Prise prolongée de corticoïdes",
                      "Stress",
                      "Séjour prolongé dans un environnement sombre",
                    ].map((factor, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground">
                        <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card variant="highlighted" className="p-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <strong>Environ 30 % des glaucomes sont d'origine héréditaire.</strong> Si vous avez des antécédents familiaux, parlez-en à votre ophtalmologiste pour organiser un suivi régulier.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Diagnostic et dépistage
                  </h2>
                  <p className="text-lg text-muted-foreground">Le dépistage précoce est la meilleure protection</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Formes aiguës</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Dans les formes aiguës (chez l'adulte et chez le nouveau-né), ce sont les douleurs et les symptômes qui alertent le patient. À la consultation, le médecin trouvera un aspect terne à la cornée. À la palpation (œil fermé), il ressentira le globe dur, comme une bille de verre. La mesure de la tension intra-oculaire viendra confirmer le diagnostic.
                  </p>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Forme lente</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Dans le cas du glaucome chronique, c'est <strong>uniquement le dépistage</strong> qui permet de le diagnostiquer et d'enrayer les lésions, avant qu'il ne soit trop tard. La surveillance par un ophtalmologiste est le seul moyen de détecter rapidement un glaucome et de le traiter avant qu'il n'entraîne une baisse de la vision.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground font-semibold text-lg">
                      🩺 Le glaucome chronique peut être dépisté dès 50 ans, avant les premiers signes de baisse de vision : <strong>demandez conseil à votre ophtalmologiste</strong>.
                    </p>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Soigner le glaucome
                  </h2>
                  <p className="text-lg text-muted-foreground">Des traitements existent pour stopper la progression</p>
                </div>
              </div>

              <Card variant="muted" className="p-6 mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Le traitement vise à rétablir l'écoulement de l'humeur aqueuse, abaissant ainsi la tension intra-oculaire. <strong>Cela stoppe les lésions</strong>, mais aucun traitement ne permet, en l'état actuel de la recherche, de réparer des cellules endommagées du nerf optique. C'est pourquoi le dépistage précoce est si essentiel.
                </p>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="collyres" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    Les médicaments sous forme de collyre
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      <strong>En urgence (glaucome aigu) :</strong> le médecin prescrit généralement un anti-glaucomateux (acétazolamide) pour favoriser l'évacuation de l'humeur aqueuse, accompagné d'un collyre myotique qui provoque le rétrécissement de la pupille et rectifie l'angle irido-cornéen. Des anti-inflammatoires et des antidouleurs sont également proposés.
                    </p>
                    <p>
                      <strong>Pour les formes lentes :</strong> on commence par un traitement sous forme de collyre, à base de prostaglandines et/ou bêta-bloquants.
                    </p>
                    <p className="font-semibold text-foreground">
                      Dans tous les cas, le traitement est à prendre à vie, dans les deux yeux.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="chirurgie" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    Le laser et la chirurgie
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      Lorsque le collyre est mal supporté ou qu'il provoque des effets secondaires, le <strong>laser</strong> ou l'acte chirurgical constitue une alternative.
                    </p>
                    <p>
                      Le laser stimule les cellules du filtre (le trabéculum) et rétablit l'évacuation du liquide. L'intervention chirurgicale est une <strong>iridotomie</strong> : un petit trou dans l'iris qui libère le trabéculum.
                    </p>
                    <p>
                      Cette intervention est aussi proposée <strong>en prévention</strong> du glaucome aigu pour les personnes à risque.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="urgence" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    En cas de glaucome aigu : la prise en charge d'urgence
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      Le glaucome aigu se manifeste par des douleurs oculaires, des céphalées parfois accompagnées de vomissements, et la vision de halos colorés. Le traitement passe par l'administration de médicaments aidant à l'élimination de l'humeur aqueuse, puis des collyres myotiques pour rétablir l'écoulement normal.
                    </p>
                    <p>
                      Pour limiter les récidives, un <strong>traitement chirurgical est souvent envisagé</strong> après la phase aiguë.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Living with Glaucoma */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Vivre avec le glaucome
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le glaucome, une fois pris en charge, <strong>n'altère plus la vision</strong>. Cependant, selon le déficit visuel engendré avant le traitement, vous aurez peut-être besoin d'accompagnement et d'aides adaptées.
                  </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Le suivi ophtalmologique</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Le suivi est incontournable pour surveiller la pression intra-oculaire et la tolérance du traitement. Votre ophtalmologiste vous aiguillera pour trouver des solutions adaptées : lunettes de vue et outils d'aide à la vision.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Les aides à la vision</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      En fonction de la malvoyance et des problématiques engendrées, il est possible d'augmenter l'éclairage, les contrastes et la taille des caractères grâce à des télé-agrandisseurs, loupes électroniques, logiciels d'agrandissement et lecteurs audio.
                    </p>
                  </Card>
                </div>

                <Card variant="highlighted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Si vous devez réapprendre à vivre avec une baisse de vision, des aides matérielles existent.</strong> Elles vous permettent de maintenir votre autonomie, de poursuivre votre travail et vos loisirs. Découvrez nos solutions d'aides à la lecture et à la vision.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Vous avez des questions sur le glaucome ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Votre ophtalmologiste est votre premier interlocuteur pour le dépistage et le suivi du glaucome. Si vous souhaitez des conseils sur les aides visuelles adaptées à votre situation, notre équipe est à votre écoute.
              </p>
              <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
                Le bilan basse vision permet de faire le point sur vos capacités visuelles restantes et d'identifier les solutions concrètes pour vous aider au quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact-conseil">
                    <Phone className="w-5 h-5" />
                    Nous contacter
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision">
                    Nos aides à la lecture
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

export default Glaucome;
