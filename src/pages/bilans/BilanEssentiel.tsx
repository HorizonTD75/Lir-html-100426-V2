import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, ArrowRight, Check, Calendar, Phone, Home, Building, Users, FileText, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import bilanHeroImage from "@/assets/bilan-hero-600-2.jpg";
import bilanDomicileImage from "@/assets/bilan-domicile.jpg";

const BilanEssentiel = () => {
  const targetAudience = [
  "Vous avez une pathologie oculaire connue (DMLA, glaucome, rétinopathie diabétique…) et votre vue reste gênante au quotidien",
  "Vos lunettes sont à jour, mais vous peinez à lire, voir la télévision ou vous déplacer",
  "Vous avez dû réduire ou arrêter certaines activités à cause de votre vision",
  "Vous êtes aidant et souhaitez comprendre comment adapter la maison et les habitudes",
  "Vous souhaitez avant tout des solutions simples et concrètes"];


  const includes = [
  { icon: Users, title: "Entretien sur vos besoins et objectifs", text: "Nous discutons de vos activités importantes et de ce qui vous pose le plus problème." },
  { icon: ClipboardCheck, title: "Évaluation de la vision fonctionnelle", text: "Tests de lecture, repérage, contrastes, gestion de la lumière." },
  { icon: Lightbulb, title: "Essai d'aides pour mieux voir", text: "Vous testez loupes, lampes, supports, repères visuels." },
  { icon: FileText, title: "Conseils d'organisation et priorités", text: "Un plan d'action clair et un compte-rendu synthétique." }];


  const cabinetSteps = [
  "Accueil et installation : nous revoyons votre situation, comptes-rendus et lunettes actuelles",
  "Entretien détaillé : difficultés, ce qui vous manque aujourd'hui",
  "Évaluation et mises en situation : tests de lecture, observation, gestion de la lumière",
  "Essais d'aides standard et conseils personnalisés",
  "Conclusion et plan d'action : priorités, aides à envisager, étapes suivantes"];


  const domicileAdvantages = [
  "Observer vos conditions réelles d'éclairage (salon, cuisine, chambre, couloirs)",
  "Repérer les difficultés concrètes (escaliers, seuils, tapis, repères sur les appareils)",
  "Proposer des aménagements simples sur place",
  "Impliquer directement votre aidant et votre entourage"];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bilan Essentiel basse vision | LirElia"
        description="Le Bilan Essentiel est la formule de base pour comprendre vos difficultés visuelles, tester des solutions simples et repartir avec un plan d'action clair."
        canonicalPath="/bilans-bassevision/essentiel" />
      
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={bilanHeroImage} alt="Séance de bilan basse vision en cabinet" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <Link to="/bilans-bassevision" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-lg">
                ← Retour aux bilans
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Bilan <span className="text-secondary">Essentiel</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                La formule de base pour faire le point sur votre basse vision : comprendre ce qui vous gêne le plus, tester des solutions simples et repartir avec un plan d'action clair.
              </p>
              <p className="text-lg text-primary-foreground/70 italic mb-8">
                En cabinet à Paris ou à domicile. Vous pouvez venir accompagné d'un proche.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/rdv-bilan?type=essentiel">
                  <Calendar className="w-6 h-6" />
                  Réserver un bilan Essentiel
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Bandeau visites à domicile */}
        <section className="py-8 bg-secondary/10 border-b-2 border-secondary/20">
          <div className="container">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                <Home className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">Ce bilan peut aussi être réalisé à domicile</h3>
                <p className="text-lg text-muted-foreground">Pour les personnes ayant des difficultés de déplacement, le Visiopraticien LirElia se rend chez vous. Le bilan est adapté à votre environnement réel.</p>
              </div>
              <Button variant="secondary" size="default" asChild className="shrink-0">
                <Link to="/bilans-bassevision/visites-domicile">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* À qui s'adresse */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                À qui s'adresse le Bilan Essentiel ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">Cette formule est particulièrement adaptée si :</p>
              <ul className="space-y-4">
                {targetAudience.map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-lg">
                    <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
              <Card variant="highlighted" className="mt-8 p-6">
                <p className="text-lg">
                  Si, dès le départ, vous savez que des lunettes spécialisées seront nécessaires, le{" "}
                  <Link to="/bilans-bassevision/expert" className="text-primary font-bold underline underline-offset-4">Bilan Expert</Link>{" "}
                  sera peut-être plus adapté.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Ce que comprend le bilan */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Ce que comprend le Bilan Essentiel
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {includes.map((item, i) =>
                <Card key={i} variant="elevated" className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-lg text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
              <p className="text-lg text-muted-foreground mt-8 text-center">
                À l'issue du Bilan Essentiel, vous recevez un compte-rendu synthétique avec les points clés et les priorités, que vous pouvez partager avec votre ophtalmologiste, votre opticien et vos proches.
              </p>
            </div>
          </div>
        </section>

        {/* Déroulement : Cabinet vs Domicile */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Comment se déroule le Bilan Essentiel ?
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card variant="elevated" className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                      <Building className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">En cabinet  </h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Séance de 1h15 à 1h30 dans un environnement calme, avec du matériel dédié à la basse vision.
                  </p>
                  <ol className="space-y-3">
                    {cabinetSteps.map((step, i) =>
                    <li key={i} className="flex items-start gap-3 text-lg">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    )}
                  </ol>
                </Card>

                <Card variant="elevated" className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">À domicile</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Pour les personnes qui ne peuvent pas se déplacer : fatigue, mobilité réduite, appréhension des transports…
                  </p>
                  <p className="text-lg font-semibold mb-4">Le bilan à domicile permet de :</p>
                  <ul className="space-y-3">
                    {domicileAdvantages.map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-lg">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                  <img src={bilanDomicileImage} alt="Visite à domicile" className="w-full rounded-xl mt-6" />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* L'aidant */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      La place de l'aidant pendant le Bilan Essentiel
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      L'aidant (conjoint, enfant, proche) a une place importante. Très souvent, c'est lui qui organise les rendez-vous, lit les informations et aide à mettre en place les changements.
                    </p>
                    <ul className="space-y-3">
                      {[
                      "Il peut assister à l'ensemble de la séance",
                      "Il peut exprimer ses propres difficultés",
                      "Il reçoit des explications simples sur la basse vision",
                      "Il repart avec des repères concrets pour aider au quotidien"].
                      map((item, i) =>
                      <li key={i} className="flex items-start gap-2 text-lg">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Tarifs & modalités pratiques
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card variant="elevated" className="p-8 text-center">
                  <Building className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-3">Bilan Essentiel en cabinet</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    1h15 à 1h30 dans un environnement calme avec matériel dédié. Entretien, évaluation, essais d'aides et compte-rendu synthétique.
                  </p>
                  <p className="text-base text-muted-foreground italic">
                    Tarif indiqué lors de la prise de rendez-vous.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8 text-center">
                  <Home className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-3">Bilan Essentiel à domicile</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Durée comparable. Observation de votre environnement réel, conseils d'aménagement immédiats et recommandations spécifiques.
                  </p>
                  <p className="text-base text-muted-foreground italic">
                    Tarif incluant le déplacement, précisé lors du premier contact.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Et si besoin de plus */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Et si vous avez besoin de plus ?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-8">
                Le Bilan Essentiel constitue souvent une première étape. Selon vos besoins, nous pouvons envisager :
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <Card variant="elevated" className="p-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Pack Bilan Expert</h3>
                  <p className="text-muted-foreground mb-4">Consultation coordonnée chez l'opticien-optométriste partenaire.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/expert">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
                <Card variant="elevated" className="p-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Pack Suivi</h3>
                  <p className="text-muted-foreground mb-4">Accompagnement régulier par appels, visios et visites.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/suivi">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
                <Card variant="elevated" className="p-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Club Basse Vision</h3>
                  <p className="text-muted-foreground mb-4">Rencontres et ateliers pour échanger avec d'autres personnes.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/club">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Réserver un Bilan Essentiel
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10">
                En cabinet à Paris ou à domicile. Contactez-nous pour choisir la formule adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan?type=essentiel"><Calendar className="w-6 h-6" /> Prendre rendez-vous</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:0768474235"><Phone className="w-5 h-5" /> 07 68 47 42 35</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default BilanEssentiel;