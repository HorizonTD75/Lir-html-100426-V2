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
  Stethoscope,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Baby,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import nystagmusHeroImage from "@/assets/nystagmus-hero.jpg";

const Nystagmus = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Le Nystagmus – Mouvement Involontaire des Yeux | LirElia"
        description="Comprendre le nystagmus : causes, symptômes, impact sur la vision, traitements possibles et accompagnement basse vision au quotidien."
        canonicalPath="/maladies-yeux/nystagmus"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Le Nystagmus – Mouvement Involontaire des Yeux",
          "description": "Guide complet sur le nystagmus : définition, causes, manifestations, impact sur la vie quotidienne, traitements et aides visuelles.",
          "about": { "@type": "MedicalCondition", "name": "Nystagmus" },
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
              <li><span className="text-foreground font-semibold">Le Nystagmus</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={nystagmusHeroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-primary-foreground/80 font-bold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Le Nystagmus : comprendre et vivre avec
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                Le nystagmus se caractérise par des mouvements involontaires et incontrôlables des yeux. Ce trouble neurologique affecte la stabilité de la vision et peut avoir un impact important sur la lecture, les déplacements et l'autonomie au quotidien.
              </p>
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
                    "Qu'est-ce que le nystagmus ?",
                    "Les différentes formes de nystagmus",
                    "Causes et facteurs associés",
                    "Symptômes et manifestations",
                    "Impact sur la vie quotidienne",
                    "Traitements et accompagnement",
                    "Nystagmus et basse vision",
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

        {/* What is Nystagmus */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que le nystagmus ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le nystagmus est un <strong>trouble oculomoteur</strong> qui se manifeste par des mouvements répétitifs, involontaires et incontrôlables des yeux. Ces oscillations peuvent être horizontales (les plus fréquentes), verticales ou rotatoires.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Ces mouvements empêchent l'œil de se fixer correctement sur un point, ce qui rend la vision instable. Le cerveau peine à former une image nette et stable, entraînant une <strong>baisse de l'acuité visuelle</strong> et une fatigue oculaire importante.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Le nystagmus peut apparaître dès la naissance (<strong>nystagmus congénital</strong>) ou survenir plus tard à la suite d'une maladie ou d'un traumatisme (<strong>nystagmus acquis</strong>). Il touche les enfants comme les adultes et peut être associé à d'autres troubles visuels ou neurologiques.
                  </p>
                </Card>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>À retenir :</strong> le nystagmus n'entraîne pas la cécité totale. La vision périphérique est généralement conservée. Avec un accompagnement adapté, de nombreuses personnes atteintes maintiennent une bonne autonomie.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Activity className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Les différentes formes de nystagmus
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Congénital ou acquis, selon l'origine du trouble</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Baby className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Nystagmus congénital</h3>
                      <p className="text-primary font-bold text-lg">Présent dès la naissance ou la petite enfance</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le nystagmus congénital apparaît généralement dans les premiers mois de vie. Il est souvent associé à d'autres anomalies oculaires (albinisme, <Link to="/maladies-yeux/cataracte" className="text-primary underline hover:text-primary/80">cataracte congénitale</Link>, <Link to="/maladies-yeux/maladies-hereditaires/aniridie" className="text-primary underline hover:text-primary/80">aniridie</Link>) ou à des troubles neurologiques.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Les personnes atteintes s'adaptent souvent inconsciemment en adoptant une <strong>position de blocage</strong> de la tête, un angle où les oscillations sont réduites et la vision est plus nette.
                  </p>
                </Card>

                <Card variant="elevated" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Nystagmus acquis</h3>
                      <p className="text-primary font-bold text-lg">Apparition à tout âge</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Le nystagmus acquis survient à la suite d'une maladie, d'un traumatisme crânien, d'un AVC ou d'un trouble neurologique. Il peut aussi être provoqué par certains médicaments ou par la consommation excessive d'alcool.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Contrairement à la forme congénitale, le nystagmus acquis est souvent accompagné de <strong>vertiges</strong> et d'une <strong>sensation d'instabilité visuelle</strong> plus marquée, car le cerveau n'a pas eu le temps de s'y adapter.
                  </p>
                </Card>
              </div>
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
                  Causes et facteurs associés
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Causes du nystagmus congénital</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Albinisme oculaire", detail: "Déficit de pigmentation affectant le développement visuel" },
                      { label: "Cataracte congénitale", detail: "Opacification du cristallin dès la naissance" },
                      { label: "Aniridie", detail: "Absence partielle ou totale de l'iris" },
                      { label: "Troubles du nerf optique", detail: "Hypoplasie ou malformation du nerf optique" },
                    ].map((factor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{factor.label}</span>
                          <p className="text-foreground">{factor.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Causes du nystagmus acquis</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Sclérose en plaques", detail: "Atteinte neurologique fréquemment associée" },
                      { label: "AVC", detail: "Lésions cérébrales affectant le contrôle oculaire" },
                      { label: "Traumatisme crânien", detail: "Choc affectant le système vestibulaire" },
                      { label: "Certains médicaments", detail: "Antiépileptiques, sédatifs à forte dose" },
                    ].map((factor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{factor.label}</span>
                          <p className="text-foreground">{factor.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card variant="muted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      Le nystagmus peut également être associé à d'autres pathologies oculaires comme la <strong><Link to="/maladies-yeux/dmla" className="text-primary underline hover:text-primary/80">DMLA</Link></strong>, le <strong><Link to="/maladies-yeux/glaucome" className="text-primary underline hover:text-primary/80">glaucome</Link></strong> ou des <strong>dystrophies rétiniennes</strong>. Un bilan ophtalmologique complet est indispensable pour en identifier l'origine.
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
                    Symptômes et manifestations du nystagmus
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Reconnaître les signes visibles et ressentis</p>
                </div>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Le nystagmus se manifeste de manière variable selon les personnes. Les mouvements oculaires peuvent être constants ou se déclencher dans certaines situations. La fatigue, le stress et les émotions tendent à les amplifier.
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Les manifestations les plus fréquentes</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Mouvements oscillatoires involontaires des yeux",
                    "Vision instable ou « tremblante »",
                    "Difficulté à fixer un point précis",
                    "Baisse de l'acuité visuelle",
                    "Fatigue oculaire importante",
                    "Position de tête inclinée ou tournée (torticolis)",
                    "Sensibilité accrue à la lumière",
                    "Vertiges et sensation d'instabilité (forme acquise)",
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Stethoscope className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Conseil :</strong> si vous ou votre enfant présentez des mouvements oculaires anormaux, consultez rapidement un ophtalmologiste. Un diagnostic précoce permet de mettre en place un suivi adapté et d'évaluer l'impact sur la vision.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact on daily life */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Impact sur la vie quotidienne et l'autonomie
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Lecture et écriture</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    L'instabilité de la vision rend la lecture difficile et fatigante. Les lignes de texte semblent « bouger », ce qui ralentit considérablement la vitesse de lecture et peut décourager les personnes atteintes.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Déplacements</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    La perception de l'espace et des distances peut être perturbée. L'évaluation des obstacles, la traversée de rues et la conduite automobile sont souvent plus complexes.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Vie sociale et bien-être</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Le nystagmus est visible par l'entourage, ce qui peut provoquer une gêne sociale. La fatigue visuelle constante affecte également le moral et l'énergie au quotidien.
                  </p>
                </Card>
              </div>

              <Card variant="muted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Malgré ces difficultés, beaucoup de personnes atteintes de nystagmus développent des <strong>stratégies d'adaptation</strong> efficaces. Un accompagnement spécialisé en basse vision permet d'identifier les aides et techniques les plus adaptées à chaque situation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Traitements et accompagnement du nystagmus
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Réduire les symptômes et améliorer le confort visuel</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Suivi médical et traitements</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Il n'existe pas de traitement permettant de guérir définitivement le nystagmus. Cependant, plusieurs approches médicales peuvent réduire l'intensité des mouvements oculaires et améliorer le confort visuel :
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      { label: "Lentilles de contact", detail: "Peuvent réduire les oscillations et améliorer l'acuité visuelle chez certains patients" },
                      { label: "Médicaments myorelaxants", detail: "Détendent les muscles oculaires et le système nerveux central pour réduire les mouvements" },
                      { label: "Exercices oculaires", detail: "Un programme adapté peut contribuer à diminuer les symptômes au fil du temps" },
                      { label: "Traitements doux", detail: "Techniques de relaxation, réduction du stress et gouttes ophtalmiques spécifiques" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{item.label}</span>
                          <p className="text-foreground">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Aides visuelles et adaptations</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    En complément du suivi médical, des aides visuelles permettent d'améliorer le confort au quotidien :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Loupes et télé-agrandisseurs pour faciliter la lecture",
                      "Éclairage adapté pour réduire la fatigue visuelle",
                      "Logiciels d'agrandissement sur ordinateur et tablette",
                      "Patchs oculaires dans certains cas spécifiques",
                      "Filtres anti-éblouissement pour le confort extérieur",
                      "Aménagement de l'espace de travail et du domicile",
                    ].map((aid, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground">{aid}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card variant="highlighted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Important :</strong> la chirurgie oculaire au laser n'est généralement <strong>pas recommandée</strong> pour le nystagmus. En revanche, une chirurgie des muscles oculaires peut être envisagée dans certains cas pour modifier la position de blocage et améliorer le confort visuel. Consultez toujours votre ophtalmologiste avant d'envisager un traitement.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Link to basse vision */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-secondary shrink-0 mt-1" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Nystagmus et basse vision
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Le nystagmus peut entraîner une <strong>basse vision</strong> significative, en particulier lorsqu'il est associé à d'autres pathologies oculaires. La difficulté à fixer un point rend la lecture, l'utilisation des écrans et de nombreuses activités quotidiennes plus complexes.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      Le Visiopraticien LirElia peut vous accompagner pour évaluer votre vision fonctionnelle, identifier les aides les plus adaptées et mettre en place des stratégies concrètes pour améliorer votre confort au quotidien.
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
                Que le nystagmus soit isolé ou associé à d'autres troubles visuels, un bilan basse vision permet de faire le point sur votre vision fonctionnelle et de trouver des solutions concrètes pour améliorer votre quotidien.
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
    </div>
  );
};

export default Nystagmus;
