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
  Lightbulb,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Moon,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/retinite-pigmentaire-hero.jpg";

const RetinitePigmentaire = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Rétinite Pigmentaire : Maladie de la Rétine | LirElia"
        description="Causes génétiques, symptômes et évolution de la rétinite pigmentaire. Conseils pour le quotidien et accompagnement basse vision."
        canonicalPath="/maladies-yeux/retinite-pigmentaire"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "La Rétinite Pigmentaire – Maladie Génétique de la Rétine",
          "description": "Guide complet sur la rétinite pigmentaire : définition, causes, symptômes, évolution, traitements et aides basse vision.",
          "about": { "@type": "MedicalCondition", "name": "Rétinite pigmentaire" },
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
              <li><span className="text-foreground font-semibold">La Rétinite Pigmentaire</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-primary-foreground/80 font-bold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                La Rétinite Pigmentaire : symptômes et prise en charge
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                La rétinite pigmentaire est une maladie génétique rare qui entraîne une dégénérescence progressive des cellules de la rétine. Elle se manifeste par une perte de la vision nocturne, un rétrécissement du champ visuel et peut évoluer vers une basse vision importante.
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
                    "Qu'est-ce que la rétinite pigmentaire ?",
                    "Symptômes et manifestations",
                    "Origine génétique de la maladie",
                    "Évolution et conséquences sur la vision",
                    "Impact sur la vie quotidienne",
                    "Traitements et accompagnement",
                    "Rétinite pigmentaire et basse vision",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'est-ce que la rétinite pigmentaire ?
                </h2>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    La rétinite pigmentaire est une <strong>maladie génétique rare</strong> qui affecte les photorécepteurs de la rétine, ces cellules spécialisées dans la captation de la lumière. Elle touche aussi bien les hommes que les femmes et peut se déclarer entre l'âge de 10 et 30 ans.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Les photorécepteurs se divisent en deux catégories : les <strong>bâtonnets</strong>, responsables de la vision nocturne et périphérique, et les <strong>cônes</strong>, responsables de la vision des couleurs et de la vision centrale. Dans la rétinite pigmentaire, les bâtonnets sont généralement les premiers touchés.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    La maladie évolue progressivement sur plusieurs années. Bien qu'elle puisse conduire à une basse vision importante, les personnes atteintes conservent généralement un minimum de capacité visuelle pendant de nombreuses années.
                  </p>
                </Card>

                <Card variant="muted" className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>À retenir :</strong> la rétinite pigmentaire est une maladie rare, touchant environ 1 personne sur 3 500. En France, on estime qu'environ 20 000 personnes en sont atteintes.
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
                  <Moon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Symptômes et manifestations
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Les premiers signes apparaissent souvent dès l'adolescence</p>
                </div>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Les symptômes de la rétinite pigmentaire apparaissent progressivement, généralement entre l'enfance et l'âge de 30 ans. L'évolution est variable d'une personne à l'autre.
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Les signes les plus fréquents</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Difficulté à voir dans l'obscurité ou la pénombre (héméralopie)",
                    "Réduction progressive du champ visuel périphérique",
                    "Sensation de « vision en tunnel »",
                    "Éblouissement et difficulté d'adaptation aux changements de luminosité",
                    "Perception de reflets ou halos autour des sources lumineuses",
                    "Baisse progressive de l'acuité visuelle",
                    "Difficulté à distinguer les couleurs (stades avancés)",
                    "Fatigue visuelle importante",
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Stethoscope className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Conseil :</strong> si vous constatez des difficultés à voir dans les endroits sombres ou une réduction de votre champ de vision, consultez un ophtalmologiste sans tarder. Un fond d'œil permet de poser le diagnostic.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Genetic origin */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Origine génétique de la maladie
                </h2>
              </div>

              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  La rétinite pigmentaire est une maladie <strong>héréditaire</strong>, causée par des mutations dans une cinquantaine de gènes identifiés. Ces gènes interviennent dans la production de protéines essentielles au bon fonctionnement des photorécepteurs.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Lorsqu'un gène est muté, les protéines produites sont défectueuses ou absentes. Les photorécepteurs ne peuvent plus convertir correctement la lumière en signaux électriques transmis au cerveau, ce qui entraîne leur dégénérescence progressive.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  La maladie peut se transmettre selon différents modes : <strong>autosomique dominant</strong> (un parent porteur suffit), <strong>autosomique récessif</strong> (les deux parents sont porteurs) ou <strong>lié au chromosome X</strong> (touchant principalement les hommes).
                </p>
              </Card>

              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Si un membre de votre famille est atteint de rétinite pigmentaire, un <strong>conseil génétique</strong> peut être proposé pour évaluer le risque de transmission et organiser un suivi adapté.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Evolution */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Évolution et conséquences sur la vision
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Phase initiale</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Perte de la vision nocturne. Les déplacements dans l'obscurité ou la pénombre deviennent difficiles. La vision de jour reste généralement correcte.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Phase intermédiaire</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Rétrécissement progressif du champ visuel. La vision périphérique se réduit, créant une « vision en tunnel ». Les obstacles latéraux deviennent invisibles.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Phase avancée</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Le champ visuel se réduit fortement. La vision centrale peut également être affectée, entraînant des difficultés pour la lecture, la reconnaissance des visages et les activités de précision.
                  </p>
                </Card>
              </div>

              <Card variant="muted" className="p-6">
                <p className="text-lg text-foreground leading-relaxed">
                  La vitesse d'évolution varie considérablement d'une personne à l'autre. Une apparition précoce ne signifie pas nécessairement une évolution plus rapide. Un suivi ophtalmologique régulier est essentiel pour adapter les aides et l'accompagnement.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Daily impact */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Impact sur la vie quotidienne
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Déplacements</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    La perte du champ visuel périphérique complique les déplacements, en particulier dans des environnements peu éclairés, encombrés ou inconnus. La conduite automobile est souvent impossible.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Lecture et travail</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Lorsque la vision centrale est préservée, la lecture reste possible mais fatigante. Des aides optiques et un éclairage adapté peuvent considérablement améliorer le confort.
                  </p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">Vie sociale</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    La maladie est souvent invisible pour l'entourage. L'incompréhension des proches face aux difficultés visuelles peut créer de l'isolement et de la frustration.
                  </p>
                </Card>
              </div>

              <Card variant="muted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    De nombreuses personnes atteintes de rétinite pigmentaire maintiennent une bonne autonomie grâce à des <strong>stratégies d'adaptation</strong> et des aides techniques adaptées. Un accompagnement précoce en basse vision fait toute la différence.
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
                    Traitements et accompagnement
                  </h2>
                  <p className="text-lg text-muted-foreground font-semibold">Préserver l'autonomie et le confort visuel</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">État de la recherche</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Il n'existe pas encore de traitement curatif pour la rétinite pigmentaire. Cependant, la recherche progresse activement dans plusieurs directions prometteuses :
                  </p>
                  <ul className="space-y-3">
                    {[
                      { label: "Thérapie génique", detail: "Correction des gènes défectueux pour ralentir ou stopper la dégénérescence" },
                      { label: "Implants rétiniens", detail: "Dispositifs électroniques stimulant les cellules rétiniennes restantes" },
                      { label: "Cellules souches", detail: "Recherche sur le remplacement des photorécepteurs endommagés" },
                      { label: "Neuroprotection", detail: "Médicaments visant à protéger les cellules encore fonctionnelles" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
                    En attendant un traitement curatif, des aides visuelles permettent de maintenir l'autonomie et le confort au quotidien :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Loupes et télé-agrandisseurs pour la lecture",
                      "Lampes et éclairages adaptés à la basse vision",
                      "Filtres anti-éblouissement et verres teintés",
                      "Logiciels d'agrandissement sur ordinateur et tablette",
                      "Applications de synthèse vocale",
                      "Cannes blanches et aides aux déplacements",
                    ].map((aid, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{aid}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Link basse vision */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Rétinite pigmentaire et basse vision
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      La rétinite pigmentaire est l'une des causes de <strong>basse vision</strong> chez les personnes jeunes et actives. La perte progressive du champ visuel impacte les déplacements, la lecture, le travail et la vie sociale.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      Le Visiopraticien LirElia peut vous accompagner pour évaluer votre vision fonctionnelle, identifier les aides les plus adaptées et mettre en place des stratégies concrètes pour préserver votre autonomie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="default" asChild>
                        <Link to="/bilans-bassevision">
                          Découvrir les bilans basse vision
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/maladies-yeux">
                          Autres maladies des yeux
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
                Si vous êtes atteint de rétinite pigmentaire, un bilan basse vision permet de faire le point sur votre vision fonctionnelle et de trouver des solutions concrètes pour améliorer votre quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/visiopraticien">
                    Le Visiopraticien LirElia
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

export default RetinitePigmentaire;
