import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BookOpen,
  ArrowRight,
  Eye,
  Heart,
  Users,
  HelpCircle,
  Star,
  CheckCircle,
  Home,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import bookAidant from "@/assets/book-aidant.jpg";

const PDF_AIDANTS_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/documents/livre-aidants-extrait.pdf`;

const planDuLivre = [
  {
    title: "Comprendre ce que vit vraiment votre proche",
    icon: Eye,
    items: [
      "Voir comme lui/elle : exercices simples pour comprendre la gêne visuelle",
      "Ce que la DMLA change concrètement (lecture, visages, mobilité, contrastes)",
      "Les répercussions invisibles : fatigue, lenteur, découragement, peur d'être un poids",
      "Les mots justes pour en parler sans blesser ni dramatiser",
      "Comment distinguer perte d'initiative et perte d'autonomie",
    ],
  },
  {
    title: "Soutenir sans étouffer",
    icon: ShieldCheck,
    items: [
      "L'art du dosage : quand aider, quand s'abstenir, comment proposer sans imposer",
      "Accompagner un geste sans prendre la place (lecture, escalier, cuisine, sorties)",
      "Aménager le logement ensemble : lumière, contraste, repères tactiles",
      "Choisir les bonnes aides techniques après essai (loupes, téléagrandisseurs, applications)",
      "Les erreurs fréquentes à éviter (« Laisse, je vais le faire », « Tu vois bien pourtant »…)",
    ],
  },
  {
    title: "Vivre ensemble au quotidien",
    icon: Home,
    items: [
      "Gérer les émotions de chacun : colère, culpabilité, peur du futur",
      "Différences générationnelles (parent/enfant, couple, fratrie)",
      "Maintenir la vie sociale : sorties, amis, rituels qui rassurent",
      "Activités possibles à deux (culture, sport adapté, lecture alternée, cuisine partagée)",
      "Reconnaître les signes d'épuisement de l'aidant et chercher du répit",
    ],
  },
  {
    title: "Ressources et accompagnements",
    icon: HelpCircle,
    items: [
      "Qui fait quoi : ophtalmologiste, orthoptiste, ergothérapeute, opticien spécialisé, instructeur en locomotion",
      "Associations et dispositifs pour les aidants (groupes de parole, plateformes de répit)",
      "Démarches administratives simplifiées : MDPH, PCH, APA, CMI, MaPrimeAdapt'",
      "Modèles de courriers prêts à l'emploi",
      "Numéros utiles et contacts par région",
    ],
  },
];

const pourquoiUnique = [
  {
    title: "Écrit depuis l'expérience de l'aidant",
    desc: "Ce guide ne vous dit pas ce que devrait faire votre proche. Il vous dit ce que vous pouvez faire, concrètement, pour l'aider sans vous perdre. Chaque conseil est pensé pour préserver la relation et votre propre équilibre.",
  },
  {
    title: "Complémentaire du premier livre",
    desc: "Si votre proche a lu « DMLA – Votre vie ne s'arrête pas », ce second livre vous permettra de partager le même langage, les mêmes repères, et de co-construire les solutions ensemble.",
  },
  {
    title: "Pratique et actionnable",
    desc: "Pas de théorie abstraite. Des scénarios réels (le courrier du matin, le dîner de famille, l'escalier du soir), des phrases à privilégier ou éviter, des check-lists prêtes à l'emploi, des témoignages croisés aidant/aidé.",
  },
  {
    title: "Bienveillant envers l'aidant",
    desc: "Un chapitre entier sur le burn-out de l'aidant : reconnaître les signes, trouver du répit, dire ses limites sans culpabiliser. Parce qu'on ne peut bien aider que si on prend aussi soin de soi.",
  },
  {
    title: "À jour 2026",
    desc: "Toutes les informations administratives, aides financières (PCH, APA, MaPrimeAdapt'), contacts d'associations et démarches sont actualisées pour 2026.",
  },
];

const temoignages = [
  {
    quote:
      "Enfin un livre qui nous parle à nous, les aidants. J'ai arrêté de faire à sa place. On avance plus lentement, mais on avance ensemble.",
    author: "Marc, 58 ans, fils d'un père atteint de DMLA",
  },
  {
    quote:
      "Le chapitre sur le burn-out m'a sauvée. J'ai compris que prendre deux heures pour moi le jeudi n'était pas de l'égoïsme, c'était ce qui me permettait de continuer.",
    author: "Sophie, 68 ans, épouse",
  },
  {
    quote:
      "Les phrases toutes faites ('Tu vois bien pourtant', 'Laisse, je vais le faire') : je les disais toutes. Maintenant je comprends pourquoi ça bloquait. Les formulations proposées ont changé notre relation.",
    author: "Nathalie, 57 ans, voisine aidante",
  },
];

const faqItems = [
  {
    q: "Ce livre remplace-t-il un suivi ophtalmologique ?",
    a: "Non. Ce guide pratique complète le suivi médical de votre proche mais ne s'y substitue pas. Il vous aide à mieux comprendre la DMLA et à accompagner au quotidien, en lien avec les professionnels de santé.",
  },
  {
    q: "Mon proche peut-il aussi lire ce livre ?",
    a: "Absolument. Ce livre est complémentaire de « DMLA – Votre vie ne s'arrête pas ». Les deux ouvrages partagent le même vocabulaire et les mêmes repères pour construire les solutions ensemble.",
  },
  {
    q: "Je suis aide à domicile, ce livre est-il utile pour moi ?",
    a: "Oui. Le livre s'adresse à tous les accompagnants : conjoints, enfants, amis, voisins et professionnels (auxiliaire de vie, aide à domicile). Vous y trouverez des conseils concrets de communication et d'accompagnement.",
  },
  {
    q: "Comment accompagner une personne malvoyante sans l'infantiliser ?",
    a: "Le livre propose des formulations à privilégier, des erreurs fréquentes à éviter et une méthode en trois temps (demander, proposer, vérifier) pour respecter l'autonomie tout en sécurisant le quotidien.",
  },
  {
    q: "Quelles aides financières existent pour aménager le logement ?",
    a: "Le guide détaille les dispositifs disponibles : PCH, APA, CMI, MaPrimeAdapt' et les démarches MDPH, avec des modèles de courriers prêts à l'emploi pour simplifier vos démarches.",
  },
];

const LivreAidants = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Livre : Aider un Proche Atteint de DMLA | LirElia"
        description="Le guide indispensable pour les aidants : comprendre la DMLA de votre proche, l'accompagner au quotidien et préserver votre propre équilibre."
        canonicalPath="/livre-aider-proche-dmla"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Aider un proche atteint de DMLA",
          description:
            "Guide pratique pour accompagner un proche malvoyant atteint de DMLA. Conseils concrets pour les aidants familiaux et professionnels.",
          author: { "@type": "Organization", name: "LirElia" },
          publisher: { "@type": "Organization", name: "LirElia" },
          about: ["DMLA", "Aidant", "Basse vision", "Malvoyance", "Autonomie"],
          audience: {
            "@type": "Audience",
            audienceType: "Aidants familiaux et professionnels de personnes malvoyantes",
          },
        }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/3 flex justify-center">
                <img
                  src={bookAidant}
                  alt="Couverture du livre Aider un proche atteint de DMLA"
                  className="w-56 md:w-64 rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-6">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold text-lg">Le guide indispensable pour les aidants</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Aider un proche atteint de DMLA
                </h1>
                <p className="text-xl md:text-2xl mb-4 opacity-90 leading-relaxed">
                  Accompagner sans s'épuiser : comprendre la basse vision, soutenir au quotidien et préserver votre
                  propre équilibre.
                </p>
                <p className="text-lg mb-8 opacity-80">
                  Un guide empathique et concret pour les conjoints, enfants, amis et professionnels qui accompagnent
                  une personne malvoyante.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#plan-du-livre">
                      Découvrir le plan du livre
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/rdv-bilan">Prendre rendez-vous</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse ce livre */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              À qui s'adresse ce livre ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Vous êtes conjoint(e) et la DMLA transforme votre quotidien à deux",
                "Vous êtes enfant d'un parent malvoyant et les rôles s'inversent",
                "Vous êtes ami(e), voisin(e) et vous voulez aider utilement",
                "Vous êtes professionnel (auxiliaire de vie, aide à domicile) et cherchez des repères concrets",
                "Vous êtes aidant familial déjà reconnu et vous cherchez à améliorer votre accompagnement",
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

        {/* Plan du livre VERBATIM */}
        <section id="plan-du-livre" className="py-20 bg-muted">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que vous allez découvrir
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Le plan complet du livre, conçu pour vous accompagner pas à pas dans votre rôle d'aidant auprès d'une
                personne atteinte de DMLA.
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
                        <h3 className="font-serif text-xl font-bold text-foreground leading-snug">{section.title}</h3>
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

        {/* Pourquoi ce guide aide concrètement les aidants */}
        <section className="py-20 bg-background">
          <div className="container max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Pourquoi ce guide aide concrètement les aidants
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pourquoiUnique.map((item, i) => (
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

        {/* Témoignages */}
        <section className="py-20 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Ce que les lecteurs en disent
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {temoignages.map((t, i) => (
                <Card key={i} variant="default" className="p-6">
                  <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">« {t.quote} »</blockquote>
                  <p className="text-sm font-semibold text-foreground">— {t.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extrait du livre */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Feuilleter un extrait du livre
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez un extrait du guide pour juger par vous-même du ton, de la clarté et de l'approche empathique
              envers les aidants.
            </p>
            <div className="bg-background rounded-xl shadow-lg overflow-hidden border">
              <object
                data={PDF_AIDANTS_URL}
                type="application/pdf"
                className="w-full h-[600px] md:h-[750px]"
                aria-label="Extrait du livre Aider un proche atteint de DMLA"
              >
                <div className="flex flex-col items-center justify-center h-[400px] gap-6 p-8 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">
                    L'aperçu PDF ne peut pas s'afficher dans votre navigateur.
                  </p>
                  <Button variant="default" size="lg" asChild>
                    <a href={PDF_AIDANTS_URL} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-5 h-5" />
                      Ouvrir l'extrait dans un nouvel onglet
                    </a>
                  </Button>
                </div>
              </object>
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" size="lg" asChild>
                <a href={PDF_AIDANTS_URL} download="Aider-un-proche-DMLA-extrait.pdf">
                  <BookOpen className="w-5 h-5" />
                  Télécharger l'extrait (PDF)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-lg font-semibold text-foreground">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Aller plus loin dans l'accompagnement</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Découvrez les bilans basse vision et les aides à la lecture proposés par LirElia pour aider concrètement
              votre proche malvoyant.
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

export default LivreAidants;
