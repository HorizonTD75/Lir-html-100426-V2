import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Heart, Eye, Lightbulb, CheckCircle, AlertTriangle, HelpCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import aidantsHero from "@/assets/aidants-hero-600.jpg";

const faqItems = [
  {
    q: "Comment aider un proche malvoyant sans l'infantiliser ?",
    a: "Proposez votre aide sans l'imposer. Demandez toujours à la personne ce qu'elle souhaite faire elle-même. Respectez son rythme et valorisez chaque progrès, même petit. L'objectif est de préserver son autonomie, pas de faire à sa place.",
  },
  {
    q: "DMLA : comment continuer à lire au quotidien ?",
    a: "Plusieurs solutions existent : loupes éclairantes, télé-agrandisseurs, réglages d'accessibilité sur smartphone ou tablette, éclairage adapté. Un bilan basse vision permet de déterminer les aides les plus adaptées à la situation.",
  },
  {
    q: "Quels outils simples mettre en place à la maison ?",
    a: "Commencez par l'éclairage (lampe de lecture orientable), les contrastes (étiquettes contrastées, repères colorés), et l'organisation (rangement fixe, repères tactiles). Ces gestes simples améliorent le quotidien sans tout bouleverser.",
  },
  {
    q: "Faut-il un diagnostic médical avant un bilan basse vision ?",
    a: "Idéalement, un suivi ophtalmologique est recommandé. Mais un bilan basse vision peut être réalisé à tout moment pour évaluer les besoins fonctionnels et proposer des solutions concrètes. Il ne remplace pas le suivi médical.",
  },
  {
    q: "L'aidant peut-il assister au bilan basse vision ?",
    a: "Oui, c'est même fortement recommandé. L'aidant — conjoint, enfant ou proche — reçoit des conseils personnalisés pour accompagner au mieux la personne malvoyante dans son quotidien.",
  },
  {
    q: "Quelles aides financières existent pour les personnes malvoyantes ?",
    a: "Certaines mutuelles proposent des forfaits « bien-être » ou « prévention ». La MDPH peut intervenir pour le financement d'aides techniques. Renseignez-vous auprès de votre complémentaire santé et de votre mairie.",
  },
  {
    q: "Comment sécuriser le domicile d'une personne malvoyante ?",
    a: "Améliorez l'éclairage aux endroits stratégiques (escalier, cuisine, entrée), ajoutez des contrastes visuels sur les marches et les interrupteurs, fixez les tapis et éliminez les obstacles au sol. Des repères tactiles aident aussi à se repérer.",
  },
  {
    q: "Comment préserver mon propre équilibre en tant qu'aidant ?",
    a: "Le rôle d'aidant est exigeant. Accordez-vous des pauses, parlez de vos difficultés à un professionnel ou à une association. Vous n'êtes pas seul(e) : des structures de répit et de soutien existent pour les aidants.",
  },
];

