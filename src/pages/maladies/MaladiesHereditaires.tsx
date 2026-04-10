import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dna, ArrowRight, ChevronRight, Lightbulb, Eye, Ear, Sun, Brain, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import maladiesHeroImage from "@/assets/maladies-yeux-hero-800.jpg";

const childDiseases = [
  {
    title: "La rétinite pigmentaire",
    icon: Eye,
    touched: "Rétine périphérique puis centrale",
    signs: "Mauvaise vision nocturne, rétrécissement progressif du champ visuel, vision en tunnel",
    summary: "La rétinite pigmentaire désigne un grand groupe de dystrophies rétiniennes héréditaires. La fiche détaillée aborde la vision nocturne, la perte progressive du champ visuel, les complications possibles, le rôle majeur de la génétique et les solutions de basse vision.",
    link: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire",
  },
  {
    title: "La maladie de Leber",
    icon: Brain,
    touched: "Nerf optique",
    signs: "Baisse rapide et indolore de la vision centrale, souvent chez l'adolescent ou l'adulte jeune",
    summary: "Cette neuropathie optique héréditaire, liée le plus souvent à l'ADN mitochondrial, entraîne une baisse rapide de la vision centrale. La fiche explique les mutations les plus fréquentes, la transmission maternelle, les facteurs aggravants et l'intérêt d'une prise en charge précoce.",
    link: "/maladies-yeux/maladies-hereditaires/maladie-de-leber",
  },
  {
    title: "La maladie de Stargardt",
    icon: Eye,
    touched: "Macula",
    signs: "Baisse de vision centrale, gêne de lecture, difficultés pour les détails fins",
    summary: "Cette maculopathie génétique touche surtout la vision centrale. La fiche aide à comprendre le rôle du gène ABCA4, les difficultés de lecture ou de reconnaissance des visages, les précautions utiles et l'état de la recherche.",
    link: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt",
  },
  {
    title: "L'achromatopsie",
    icon: Sun,
    touched: "Cônes rétiniens",
    signs: "Photophobie importante, très mauvaise vision des couleurs, nystagmus, baisse d'acuité",
    summary: "L'achromatopsie concerne principalement le fonctionnement des cônes. La fiche insiste sur la photophobie, la baisse d'acuité visuelle, le nystagmus, l'altération de la vision des couleurs et les adaptations concrètes.",
    link: "/maladies-yeux/maladies-hereditaires/achromatopsie",
  },
  {
    title: "Le syndrome d'Usher",
    icon: Ear,
    touched: "Rétine + audition",
    signs: "Rétinite pigmentaire associée à une hypoacousie ou une surdité, parfois troubles de l'équilibre",
    summary: "Le syndrome d'Usher associe une atteinte visuelle de type rétinite pigmentaire à une atteinte auditive, parfois complétée par des troubles de l'équilibre. La fiche aide à mieux comprendre les différents types cliniques.",
    link: "/maladies-yeux/maladies-hereditaires/syndrome-usher",
  },
  {
    title: "L'aniridie",
    icon: Eye,
    touched: "Iris et autres structures oculaires",
    signs: "Photophobie, baisse visuelle précoce, risque de glaucome, cataracte, kératopathie",
    summary: "L'aniridie n'est pas seulement une absence partielle d'iris. C'est souvent une maladie panoculaire pouvant toucher la cornée, la macula, le cristallin et la pression oculaire. La fiche met en avant le rôle du gène PAX6.",
    link: "/maladies-yeux/maladies-hereditaires/aniridie",
  },
];

