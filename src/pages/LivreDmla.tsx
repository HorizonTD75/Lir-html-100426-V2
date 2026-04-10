import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, ArrowRight, Eye, Home, Heart, HelpCircle, Users, Star, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PDF_DMLA_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/documents/livre-dmla-apercu.pdf`;
import bookDmla from "@/assets/book-dmla.jpg";

const planDuLivre = [
  {
    title: "Comprendre la DMLA sans jargon médical",
    icon: Eye,
    items: [
      "Les deux formes de DMLA (sèche et humide) expliquées simplement",
      "Les symptômes au quotidien : ce qui change vraiment dans votre vision",
      "Les facteurs de risque et comment ralentir la progression",
      "La grille d'Amsler : comment surveiller votre vision chez vous",
    ],
  },
  {
    title: "Adapter votre quotidien pas à pas",
    icon: Home,
    items: [
      "Lecture, écriture, cuisine, télévision : les astuces qui fonctionnent",
      "Sécuriser votre maison (éclairage, repères, organisation)",
      "Continuer vos loisirs et garder du plaisir au quotidien",
      "Des exemples concrets et des checklists pratiques",
    ],
  },
  {
    title: "S'équiper intelligemment",
    icon: CheckCircle,
    items: [
      "Loupes, téléagrandisseurs, applications mobiles : quel matériel pour quel besoin ?",
      "Où tester avant d'acheter (centres de basse vision, CICAT, opticiens spécialisés)",
      "Les aides financières disponibles : PCH, mutuelles, caisses de retraite",
      "Comment éviter les achats inutiles et choisir ce qui vous convient vraiment",
    ],
  },
  {
    title: "Continuer à sortir et se déplacer",
    icon: MapPin,
    items: [
      "Mobilité en ville ou à la campagne : conseils de sécurité",
      "Les aides techniques (canne blanche, applications GPS, transports adaptés)",
      "Conduite automobile : quand et comment prendre la décision d'arrêter",
      "Voyager avec la DMLA : c'est possible !",
    ],
  },
  {
    title: "Préserver le moral et les liens sociaux",
    icon: Heart,
    items: [
      "Identifier vos émotions (peur, tristesse, colère, culpabilité) et les apaiser",
      "Comment en parler à vos proches et à votre entourage",
      "Éviter l'isolement : groupes de parole, associations, rencontres",
      "Le rôle des aidants et comment maintenir l'équilibre dans le couple",
    ],
  },
  {
    title: "Toutes les aides disponibles en 2026",
    icon: HelpCircle,
    items: [
      "PCH, AAH, APA, CMI : comment y accéder ?",
      "MaPrimeAdapt' pour adapter votre logement (jusqu'à 70 % de prise en charge)",
      "Les associations nationales (DMLA, AVH, UNADEV, Retina France…)",
      "Démarches MDPH : comment constituer un dossier solide",
    ],
  },
  {
    title: "Des témoignages qui redonnent espoir",
    icon: Users,
    items: [
      "8 témoignages de personnes qui vivent avec la DMLA",
      "Leurs difficultés, leurs solutions, leurs petites victoires",
      "Des parcours inspirants pour tous les âges (de 42 à 91 ans)",
    ],
  },
];

const temoignages = [
  {
    quote: "Enfin un livre qui ne nous infantilise pas. Des conseils concrets, sans pathos, et surtout plein d'espoir.",
    author: "Marie, 68 ans, DMLA sèche",
  },
  {
    quote: "J'ai offert ce livre à ma mère. Elle l'a lu d'une traite et m'a dit : 'Je ne savais pas qu'il y avait autant de solutions.' Merci.",
    author: "Thomas, fils et aidant",
  },
  {
    quote: "Les témoignages m'ont particulièrement touchée. Je me suis reconnue dans plusieurs d'entre eux. Ça fait du bien de savoir qu'on n'est pas seul.",
    author: "Jacqueline, 74 ans, DMLA humide",
  },
];

const faqItems = [
  {
    q: "Qu'est-ce que la DMLA ?",
    a: "La dégénérescence maculaire liée à l'âge (DMLA) est une maladie de la rétine qui affecte la vision centrale. Elle touche principalement les personnes de plus de 50 ans et peut rendre la lecture, la conduite ou la reconnaissance des visages difficile.",
  },
  {
    q: "Comment continuer à lire avec une basse vision ?",
    a: "Plusieurs solutions existent : loupes optiques ou électroniques, téléagrandisseurs, éclairage adapté, livres en gros caractères, liseuses numériques avec taille de police réglable. Ce livre détaille chaque option pour vous aider à choisir.",
  },
  {
    q: "Ce livre est-il adapté aux personnes malvoyantes ?",
    a: "Oui. Il est imprimé en police agrandie, avec une mise en page aérée et des contrastes élevés. Chaque page est conçue pour être lue confortablement, même avec une basse vision.",
  },
  {
    q: "À qui s'adresse ce livre ?",
    a: "Aux personnes diagnostiquées DMLA, à leurs proches aidants (conjoints, enfants), et aux professionnels de santé (orthoptistes, ergothérapeutes, opticiens) qui souhaitent un outil à recommander.",
  },
  {
    q: "Quelles aides financières existent pour la basse vision ?",
    a: "Le livre détaille les aides disponibles en 2026 : PCH, AAH, APA, CMI, MaPrimeAdapt' (jusqu'à 70 % de prise en charge pour adapter le logement), les mutuelles et les caisses de retraite.",
  },
  {
    q: "Où se procurer ce livre ?",
    a: "Le livre est disponible sur Amazon. Vous pouvez également contacter LirElia pour plus d'informations.",
  },
];

const LivreDmla = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="DMLA : Votre vie ne s'arrête pas — Livre | LirElia"
        description="170 pages de solutions concrètes pour vivre avec la DMLA : adapter son quotidien, s'équiper et retrouver l'autonomie. Par un expert de 25 ans."
        canonicalPath="/livre-dmla-votre-vie-ne-sarrete-pas"
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/3 flex justify-center">
                <img
                  src={bookDmla}
                  alt="Couverture du livre DMLA : Votre vie ne s'arrête pas"
                  className="w-56 md:w-64 rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-6">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold text-lg">25 ans d'expertise partagée</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  DMLA : votre vie ne s'arrête pas — le guide complet
                </h1>
                <p className="text-xl md:text-2xl mb-4 opacity-90 leading-relaxed">
                  170 pages de solutions concrètes pour continuer à lire, à vivre et à profiter du quotidien malgré la basse vision.
                </p>
                <p className="text-lg mb-8 opacity-80">
                  Un guide complet, accessible et à jour 2026, pour les personnes malvoyantes et leurs proches aidants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#sommaire">
                      Découvrir le contenu du livre
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/rdv-bilan">
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sommaire verbatim */}
        <section id="sommaire" className="py-20 bg-background">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que vous allez trouver dans ce livre
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Un sommaire complet pour mieux voir, mieux lire et retrouver votre autonomie au quotidien avec la DMLA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {planDuLivre.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} variant="elevated" className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                            <span className="text-secondary mt-1.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi ce livre est unique */}
        <section className="py-20 bg-muted">
          <div className="container max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Pourquoi ce livre est unique
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Écrit par un spécialiste de terrain",
                  desc: "Ingénieur-docteur en opto-électronique avec 25 ans d'expérience auprès de personnes malvoyantes. Ce livre concentre une expertise concrète, pas seulement de la théorie.",
                },
                {
                  title: "Pensé pour les personnes malvoyantes",
                  desc: "Police agrandie, mise en page aérée, contrastes élevés. Chaque page est conçue pour être lue confortablement, même avec une basse vision.",
                },
                {
                  title: "Complet mais accessible",
                  desc: "170 pages denses mais jamais ennuyeuses : explications claires, exemples concrets, checklists pratiques, glossaire et annexes avec tous les contacts utiles.",
                },
                {
                  title: "À jour 2026",
                  desc: "Toutes les informations sur les aides financières (MaPrimeAdapt', PCH, FIPHFP, AGEFIPH), les associations et les structures sont actualisées.",
                },
                {
                  title: "Pour les patients ET les aidants",
                  desc: "Des sections spécifiques pour les proches : comment accompagner sans surprotéger, gérer les tensions, préserver la relation.",
                },
              ].map((item, i) => (
                <Card key={i} variant="default" className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-secondary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              À qui s'adresse ce livre ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Vous venez d'être diagnostiqué(e) DMLA et vous cherchez à comprendre ce qui vous arrive",
                "Vous vivez avec la DMLA depuis quelques années et voulez optimiser votre quotidien",
                "Vous êtes un proche aidant (conjoint, enfant) et souhaitez mieux accompagner",
                "Vous êtes professionnel de santé (orthoptiste, ergothérapeute, opticien) et cherchez un outil à recommander",
              ].map((text, i) => (
                <Card key={i} variant="elevated" className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-foreground text-lg leading-relaxed">{text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Ce que les lecteurs en disent
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {temoignages.map((t, i) => (
                <Card key={i} variant="default" className="p-6">
                  <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                    « {t.quote} »
                  </blockquote>
                  <p className="text-sm font-semibold text-foreground">— {t.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-lg font-semibold text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Aperçu du livre */}
        <section className="py-20 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Feuilleter un aperçu du livre
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez les premières pages du guide et jugez par vous-même de la clarté des explications et de la qualité de la mise en page, pensée pour les personnes malvoyantes.
            </p>
            <div className="bg-background rounded-xl shadow-lg overflow-hidden border">
              <object
                data={PDF_DMLA_URL}
                type="application/pdf"
                className="w-full h-[600px] md:h-[750px]"
                aria-label="Aperçu du livre DMLA : Votre vie ne s'arrête pas"
              >
                <div className="flex flex-col items-center justify-center h-[400px] gap-6 p-8 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">
                    L'aperçu PDF ne peut pas s'afficher dans votre navigateur.
                  </p>
                  <Button variant="default" size="lg" asChild>
                    <a href={PDF_DMLA_URL} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-5 h-5" />
                      Ouvrir l'aperçu dans un nouvel onglet
                    </a>
                  </Button>
                </div>
              </object>
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" size="lg" asChild>
                <a href={PDF_DMLA_URL} download="DMLA-votre-vie-ne-sarrete-pas-apercu.pdf">
                  <BookOpen className="w-5 h-5" />
                  Télécharger l'aperçu (PDF)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Retrouvez votre autonomie dans la lecture
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Découvrez les bilans basse vision et les aides à la lecture proposés par LirElia pour compléter les conseils du livre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/bilans-bassevision">
                  Voir les bilans basse vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/aides-lecture-bassevision">
                  Découvrir les aides à la lecture
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LivreDmla;
