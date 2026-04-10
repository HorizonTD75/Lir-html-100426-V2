import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import maladiesHeroImage from "@/assets/maladies-yeux-hero-800.jpg";

const Astigmatisme = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="L'Astigmatisme – Causes, Symptômes et Traitements | LirElia"
        description="Tout savoir sur l'astigmatisme : courbure irrégulière de la cornée, vision floue ou dédoublée, fatigue oculaire. Causes, diagnostic et traitements."
        canonicalPath="/maladies-yeux/astigmatisme"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "L'Astigmatisme – Causes, symptômes et traitements",
          "about": { "@type": "MedicalCondition", "name": "Astigmatisme" },
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
              <li><span className="text-foreground font-semibold">L'Astigmatisme</span></li>
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
                L'Astigmatisme : tout savoir sur ce défaut de réfraction courant
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                L'astigmatisme touche environ un tiers de la population mondiale. Cette courbure irrégulière de la cornée ou du cristallin entraîne une vision floue ou déformée à toutes les distances.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">33 %</p>
                <p className="text-lg text-foreground">De la population mondiale</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">40 %</p>
                <p className="text-lg text-foreground">Des Français concernés</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">35 %</p>
                <p className="text-lg text-foreground">Des astigmates ont aussi une myopie</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">Tous âges</p>
                <p className="text-lg text-foreground">Peut apparaître dès la naissance</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qu'est-ce que l'astigmatisme ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                L'astigmatisme est un trouble de la réfraction caractérisé par une forme irrégulière de la cornée ou du cristallin. Au lieu d'être parfaitement ronde, la cornée présente une forme ovale, ce qui empêche la lumière de se concentrer en un seul point sur la rétine.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Le résultat est une vision floue ou déformée, aussi bien de près que de loin. L'astigmatisme est fréquemment associé à une <Link to="/maladies-yeux/myopie" className="text-primary underline hover:text-primary/80">myopie</Link> ou une <Link to="/maladies-yeux/hypermetropie" className="text-primary underline hover:text-primary/80">hypermétropie</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Causes de l'astigmatisme
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { title: "Prédisposition génétique", content: "L'astigmatisme est souvent héréditaire. Les enfants dont les parents présentent ce défaut ont une probabilité plus élevée d'en être atteints." },
                  { title: "Kératocône", content: "Cette maladie de la cornée provoque une déformation progressive en forme de cône. Environ 15 à 20 % des cas d'astigmatisme y sont liés." },
                  { title: "Blessures et cicatrices", content: "Les traumatismes oculaires et les cicatrices cornéennes peuvent altérer la forme de la cornée et entraîner un astigmatisme." },
                  { title: "Interventions chirurgicales", content: "Une chirurgie de la cataracte ou toute intervention sur la cornée peut modifier sa courbure et provoquer un astigmatisme secondaire." },
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
                Symptômes de l'astigmatisme
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Vision floue ou déformée", text: "La vision peut être floue aussi bien de près que de loin, avec une impression de distorsion des formes et des lignes." },
                  { title: "Vision dédoublée (diplopie)", text: "Une image peut être perçue comme deux images légèrement décalées, en raison de la focalisation sur plusieurs points de la rétine." },
                  { title: "Fatigue oculaire", text: "Les yeux se fatiguent rapidement lors de la lecture, du travail sur écran ou d'activités nécessitant une concentration visuelle prolongée." },
                  { title: "Difficulté à conduire la nuit", text: "Les phares des voitures peuvent apparaître éblouissants, avec des halos lumineux gênants, rendant la conduite nocturne plus difficile." },
                  { title: "Sensibilité à la lumière", text: "Certaines personnes astigmates sont plus sensibles à la lumière vive ou éblouissante." },
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
                Comment diagnostiquer l'astigmatisme ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Anamnèse", text: "Recueil des antécédents médicaux, familiaux et des symptômes visuels actuels." },
                  { title: "Mesure de l'acuité visuelle", text: "Lecture de lettres à différentes distances pour évaluer la qualité de la vision." },
                  { title: "Mesure de la réfraction", text: "Un phoroptère détermine la correction optique nécessaire pour compenser l'astigmatisme." },
                  { title: "Topographie cornéenne", text: "Évaluation de la forme et de la courbure de la cornée pour détecter les irrégularités." },
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
                Traitements de l'astigmatisme
              </h2>
              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lunettes à verres cylindriques</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les verres correcteurs cylindriques compensent la courbure irrégulière de la cornée. Ils peuvent corriger simultanément une myopie ou une hypermétropie associée.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lentilles de contact toriques</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Spécialement conçues pour l'astigmatisme, elles existent en version souple ou rigide, jetable ou réutilisable. Un suivi régulier est nécessaire pour prévenir les infections.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Chirurgie réfractive au laser</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Le LASIK ou le PRK remodèlent la cornée pour corriger l'astigmatisme de façon permanente. Cette option doit être discutée avec un ophtalmologiste, car elle présente certains risques.
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
                Prévention et conseils
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                L'astigmatisme étant souvent d'origine génétique, il n'existe pas de méthode de prévention spécifique. Toutefois, certaines mesures protègent les yeux :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Protéger ses yeux", text: "Portez des lunettes de soleil anti-UV et des lunettes de protection lors d'activités à risque (bricolage, sport)." },
                  { title: "Réduire la fatigue visuelle", text: "Faites des pauses régulières devant les écrans et utilisez un éclairage adapté pour le travail de près." },
                  { title: "Alimentation équilibrée", text: "Les vitamines A, C, E et les oméga-3 contribuent à protéger la santé oculaire globale." },
                  { title: "Examens réguliers", text: "Un contrôle ophtalmologique régulier permet de détecter et corriger l'astigmatisme avant qu'il ne s'aggrave." },
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
                Faites le point sur votre vision
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                L'astigmatisme se corrige efficacement. Un bilan visuel permet d'évaluer vos besoins et de trouver la solution la plus adaptée à votre quotidien.
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

export default Astigmatisme;
