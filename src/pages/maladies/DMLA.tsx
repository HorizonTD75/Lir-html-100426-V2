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
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import amslerGridImage from "@/assets/grille-amsler-dessin-300.jpeg";
import bookDmlaImage from "@/assets/book-dmla.jpg";

const DMLA = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="DMLA – Dégénérescence Maculaire Liée à l'Âge | LirElia"
        description="Tout savoir sur la DMLA : formes sèche et humide, symptômes, diagnostic, traitements et conseils pour vivre avec cette maladie des yeux."
        canonicalPath="/maladies-yeux/dmla"
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
              <li><span className="text-foreground font-semibold">La DMLA</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={bookDmlaImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                La DMLA – Dégénérescence Maculaire Liée à l'Âge
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                La DMLA est la première cause de malvoyance chez les personnes de plus de 50 ans. Bien comprendre ses formes, ses symptômes et les solutions existantes est essentiel pour préserver votre autonomie.
              </p>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">1M+</p>
                <p className="text-lg text-foreground">Français vivent avec une forme de DMLA</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">50%</p>
                <p className="text-lg text-foreground">des plus de 80 ans sont touchés</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">1ère</p>
                <p className="text-lg text-foreground">cause de handicap visuel après 50 ans</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">85%</p>
                <p className="text-lg text-foreground">des cas sont de forme sèche</p>
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
                    "Qu'est-ce que la DMLA ?",
                    "Les formes de DMLA : sèche et humide",
                    "Facteurs de risque",
                    "Symptômes et signes d'alerte",
                    "Diagnostic et dépistage",
                    "Traitements disponibles",
                    "Solutions pour compenser la DMLA",
                    "Vivre avec la DMLA au quotidien",
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

        {/* What is DMLA */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que la DMLA ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La DMLA signifie <strong>Dégénérescence Maculaire Liée à l'Âge</strong>. C'est une maladie oculaire chronique qui affecte la <strong>macula</strong>, une petite zone de la rétine responsable de la vision centrale nette.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La macula est une tache jaunâtre de 2 à 5 millimètres de diamètre, située au milieu de la rétine. Lorsque la dégénérescence atteint la région centrale de la macula (la fovéa), la vision fine est altérée, mais la <strong>vision périphérique reste correcte</strong>.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Cette affection touche plus d'un million de Français et est particulièrement fréquente chez les fumeurs et les personnes atteintes de diabète. Avec le temps, la DMLA peut entraîner une malvoyance, voire une perte partielle de la vision.
                  </p>
                </Card>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>À retenir :</strong> la DMLA atteint la vision centrale (lecture, reconnaissance des visages, conduite) mais ne rend pas totalement aveugle. La vision périphérique reste généralement intacte.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forms of DMLA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Activity className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Les formes de DMLA
                  </h2>
                  <p className="text-lg text-muted-foreground">Deux formes principales aux évolutions très différentes</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Forme sèche */}
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">La DMLA sèche (atrophique)</h3>
                      <p className="text-secondary font-semibold">85 % des cas – évolution lente</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La forme la plus courante. Les cellules rétiniennes vieillissantes n'assurent plus leur renouvellement normal. Au fil des ans, la rétine s'altère et n'assume plus ses fonctions de réception des faisceaux lumineux. Des dépôts jaunâtres appelés <strong>drusen</strong> s'accumulent sous la rétine.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Cette forme peut entraîner une vision floue, une difficulté à lire et une altération de la perception des couleurs. Elle évolue lentement et de manière imperceptible, commençant généralement vers 50 ans.
                  </p>
                  <Card variant="highlighted" className="p-4">
                    <p className="text-foreground font-semibold">
                      💡 Malheureusement, la forme atrophique ne se soigne pas actuellement. Cependant, des <strong>aides à la vision</strong> permettent de soutenir la vue durant de longues années. Dans certains cas, elle peut évoluer vers la forme humide.
                    </p>
                  </Card>
                </Card>

                {/* Forme humide */}
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">La DMLA humide (exsudative)</h3>
                      <p className="text-secondary font-semibold">15 % des cas – évolution rapide</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La macula est impactée par le saignement de vaisseaux sanguins anormaux (néovaisseaux) situés dans la zone choroïdienne, à l'arrière de la rétine. Cette hémorragie microscopique gêne la vision centrale et peut entraîner une <strong>chute brutale de la vue</strong>.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Les cellules nerveuses de la macula peuvent être endommagées de façon irréversible si le traitement n'est pas effectué rapidement. La vision périphérique reste cependant correcte.
                  </p>
                  <Card variant="muted" className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <strong>Urgence médicale :</strong> si vous constatez une baisse brutale de votre vision, consultez votre ophtalmologiste en urgence. Un traitement existe et donne des résultats spectaculaires si l'on réagit rapidement.
                      </p>
                    </div>
                  </Card>
                </Card>

                {/* Maculopathie diabétique */}
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Et la maculopathie diabétique ?
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Le diabète affecte souvent les cellules rétiniennes. La <Link to="/maladies-yeux/retinopathie-diabetique" className="text-primary underline hover:text-primary/80">rétinopathie diabétique</Link> peut s'étendre à la macula et gêner la vision centrale. Dans la forme œdémateuse de cette maculopathie, une intervention est possible. Un suivi régulier est recommandé pour les personnes diabétiques.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Facteurs de risque de la DMLA
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Facteurs principaux</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "L'âge", detail: "10 à 30 % des seniors de plus de 75 ans sont touchés" },
                      { label: "Le tabagisme", detail: "Risques doublés après 20 ans de tabac, multipliés par 5 après 40 ans" },
                      { label: "L'hérédité", detail: "Certains gènes sont identifiés comme facteurs d'apparition" },
                      { label: "L'hypertension artérielle", detail: "Facteur aggravant confirmé" },
                    ].map((factor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{factor.label}</span>
                          <p className="text-muted-foreground">{factor.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Autres facteurs</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Le surpoids et l'obésité", detail: "Doublent le risque de DMLA avancée" },
                      { label: "L'alimentation", detail: "Carence en antioxydants, oméga 3, lutéine et zéaxanthine" },
                      { label: "L'exposition aux UV", detail: "Les yeux clairs sont plus exposés" },
                      { label: "Le sexe", detail: "Les femmes sont deux fois plus exposées que les hommes" },
                    ].map((factor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{factor.label}</span>
                          <p className="text-muted-foreground">{factor.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Bonne nouvelle :</strong> bien que l'âge soit le principal facteur, des mesures de prévention (arrêt du tabac, alimentation équilibrée, activité physique) peuvent contribuer à réduire significativement les risques de développer la maladie.
                  </p>
                </div>
              </Card>
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
                  <p className="text-lg text-muted-foreground">Reconnaître les signaux pour agir à temps</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Premiers signes à surveiller</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Dans 85 % des cas, la DMLA évolue lentement et de manière imperceptible. Les deux yeux n'évoluent pas de façon symétrique : l'œil le moins touché compense transitoirement les troubles de l'autre. Les premiers signes qui doivent vous alerter :
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Vision floue et assombrie",
                      "Sensation d'assombrissement, difficulté à lire si l'environnement n'est pas bien éclairé",
                      "Difficulté à reconnaître les personnes",
                      "Baisse des contrastes, besoin d'augmenter l'éclairage",
                      "Difficulté à percevoir les hauteurs et les distances (risque de chute)",
                    ].map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Stade avancé</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    À un stade plus avancé de DMLA, le patient commence à remarquer :
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Les lignes droites sont perçues comme ondulées ou courbes (bord des fenêtres, des portes)",
                      "Des lettres manquent à la lecture, impression d'une tache sombre au centre du champ visuel (scotome)",
                      "Besoin d'un éclairage plus franc et plus soutenu",
                      "Impression d'être dans un brouillard, avec des contrastes insuffisants et des couleurs ternes",
                      "Baisse globale de l'acuité visuelle",
                    ].map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                        <ChevronRight className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                  <Card variant="muted" className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <strong>Important :</strong> si la baisse de vision est brutale, demandez un rendez-vous en urgence chez votre ophtalmologiste pour un fond d'œil. Il peut s'agir de la forme humide, à traiter dès les premiers mois.
                      </p>
                    </div>
                  </Card>
                </Card>
              </div>
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
                    Diagnostic et dépistage de la DMLA
                  </h2>
                  <p className="text-lg text-muted-foreground">Un dépistage précoce est essentiel</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">Diagnostic de la forme sèche</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      C'est généralement l'ophtalmologiste qui diagnostique la DMLA sèche lors d'un <strong>examen annuel du fond d'œil</strong>. Les dépôts (drusen) sur la rétine sont alors visibles. L'imagerie rétinienne par OCT-SD (optique cohérente en domaine spectral) permet une évaluation précise.
                    </p>
                  </Card>

                  <Card variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">Diagnostic de la forme humide</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      La personne peut percevoir elle-même la baisse de vision. Seul l'examen du fond d'œil permet de vérifier la présence de néovaisseaux. Un examen complet sera proposé : <strong>rétinographie, auto-fluorescence, angiographie et OCT</strong>.
                    </p>
                  </Card>
                </div>

                {/* Amsler Grid */}
                <Card variant="highlighted" className="p-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <img
                      src={amslerGridImage}
                      alt="Grille d'Amsler pour l'auto-surveillance de la DMLA"
                      className="w-32 h-32 rounded-lg object-cover shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">La grille d'Amsler : l'auto-surveillance</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-3">
                        À partir de 60 ans, vous pouvez faire ce test simple 1 à 2 fois par an. Portez vos lunettes habituelles, placez la feuille à 25 cm de votre visage et observez la grille en cachant un œil, puis l'autre.
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        Si les lignes semblent onduler, ne forment pas d'angles droits ou si les carrés ne sont pas identiques, <strong>parlez-en à votre ophtalmologiste</strong>. Ce test ne remplace pas un examen du fond d'œil régulier.
                      </p>
                    </div>
                  </div>
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
                    Traitements de la DMLA
                  </h2>
                  <p className="text-lg text-muted-foreground">La recherche avance, des solutions existent</p>
                </div>
              </div>

              <Card variant="muted" className="p-6 mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Il n'est pas encore possible de contrer définitivement toutes les formes de DMLA. Cependant, dans le cas de la <strong>forme humide</strong>, un traitement permet de récupérer une partie de la vue si la prise en charge est rapide.
                </p>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="injection" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    Les injections intravitréennes (DMLA humide)
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      L'ophtalmologiste procède à une <strong>injection intravitréenne d'agents anti-VEGF</strong> (ranibizumab, aflibercept) visant à cautériser le néovaisseau à l'origine de la gêne visuelle et à inhiber la croissance des vaisseaux sanguins anormaux.
                    </p>
                    <p>
                      Bien qu'une injection dans l'œil puisse sembler impressionnante, elle est <strong>rapide et indolore</strong> (quelques secondes). Seuls des picotements peuvent être ressentis à cause du produit anesthésique.
                    </p>
                    <p className="font-semibold text-foreground">
                      La DMLA étant liée à l'âge, d'autres vaisseaux anormaux peuvent apparaître avec le temps, nécessitant de nouvelles interventions. Un fond d'œil régulier est absolument nécessaire.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hygiene" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    Hygiène de vie et prévention (DMLA sèche)
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      La forme sèche ne peut qu'être contenue grâce à des <strong>habitudes de vie saines</strong> et en minimisant les facteurs de risque. Les patients sont encouragés à :
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Arrêter de fumer",
                        "Pratiquer une activité physique douce et régulière",
                        "Enrichir son alimentation en légumes, antioxydants et oméga 3",
                        "Prendre des compléments alimentaires spécifiques pour les yeux",
                        "Porter des lunettes de soleil pour protéger des UV",
                      ].map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground">
                          <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-1" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="recherche" className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                    Les avancées de la recherche
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6 space-y-4">
                    <p>
                      La recherche scientifique continue de faire des avancées majeures. Parmi les pistes prometteuses :
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Implants rétiniens et cellules souches",
                        "Thérapie génique ciblée",
                        "Médicaments à administration orale",
                        "Lentilles de contact correctrices et amplificatrices",
                        "Nouvelles approches thérapeutiques (agonistes β3-adrénergiques)",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground">
                          <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>
                      Ces solutions promettent de gagner en discrétion et en praticité, sans nécessiter d'interventions chirurgicales lourdes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Solutions to compensate */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Solutions pour compenser la DMLA
                  </h2>
                  <p className="text-lg text-muted-foreground">Retrouver son autonomie grâce aux aides visuelles</p>
                </div>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Des solutions existent pour compenser la DMLA. Les aides grossissantes adaptées et un éclairage Basse Vision de qualité permettent dans la plupart des cas de <strong>pouvoir lire à nouveau</strong> son courrier, ses factures, son journal, et de retrouver une autonomie de lecture.
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Ce que ressentent les personnes atteintes :</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Vision trouble (acuité visuelle diminuée)",
                    "Perte de la vision centrale",
                    "Déformations des lettres ou des lignes",
                    "Lettres ou petits mots non perçus",
                    "Débuts ou fins de lignes non perçus",
                    "Difficultés à lire les documents mal contrastés",
                    "Éclairages habituels totalement insuffisants",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                      <ChevronRight className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Loupes électroniques & téléagrandisseurs</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ils grossissent les textes sans déformation avec une grande qualité d'image. Les détails non perçus redeviennent visibles. Tous sont dotés d'un éclairage intégré et proposent différents contrastes (noir/blanc, bleu/jaune, noir/vert…).
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">L'éclairage adapté</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    La DMLA entraîne un assombrissement de la vision. L'éclairage doit être repensé aux postes clés : cuisine, salle de bain, espace de lecture. Des lampes spécialement conçues pour la basse vision permettent de diriger la lumière avec précision.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Logiciels & téléphones adaptés</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Des logiciels d'agrandissement pour ordinateur et des téléphones adaptés à la malvoyance complètent l'arsenal des aides visuelles. Certains téléagrandisseurs disposent même d'options de lecture vocale.
                  </p>
                </Card>
              </div>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-foreground leading-relaxed mb-3">
                      <strong>Le saviez-vous ?</strong> La DMLA est directement liée à l'augmentation du risque de chute chez la personne âgée. Un accompagnement est indispensable : aide humaine permanente ou dispositif de détection de chute.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/aides-lecture-bassevision">
                        Découvrir nos aides à la lecture
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Living with DMLA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Utensils className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Vivre avec la DMLA au quotidien
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Le suivi ophtalmologique</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Un suivi régulier permet de comprendre l'évolution de la maladie et d'ajuster les aides à la vision. La prise en charge par un ophtalmologiste, avec des examens réguliers du fond d'œil, est primordiale. Elle apporte des conseils d'aménagement de l'environnement, des soins et des traitements adaptés. Lorsque la malvoyance est forte, un accompagnement personnalisé doit être organisé.
                  </p>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Prévention au quotidien</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Alimentation</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Privilégiez les aliments riches en antioxydants, oméga 3, lutéine et zéaxanthine (légumes verts, poissons gras, fruits colorés). Des compléments alimentaires spécifiques peuvent soutenir le bon fonctionnement de l'œil.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Mode de vie</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Arrêt du tabac, activité physique régulière, protection solaire des yeux et contrôle de la tension artérielle sont les piliers de la prévention. Un dépistage régulier dès 50 ans est recommandé.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card variant="muted" className="p-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>30 % des personnes atteintes de DMLA souffrent de dépression.</strong> L'accompagnement ne se limite pas aux aides visuelles : le soutien psychologique et social est tout aussi important pour maintenir la qualité de vie.
                  </p>
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
                Vous avez des questions sur la DMLA ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Votre ophtalmologiste est votre premier interlocuteur pour le dépistage et le suivi de la DMLA. Si vous souhaitez des conseils sur les aides visuelles adaptées à votre situation, notre équipe est à votre écoute.
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

export default DMLA;
