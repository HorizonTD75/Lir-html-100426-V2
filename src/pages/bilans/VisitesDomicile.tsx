import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Check, Phone, Calendar, ArrowRight, Users, MapPin, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import bilanDomicileImage from "@/assets/bilan-domicile.jpg";

const VisitesDomicile = () => {
  const situations = [
    "Vous vous déplacez avec difficulté ou souffrez de fatigue importante",
    "Vous ne conduisez plus ou préférez éviter les transports",
    "Vous vous fatiguez rapidement lors des déplacements",
    "Vous préférez être accompagné(e) dans un cadre rassurant et familier",
  ];

  const bilanDomicileAdvantages = [
    {
      icon: Lightbulb,
      title: "Analyser votre environnement quotidien",
      text: "Éclairage de vos pièces, agencement du mobilier, habitudes de lecture… le spécialiste observe directement vos conditions réelles.",
    },
    {
      icon: MapPin,
      title: "Repérer les obstacles concrets",
      text: "Difficultés avec le courrier, les écrans, les emballages, les escaliers, les seuils ou les appareils du quotidien.",
    },
    {
      icon: Home,
      title: "Proposer des améliorations immédiates",
      text: "Conseils d'aménagement concrets et directement applicables dans votre environnement.",
    },
    {
      icon: Users,
      title: "Impliquer votre entourage",
      text: "L'aidant, le conjoint ou l'auxiliaire de vie peut participer activement à la recherche de solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bilan Basse Vision à Domicile | LirElia"
        description="Votre visiopraticien se déplace chez vous pour réaliser votre bilan basse vision. Idéal si vous avez des difficultés de déplacement."
        canonicalPath="/bilans-bassevision/visites-domicile"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bilan basse vision à domicile – LirElia",
          "description": "Visite à domicile du Visiopraticien LirElia pour réaliser un bilan basse vision dans l'environnement quotidien du patient.",
          "provider": { "@type": "Organization", "name": "LirElia" },
          "serviceType": "Bilan basse vision à domicile",
        }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={bilanDomicileImage} alt="Visite à domicile pour un bilan basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <Link to="/bilans-bassevision" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-lg">
                ← Retour aux bilans
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Visites à domicile : le bilan basse vision dans votre environnement
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                Parce qu'il n'est pas toujours simple de se déplacer, LirElia propose des visites à domicile pour réaliser le bilan basse vision dans le confort de votre cadre de vie.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/rdv-bilan">
                  <Calendar className="w-6 h-6" />
                  Demander une visite à domicile
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

        {/* Pour qui */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une solution conçue pour le patient et ses proches
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                La visite à domicile est pensée pour les personnes qui rencontrent des difficultés, ponctuelles ou durables, pour se rendre au cabinet. Elle facilite l'accès aux services de LirElia, en tenant compte du rythme du patient, de sa fatigue ou de ses contraintes de déplacement.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Les visites à domicile sont particulièrement adaptées lorsque le patient :
              </p>
              <ul className="space-y-4">
                {situations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Card variant="highlighted" className="mt-8 p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-secondary shrink-0 mt-1" />
                  <p className="text-lg">
                    Ce service est également une source de sérénité pour les <strong>aidants</strong> (conjoint, enfants, auxiliaire de vie). Recevoir le spécialiste LirElia à domicile permet de mieux comprendre les défis du quotidien et de participer activement à la recherche de solutions.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pourquoi un bilan à domicile */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Pourquoi réaliser un bilan à domicile ?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Un bilan effectué sur votre lieu de vie offre une perspective unique et concrète sur vos habitudes et vos besoins réels. Il permet au spécialiste LirElia de :
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {bilanDomicileAdvantages.map((item, i) => (
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
                ))}
              </div>
              <p className="text-lg text-muted-foreground mt-8 text-center max-w-3xl mx-auto">
                Cette approche personnalisée est souvent très éclairante, car elle connecte directement les conseils du Visiopraticien à des situations que vous vivez chaque jour.
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Domicile ou cabinet : quels avantages ?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
                L'intervention à domicile plonge le spécialiste dans la réalité de votre quotidien. C'est le moyen le plus efficace pour comprendre ce qui vous gêne réellement et vous apporter des conseils ciblés.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card variant="elevated" className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Visite à domicile</h3>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-3">Principal avantage :</p>
                  <p className="text-lg text-muted-foreground">
                    Analyse directe de votre lieu de vie et de vos usages réels : éclairage, mobilier, habitudes de lecture, obstacles quotidiens.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Rendez-vous au cabinet</h3>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-3">Principal avantage :</p>
                  <p className="text-lg text-muted-foreground">
                    Accès à un choix plus large d'équipements et d'essais d'aides visuelles dans un environnement dédié.
                  </p>
                </Card>
              </div>
              <p className="text-lg text-muted-foreground mt-8 text-center">
                Selon votre situation, l'une ou l'autre formule peut être plus pertinente. Parfois, elles sont même complémentaires.
              </p>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Tarifs des visites à domicile
              </h2>
              <Card variant="elevated" className="p-8">
                <p className="text-lg text-foreground mb-4">
                  Un supplément tarifaire est appliqué pour les visites à domicile, en plus du coût du bilan choisi. Ce montant est basé sur une grille claire, calculée par tranches de distance et de temps de trajet depuis Paris, pour garantir une totale transparence.
                </p>
                <p className="text-lg text-muted-foreground italic">
                  La grille tarifaire vous sera communiquée sur simple demande lors du premier contact.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Bilans compatibles */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quel bilan choisir pour une visite à domicile ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Les trois formules de bilan sont accessibles à domicile. Choisissez celle qui correspond le mieux à votre situation :
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Bilan Essentiel</h3>
                  <p className="text-muted-foreground mb-4">Faire le point, tester des aides simples, obtenir un plan d'action.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/essentiel">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Bilan Expert</h3>
                  <p className="text-muted-foreground mb-4">Optimiser vos lunettes avec un opticien partenaire.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/expert">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Pack Suivi</h3>
                  <p className="text-muted-foreground mb-4">Un accompagnement sur 3 mois avec visites et appels.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/suivi">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
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
                Demander une visite à domicile
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10">
                Chaque situation est unique. Pour savoir si la visite à domicile est la meilleure solution pour vous ou votre proche, le plus simple est d'en discuter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan"><Calendar className="w-6 h-6" /> Prendre rendez-vous</Link>
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

export default VisitesDomicile;
