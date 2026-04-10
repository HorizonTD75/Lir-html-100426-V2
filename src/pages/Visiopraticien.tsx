import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Eye,
  ArrowRight,
  Check,
  X,
  Calendar,
  Users,
  MapPin,
  BookOpen,
  Lightbulb,
  Heart,
  Home,
  HelpCircle } from
"lucide-react";
import { Link } from "react-router-dom";
import visiopraticienHeroImage from "@/assets/visiopraticien-hero.jpg";
import visiopraticienConsultationImage from "@/assets/visiopraticien-consultation-600.jpg";

const Visiopraticien = () => {
  const targetConditions = [
  "DMLA (Dégénérescence Maculaire Liée à l'Âge)",
  "Glaucome",
  "Rétinopathie diabétique",
  "Cataracte évoluée ou opérée avec séquelles visuelles",
  "Myopie forte pathologique",
  "Atteintes du champ visuel",
  "Séquelles d'AVC ou troubles neurologiques visuels",
  "Pathologies rétiniennes rares"];


  const whatWeDo = [
  "Évaluer la vision fonctionnelle restante dans des situations concrètes",
  "Identifier les difficultés réelles : lecture, écriture, écrans, déplacements",
  "Analyser l'impact émotionnel et psychologique de la perte visuelle",
  "Sélectionner les aides adaptées : loupes, télé-agrandisseurs, lunettes spécifiques, éclairage",
  "Mettre en place des stratégies pratiques d'autonomie dans la lecture et le quotidien",
  "Accompagner les aidants familiaux avec des conseils dédiés"];


  const expertise = [
  {
    icon: Eye,
    title: "Expertise technique",
    text: "25 ans d'expérience dans les aides visuelles pour malvoyants, avec une connaissance approfondie des dispositifs optiques et électroniques."
  },
  {
    icon: Heart,
    title: "Approche humaine",
    text: "Une compréhension fine des enjeux psychologiques liés à la basse vision, et une pédagogie issue de l'accompagnement au quotidien."
  },
  {
    icon: Users,
    title: "Collaboration avec l'opticien partenaire",
    text: "En cas de besoin d'équipement (lunettes adaptées, filtres spéciaux), un opticien-optométriste partenaire peut intervenir dans le parcours pour compléter l'accompagnement."
  },
  {
    icon: Lightbulb,
    title: "Solutions concrètes",
    text: "L'objectif n'est pas uniquement d'augmenter une image. L'objectif est de restaurer la capacité d'agir, de lire, de vivre mieux au quotidien."
  }];


  const notList = [
  "N'est pas médecin et ne pose pas de diagnostic médical",
  "Ne remplace pas l'ophtalmologiste ni l'orthoptiste",
  "Ne réalise pas d'acte médical ni de prescription de traitement",
  "Ne promet pas de « retrouver sa vue d'avant »"];


  const faqItems = [
  {
    q: "Qu'est-ce que la basse vision ?",
    a: "La basse vision désigne une baisse importante de la vue qui ne peut pas être entièrement corrigée par des lunettes classiques, des lentilles ou un traitement médical. Elle résulte souvent d'une DMLA, d'un glaucome ou d'autres pathologies oculaires."
  },
  {
    q: "Le Visiopraticien remplace-t-il un ophtalmologiste ?",
    a: "Non. Le suivi médical est indispensable pour diagnostiquer et traiter la pathologie (DMLA, glaucome, cataracte…). Le Visiopraticien LirElia intervient en complément, pour l'adaptation pratique du quotidien et l'autonomie dans la lecture."
  },
  {
    q: "DMLA : quelles solutions pour continuer à lire ?",
    a: "Dans de nombreux cas, la lecture reste possible avec une DMLA. Avec les bonnes aides — loupes adaptées, télé-agrandisseurs, éclairage optimisé, stratégies de lecture — le Visiopraticien LirElia aide à retrouver un confort de lecture."
  },
  {
    q: "À partir de quel moment consulter un Visiopraticien ?",
    a: "Dès que la vision ne permet plus de lire confortablement, d'utiliser un téléphone, de reconnaître des visages ou d'effectuer des tâches quotidiennes sans difficulté. Il n'est pas nécessaire d'attendre une perte totale de vision."
  },
  {
    q: "Quelles aides pour retrouver l'autonomie au quotidien ?",
    a: "Le Visiopraticien évalue votre situation et propose des solutions adaptées : loupes, lampes d'appoint, télé-agrandisseurs, aménagement de l'éclairage et de l'espace, méthodes de lecture adaptées, conseils numériques. L'objectif est de préserver au maximum votre indépendance."
  },
  {
    q: "Le Visiopraticien travaille-t-il avec les aidants ?",
    a: "Oui. Les proches jouent un rôle essentiel. Le bilan peut inclure des conseils spécifiques pour les aidants familiaux, afin qu'ils comprennent mieux la situation et sachent comment accompagner au quotidien."
  },
  {
    q: "Les aides visuelles sont-elles vraiment efficaces ?",
    a: "Oui, à condition qu'elles soient adaptées à la situation précise. Une loupe ou un appareil mal choisi peut être inefficace ou abandonné. L'objectif du bilan basse vision est justement d'éviter ces erreurs et de proposer des solutions réellement utiles."
  },
  {
    q: "La cataracte est-elle concernée ?",
    a: "Lorsque la cataracte est opérée et que des troubles visuels persistent, ou lorsqu'une chirurgie n'est pas possible immédiatement, un accompagnement en basse vision peut être utile pour améliorer le confort visuel."
  }];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Visiopraticien Basse Vision à Paris | LirElia"
        description="Vous n'arrivez plus à lire ? Le Visiopraticien LirElia évalue votre vision et vous aide à retrouver votre autonomie. Bilans à Paris et à domicile."
        canonicalPath="/visiopraticien"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Visiopraticien LirElia",
          "description": "Accompagnement basse vision pour mieux lire et gagner en autonomie. Bilans fonctionnels, aides visuelles, conseils personnalisés.",
          "provider": { "@type": "Organization", "name": "LirElia" },
          "serviceType": "Accompagnement basse vision"
        }} />
      
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={visiopraticienHeroImage} alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Visiopraticien Basse Vision : lire et vivre mieux
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                La perte de vision bouleverse bien plus que la capacité à lire. Le Visiopraticien LirElia accompagne les personnes malvoyantes — et leurs proches — vers des solutions concrètes et une autonomie retrouvée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan">
                    <Calendar className="w-6 h-6" />
                    Prendre rendez-vous
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir les bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Title - full width */}
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Pour qui ? Malvoyants, DMLA, glaucome et basse vision
              </h2>

              {/* Image + intro paragraph - balanced row */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-start mb-10">
                <div className="md:col-span-2 relative">
                  <img src={visiopraticienConsultationImage} alt="Visiopraticien en consultation avec une personne malvoyante autour d'une table avec livre, loupe, lunettes et tablette"
                  className="w-full rounded-2xl shadow-card" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10 hidden md:block" />
                </div>
                <div className="md:col-span-3">
                  <p className="text-xl text-muted-foreground mb-6">
                    Le Visiopraticien LirElia accompagne les personnes atteintes de différentes pathologies responsables de baisse de vision ou de malvoyance :
                  </p>
                  <ul className="space-y-3">
                    {targetConditions.map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-lg">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Remaining content */}
              <Card variant="muted" className="p-4 sm:p-6 lg:p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Que la cause soit une DMLA, un glaucome, une cataracte ou toute autre atteinte visuelle, l'objectif est le même : vous aider à retrouver du confort et de l'autonomie dans votre quotidien. Le Visiopraticien évalue votre situation concrète et propose des solutions personnalisées, adaptées à votre vision restante et à vos besoins réels.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Ce que fait le Visiopraticien */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que fait le Visiopraticien : évaluation, conseils et autonomie dans la lecture
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Un bilan avec le Visiopraticien LirElia permet d'identifier vos difficultés réelles et de trouver des solutions pour mieux voir au quotidien.
              </p>
              <Card className="p-4 sm:p-6 lg:p-8">
                <ul className="space-y-4">
                  {whatWeDo.map((item, i) =>
                  <li key={i} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  )}
                </ul>
                <p className="text-lg text-foreground font-semibold mt-8">
                  L'objectif n'est pas uniquement d'augmenter une image. L'objectif est de restaurer la capacité d'agir.
                </p>
              </Card>
              <div className="mt-8 text-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision">
                    <BookOpen className="w-5 h-5" />
                    Découvrir les aides à la lecture
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise technique et humaine */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Une expertise technique et humaine au service des malvoyants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {expertise.map((item, i) =>
                <Card key={i} variant="elevated" className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Ce que le Visiopraticien n'est pas */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-4 sm:p-6 lg:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-secondary shrink-0" />
                  Le Visiopraticien n'est pas…
                </h2>
                <ul className="space-y-4 mb-6">
                  {notList.map((item, i) =>
                  <li key={i} className="flex items-start gap-3 text-lg">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  )}
                </ul>
                <p className="text-lg text-foreground leading-relaxed">
                  Son intervention est <strong>complémentaire au parcours médical</strong>, centrée sur l'accompagnement, l'orientation et les solutions concrètes pour mieux vivre avec une basse vision. Le suivi médical traite la pathologie ; le Visiopraticien agit comme un pont entre le diagnostic et la vie réelle.
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/comprendre-basse-vision">
                      En savoir plus sur la basse vision
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Où se passent les rendez-vous */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Où se passent les rendez-vous ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card variant="elevated" className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        Cabinet à Palaiseau
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Un environnement calme et adapté pour le bilan basse vision et les essais d'aides visuelles.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Home className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        Interventions à domicile
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Selon votre secteur géographique, le Visiopraticien LirElia peut se déplacer à domicile pour réaliser le bilan dans votre environnement quotidien.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <p className="text-center text-lg text-muted-foreground mt-8">
                En cas de besoin d'équipement (lunettes adaptées, filtres), l'opticien-optométriste partenaire à Antony (92160) peut intervenir dans le parcours.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Questions fréquentes sur le Visiopraticien et la basse vision
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
                Perdre de la vision ne signifie pas perdre son indépendance
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Avec les bonnes aides et les bonnes stratégies, lire reste possible, garder confiance reste possible. Le Visiopraticien LirElia accompagne chaque personne malvoyante — et ses proches — vers une autonomie adaptée et durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan">
                    <Calendar className="w-6 h-6" />
                    Prendre rendez-vous
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir les bilans basse vision
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

export default Visiopraticien;