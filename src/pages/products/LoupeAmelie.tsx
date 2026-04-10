import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Check, Shield, Truck, Phone, Loader2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProductByHandle, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ────────────────────────────────────────────
   Parse the Shopify HTML description into
   logical sections for structured display
   ──────────────────────────────────────────── */
function parseDescriptionSections(html: string) {
  const sections: { intro: string; description: string; descriptionBlocks: { title: string; content: string }[]; specs: string; strengths: string; faq: { q: string; a: string }[] } = {
    intro: "",
    description: "",
    descriptionBlocks: [],
    specs: "",
    strengths: "",
    faq: [],
  };

  // Split by <hr> which separates major sections in the Shopify description
  const parts = html.split(/<hr\s*\/?>/i);

  if (parts.length >= 1) sections.intro = parts[0].trim();
  if (parts.length >= 2) {
    let descHtml = parts[1].trim();
    // Remove the "Description" h2 heading since Lovable already labels this section
    descHtml = descHtml.replace(/<h2[^>]*>\s*Description\s*<\/h2>/i, "");
    sections.description = descHtml;

    // Parse into blocks: split by h3 headings to create visual sub-sections
    // First, get any intro paragraphs before the first h3
    const firstH3Index = descHtml.search(/<h3[^>]*>/i);
    let introContent = "";
    let restContent = descHtml;
    if (firstH3Index > 0) {
      introContent = descHtml.substring(0, firstH3Index).trim();
      restContent = descHtml.substring(firstH3Index);
    } else if (firstH3Index === -1) {
      introContent = descHtml;
      restContent = "";
    }

    if (introContent) {
      sections.descriptionBlocks.push({ title: "", content: introContent });
    }

    // Split remaining content by h3 tags
    if (restContent) {
      const h3Parts = restContent.split(/<h3[^>]*>/i).filter(Boolean);
      for (const part of h3Parts) {
        const closingH3 = part.indexOf("</h3>");
        if (closingH3 !== -1) {
          const title = part.substring(0, closingH3).replace(/<[^>]*>/g, "").trim();
          const content = part.substring(closingH3 + 5).trim();
          if (title && content) {
            sections.descriptionBlocks.push({ title, content });
          }
        }
      }
    }
  }
  if (parts.length >= 3) sections.specs = parts[2].trim();
  if (parts.length >= 4) sections.strengths = parts[3].trim();

  // Extract FAQ from the last part
  const faqSource = parts.length >= 5 ? parts[4] : "";
  if (faqSource && faqSource.includes("FAQ")) {
    const qMatches = faqSource.match(/<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gs);
    if (qMatches) {
      for (const match of qMatches) {
        const qMatch = match.match(/<h3[^>]*>(.*?)<\/h3>/s);
        const aMatch = match.match(/<h3[^>]*>.*?<\/h3>\s*<p[^>]*>(.*?)<\/p>/s);
        if (qMatch && aMatch) {
          sections.faq.push({ q: qMatch[1].trim(), a: aMatch[1].trim() });
        }
      }
    }
  }

  return sections;
}

