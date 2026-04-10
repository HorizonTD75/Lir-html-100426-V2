import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Je relis une partie du journal.",
    author: "DMLA – 78 ans",
    color: "border-t-primary",
  },
  {
    quote: "On a un plan clair, mois par mois.",
    author: "Aidante – suivi sur 3 mois",
    color: "border-t-secondary",
  },
  {
    quote: "À la maison, c'est plus simple.",
    author: "65 ans – glaucome",
    color: "border-t-accent",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background" id="temoignages">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-muted-foreground">
            Ce que disent nos patients et leurs aidants (anonymisés)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`border-t-4 ${testimonial.color}`}
            >
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-secondary/50 mb-4" />
                <blockquote className="text-xl font-serif font-bold text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-lg text-muted-foreground not-italic">
                  {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
