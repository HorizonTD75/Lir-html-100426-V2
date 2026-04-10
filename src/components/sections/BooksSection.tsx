import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import bookDmla from "@/assets/book-dmla.jpg";
import bookAidant from "@/assets/book-aidant.jpg";
import { Link } from "react-router-dom";

const books = [
  {
    image: bookDmla,
    title: "DMLA – Votre vie ne s'arrête pas",
    subtitle: "Le guide pratique pour continuer à vivre pleinement",
    description: "Ce livre accompagne les personnes atteintes de DMLA et leurs proches, avec des explications claires, des solutions concrètes et des témoignages inspirants.",
    link: "/livre-dmla-votre-vie-ne-sarrete-pas",
  },
  {
    image: bookAidant,
    title: "Aider un proche atteint de DMLA",
    subtitle: "Le guide indispensable pour accompagner sans s'épuiser",
    description: "Destiné aux aidants familiaux et professionnels, ce livre vous apprend à soutenir sans étouffer et à préserver votre propre équilibre.",
    link: "/livre-aider-proche-dmla",
  },
];

const BooksSection = () => {
  return (
    <section className="py-20 bg-muted" id="livres">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">25 ans d'expérience partagée</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Les livres de l'auteur sur la Basse Vision
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <Card key={index} variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-muted p-6 flex items-center justify-center">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-40 h-auto rounded-lg shadow-lg"
                      width={160}
                      height={204}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {book.title}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mb-4">
                      {book.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {book.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={book.link || "/bientot-disponible"}>
                        Découvrir un extrait
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
