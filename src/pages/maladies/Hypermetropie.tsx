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

const Hypermetropie = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hypermétropie : Causes et Traitements | LirElia"
        description="Tout savoir sur l'hypermétropie : œil trop court, vision floue de près, fatigue oculaire. Causes, diagnostic, traitements optiques et chirurgicaux."
        canonicalPath="/maladies-yeux/hypermetropie"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "L'Hypermétropie – Causes, symptômes et traitements",
          "about": { "@type": "MedicalCondition", "name": "Hypermétropie" },
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
              <li><span className="text-foreground font-semibold">L'Hypermétropie</span></li>
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
                L'Hypermétropie : tout savoir pour une vision nette
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                L'hypermétropie est un défaut visuel courant qui affecte environ 25 % de la population mondiale. L'œil, trop court, forme l'image derrière la rétine, rendant la vision de près floue et fatigante.
              </p>
            </div>
          </div>
        </section>

        {/* En bref */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">25 %</p>
                <p className="text-lg text-foreground">De la population mondiale concernée</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">30 %</p>
                <p className="text-lg text-foreground">Des adultes en France</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">5 %</p>
                <p className="text-lg text-foreground">Des enfants nécessitent une correction</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">+5,00 D</p>
                <p className="text-lg text-foreground">Seuil de l'hypermétropie forte</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qu'est-ce que l'hypermétropie ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                L'hypermétropie est un défaut de réfraction dans lequel l'œil a une forme trop courte ou un cristallin insuffisamment convergent. L'image se forme en arrière de la rétine, ce qui provoque une vision floue de près et, dans les formes importantes, de loin également.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Contrairement à la <Link to="/maladies-yeux/myopie" className="text-primary underline hover:text-primary/80">myopie</Link>, l'hypermétropie peut passer inaperçue chez les jeunes grâce à la capacité d'accommodation du cristallin. Avec l'âge, cette compensation devient plus difficile et les symptômes apparaissent.
              </p>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Quelles sont les causes de l'hypermétropie ?
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { title: "Hérédité", content: "L'hypermétropie peut être héréditaire. Si l'un ou les deux parents en sont atteints, la probabilité pour leurs enfants est plus élevée." },
                  { title: "Forme de l'œil", content: "Un œil trop court ou une cornée trop plate empêche la lumière de se focaliser correctement sur la rétine." },
                  { title: "Vieillissement", content: "Avec l'âge, le cristallin perd de sa flexibilité et devient moins capable de compenser le défaut, aggravant les symptômes." },
                  { title: "Conditions médicales", content: "Le diabète ou certains traumatismes oculaires peuvent affecter la forme de l'œil et favoriser l'hypermétropie." },
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
                Symptômes de l'hypermétropie
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Vision floue de près", text: "Difficulté à lire les petits caractères, à coudre ou à travailler sur un écran. La vision de près est particulièrement affectée." },
                  { title: "Maux de tête fréquents", text: "Liés à la tension exercée sur les muscles oculaires pour compenser le défaut, surtout après un travail prolongé sur écran." },
                  { title: "Fatigue oculaire", text: "Les yeux se fatiguent rapidement lors de la lecture ou d'autres tâches de proximité, avec une sensation de lourdeur." },
                  { title: "Difficulté à lire", text: "La lecture de livres, journaux, étiquettes ou écrans devient pénible et demande un effort visuel constant." },
                  { title: "Risque de strabisme", text: "Chez l'enfant, une hypermétropie non corrigée peut entraîner un strabisme (désalignement des yeux)." },
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
                Diagnostic de l'hypermétropie
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Le diagnostic est réalisé par un ophtalmologiste lors d'un examen de la vue de routine, comprenant :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Examen de la vue", text: "Lecture de lettres sur un tableau d'optométrie, tests de vision de près et de loin." },
                  { title: "Mesure de la réfraction", text: "Un réfractomètre mesure la puissance de correction nécessaire pour rétablir une vision nette." },
                  { title: "Tests complémentaires", text: "Ophtalmoscopie pour examiner la rétine et la macula, gonioscopie pour mesurer la pression intraoculaire." },
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
                Traitements de l'hypermétropie
              </h2>
              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lunettes et lentilles de contact</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les verres correcteurs convergents sont le traitement le plus courant. Ils permettent de refocaliser la lumière sur la rétine. Les lentilles de contact offrent une alternative confortable et esthétique.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Chirurgie réfractive au laser</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Pour les cas sévères, les techniques LASIK, PRK ou LASEK modifient la forme de la cornée pour corriger le défaut de réfraction. Des implants intraoculaires peuvent aussi être envisagés.
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
                Prévention et bonnes habitudes
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Il n'existe pas de méthode connue pour prévenir l'hypermétropie, souvent d'origine génétique. Cependant, certaines mesures protègent les yeux :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Alimentation riche en nutriments", text: "Les vitamines A, C, E et les oméga-3 contribuent à maintenir une bonne santé oculaire et à prévenir la dégénérescence maculaire." },
                  { title: "Pauses régulières devant les écrans", text: "Toutes les 20 minutes, regardez au loin pendant 20 secondes. Clignez des yeux régulièrement pour éviter la sécheresse." },
                  { title: "Protection contre les UV", text: "Les lunettes de soleil filtrant les rayons UV protègent la surface de l'œil et préviennent les dommages liés au soleil." },
                  { title: "Examens de la vue réguliers", text: "Un suivi ophtalmologique régulier permet de détecter et corriger rapidement tout problème visuel." },
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
                Si vous ressentez une fatigue oculaire, des maux de tête ou une vision floue de près, un bilan visuel peut vous aider à trouver la correction adaptée.
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

export default Hypermetropie;
