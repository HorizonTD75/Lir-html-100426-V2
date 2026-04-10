import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, ArrowRight, Check, Calendar, Phone, Users, FileText, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";
import bilanHeroImage from "@/assets/bilan-hero-600-2.jpg";
import bilanSuiviImage from "@/assets/bilan-suivi-visio-600.jpg";

const BilanSuivi = () => {
  const targetAudience = [
    "Vous avez réalisé ou prévoyez un Bilan Essentiel et vous craignez de ne pas réussir à appliquer seul les conseils",
    "Vous avez besoin d'un temps d'adaptation pour apprivoiser vos nouvelles aides",
    "Vous souhaitez pouvoir poser des questions au fur et à mesure et ajuster les solutions",
    "Vous ou votre aidant vous sentez plus rassurés avec un accompagnement régulier",
    "Vous vivez avec une pathologie évolutive et voulez garder des repères stables sur plusieurs mois",
  ];

  const timeline = [
    {
      date: "J0",
      title: "Bilan Essentiel",
      description: "Point complet sur vos difficultés, objectifs, capacités visuelles fonctionnelles, premiers essais d'aides et plan d'action initial.",
      details: [
        "Clarifier vos priorités (lecture, déplacements, cuisine, écrans, loisirs…)",
        "Évaluer votre vision fonctionnelle dans des tâches concrètes",
        "Tester des aides standard (loupes, éclairage, supports, repères)",
        "Définir un premier plan d'action simple à mettre en œuvre",
      ],
      color: "primary",
    },
    {
      date: "J0 + 1 mois",
      title: "1er appel / visio de suivi (30 min)",
      description: "Bilan du premier mois, retours sur les aides, ajustements des priorités.",
      details: [
        "Bilan de ce qui a été mis en place, ce qui fonctionne",
        "Repérage des freins (fatigue, manque de temps, matériel peu utilisé)",
        "Ajustement des priorités",
        "Recommandations complémentaires si besoin",
      ],
      color: "secondary",
    },
    {
      date: "J0 + 2 mois",
      title: "2e appel / visio de suivi (30 min)",
      description: "Point sur les progrès, difficultés persistantes, préparation du bilan final.",
      details: [
        "Évolutions depuis le premier appel",
        "Validation des aides réellement utiles",
        "Préparation du bilan final",
        "Coordination éventuelle avec ophtalmologiste ou opticien",
      ],
      color: "accent",
    },
    {
      date: "J0 + 3 mois",
      title: "Bilan final (cabinet ou domicile)",
      description: "Mesurer les avancées, traiter les problèmes encore présents et stabiliser votre plan d'adaptation.",
      details: [
        "Revue des progrès réalisés",
        "Identification des problèmes résiduels",
        "Validation des aides et aménagements à long terme",
        "Remise d'un rapport final complet",
      ],
      color: "primary",
    },
  ];

  const packIncludes = [
    "Un Bilan Essentiel (en cabinet ou à domicile selon votre situation)",
    "Deux appels ou visios de suivi de 30 minutes, à un mois d'intervalle",
    "Un bilan de fin de suivi en cabinet ou à domicile",
    "Des recommandations personnalisées mises à jour au fil du suivi",
    "Un rapport final à partager avec votre ophtalmologiste et vos proches",
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Pack Suivi basse vision — Accompagnement 3 mois | LirElia"
        description="Le Pack Suivi prolonge votre Bilan Essentiel sur 3 mois avec appels réguliers et bilan final pour ajuster les solutions au quotidien."
        canonicalPath="/bilans-bassevision/suivi"
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={bilanHeroImage} alt="Suivi basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <Link to="/bilans-bassevision" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-lg">
                ← Retour aux bilans
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Pack <span className="text-secondary">Suivi</span> Basse Vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                Un accompagnement sur 3 mois pour vous aider à mettre en pratique les conseils et ajuster les solutions au fil du temps, sans rester seul face à vos difficultés.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/rdv-bilan?type=suivi"><Calendar className="w-6 h-6" /> Réserver un Pack Suivi</Link>
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
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">Le suivi peut inclure des visites à domicile</h3>
                <p className="text-lg text-muted-foreground">Le bilan initial et le bilan final peuvent être réalisés chez vous si le déplacement est difficile.</p>
              </div>
              <Button variant="secondary" size="default" asChild className="shrink-0">
                <Link to="/bilans-bassevision/visites-domicile">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Pour qui est fait le Pack Suivi ?
                </h2>
                <p className="text-xl text-muted-foreground mb-6">Ce pack est particulièrement adapté si :</p>
                <ul className="space-y-4">
                  {targetAudience.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg">
                      <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src={bilanSuiviImage} alt="Suivi en visioconférence" className="w-full rounded-2xl shadow-card" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Vue d'ensemble de l'accompagnement
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Un parcours accompagné sur 3 mois, du bilan de départ au bilan final.
              </p>
              <div className="space-y-8">
                {timeline.map((step, i) => (
                  <Card key={i} variant="elevated" className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="shrink-0">
                        <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center ${
                          step.color === "primary" ? "bg-primary text-primary-foreground" :
                          step.color === "secondary" ? "bg-secondary text-secondary-foreground" :
                          "bg-accent text-accent-foreground"
                        }`}>
                          <Clock className="w-6 h-6" />
                          <span className="text-xs font-bold mt-1">{step.date}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-lg">
                              <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <div className="w-0.5 h-8 bg-border" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* L'aidant */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      La place de l'aidant pendant le suivi
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Dans ce Pack Suivi, l'aidant est clairement intégré au parcours :
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Il peut assister au Bilan Essentiel, aux appels/visios et au bilan final",
                        "Il peut exprimer ses difficultés à aider (organisation, sécurité, déplacements…)",
                        "Il reçoit des repères concrets pour soutenir la personne malvoyante",
                        "Le rapport final est rédigé de façon compréhensible pour le malade et l'aidant",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-lg">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-muted-foreground mt-4 font-semibold">
                      L'implication de l'aidant est souvent un facteur clé pour que les changements soient vraiment intégrés au quotidien.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Tarifs & organisation pratique
              </h2>
              <Card variant="elevated" className="p-8">
                <h3 className="font-serif text-xl font-bold mb-6">Ce que comprend le Pack Suivi :</h3>
                <ul className="space-y-3 mb-8">
                  {packIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg">
                      <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground italic">
                  Le tarif dépend du choix cabinet ou domicile et de votre lieu d'habitation. Le Pack Suivi peut généralement être réglé en une ou plusieurs fois. Détails précisés lors de la prise de contact.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Et après */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Et après le Pack Suivi ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                L'objectif est que vous ne restiez pas seul, mais que vous soyez acteur de votre adaptation.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Suivi ponctuel</h3>
                  <p className="text-muted-foreground">Rendez-vous à la demande, en cas de changement important.</p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Orientation spécialisée</h3>
                  <p className="text-muted-foreground">Centre spécialisé ou rééducation orthoptique basse vision si nécessaire.</p>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Club Basse Vision</h3>
                  <p className="text-muted-foreground mb-3">Échanges avec d'autres personnes malvoyantes et leurs aidants.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/club">Découvrir le Club <ArrowRight className="w-4 h-4" /></Link>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Réserver un Pack Suivi Basse Vision</h2>
              <p className="text-xl text-primary-foreground/90 mb-10">
                Un accompagnement sur 3 mois pour ne pas rester seul face aux changements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan?type=suivi"><Calendar className="w-6 h-6" /> Prendre rendez-vous</Link>
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
    </div>
  );
};

export default BilanSuivi;
