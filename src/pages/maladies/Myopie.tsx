import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ChevronRight, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import maladiesHeroImage from "@/assets/maladies-yeux-hero-800.jpg";

const Myopie = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="La Myopie – Causes, Symptômes et Traitements | LirElia"
        description="Tout savoir sur la myopie : causes génétiques et environnementales, symptômes, traitements (lunettes, lentilles, chirurgie) et prévention."
        canonicalPath="/maladies-yeux/myopie"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "La Myopie – Causes, symptômes et traitements",
          "description": "Guide complet sur la myopie : défaut de réfraction, causes, symptômes, diagnostic et options de traitement.",
          "about": { "@type": "MedicalCondition", "name": "Myopie" },
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
              <li><span className="text-foreground font-semibold">La Myopie</span></li>
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
              <p className="text-secondary font-semibold text-lg mb-3">Défaut de réfraction</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                La Myopie : causes, symptômes et traitements
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                La myopie est l'un des troubles visuels les plus courants, touchant environ 30 % de la population mondiale. Elle se caractérise par une difficulté à voir les objets éloignés clairement, tandis que la vision de près reste nette.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">2 Mds</p>
                <p className="text-lg text-foreground">De personnes myopes dans le monde</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">30 %</p>
                <p className="text-lg text-foreground">De la population mondiale concernée</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">50 %</p>
                <p className="text-lg text-foreground">Estimation prévue d'ici 2050</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">22 %</p>
                <p className="text-lg text-foreground">Des 18-39 ans en France (2021)</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qu'est-ce que la myopie ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                La myopie est un trouble de la réfraction de l'œil qui se produit lorsque l'œil est trop long ou que la cornée est trop courbée. Les rayons lumineux se concentrent en avant de la rétine plutôt que directement sur elle, ce qui rend les objets éloignés flous.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Ce défaut visuel peut avoir un impact significatif sur la qualité de vie : conduite, lecture de panneaux, reconnaissance de visages à distance… autant de situations rendues difficiles sans correction adaptée.
              </p>
              <Card variant="highlighted" className="p-6">
                <p className="text-lg">
                  Selon l'Organisation mondiale de la santé, la myopie est devenue un véritable enjeu de santé publique mondial. Sa prévalence pourrait atteindre <strong>50 % de la population mondiale d'ici 2050</strong>.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quelles sont les causes de la myopie ?
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { title: "Facteurs génétiques", content: "La myopie a tendance à être héréditaire. Si les parents sont myopes, leurs enfants ont un risque plus élevé de le devenir. Plusieurs gènes impliqués dans la croissance de l'œil ont été identifiés." },
                  { title: "Facteurs environnementaux", content: "Les enfants qui passent beaucoup de temps à l'intérieur, qui lisent abondamment ou passent de longues heures devant les écrans présentent un risque plus élevé. Le manque d'exposition à la lumière naturelle est un facteur aggravant identifié." },
                  { title: "Facteurs externes", content: "Un faible éclairage, une mauvaise posture lors de la lecture ou du travail sur écran peuvent également contribuer au développement de la myopie." },
                  { title: "Troubles de la croissance", content: "Certaines conditions comme le syndrome de Marfan peuvent provoquer une myopie. Les traumatismes oculaires (contusions, lacérations) peuvent également endommager l'œil et entraîner ce défaut de réfraction." },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`cause-${i}`} className="bg-card rounded-xl border-2 border-border px-6">
                    <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Symptômes */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quels sont les symptômes de la myopie ?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Vision floue de loin", text: "Difficulté à lire les panneaux de signalisation, à reconnaître des visages ou à voir les détails à distance. C'est le symptôme le plus caractéristique." },
                  { title: "Besoin de se rapprocher des objets", text: "Les personnes myopes tiennent souvent les livres ou les écrans plus près de leur visage pour voir clairement, ce qui peut entraîner une fatigue oculaire." },
                  { title: "Difficulté pour la conduite", text: "La vision floue de loin rend la conduite dangereuse, surtout la nuit. Les panneaux et les obstacles sont perçus tardivement." },
                  { title: "Fatigue oculaire et maux de tête", text: "Après un effort visuel prolongé, des maux de tête et une fatigue oculaire sont fréquents, liés à la tension des muscles oculaires." },
                  { title: "Clignements fréquents", text: "Le fait de cligner des yeux ou de plisser les paupières pour améliorer la mise au point est un signe courant, en particulier chez les enfants." },
                ].map((item, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Comment diagnostiquer la myopie ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Le diagnostic de la myopie est réalisé par un ophtalmologiste ou un optométriste. Il repose sur plusieurs examens complémentaires :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Examen de la vue", text: "Évaluation de la santé globale de l'œil à l'aide d'un ophtalmoscope, puis lecture de lettres sur un tableau de test." },
                  { title: "Mesure de la réfraction", text: "Un réfractomètre détermine la correction optique nécessaire. Cet examen simple et indolore dure environ 15 minutes." },
                  { title: "Tests complémentaires", text: "L'ophtalmoscopie visualise les structures internes de l'œil. La gonioscopie mesure la pression intraoculaire pour dépister un éventuel glaucome." },
                ].map((item, i) => (
                  <Card key={i} variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Traitement */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Comment traiter la myopie ?
              </h2>
              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lunettes et lentilles de contact</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les corrections optiques sont le traitement le plus courant. Les verres divergents permettent de refocaliser la lumière sur la rétine. Les lentilles de contact, souples ou rigides, offrent une alternative pratique pour les cas légers à sévères.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Chirurgie réfractive au laser</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Le LASIK et la PRK sont les techniques les plus courantes. Elles remodèlent la forme de la cornée à l'aide d'un laser pour corriger la réfraction. Ces interventions sont envisagées lorsque la myopie est stabilisée.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Orthokératologie</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cette technique consiste à porter des lentilles rigides la nuit pour remodeler temporairement la cornée et permettre une vision claire pendant la journée. Elle est particulièrement utilisée chez les enfants pour ralentir la progression de la myopie.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Prévention */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Prévention de la myopie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Passer du temps à l'extérieur", text: "Les études montrent que les enfants qui passent plus de 14 heures par semaine en extérieur ont un risque de myopie réduit de 23 %. L'exposition à la lumière naturelle protège les yeux." },
                  { title: "Réduire le temps d'écran", text: "L'utilisation prolongée d'écrans fatigue les yeux et augmente le risque de myopie. Des pauses régulières et un éclairage adapté sont recommandés." },
                  { title: "Alimentation saine", text: "Les vitamines A, C, E et les oméga-3 contribuent à maintenir une bonne santé oculaire et à prévenir certaines complications." },
                  { title: "Examens de la vue réguliers", text: "Un dépistage précoce permet de corriger la myopie rapidement et de prévenir d'éventuelles complications comme la dégénérescence maculaire ou le glaucome." },
                ].map((item, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Mieux comprendre votre vision
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Si vous êtes concerné par la myopie et souhaitez optimiser votre confort visuel au quotidien, un bilan basse vision peut vous aider à identifier les meilleures solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bilans-bassevision">Découvrir nos bilans <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/maladies-yeux">Toutes les maladies des yeux <ArrowRight className="w-5 h-5" /></Link>
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

export default Myopie;
