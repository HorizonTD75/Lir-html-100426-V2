import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Link2, Users, Lightbulb, Clock, Check, HelpCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: 1,
    title: "Inscription",
    description: "Nom + email + choix de session",
  },
  {
    icon: Link2,
    number: 2,
    title: "Lien Zoom",
    description: "Vous recevez le lien + rappel 24h avant",
  },
  {
    icon: Users,
    number: 3,
    title: "Session animée",
    description: "60 min : tour de table + thème + échanges",
  },
  {
    icon: Lightbulb,
    number: 4,
    title: "Idées à partager",
    description: "2–3 astuces pratiques + liens/ressources",
  },
];

const faqs = [
  {
    question: "Je ne maîtrise pas Zoom ?",
    answer: "On vous aide ! Guide + test possible avant la session.",
  },
  {
    question: "Je veux juste écouter ?",
    answer: "C'est possible, sans obligation de parler.",
  },
];

const sessionDetails = [
  "60 min – Petit groupe",
  "Animé par un superviseur",
];

const ClubHowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted" id="how-it-works">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Comment ça se passe ?
          </h2>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} variant="elevated" className="text-center relative overflow-hidden">
                  <CardContent className="pt-8 pb-6">
                    {/* Step Number */}
                    <div className="absolute -top-2 -left-2 w-12 h-12 rounded-br-2xl bg-primary flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    
                    <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-4 mt-2">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ + Session Details Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Items */}
            {faqs.map((faq, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Session Details */}
            <Card variant="highlighted">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground">Format</h4>
                </div>
                <ul className="space-y-2">
                  {sessionDetails.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubHowItWorksSection;
