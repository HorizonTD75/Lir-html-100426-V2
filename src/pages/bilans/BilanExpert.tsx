import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Glasses, ArrowRight, Check, Calendar, Phone, Building, Users, FileText, Eye, Star, Home } from "lucide-react";
import { Link } from "react-router-dom";
import bilanHeroImage from "@/assets/bilan-hero-600-2.jpg";
import bilanExpertImage from "@/assets/bilan-expert-opticien-600.jpg";

const BilanExpert = () => {
  const targetAudience = [
    "Vous présentez une basse vision importante (DMLA, glaucome, rétinopathie diabétique…)",
    "Vous avez déjà essayé plusieurs paires de lunettes sans trouver de solution satisfaisante",
    "Vous avez besoin de lunettes très spécifiques : lecture rapprochée, TV, musique, ordinateur…",
    "Vous êtes sportif (golf, ski, natation, randonnée…) et souhaitez des lunettes adaptées",
    "Votre ophtalmologiste ou opticien vous a conseillé de consulter un spécialiste basse vision",
  ];

  const expertIncludes = [
    { num: "1", title: "Bilan Essentiel complet", text: "Analyse de vos difficultés, évaluation de la vision fonctionnelle, essais d'aides standard, définition des priorités." },
    { num: "2", title: "Compte-rendu détaillé", text: "Rédigé pour vous, votre ophtalmologiste et l'opticien-optométriste : contexte, besoins visuels, pistes de correction." },
    { num: "3", title: "Consultation chez l'opticien-optométriste", text: "Consultation optométrique spécialisée (~1h) avec essais de lunettes basse vision, filtrantes et équipements sport." },
    { num: "4", title: "Pré-sélection d'aides et de corrections", text: "Lunettes de lecture forte, loupe-lunettes, verres spécifiques TV/ordinateur, filtres adaptés…" },
  ];

  const opticienRole = [
    "Un bilan optométrique détaillé (mesure précise de la correction, tests de puissances…)",
    "Des essais de lunettes basse vision : loupe-lunettes, lunettes de lecture forte, lunettes pour TV/ordinateur",
    "Des essais de lunettes filtrantes et verres teintés pour limiter l'éblouissement",
    "Si besoin, des montages spécifiques pour le sport : golf, ski, natation, randonnée…",
  ];

  const compteRenduContent = [
    "Le contexte médical (diagnostic, traitements, éléments du suivi ophtalmologique)",
    "Vos activités prioritaires et vos besoins visuels",
    "Les résultats principaux du Bilan Essentiel",
    "Une pré-sélection de corrections et d'aides optiques à tester",
    "Des pistes d'adaptation à discuter avec votre ophtalmologiste",
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bilan Expert basse vision — Avec opticien | LirElia"
        description="Le Pack Bilan Expert combine bilan basse vision et consultation opticien-optométriste partenaire pour optimiser vos lunettes et aides optiques."
        canonicalPath="/bilans-bassevision/expert"
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={bilanHeroImage} alt="Bilan expert basse vision" className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <Link to="/bilans-bassevision" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-lg">
                ← Retour aux bilans
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 ml-4">
                <Star className="w-4 h-4" /> Formule recommandée
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Bilan <span className="text-secondary">Expert</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                Pour aller au bout de l'optimisation des lunettes et aides optiques, en collaboration avec un opticien-optométriste partenaire reconnu au niveau national.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/rdv-bilan?type=expert"><Calendar className="w-6 h-6" /> Réserver un bilan Expert</Link>
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
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">Première étape réalisable à domicile</h3>
                <p className="text-lg text-muted-foreground">Le Bilan Essentiel (étape 1 du parcours Expert) peut être effectué chez vous si le déplacement est difficile.</p>
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
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  À qui s'adresse le Bilan Expert ?
                </h2>
                <p className="text-xl text-muted-foreground mb-6">Il est particulièrement indiqué si :</p>
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
                <img src={bilanExpertImage} alt="Consultation opticien-optométriste spécialisé" className="w-full rounded-2xl shadow-card" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Ce que comprend */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Ce que comprend le Bilan Expert
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {expertIncludes.map((item, i) => (
                  <Card key={i} variant="elevated" className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xl font-bold">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-lg text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Déroulement */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Déroulement du parcours
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card variant="elevated" className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                      <Building className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Étape 1 : Bilan Essentiel</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    En cabinet (1h–1h30) ou à domicile : entretien, évaluation de la vision fonctionnelle, essais d'aides standard, définition des priorités.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Puis nous préparons un compte-rendu détaillé et une pré-sélection de corrections pour l'opticien.
                  </p>
                </Card>
                <Card variant="highlighted" className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Glasses className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Étape 2 : Chez l'opticien</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Consultation optométrique spécialisée (~1h) chez l'opticien partenaire à Antony (nationale 20), reconnu au niveau national.
                  </p>
                  <p className="text-lg font-semibold mb-3">Ce qu'il réalise :</p>
                  <ul className="space-y-2">
                    {opticienRole.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Compte-rendu */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Compte-rendu détaillé et coordination médicale
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Le Pack Bilan Expert prévoit un compte-rendu plus détaillé, rédigé dans un langage clair mais aussi pensé pour votre ophtalmologiste et l'opticien-optométriste.
                    </p>
                    <ul className="space-y-3">
                      {compteRenduContent.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-lg">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tarifs & modalités pratiques
              </h2>
              <Card variant="elevated" className="p-8 text-left">
                <h3 className="font-serif text-xl font-bold mb-4">Le Pack comprend :</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Le Bilan Essentiel (en cabinet ou à domicile)",
                    "La consultation optométrique spécialisée chez l'opticien partenaire",
                    "La rédaction du compte-rendu détaillé et la coordination",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground italic">
                  Les équipements optiques (lunettes, filtres, montures) sont facturés séparément par l'opticien. L'ensemble est proposé dans un forfait unique.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Et si besoin de plus */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Et si vous avez besoin de plus ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Après la mise en place de vos nouvelles lunettes, vous pouvez bénéficier d'un accompagnement dans la durée.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Pack Suivi</h3>
                  <p className="text-muted-foreground mb-4">Accompagnement régulier sur plusieurs mois.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bilans-bassevision/suivi">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </Card>
                <Card variant="elevated" className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">Club Basse Vision</h3>
                  <p className="text-muted-foreground mb-4">Rencontres et ateliers collectifs.</p>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Réserver un Bilan Expert</h2>
              <p className="text-xl text-primary-foreground/90 mb-10">
                Bilan complet + consultation opticien partenaire. Un parcours coordonné pour optimiser votre vue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/rdv-bilan?type=expert"><Calendar className="w-6 h-6" /> Prendre rendez-vous</Link>
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

export default BilanExpert;
