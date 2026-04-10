import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  AlertTriangle,
  Users,
  ArrowRight,
  ChevronRight,
  Dna,
  Droplets,
  Sun } from
"lucide-react";
import { Link } from "react-router-dom";
import comprendreHeroImage from "@/assets/comprendre-basse-vision-hero.jpg";
import amslerGridImage from "@/assets/grille-amsler-dessin-300.jpeg";
import maladiesHeroImage from "@/assets/maladies-yeux-hero-800.jpg";

const MaladiesYeux = () => {
  const mainDiseases = [
  {
    id: "dmla",
    title: "La DMLA",
    subtitle: "Dégénérescence Maculaire Liée à l'Âge",
    stat: "8% de la population après 50 ans",
    statDetail: "soit 1,5 million de personnes en France",
    description: "La DMLA est une maladie oculaire qui affecte la macula, la partie centrale de la rétine. Elle est souvent associée au vieillissement et peut entraîner une perte de vision centrale.",
    extra: "La grille d'Amsler est le premier test simple qui informe sur la possibilité d'une DMLA.",
    link: "/maladies-yeux/dmla"
  },
  {
    id: "glaucome",
    title: "Le Glaucome",
    subtitle: "Atteinte du nerf optique",
    stat: "1 à 2% de la population de plus de 40 ans",
    statDetail: "400 000 à 500 000 personnes seraient porteuses sans le savoir",
    description: "Le glaucome est souvent causé par une pression intraoculaire élevée et peut être asymptomatique pendant des années. Il affecte le nerf optique et peut entraîner une perte de vision progressive.",
    link: "/maladies-yeux/glaucome"
  },
  {
    id: "cataracte",
    title: "La Cataracte",
    subtitle: "Opacification du cristallin",
    stat: "Très courante avec l'âge",
    statDetail: "Peut aussi être causée par le tabagisme, le diabète, les UV",
    description: "La cataracte se produit lorsque le cristallin devient opaque, ce qui rend la vision floue ou trouble. Elle est souvent associée au vieillissement.",
    link: "/maladies-yeux/cataracte"
  },
  {
    id: "retinopathie",
    title: "Les Rétinopathies",
    subtitle: "Rétinopathie diabétique et rétinite pigmentaire",
    stat: "30% des personnes diabétiques",
    statDetail: "soit 1 million de personnes en France",
    description: "Les rétinopathies regroupent plusieurs maladies affectant la rétine. La rétinopathie diabétique, complication du diabète, endommage les vaisseaux sanguins de la rétine. La rétinite pigmentaire est une maladie génétique rare provoquant une dégénérescence progressive des cellules rétiniennes.",
    subLinks: [
      { label: "Rétinopathie diabétique", to: "/maladies-yeux/retinopathie-diabetique" },
      { label: "Rétinite pigmentaire", to: "/maladies-yeux/retinite-pigmentaire" },
    ]
  },
  {
    id: "nystagmus",
    title: "Le Nystagmus",
    subtitle: "Mouvement involontaire des yeux",
    stat: "Maladie neurologique",
    statDetail: "Mouvements incontrôlables et involontaires des yeux",
    description: "Le nystagmus se manifeste par un mouvement incontrôlable et involontaire des yeux, pouvant affecter la stabilité de la vision.",
    link: "/maladies-yeux/nystagmus"
  }];


  const refractionDefects = [
  {
    title: "La Myopie",
    description: "L'œil est trop long ou la cornée trop courbée. La lumière se focalise en avant de la rétine. Les objets éloignés apparaissent flous, les objets proches sont clairs.",
    link: "/maladies-yeux/myopie"
  },
  {
    title: "L'Hypermétropie",
    description: "L'œil est trop court ou la cornée trop plate. La lumière se focalise derrière la rétine. Les objets proches apparaissent flous, les objets éloignés sont plus clairs.",
    link: "/maladies-yeux/hypermetropie"
  },
  {
    title: "L'Astigmatisme",
    description: "La courbure de la cornée ou du cristallin est irrégulière. La lumière se focalise sur plusieurs points. Les objets peuvent apparaître dédoublés, flous ou distordus.",
    link: "/maladies-yeux/astigmatisme"
  },
  {
    title: "La Presbytie",
    description: "Le cristallin perd de son élasticité avec l'âge, rendant difficile la vision de près. Symptômes : difficulté à lire, fatigue oculaire, maux de tête.",
    link: "/maladies-yeux/presbytie"
  }];


  const hereditaryDiseases = [
  {
    title: "La rétinite pigmentaire",
    description: "Groupe de dystrophies rétiniennes héréditaires provoquant une dégénérescence progressive des photorécepteurs, entraînant une mauvaise vision nocturne puis un rétrécissement du champ visuel.",
    link: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire",
  },
  {
    title: "La maladie de Leber",
    description: "Neuropathie optique héréditaire liée à l'ADN mitochondrial. Elle provoque une baisse rapide et indolore de la vision centrale, souvent chez l'adolescent ou l'adulte jeune.",
    link: "/maladies-yeux/maladies-hereditaires/maladie-de-leber",
  },
  {
    title: "La maladie de Stargardt",
    description: "Maladie héréditaire de la rétine qui touche la macula et la vision centrale à un âge relativement jeune. Elle se caractérise par une perte progressive de la vision centrale.",
    link: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt",
  },
  {
    title: "L'achromatopsie",
    description: "Maladie héréditaire rare qui affecte la vision des couleurs et la tolérance à la lumière vive. Elle peut également causer une perte de l'acuité visuelle.",
    link: "/maladies-yeux/maladies-hereditaires/achromatopsie",
  },
  {
    title: "Le syndrome d'Usher",
    description: "Maladie génétique rare qui affecte à la fois l'ouïe et la vision. Elle associe surdité et rétinite pigmentaire, entraînant une perte progressive de la vision périphérique.",
    link: "/maladies-yeux/maladies-hereditaires/syndrome-usher",
  },
  {
    title: "L'Aniridie",
    description: "Maladie congénitale rare caractérisée par l'absence totale ou partielle de l'iris. La pupille ne peut pas se contracter normalement, entraînant photophobie et vision réduite.",
    link: "/maladies-yeux/maladies-hereditaires/aniridie",
  }];


  const otherDiseases = [
  {
    title: "L'Uvéite",
    description: "Inflammation de la couche intermédiaire de l'œil (uvea). Peut être causée par une infection, une maladie auto-immune ou une réaction allergique."
  },
  {
    title: "La Conjonctivite",
    description: "Infection ou inflammation de la conjonctive, la membrane qui recouvre la surface de l'œil. Peut être causée par une infection bactérienne ou virale, une allergie."
  },
  {
    title: "Le syndrome de l'œil sec",
    description: "Se produit lorsque les yeux ne produisent pas suffisamment de larmes ou lorsqu'elles s'évaporent trop rapidement. Cause yeux rouges, démangeaisons, brûlures et vision floue."
  }];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Maladies des Yeux : DMLA, Glaucome, Cataracte | LirElia"
        description="DMLA, glaucome, cataracte, rétinite pigmentaire… Comprenez chaque maladie oculaire, ses symptômes et les solutions pour préserver votre autonomie visuelle."
        canonicalPath="/maladies-yeux"
        jsonLd={buildBreadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Maladies des yeux", path: "/maladies-yeux" },
        ])}
      />
      
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0">
            <img src={maladiesHeroImage} alt="Examen ophtalmologique pour la basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Les maladies des yeux entraînant une basse vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Les yeux sont des organes vulnérables à de nombreuses maladies. Bien comprendre les causes et conséquences de ces affections permet de mieux appréhender le domaine de la basse vision.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">4</p>
                <p className="text-lg text-foreground">Défauts de réfraction courants</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">3 M </p>
                <p className="text-lg text-foreground">De Français concernés par la basse vision</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">5+</p>
                <p className="text-lg text-foreground">Maladies héréditaires identifiées</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">∞</p>
                <p className="text-lg text-foreground">Solutions d'accompagnement</p>
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
                  "Les principales maladies causant une basse vision",
                  "La DMLA, le Glaucome, la Cataracte",
                  "Le Nystagmus et les Rétinopathies",
                  "Les défauts de réfraction de l'œil",
                  "Les maladies héréditaires et génétiques",
                  "Autres maladies des yeux"].
                  map((item, index) =>
                  <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-secondary" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  )}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Diseases Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Intro with illustration */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Les principales maladies causant une basse vision
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    L'œil est un organe complexe qui peut être touché par différentes maladies, silencieuses, d'évolution lente, certaines pouvant aboutir sans traitement à une diminution importante de la vue, voir la cécité.   
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={comprendreHeroImage}
                    alt="Illustration des différentes maladies des yeux"
                    className="w-full rounded-2xl shadow-card"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400} />
                  
                </div>
              </div>
              
              <div className="space-y-6">
                {mainDiseases.map((disease, diseaseIndex) =>
                <Card key={disease.id} variant="elevated" className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                        <Eye className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                          {disease.title}
                        </h3>
                        <p className="text-lg text-secondary font-semibold mb-4">
                          {disease.subtitle}
                        </p>
                        <p className="text-lg text-foreground mb-4 leading-relaxed">
                          {disease.description}
                        </p>
                        {disease.extra &&
                      <div className="flex items-start gap-4">
                            <p className="text-lg text-muted-foreground italic flex-1">
                              {disease.extra}
                            </p>
                            {diseaseIndex === 0 &&
                        <img
                          src={amslerGridImage}
                          alt="Dessin illustrant la grille d'Amsler, test simple pour détecter la DMLA"
                          className="w-24 h-24 rounded-lg object-cover shadow-sm"
                          loading="lazy"
                          decoding="async"
                          width={96}
                          height={96} />

                        }
                          </div>
                      }
                      </div>
                      <div className="lg:w-64 shrink-0 space-y-3">
                        <Card variant="highlighted" className="p-4">
                          <p className="font-bold text-foreground text-lg">{disease.stat}</p>
                          <p className="text-muted-foreground">{disease.statDetail}</p>
                        </Card>
                        {disease.link &&
                      <Button variant="outline" size="sm" asChild className="w-full">
                            <Link to={disease.link}>
                              En savoir plus
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                      }
                        {disease.subLinks && disease.subLinks.map((sl: {label: string; to: string}, idx: number) => (
                          <Button key={idx} variant="outline" size="sm" asChild className="w-full">
                            <Link to={sl.to}>
                              {sl.label}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Refraction Defects Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Sun className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Les défauts de réfraction de l'œil
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Problèmes courants corrigeables par lunettes, lentilles ou chirurgie
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {refractionDefects.map((defect, index) =>
                <Card key={index} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {defect.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {defect.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={defect.link}>
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                )}
              </div>

              <Card variant="muted" className="mt-8 p-6">
                <p className="text-lg text-foreground">
                  Ces défauts de réfraction peuvent être corrigés avec des lunettes, des lentilles de contact ou une intervention chirurgicale. Il est important de faire régulièrement des examens de la vue pour les détecter et les traiter efficacement.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Hereditary Diseases Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Dna className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Les maladies héréditaires et génétiques
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Plus rares mais prévisibles si vos parents les ont développées
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {hereditaryDiseases.map((disease, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {disease.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {disease.description}
                    </p>
                    {disease.link && (
                      <Button variant="outline" size="sm" asChild>
                        <Link to={disease.link}>
                          En savoir plus
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/maladies-yeux/maladies-hereditaires">
                    <Dna className="w-5 h-5" />
                    Voir toutes les maladies héréditaires
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <Card variant="highlighted" className="mt-8 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    Il est important de consulter un spécialiste des yeux si vous avez des antécédents familiaux de maladies des yeux héréditaires, afin de détecter et traiter toute maladie le plus tôt possible.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Diseases Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Autres maladies des yeux
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Affections diverses pouvant affecter la vision
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {otherDiseases.map((disease, index) =>
                <Card key={index} variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {disease.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {disease.description}
                    </p>
                  </Card>
                )}
              </div>

              <p className="text-lg text-muted-foreground mt-8 text-center max-w-3xl mx-auto">
                Toutes ces maladies des yeux peuvent entraîner une déficience visuelle, une basse vision en raison des conséquences directes sur le fonctionnement de l'œil. Elles peuvent atteindre la rétine, le vitré, l'iris ou le nerf optique.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un bilan pour mieux comprendre votre situation
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Le bilan basse vision est un état des lieux fonctionnel pour mieux comprendre ce que vous pouvez encore faire avec votre vue, ce qui vous gêne le plus, et quelles pistes concrètes peuvent vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/#bilans">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/vivre-basse-vision">
                    Vivre au quotidien
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

export default MaladiesYeux;