const Aidants = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Guide pour les Aidants Basse Vision & DMLA | LirElia"
        description="Comment aider un proche malvoyant sans l'infantiliser ? Conseils concrets pour l'accompagner au quotidien, adapter la maison et préserver son autonomie."
        canonicalPath="/aidants"
      />
      <Header />
      <main id="main-content">
        {/* A — HERO */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img
              src={aidantsHero}
              alt="Une aidante accompagne un proche malvoyant dans la lecture à domicile"
              className="w-full h-full object-cover opacity-40" loading="eager" decoding="async" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-20 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-semibold">Pour les aidants</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Accompagner un proche malvoyant{" "}
                <span className="text-secondary">au quotidien</span>
              </h1>
              <p className="sr-only">Accompagner un proche malvoyant au quotidien</p>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
                Vous êtes conjoint(e), enfant, voisin(e), ami(e) ou aide à domicile.
                Ce guide vous donne des repères concrets pour soulager votre quotidien,
                préserver l'autonomie de votre proche et faciliter sa lecture et sa vie à la maison.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact-conseil">
                    <Phone className="w-6 h-6" />
                    Demander un conseil
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/comprendre-basse-vision">
                    <Eye className="w-6 h-6" />
                    Comprendre la basse vision
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* B — Vous n'êtes pas seul */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Vous n'êtes pas seul(e)
            </h2>
            <div className="bg-muted rounded-2xl p-8 md:p-10 border-2 border-border">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                La fatigue, l'inquiétude, la charge mentale : quand un proche perd la vue,
                l'aidant est souvent celui qui cherche l'information, organise les rendez-vous,
                adapte la maison et teste des solutions. C'est un rôle exigeant.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Que la cause soit une <strong>DMLA</strong>, un <strong>glaucome</strong>,
                une <strong>rétinopathie diabétique</strong> ou une autre pathologie,
                cette page vous offre des repères concrets et des étapes simples
                pour avancer sans vous disperser.
              </p>
              <p className="text-base text-muted-foreground italic">
                Important : cet accompagnement ne remplace pas le suivi médical
                et ophtalmologique de votre proche.
              </p>
            </div>
          </div>
        </section>

        {/* C — Comprendre ce que vit votre proche */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprendre ce que vit votre proche
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La <strong>basse vision</strong> ne signifie pas « ne plus rien voir ».
              Selon la pathologie (DMLA, glaucome, cataracte…), les difficultés varient :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Lecture difficile", desc: "Le courrier, les étiquettes, les livres deviennent flous ou illisibles. La personne peut avoir un scotome (tache au centre du champ visuel)." },
                { title: "Éblouissement", desc: "La lumière forte gêne, les contrastes sont mal perçus. La photophobie rend certaines sorties pénibles." },
                { title: "Déplacements incertains", desc: "Escaliers, trottoirs, obstacles au sol : le champ visuel réduit augmente le risque de chutes." },
                { title: "Fatigue visuelle", desc: "L'effort pour compenser la baisse d'acuité visuelle est épuisant. La personne renonce souvent à des activités qu'elle aimait." },
              ].map((item, i) => (
                <Card key={i} variant="default" className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* D — Les 7 gestes qui aident vraiment */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les 7 gestes qui aident vraiment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Des actions concrètes à mettre en place cette semaine, adaptées à chaque profil d'aidant (conjoint, enfant, aide à domicile).
            </p>
            <div className="space-y-4">
              {[
                { num: "1", title: "Améliorer l'éclairage", desc: "Installez une lampe orientable aux postes de lecture, en cuisine, dans l'entrée et près des escaliers. Un bon éclairage adapté à la basse vision change tout." },
                { num: "2", title: "Augmenter les contrastes visuels", desc: "Étiquettes contrastées, repères colorés sur les interrupteurs, vaisselle de couleur, rubans sur les marches. Les contrastes visuels facilitent le repérage." },
                { num: "3", title: "Organiser le domicile", desc: "Un rangement fixe et logique réduit la fatigue. Chaque objet a sa place. Évitez de déplacer les meubles sans prévenir." },
                { num: "4", title: "Régler les écrans", desc: "Agrandissez le texte sur le smartphone ou la tablette, activez le mode contraste élevé, configurez la synthèse vocale (VoiceOver / TalkBack)." },
                { num: "5", title: "Choisir une priorité réaliste", desc: "Une seule activité à retrouver d'abord : lire un article, cuisiner un plat, trier le courrier. Visez un progrès concret, pas un retour au passé." },
                { num: "6", title: "Tester une aide simple", desc: "Loupe éclairante, loupe électronique de poche ou lampe-loupe : essayez une aide à la lecture avant d'investir dans du matériel coûteux." },
                { num: "7", title: "Prendre soin de vous", desc: "L'aidant a aussi besoin de soutien. Accordez-vous des pauses, parlez de vos difficultés. Le répit de l'aidant n'est pas un luxe." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 rounded-2xl bg-muted border-2 border-border hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* À éviter */}
            <div className="mt-10 bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="font-serif text-xl font-bold text-foreground">À éviter pour préserver l'énergie</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">✕</span> Acheter 5 aides d'un coup « au hasard » — on finit perdu et déçu.</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">✕</span> Tout changer dans l'appartement en une fois — fatigue et rejet garantis.</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">✕</span> Se focaliser sur l'acuité seulement — la vision fonctionnelle (contrastes, champ, éblouissement) compte beaucoup.</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">✕</span> Comparer la personne à « avant » — visez un progrès concret.</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">✕</span> Rester seul(e) : l'aidant malvoyant a besoin de soutien et de répit.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* E — Autonomie dans la lecture */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Autonomie dans la lecture : solutions pratiques
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Lire avec une DMLA ou une autre forme de malvoyance reste possible grâce
              aux <strong>aides à la lecture</strong> adaptées. Le bon outil dépend
              de la pathologie, du besoin et du confort de votre proche.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Loupes & éclairage", desc: "Loupes grossissantes, loupes éclairantes, lampes de lecture : des solutions simples pour le courrier, les étiquettes, les livres." },
                { title: "Télé-agrandisseurs", desc: "Vidéo-agrandisseurs de bureau ou portables pour lire confortablement sur un écran agrandi." },
                { title: "Réglages numériques", desc: "Accessibilité smartphone (iPhone VoiceOver, Android TalkBack), agrandissement de texte, mode sombre, synthèse vocale." },
                { title: "Organisation & repères", desc: "Pupitres de lecture, repères contrastés, rangement fixe pour retrouver ses documents facilement." },
              ].map((item, i) => (
                <Card key={i} variant="elevated" className="p-4 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/aides-lecture-bassevision">
                  Découvrir les aides à la lecture
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* F — Quand demander un accompagnement ? */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quand demander un accompagnement ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Certains signaux indiquent qu'un bilan basse vision ou un accompagnement
              professionnel peut faire la différence :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Votre proche renonce à des activités qu'il aimait (lecture, cuisine, sorties)",
                "Vous avez « tout essayé » sans résultat satisfaisant",
                "La fatigue visuelle s'installe et l'isolement grandit",
                "Les chutes ou incidents liés à la vision se multiplient",
                "Vous ne savez plus par où commencer ni quoi prioriser",
                "Vous-même, aidant, ressentez de l'épuisement",
              ].map((signal, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted rounded-xl border-2 border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{signal}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-primary/20">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Un parcours simple, sans jargon
              </h3>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li><strong>Comprendre</strong> : ce qui relève du médical (ophtalmologiste) et ce qui relève de l'adaptation au quotidien.</li>
                <li><strong>Prioriser</strong> : une ou deux activités à retrouver (lecture, autonomie, déplacements).</li>
                <li><strong>Tester</strong> : loupe, éclairage, contrastes, réglages d'écran, organisation du domicile.</li>
                <li><strong>Faire un bilan basse vision</strong> si nécessaire : choisir le bon ordre, éviter les achats inutiles.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* G — FAQ Aidants */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Questions fréquentes des aidants
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border-2 border-border px-6">
                  <AccordionTrigger className="text-lg text-left font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* H — CTA final */}
        <section className="py-20 bg-primary">
          <div className="container text-center max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Décrivez la situation, on vous guide
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-10">
              Ce que votre proche veut refaire (lire, se déplacer, cuisiner…)
              et ce qui le bloque aujourd'hui. Nous vous répondons
              et choisissons ensemble la meilleure première étape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact-conseil">
                  <Phone className="w-6 h-6" />
                  Demander un conseil
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Aidants;