const MaladiesHereditaires = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Maladies héréditaires et génétiques de la vue | LirElia"
        description="Rétinite pigmentaire, Leber, Stargardt, achromatopsie, Usher, aniridie : comprendre les maladies génétiques de la vue et l'accompagnement."
        canonicalPath="/maladies-yeux/maladies-hereditaires"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Maladies héréditaires et génétiques de la vue",
          "description": "Guide complet sur les maladies héréditaires de la vue : causes génétiques, symptômes, diagnostic et accompagnement en basse vision.",
        }}
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
          <div className="container">
            <ol className="flex items-center gap-2 text-lg flex-wrap">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><Link to="/maladies-yeux" className="text-muted-foreground hover:text-primary transition-colors">Maladies des yeux</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li><span className="text-foreground font-semibold">Maladies héréditaires et génétiques</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={maladiesHeroImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <p className="text-primary-foreground/80 font-bold text-lg mb-3">Maladies des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Les maladies héréditaires et génétiques de la vue
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Comprendre les grandes familles de maladies génétiques oculaires, repérer leurs conséquences sur la vision et s'orienter vers un accompagnement adapté.
              </p>
            </div>
          </div>
        </section>

        {/* À retenir */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>À retenir :</strong> les maladies héréditaires de la vue regroupent des affections rares ou peu fréquentes, d'origine génétique, qui peuvent toucher la rétine, la macula, le nerf optique, l'iris ou plusieurs structures de l'œil. Leur expression clinique est très variable : certaines touchent surtout la vision centrale, d'autres la vision nocturne, le champ visuel, la perception des couleurs, la tolérance à la lumière ou encore l'audition et l'équilibre.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Qu'appelle-t-on… */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Dna className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Qu'appelle-t-on une maladie héréditaire de la vue ?
                </h2>
              </div>
              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  On parle de maladie héréditaire de la vue lorsqu'une atteinte visuelle est liée à une anomalie génétique transmise dans une famille ou apparue de novo. Ces maladies peuvent être présentes dès la naissance, apparaître dans l'enfance, à l'adolescence ou plus tard à l'âge adulte.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Elles ne se ressemblent pas toutes. Certaines concernent surtout la rétine, d'autres la macula, le nerf optique, la vision des couleurs, l'iris ou la surface oculaire. Certaines restent limitées aux yeux, d'autres s'associent à des atteintes extra-oculaires, comme des troubles auditifs, neurologiques ou rénaux.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Les grands repères */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les grands repères à connaître
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Diversité génétique", text: "Il n'existe pas une seule maladie, mais de très nombreuses formes cliniques et moléculaires." },
                  { title: "Modes de transmission variables", text: "Autosomique dominante, autosomique récessive, liée au chromosome X, mitochondriale ou mutation de novo." },
                  { title: "Symptômes variés", text: "Baisse de vision centrale, gêne nocturne, vision en tunnel, photophobie, altération des couleurs, nystagmus ou baisse brutale de vision." },
                  { title: "Rôle du diagnostic génétique", text: "Confirmer la maladie, mieux informer la famille et, dans certains cas, orienter vers des essais cliniques ou des traitements ciblés." },
                ].map((item, i) => (
                  <Card key={i} variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comment se construit le diagnostic */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Comment se construit le diagnostic ?
              </h2>
              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Le diagnostic ne repose pas uniquement sur le nom d'une maladie. Il se construit à partir de l'histoire visuelle, de l'âge de début, des symptômes décrits, de l'examen ophtalmologique et d'examens complémentaires ciblés.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Les 6 fiches */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Les principales maladies présentées sur LirElia
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Chaque fiche approfondit une maladie ou un groupe de maladies avec leurs symptômes, leur évolution, les examens utiles et les solutions d'accompagnement.
              </p>

              <div className="space-y-6">
                {childDiseases.map((disease) => {
                  const Icon = disease.icon;
                  return (
                    <Card key={disease.title} variant="elevated" className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{disease.title}</h3>
                          <p className="text-lg text-secondary font-semibold mb-2">{disease.touched}</p>
                          <p className="text-lg text-muted-foreground mb-3 italic">{disease.signs}</p>
                          <p className="text-lg text-foreground leading-relaxed mb-4">{disease.summary}</p>
                          <Button variant="outline" asChild>
                            <Link to={disease.link}>
                              Lire la fiche détaillée
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impacts quotidien */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quels impacts sur la vie quotidienne ?
              </h2>
              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Les conséquences concrètes varient beaucoup selon la maladie. Certaines personnes lisent difficilement mais se déplacent encore assez bien ; d'autres gardent une vision centrale utile mais perdent progressivement leur champ visuel ; d'autres encore souffrent surtout d'éblouissement, de fatigue visuelle ou de difficultés d'adaptation aux changements de lumière.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Dans tous les cas, il est important de ne pas réduire la prise en charge à la seule question médicale. Les aides optiques ou électroniques, l'éclairage, les contrastes, l'organisation du logement, les réglages numériques, l'accompagnement scolaire ou professionnel et l'information sur les droits jouent un rôle majeur dans l'autonomie.
                </p>
                <ul className="space-y-3">
                  {[
                    "Demander un bilan de basse vision dès que la lecture, les déplacements ou les écrans deviennent pénibles.",
                    "Adapter l'environnement plutôt que forcer la vision : éclairage homogène, contrastes renforcés, repères visuels simples.",
                    "Réévaluer régulièrement les besoins, car les aides utiles à un moment donné peuvent évoluer avec la maladie.",
                    "Ne pas négliger l'impact psychologique d'un diagnostic rare ou d'une baisse visuelle progressive.",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg text-foreground">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Prise en charge et recherche */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Prise en charge médicale et recherche
              </h2>
              <Card variant="elevated" className="p-8 mb-6">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  En 2026, il n'existe pas de traitement curatif généralisable à l'ensemble des maladies héréditaires de la vue. En revanche, les connaissances progressent et certaines formes bien ciblées disposent déjà d'options spécifiques ou d'essais cliniques prometteurs.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Pour cette raison, la confirmation moléculaire du diagnostic prend une place croissante. Elle permet parfois d'ouvrir l'accès à un centre expert, à un registre, à un programme de recherche ou à une information plus personnalisée sur l'évolution probable de la maladie.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Quand orienter */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quand faut-il consulter un spécialiste ?
              </h2>
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-foreground">Les situations suivantes justifient un avis spécialisé :</p>
                </div>
                <ul className="space-y-3 ml-10">
                  {[
                    "Baisse visuelle centrale inexpliquée chez un enfant, un adolescent ou un adulte jeune",
                    "Mauvaise vision nocturne, chocs répétés contre des obstacles latéraux ou impression de vision en tunnel",
                    "Photophobie importante, nystagmus ou altération sévère de la vision des couleurs dès l'enfance",
                    "Association entre baisse auditive et atteinte visuelle",
                    "Antécédents familiaux de maladie oculaire rare ou de handicap visuel d'origine inconnue",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg text-foreground">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un accompagnement pour mieux vivre avec sa maladie
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Le bilan basse vision permet de mieux comprendre votre situation fonctionnelle et de trouver les solutions concrètes les plus adaptées.
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
                    Toutes les maladies des yeux
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

export default MaladiesHereditaires;
