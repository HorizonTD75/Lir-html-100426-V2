import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";

const topicOptions = [
  { value: "", label: "— Aucun sujet en particulier —" },
  { value: "loupes-verre", label: "Loupes en verre", category: "Aides à la lecture" },
  { value: "loupe-electronique", label: "Loupe électronique", category: "Aides à la lecture" },
  { value: "tele-agrandisseur", label: "Télé-agrandisseur", category: "Aides à la lecture" },
  { value: "eclairage-basse-vision", label: "Éclairage basse vision", category: "Aides à la lecture" },
  { value: "aide-choix", label: "Aide pour choisir mon équipement", category: "Conseil" },
  { value: "bilan-basse-vision", label: "Bilan basse vision", category: "Conseil" },
  { value: "autre", label: "Autre question", category: "Conseil" },
];

const categories = [...new Set(topicOptions.filter((o) => o.category).map((o) => o.category))];

const ContactConseil = () => {
  const [searchParams] = useSearchParams();
  const [interet, setInteret] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [sourceTag, setSourceTag] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const url = window.location.href;
    setSourceUrl(url);
    const pathname = window.location.pathname;
    const tag = "SRC_" + pathname.replace(/\//g, "_").replace(/^_/, "");
    setSourceTag(tag);

    // Support both ?produit= (legacy) and ?sujet= (new) — read once on mount
    const sujet = searchParams.get("sujet");
    const produit = searchParams.get("produit");
    const param = sujet || produit;
    if (param) {
      const found = topicOptions.find((o) => o.value === param);
      if (found) setInteret(param);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { errors, validateField, clearFieldError, validateAll } = useFormValidation();
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!validateAll([
      { field: "email", value: email },
      { field: "telephone", value: telephone },
    ])) return;
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("brevo-upsert-contact", {
        body: {
          interet: interet || null,
          email,
          nom,
          telephone: telephone || null,
          message,
          source_url: sourceUrl,
          source_tag: sourceTag,
          brevo_list_id: 14
        }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submit error:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
      toast({
        title: "Une erreur est survenue",
        description: errorMessage.startsWith("Adresse") || errorMessage.startsWith("Nom") || errorMessage.startsWith("Message") ?
        errorMessage :
        "Impossible d'envoyer votre demande. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conseil personnalisé basse vision gratuit | LirElia"
        description="Besoin d'aide pour choisir une loupe, une lampe ou un télé-agrandisseur ? Décrivez votre situation et recevez un conseil personnalisé gratuit sous 48 h."
        canonicalPath="/contact-conseil" />
      
      <Header />
      <main id="main-content">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Demander un conseil personnalisé
              </h1>

              {submitted ?
              <Card variant="highlighted" className="text-center py-12">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-foreground">Merci !</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                      Nous revenons vers vous rapidement.
                    </p>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/aides-lecture-bassevision">
                        <ArrowLeft className="w-5 h-5" />
                        Explorer les aides à la lecture
                      </Link>
                    </Button>
                  </CardContent>
                </Card> :

              <Card variant="highlighted" className="overflow-hidden">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="font-serif text-2xl md:text-3xl">
                      Demander un conseil personnalisé
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Décrivez votre situation en quelques lignes. Nous vous répondons par e-mail
                      avec nos recommandations adaptées à vos besoins visuels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Sujet d'intérêt */}
                      <div className="space-y-2">
                        <Label htmlFor="interet" className="text-lg font-semibold">
                          Sujet d'intérêt
                        </Label>
                        <select
                        id="interet"
                        value={interet}
                        onChange={(e) => setInteret(e.target.value)}
                        className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all">
                        
                          <option value="">— Aucun sujet en particulier —</option>
                          {categories.map((cat) =>
                        <optgroup key={cat} label={cat}>
                              {topicOptions.
                          filter((o) => o.category === cat).
                          map((o) =>
                          <option key={o.value} value={o.value}>{o.label}</option>
                          )}
                            </optgroup>
                        )}
                        </select>
                      </div>

                      {/* Nom + Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nom" className="text-lg font-semibold">Votre nom</Label>
                          <Input
                          type="text" id="nom" required value={nom}
                          onChange={(e) => setNom(e.target.value)} maxLength={100}
                          className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                          placeholder="Jean Dupont" />
                        
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-semibold">Votre e-mail</Label>
                          <Input
                          type="email" id="email" required value={email}
                          onChange={(e) => { setEmail(e.target.value); clearFieldError("email"); }}
                          onBlur={() => validateField("email", email)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`px-4 py-3 text-lg h-auto border-2 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                          placeholder="jean@exemple.fr" />
                          {errors.email && <p id="email-error" className="text-sm text-destructive" role="alert">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div className="space-y-2">
                        <Label htmlFor="telephone" className="text-lg font-semibold">
                          Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
                        </Label>
                        <Input
                        type="tel" id="telephone" value={telephone}
                        onChange={(e) => { setTelephone(e.target.value); clearFieldError("telephone"); }}
                        onBlur={() => validateField("telephone", telephone)}
                        aria-invalid={!!errors.telephone}
                        aria-describedby={errors.telephone ? "telephone-error" : undefined}
                        className={`px-4 py-3 text-lg h-auto border-2 rounded-xl ${errors.telephone ? "border-destructive" : ""}`}
                        placeholder="06 12 34 56 78" />
                        {errors.telephone && <p id="telephone-error" className="text-sm text-destructive" role="alert">{errors.telephone}</p>}
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-lg font-semibold">Décrivez votre situation</Label>
                        <Textarea
                        id="message" required rows={4} value={message}
                        onChange={(e) => setMessage(e.target.value)} maxLength={2000}
                        className="px-4 py-3 text-lg border-2 rounded-xl resize-none"
                        placeholder="Par exemple : Ma mère a été diagnostiquée DMLA il y a 3 mois. Elle n'arrive plus à lire son courrier…" />
                      
                      </div>

                      <input type="hidden" value={sourceUrl} readOnly />
                      <input type="hidden" value={sourceTag} readOnly />
                      {/* Honeypot anti-spam */}
                      <div className="hidden" aria-hidden="true">
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                      </div>

                      <Button type="submit" variant="default" size="lg" className="w-full text-xl" disabled={loading}>
                        {loading ?
                      <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours…</> :

                      <><Send className="w-5 h-5" /> Envoyer ma demande de conseil</>
                      }
                      </Button>

                      <p className="text-center text-muted-foreground italic text-base">
                        Astuce aidant : vous pouvez remplir ce formulaire à la place de votre proche,
                        puis venir au bilan avec lui/elle.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default ContactConseil;
