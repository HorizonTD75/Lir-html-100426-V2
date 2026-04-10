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

const Presbytie = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="La Presbytie : Vision de Près et Âge | LirElia"
        description="Tout savoir sur la presbytie : vieillissement du cristallin, vision floue de près, besoin d'éloigner les textes. Causes, symptômes, diagnostic et traitements."
        canonicalPath="/maladies-yeux/presbytie"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "La Presbytie – Trouble de la vision de près lié à l'âge",
          "about": { "@type": "MedicalCondition", "name": "Presbytie" },
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
              <li><span className="text-foreground font-semibold">La Presbytie</span></li>
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
                La Presbytie : le trouble de la vision de près lié à l'âge
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                La presbytie est un trouble visuel extrêmement fréquent qui apparaît progressivement avec l'âge. Elle gêne principalement la vision de près : lire, consulter un téléphone, remplir un document ou effectuer un travail minutieux.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">1,8 Md</p>
                <p className="text-lg text-foreground">De presbytes dans le monde</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">20 M</p>
                <p className="text-lg text-foreground">De presbytes en France</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">40 ans</p>
                <p className="text-lg text-foreground">Âge moyen d'apparition</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">700 000</p>
                <p className="text-lg text-foreground">Nouveaux cas par an en France</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qu'est-ce que la presbytie ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                La presbytie est une difficulté croissante à voir nettement les objets proches. Elle apparaît parce que le cristallin, qui aide normalement l'œil à faire la mise au point, devient progressivement plus rigide et moins souple avec l'âge. L'œil perd alors une partie de son pouvoir d'accommodation.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Contrairement à la <Link to="/maladies-yeux/myopie" className="text-primary underline hover:text-primary/80">myopie</Link>, à l'<Link to="/maladies-yeux/hypermetropie" className="text-primary underline hover:text-primary/80">hypermétropie</Link> ou à l'<Link to="/maladies-yeux/astigmatisme" className="text-primary underline hover:text-primary/80">astigmatisme</Link>, la presbytie est directement liée au vieillissement naturel de l'œil. Elle n'est pas provoquée par une lésion ou une infection, mais par une diminution progressive de la capacité de mise au point de près.
              </p>
              <Card variant="highlighted" className="p-6">
                <p className="text-lg">
                  La presbytie débute en général autour de <strong>40 à 45 ans</strong>, puis évolue pendant plusieurs années avant de se stabiliser. Elle peut exister seule ou s'ajouter à un autre défaut visuel déjà présent.
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
                Causes de la presbytie
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { title: "Vieillissement du cristallin", content: "Le cristallin se rigidifie progressivement avec l'âge et devient moins capable de modifier sa forme pour la vision de près. C'est la cause principale et universelle de la presbytie." },
                  { title: "Diminution de l'accommodation", content: "L'accommodation, qui permet à l'œil d'augmenter sa puissance optique pour la vision rapprochée, baisse progressivement. Les petits caractères deviennent difficiles à lire, surtout en faible éclairage." },
                  { title: "Facteurs aggravants", content: "L'hypermétropie, le diabète, la sclérose en plaques, certaines maladies cardiovasculaires et certains médicaments peuvent favoriser une presbytie plus précoce. Une personne myope peut parfois retirer ses lunettes de loin pour mieux lire de près." },
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
                Symptômes de la presbytie
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Vision floue de près", text: "Le symptôme le plus fréquent : lire un livre, un ticket de caisse, une notice ou un écran de téléphone devient moins confortable. Les caractères paraissent flous à la distance habituelle." },
                  { title: "Besoin d'éloigner le support de lecture", text: "Tendre les bras pour mieux lire un journal, un menu ou une étiquette est un geste très caractéristique de la presbytie débutante." },
                  { title: "Fatigue visuelle", text: "La lecture prolongée, le travail sur écran, le bricolage ou la couture provoquent une fatigue des yeux, qui semblent lourds et moins performants en fin de journée." },
                  { title: "Maux de tête", text: "Les céphalées apparaissent surtout après un effort visuel prolongé de près, avec une gêne frontale ou une sensation de tension." },
                  { title: "Gêne accrue en faible éclairage", text: "Les symptômes sont souvent plus marqués le soir, en cas de fatigue ou dans un environnement peu éclairé. Un besoin accru de luminosité est fréquent." },
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
                Diagnostic de la presbytie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Interrogatoire et anamnèse", text: "L'ophtalmologiste précise la nature de la gêne : difficulté à lire, fatigue, besoin d'éloigner le texte, apparition progressive après 40 ans." },
                  { title: "Acuité visuelle de près et de loin", text: "Un bilan complet mesure la vision sans correction puis avec correction, à différentes distances." },
                  { title: "Mesure de la réfraction", text: "Détermine si la presbytie est isolée ou associée à une myopie, hypermétropie ou astigmatisme." },
                  { title: "Examen oculaire complet", text: "Vérifie l'état général de l'œil pour ne pas attribuer tous les troubles à la seule presbytie, surtout après 40 ans." },
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
                Traitements de la presbytie
              </h2>
              <div className="space-y-6">
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lunettes de lecture</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Le traitement le plus simple et le plus courant. Des verres convergents compensent le manque d'accommodation. Une correction personnalisée est toujours préférable aux lunettes prêtes à l'emploi pour un meilleur confort.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Verres progressifs, bifocaux ou multifocaux</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Lorsque la presbytie s'ajoute à un autre défaut visuel, des verres progressifs corrigent la vision de loin et de près dans le même équipement. Cette solution est très fréquente chez les personnes déjà myopes ou hypermétropes.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lentilles de contact multifocales</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Des lentilles multifocales ou une stratégie de monovision (un œil corrigé pour la distance, l'autre pour la proximité) peuvent être envisagées. Ces solutions ne conviennent pas à tout le monde et demandent une bonne tolérance visuelle.
                  </p>
                </Card>
                <Card variant="elevated" className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Chirurgie réfractive</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    La chirurgie peut réduire la dépendance aux lunettes chez certains patients, mais elle ne restaure pas le mécanisme naturel d'accommodation. Les techniques cornéennes (LASIK) ou les implants intraoculaires peuvent être discutés selon le profil visuel.
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Peut-on prévenir la presbytie ?
              </h2>
              <Card variant="highlighted" className="p-6 mb-8">
                <p className="text-lg">
                  Il n'existe pas de méthode reconnue pour empêcher la presbytie. L'OMS confirme qu'il s'agit d'un processus naturel lié à l'âge, contrairement à la myopie pour laquelle certaines mesures préventives existent.
                </p>
              </Card>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                En revanche, plusieurs habitudes peuvent réduire la gêne au quotidien :
              </p>
              <ul className="space-y-3">
                {[
                  "Utiliser un éclairage suffisant pour la lecture",
                  "Adapter la taille des caractères sur les écrans",
                  "Faire contrôler régulièrement sa vue",
                  "Porter une correction bien ajustée à ses besoins réels",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Retrouver un confort de lecture
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Ne banalisez pas une gêne de près qui devient handicapante. Un bilan basse vision permet de trouver la correction la plus adaptée, confortable et durable.
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

export default Presbytie;