const LoupeAmelie = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    fetchProductByHandle("loupe-de-lecture-electronique-amelie")
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="flex items-center justify-center py-32">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Produit introuvable</h1>
          <p className="text-lg text-muted-foreground mb-8">Ce produit n'est pas disponible pour le moment.</p>
          <Button asChild>
            <Link to="/aides-lecture-bassevision/loupes-electroniques">
              <ArrowLeft className="w-5 h-5" />
              Retour aux loupes électroniques
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const { node } = product;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const hasMultipleVariants = variants.length > 1 && !(variants.length === 1 && variants[0].node.title === "Default Title");
  const price = selectedVariant?.price;

  // Parse description into sections
  const descSections = node.descriptionHtml ? parseDescriptionSections(node.descriptionHtml) : null;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Produit ajouté au panier", { description: node.title });
  };

  const handleBuyNow = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    const checkoutUrl = useCartStore.getState().getCheckoutUrl();
    if (checkoutUrl) window.open(checkoutUrl, "_blank");
  };

  const formatPrice = (amount: string, currency: string) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(parseFloat(amount));

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupe Amélie : Loupe Électronique 3x 6x 9x | LirElia"
        description="Loupe électronique ultra-compacte avec 3 grossissements (3x, 6x, 9x). Idéale pour DMLA, glaucome ou cataracte. Achat en ligne."
        canonicalPath="/boutique/loupe-amelie"
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/loupes-electroniques" className="hover:text-primary transition-colors">Loupes électroniques</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{node.title}</span>
          </nav>
        </div>

        {/* Product top section */}
        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || node.title}
                    className="w-full aspect-square object-contain bg-white"
                  />
                ) : (
                  <div className="w-full aspect-square bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Image non disponible</p>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        i === selectedImage ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                      aria-label={`Voir image ${i + 1}`}
                    >
                      <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {node.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Loupe de lecture Amélie — Grossissement 3x, 6x et 9x
              </p>

              {price && (
                <p className="text-3xl font-bold text-primary mb-4">
                  {formatPrice(price.amount, price.currencyCode)}
                </p>
              )}

              {/* Key selling points */}
              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  <strong>Idéale pour les personnes âgées souffrant de DMLA, glaucome, ou cataracte</strong>, la Loupe de lecture Amélie facilite grandement et simplement la lecture.
                </p>
                <ul className="space-y-2">
                  {[
                    "Un seul bouton pour choisir entre les grossissements 3x, 6x, 9x.",
                    "Légère, ergonomique et dotée d'un écran de 11 cm lumineux.",
                    "S'utilise tenue à la main par sa poignée comme une loupe en verre.",
                    "Éclairage et batterie rechargeable intégrés.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Variant selector */}
              {hasMultipleVariants && node.options.length > 0 && (
                <div className="mb-6">
                  {node.options.map((option) => (
                    <div key={option.name} className="mb-4">
                      <label className="block text-lg font-bold text-foreground mb-2">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                          const variantIndex = variants.findIndex(
                            (v) => v.node.selectedOptions.some((o) => o.name === option.name && o.value === value)
                          );
                          const isSelected = selectedVariant?.selectedOptions.some(
                            (o) => o.name === option.name && o.value === value
                          );
                          return (
                            <button
                              key={value}
                              onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                              className={`px-5 py-3 rounded-xl text-lg font-semibold border-2 transition-all ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border bg-card text-foreground hover:border-primary/50"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Availability */}
              {selectedVariant && (
                <div className="mb-6">
                  {selectedVariant.availableForSale ? (
                    <span className="inline-flex items-center gap-2 text-lg font-semibold text-accent">
                      <Check className="w-5 h-5" />
                      En stock
                    </span>
                  ) : (
                    <span className="text-lg font-semibold text-destructive">Rupture de stock</span>
                  )}
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-xl flex-1"
                  onClick={handleAddToCart}
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  {cartLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
                  Ajouter au panier
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-xl flex-1"
                  onClick={handleBuyNow}
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  Acheter maintenant
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Reassurance block */}
              <div className="bg-muted rounded-2xl border-2 border-border p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Livraison soignée</p>
                    <p className="text-base text-muted-foreground">Expédition rapide et emballage protecteur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Paiement sécurisé</p>
                    <p className="text-base text-muted-foreground">Transaction protégée par Shopify</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Besoin d'aide ?</p>
                    <p className="text-base text-muted-foreground">
                      Appelez-nous au{" "}
                      <a href="tel:0768474235" className="text-primary font-semibold hover:underline">07 68 47 42 35</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured content sections from Shopify description */}
        {descSections && (
          <>
            {/* Description détaillée */}
            {descSections.descriptionBlocks.length > 0 && (
              <section className="py-12 lg:py-16 bg-muted">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-10">Description détaillée</h2>

                    {/* Intro block (paragraphs before first h3) */}
                    {descSections.descriptionBlocks[0]?.title === "" && (
                      <div
                        className="prose prose-lg max-w-none mb-10
                          prose-p:text-foreground prose-p:leading-loose prose-p:text-xl prose-p:mb-4
                          prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: descSections.descriptionBlocks[0].content }}
                      />
                    )}

                    {/* Sub-section cards from h3 headings */}
                    <div className="space-y-6">
                      {descSections.descriptionBlocks
                        .filter(block => block.title !== "")
                        .map((block, i) => (
                          <div key={i} className="bg-card rounded-2xl border-2 border-border p-6 md:p-8">
                            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">
                              {block.title}
                            </h3>
                            <div
                              className="prose prose-xl max-w-none
                                prose-p:text-foreground prose-p:leading-loose prose-p:text-xl prose-p:mb-4 prose-p:last:mb-0
                                prose-strong:text-foreground
                                prose-li:text-foreground prose-li:text-xl prose-li:leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: block.content }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Fallback if no blocks parsed but raw description exists */}
            {descSections.descriptionBlocks.length === 0 && descSections.description && (
              <section className="py-12 lg:py-16 bg-muted">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
                    <div
                      className="prose prose-lg max-w-none text-foreground
                        prose-headings:font-serif prose-headings:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                        prose-strong:text-foreground"
                      dangerouslySetInnerHTML={{ __html: descSections.description }}
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Caractéristiques techniques */}
            {descSections.specs && (
              <section className="py-12 lg:py-16">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Caractéristiques techniques</h2>
                    <div className="bg-card rounded-2xl border-2 border-border p-6 md:p-8">
                      <div
                        className="prose prose-xl max-w-none text-foreground
                          prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-6 prose-headings:mb-3
                          prose-h2:hidden prose-h3:text-xl prose-h3:text-primary
                          prose-p:text-foreground prose-p:leading-loose prose-p:text-xl prose-p:mb-4
                          prose-li:text-foreground prose-li:text-xl prose-li:leading-relaxed prose-li:marker:text-primary
                          prose-ul:space-y-3 prose-ol:space-y-3
                          prose-strong:text-foreground prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: descSections.specs.replace(/<h2[^>]*>.*?<\/h2>/i, "") }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Points forts */}
            {descSections.strengths && (
              <section className="py-12 lg:py-16 bg-muted">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Pourquoi choisir cette loupe ?</h2>
                    <div className="bg-card rounded-2xl border-2 border-border p-6 md:p-8">
                      <div
                        className="prose prose-xl max-w-none text-foreground
                          prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-6 prose-headings:mb-3
                          prose-h2:hidden prose-h3:text-xl prose-h3:text-accent
                          prose-p:text-foreground prose-p:leading-loose prose-p:text-xl prose-p:mb-4
                          prose-li:text-foreground prose-li:text-xl prose-li:leading-relaxed prose-li:marker:text-accent
                          prose-ul:space-y-3 prose-ol:space-y-3
                          prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: descSections.strengths.replace(/<h2[^>]*>.*?<\/h2>/i, "") }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* FAQ */}
            {descSections.faq.length > 0 && (
              <section className="py-12 lg:py-16">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Foire aux questions</h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {descSections.faq.map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border-2 border-border px-6">
                          <AccordionTrigger className="text-xl font-bold text-foreground text-left py-5 hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-xl text-foreground leading-relaxed pb-5">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Back CTA */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact-conseil?sujet=loupe-electronique">
                    Demander un conseil
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision/loupes-electroniques">
                    <ArrowLeft className="w-5 h-5" />
                    Toutes les loupes électroniques
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

export default LoupeAmelie;
