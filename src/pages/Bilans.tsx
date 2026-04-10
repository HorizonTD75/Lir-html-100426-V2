import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, ArrowRight, Check, X, Users, Calendar, Eye, Star, Phone, Glasses, Home, Video } from "lucide-react";
import { Link } from "react-router-dom";
import bilanHeroImage from "@/assets/bilan-hero-600-2.jpg";
import bilanDomicileImage from "@/assets/bilan-domicile.jpg";

const Bilans = () => {
  const bilansComparison = [
  {
    name: "ESSENTIEL",
    icon: ClipboardCheck,
    description: "La formule de base pour faire le point sur votre basse vision.",
    includes: [
    "Séance individuelle 1h15–1h30",
    "Évaluation vision fonctionnelle",
    "Essais d'aides adaptées",
    "Compte-rendu synthétique",
    "Plan d'action clair"],

    notIncludes: [
    "Consultation opticien",
    "Suivi sur plusieurs mois"],

    color: "primary",
    link: "/bilans-bassevision/essentiel",
    cta: "Découvrir le Bilan Essentiel"
  },
  {
    name: "EXPERT",
    icon: Glasses,
    description: "Bilan Essentiel + consultation opticien-optométriste ",
    includes: [
    "Bilan Essentiel complet",
    "Compte-rendu détaillé",
    "Consultation opticien partenaire",
    "Essais lunettes basse vision",
    "Pré-sélection corrections",
    "Coordination médicale"],

    notIncludes: [
    "Suivi sur plusieurs mois"],

    color: "secondary",
    link: "/bilans-bassevision/expert",
    cta: "Découvrir le Bilan Expert",
    recommended: true
  },
  {
    name: "SUIVI",
    icon: Video,
    description: "Un accompagnement sur 3 mois pour mettre en pratique les conseils.",
    includes: [
    "Bilan Essentiel (J0)",
    "1er point d'étape , appel/visio à J+1 mois",
    "2e point d'étape, appel/visio à J+2 mois",
    "Bilan final à J+3 mois",
    "Rapport final complet",
    "Ajustements continus"],

    notIncludes: [],
    color: "accent",
    link: "/bilans-bassevision/suivi",
    cta: "Découvrir le Pack Suivi"
  }];


  const targetAudience = [
  "Vous avez une maladie des yeux connue (DMLA, glaucome, rétinopathie diabétique, etc.)",
  "Malgré des lunettes récentes, vous peinez à lire, à vous déplacer ou à reconnaître les visages",
  "Vous vous sentez fatigué par l'effort visuel au quotidien",
  "Vous avez dû renoncer à certaines activités (lecture, bricolage, cuisine, sorties)",
  "Vous êtes aidant et souhaitez comprendre comment aider au mieux"];


  const doList = [
  "Il ecoute vos difficultés (lecture, déplacements, écrans, maison, loisirs)",
  "Il analyse l'impact de la basse vision sur votre autonomie",
  "Il evaluer votre vision fonctionnelle dans des situations concrètes",
  "Il vous fait tester des aides à la lecture : loupes, éclairage, supports",
  "Il identifier vos priorités : ce qui compte le plus pour vous"];


  const dontList = [
  "Pas de diagnostic médical ni de prescription de traitement",
  "Pas de remplacement du suivi chez l'ophtalmologiste",
  "Pas de promesse de « retrouver sa vue d'avant »",
  "Pas de vente forcée : le Visiopraticien réfléchit avec vous"];


  const steps = [
  { title: "Avant le bilan", text: "Lors de la prise de rendez-vous, le Visiopraticien fait un premier point sur votre situation et vous indique ce qu'il est utile d'apporter." },
  { title: "Accueil et entretien", text: "Le Visiopraticien LirElia échange avec vous sur votre accuité visuelle, vos activités importantes et ce qui vous pose le plus problème aujourd'hui." },
  { title: "Évaluation de la vision fonctionnelle", text: "Le Visiopraticien observe comment vous utilisez votre vue dans des tâches simples : lecture, repérage, contrastes…" },
  { title: "Mises en situation concrètes", text: "Selon vos besoins, des situations du quotidien sont simulées pour mieux cerner vos difficultés." },
  { title: "Essai d'aides et d'aménagements", text: "Vous testez différentes aides : loupes, télé-agrandisseurs, lampes, supports, macines à lire, claviers, téléphones grosses touches, aides pour écrire…" },
  { title: "Plan d'action personnalisé", text: "En fin de séance, le Visiopraticien récapitule les priorités, les aides à envisager et les étapes suivantes." }];


  const takeaways = [
  "Un compte-rendu précis des points importants vus ensemble",
  "Une liste de priorités : ce qu'il est le plus urgent d'améliorer",
  "Une proposition d'aides standard : loupes, lampes, supports…",
  "Des conseils d'organisation pour la maison, la cuisine, les écrans",
  "Si besoin, une recommandation vers l'opticien partenaire",
  "La possibilité de mettre en place un Pack Suivi"];


  const faqItems = [
  { q: "Dois-je voir mon ophtalmo avant ?", a: "Idéalement oui, car le bilan basse vision s'appuie sur votre diagnostic. Mais si vous n'avez pas de rendez-vous ophtalmo récent, nous pouvons commencer et vous orienter ensuite." },
  { q: "Est-ce remboursé ?", a: "Le bilan basse vision n'est pas un acte médical et n'est pas remboursé par la Sécurité sociale. Certaines mutuelles proposent un forfait « bien-être » ou « prévention » qui peut couvrir une partie. Renseignez-vous auprès de votre complémentaire santé." },
  { q: "Puis-je venir avec un proche ?", a: "Oui, c'est fortement recommandé. L'aidant (conjoint, enfant, proche) peut assister à l'ensemble de la séance et recevoir des conseils adaptés." },
  { q: "Combien de temps dure une séance ?", a: "En moyenne 1h15 à 1h30, toujours à votre rythme. Le Visiopraticien prend le temps nécessaire." },
  { q: "Quelle est la différence avec un bilan chez l'ophtalmologiste ?", a: "L'ophtalmologiste diagnostique et traite la maladie de l'œil. Le bilan basse vision réalisé par le Visiopraticien LirElia est un état des lieux fonctionnel : il se concentre sur votre quotidien et votre autonomie dans la lecture." }];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bilans Basse Vision à Paris : Essentiel, Expert, Suivi"
        description="Faites le point sur votre vue avec un bilan personnalisé. Test d'aides à la lecture, plan d'action concret. Dès 75 €, à Paris ou à domicile."
        canonicalPath="/bilans-bassevision"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bilans Basse Vision LirElia",
            "description": "Bilans fonctionnels personnalisés pour personnes malvoyantes : Essentiel, Expert et Suivi sur 3 mois.",
            "provider": { "@type": "Organization", "name": "LirElia" },
            "serviceType": "Bilan basse vision"
          },
          buildBreadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Bilans basse vision", path: "/bilans-bassevision" },
          ]),
        ]} />
      
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={bilanHeroImage} alt="Séance de bilan basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8">
                <ClipboardCheck className="w-5 h-5" />
                <span className="text-lg font-semibold">Un état des lieux fonctionnel, pas un diagnostic</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Bilan <span className="text-secondary">Basse Vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                Le bilan basse vision est un temps dédié pour faire le point sur votre vue, vos difficultés dans la vie quotidienne et les solutions possibles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan">
                    <Calendar className="w-6 h-6" />
                    Prendre rendez-vous
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#bilans-comparaison">
                    Découvrir les bilans
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* À qui s'adresse le bilan */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  À qui s'adresse le bilan basse vision ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Il ne remplace pas le suivi chez l'ophtalmologiste, mais il complète ce suivi en se concentrant sur votre quotidien et votre autonomie.
                </p>
                <ul className="space-y-4">
                  {targetAudience.map((item, i) =>
                  <li key={i} className="flex items-start gap-3 text-lg">
                      <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="relative overflow-hidden">
                <img src={bilanDomicileImage} alt="Visite à domicile pour un bilan basse vision" className="w-full rounded-2xl shadow-card" />
              </div>
            </div>
          </div>
        </section>

        {/* Ce que nous faisons / ne faisons pas */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Que fait le <Link to="/visiopraticien" className="text-primary underline underline-offset-4 hover:text-primary/80">Visiopraticien</Link> pendant le bilan?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    Ce que fait le Visiopraticien
                  </h3>
                  <ul className="space-y-4">
                    {doList.map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-lg">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </Card>
                <Card className="p-4 sm:p-6 lg:p-8 border-destructive/30">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                      <X className="w-6 h-6" />
                    </div>
                    Ce que le Visiopraticien ne fait pas
                  </h3>
                  <ul className="space-y-4">
                    {dontList.map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-lg">
                        <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison des bilans */}
        <section className="py-20 bg-background" id="bilans-comparaison">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Les différents bilans proposés
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choisissez la formule qui correspond le mieux à votre situation. La participation de votre aidant est fortement recommandée.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {bilansComparison.map((bilan) =>
              <Card key={bilan.name} variant={bilan.recommended ? "highlighted" : "elevated"} className="relative flex flex-col">
                  {bilan.recommended &&
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-base font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" /> Recommandé
                    </div>
                }
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  bilan.color === "primary" ? "bg-primary text-primary-foreground" :
                  bilan.color === "secondary" ? "bg-secondary text-secondary-foreground" :
                  "bg-accent text-accent-foreground"}`
                  }>
                      <bilan.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl text-center">Bilan<br />{bilan.name}</CardTitle>
                    <p className="text-lg text-muted-foreground mt-2">{bilan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {bilan.includes.map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-lg">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                    )}
                      {bilan.notIncludes.map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-lg text-muted-foreground">
                          <X className="w-5 h-5 shrink-0 mt-1 text-red-600" />
                          <span>{item}</span>
                        </li>
                    )}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant={bilan.recommended ? "secondary" : "default"} className="w-full" asChild>
                      <Link to={bilan.link}>
                        {bilan.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Déroulement d'une séance */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Comment se déroule une séance ?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Une séance dure en moyenne 1h30, toujours à votre rythme.
              </p>
              <div className="space-y-6">
                {steps.map((step, i) =>
                <Card key={i} variant="elevated" className="p-4 sm:p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xl font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-lg text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Opticien partenaire */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Travailler ensemble avec l'opticien-optométriste partenaire
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="p-4 sm:p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Le rôle du <Link to="/visiopraticien" className="text-primary underline underline-offset-4 hover:text-primary/80">Visiopraticien</Link></h3>
                  <ul className="space-y-3">
                    {[
                    "Identifier vos besoins fonctionnels",
                    "Tester des aides standard et aménagements simples",
                    "Repérer les situations où des lunettes spécifiques aideraient",
                    "Remettre un compte-rendu clair pour l'opticien"].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-lg">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </Card>
                <Card className="p-4 sm:p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mb-4">
                    <Glasses className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Le rôle de l'opticien</h3>
                  <ul className="space-y-3">
                    {[
                    "Évaluation optique détaillée (correction, verres, filtres)",
                    "Lunettes adaptées à vos usages : lecture, TV, sport…",
                    "Aides optiques spécialisées",
                    "Suivi pour ajuster les équipements"].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-lg">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que vous emportez */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Ce que vous emportez après le bilan
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {takeaways.map((item, i) =>
                <Card key={i} variant="elevated" className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {i + 1}
                    </div>
                    <p className="text-lg">{item}</p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background" id="faq-bilans">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Questions fréquentes
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, i) =>
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border-2 border-border rounded-2xl px-6">
                    <AccordionTrigger className="text-lg font-semibold text-left py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Prêt à faire le point sur votre vue ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Contactez notre <Link to="/visiopraticien" className="underline underline-offset-4 hover:text-primary-foreground/80">Visiopraticien</Link> pour choisir le bilan adapté à votre situation de basse vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan">
                    <Calendar className="w-6 h-6" />
                    Prendre rendez-vous
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:0768474235">
                    <Phone className="w-5 h-5" />
                    07 68 47 42 35
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Bilans;