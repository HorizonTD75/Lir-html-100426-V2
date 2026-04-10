import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { type Product } from "./ProductCard";
import type { LucideIcon } from "lucide-react";

interface BuyingCriteria {
  title: string;
  description: string;
}

interface CategoryPageProps {
  icon: LucideIcon;
  heroImage: string;
  title: string;
  subtitle: string;
  intro: string;
  semanticKeywords: string;
  products: Product[];
  buyingGuide: {
    title: string;
    intro: string;
    criteria: BuyingCriteria[];
  };
  ctaText: string;
  /** Text for the hero CTA button */
  heroCta?: string;
  /** Text for the bottom CTA button */
  bottomCta?: string;
  /** Subject pre-fill for contact-conseil */
  contactSubject?: string;
  seo: {
    title: string;
    description: string;
    canonicalPath?: string;
  };
}

const CategoryPageLayout = ({
  icon: Icon,
  heroImage,
  title,
  subtitle,
  intro,
  semanticKeywords,
  products,
  buyingGuide,
  ctaText,
  heroCta,
  bottomCta,
  contactSubject,
  seo,
}: CategoryPageProps) => {
  const subject = contactSubject || title.toLowerCase();
  const heroCtaText = heroCta || ctaText;
  const bottomCtaText = bottomCta || `Demandez-nous des informations sur les ${title.toLowerCase()}`;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover opacity-20"
              aria-hidden="true"
              loading="eager"
              width={1440}
              height={500}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <Link
                to="/aides-lecture-bassevision"
                className="inline-flex items-center gap-2 text-lg text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux aides à la lecture
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  {title}
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6 font-semibold">
                {subtitle}
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                {intro}
              </p>
              <Button variant="secondary" size="lg" className="text-xl" asChild>
                <Link to={`/contact-conseil?sujet=${encodeURIComponent(subject)}`}>
                  {heroCtaText}
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
          <p className="sr-only">{semanticKeywords}</p>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre sélection
              </h2>
              <p className="text-xl text-muted-foreground">
                Des produits choisis pour leur qualité, leur ergonomie et leur adaptation aux besoins des personnes malvoyantes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* BUYING GUIDE */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                {buyingGuide.title}
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                {buyingGuide.intro}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {buyingGuide.criteria.map((c, i) => (
                  <div key={i} className="bg-card rounded-2xl border-2 border-border p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                      <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                      {c.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit 
                et sans engagement — nous vous aiderons à trouver la solution la plus adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="text-xl" asChild>
                  <Link to={`/contact-conseil?sujet=${encodeURIComponent(subject)}`}>
                    {bottomCtaText}
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision">
                    <ArrowLeft className="w-5 h-5" />
                    Toutes les aides à la lecture
                  </Link>
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

export default CategoryPageLayout;
