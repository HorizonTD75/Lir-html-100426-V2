import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Send, Check, Shield, Info } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";
import bilanHeroImage from "@/assets/bilan-hero-600-2.jpg";

type BilanType = "essentiel" | "expert" | "suivi";

const bilanOptions: {
  value: BilanType;
  label: string;
  brevoValue: string;
  price: number;
  reassurance: string;
}[] = [
  {
    value: "essentiel",
    label: "Bilan Essentiel",
    brevoValue: "Bilan essentiel",
    price: 75,
    reassurance:
      "Un premier bilan complet pour évaluer votre vision fonctionnelle, tester des aides adaptées et repartir avec un plan d'action concret.",
  },
  {
    value: "expert",
    label: "Bilan Expert",
    brevoValue: "Bilan expert",
    price: 135,
    reassurance:
      "Le Bilan Essentiel enrichi d'une consultation opticien-optométriste pour explorer les corrections et lunettes basse vision les plus adaptées.",
  },
  {
    value: "suivi",
    label: "Pack Suivi",
    brevoValue: "Bilan suivi",
    price: 215,
    reassurance:
      "Un accompagnement complet sur plusieurs mois : bilan initial, essais, ajustements et suivi pour installer durablement les bonnes habitudes.",
  },
];

const ContactBilan = () => {
  const [searchParams] = useSearchParams();
  const defaultBilan = (searchParams.get("type") as BilanType) || "essentiel";
  const { toast } = useToast();

  const [selectedBilan, setSelectedBilan] = useState<BilanType>(
    bilanOptions.some((b) => b.value === defaultBilan) ? defaultBilan : "essentiel",
  );
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [profil, setProfil] = useState<"malvoyant" | "aidant">("malvoyant");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors: formErrors, validateField, clearFieldError, validateAll } = useFormValidation();
  const [honeypot, setHoneypot] = useState("");

  const selectedPrice = bilanOptions.find((b) => b.value === selectedBilan)?.price;
  const selectedReassurance = bilanOptions.find((b) => b.value === selectedBilan)?.reassurance;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    if (!nom.trim() || !prenom.trim() || !email.trim() || !telephone.trim()) {
      toast({
        title: "Champs obligatoires",
        description: "Merci de remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    if (
      !validateAll([
        { field: "email", value: email },
        { field: "telephone", value: telephone },
      ])
    ) {
      return;
    }

    if (!rgpdAccepted) {
      toast({
        title: "RGPD",
        description: "Veuillez accepter la politique de confidentialité.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedOption = bilanOptions.find((b) => b.value === selectedBilan);
      const roleValue = profil === "aidant" ? "aidant" : "personne concernée";

      const response = await supabase.functions.invoke("brevo-upsert-contact", {
        body: {
          nom: `${prenom.trim()} ${nom.trim()}`,
          email: email.trim(),
          telephone: telephone.trim(),
          interet: selectedOption?.brevoValue || "Bilan essentiel",
          role: roleValue,
          rgpd_ok: true,
          message: `Demande de rendez-vous pour un ${selectedOption?.label} — Profil : ${roleValue} — Téléphone : ${telephone.trim()}`,
          source_url: window.location.href,
          source_tag: "rdv-bilan",
          brevo_list_id: 13
        },
      });

      if (response.error) {
        throw response.error;
      }

      const data = response.data as { error?: string } | null;
      if (data?.error) {
        throw new Error(data.error);
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons très rapidement par téléphone.",
      });

      setNom("");
      setPrenom("");
      setTelephone("");
      setEmail("");
      setRgpdAccepted(false);
    } catch (err) {
      console.error("Erreur ContactBilan:", err);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Prendre Rendez-vous – Bilan Basse Vision | LirElia"
        description="Réservez votre bilan basse vision : Essentiel (75 €), Expert (135 €) ou Suivi (215 €). Un appel préalable gratuit vous guide dans votre choix."
        canonicalPath="/rdv-bilan"
      />
      <Header />
      <main id="main-content">
        <section className="relative bg-primary text-primary-foreground py-20 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bilanHeroImage}
              alt=""
              className="w-full h-full object-cover opacity-20"
              aria-hidden="true"
              loading="eager"
              decoding="async"
              width={1440}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Prendre <span className="text-secondary">rendez-vous</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Votre bilan sera réalisé par un conseiller en basse vision fort de 25 ans d'expérience, dont l'objectif
                est de vous redonner — ou de redonner à votre proche — le contact avec la lecture et l'autonomie au
                quotidien.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="mb-10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-foreground mb-2">Comment ça se passe ?</h2>
                    <p className="text-lg text-muted-foreground">
                      Après réception de votre demande, un <strong>appel téléphonique préliminaire</strong> sera réalisé
                      pour s'assurer ensemble du choix du bilan le plus adapté à votre situation.
                      <strong> Il n'y a aucun engagement de votre part</strong> : cet appel est là pour vous guider et
                      répondre à vos questions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl md:text-3xl">Formulaire de rendez-vous</CardTitle>
                  <CardDescription className="text-lg">
                    Remplissez ce formulaire et nous vous recontacterons rapidement.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">Type de bilan souhaité</Label>

                      <div className="grid sm:grid-cols-3 gap-4">
                        {bilanOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setSelectedBilan(option.value)}
                            className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                              selectedBilan === option.value
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {selectedBilan === option.value && (
                              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                <Check className="w-4 h-4" />
                              </div>
                            )}

                            <p className="font-serif text-lg font-bold text-foreground">{option.label}</p>
                            <p className="text-2xl font-bold text-primary mt-1">{option.price} €</p>
                          </button>
                        ))}
                      </div>

                      {selectedReassurance && (
                        <div className="mt-3 flex items-start gap-2 px-4 py-3 bg-accent/10 rounded-xl border border-accent/20">
                          <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <p className="text-base text-foreground leading-relaxed">{selectedReassurance}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-4 block">Vous êtes</Label>

                      <RadioGroup
                        value={profil}
                        onValueChange={(v) => setProfil(v as "malvoyant" | "aidant")}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <label
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            profil === "malvoyant"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value="malvoyant" />
                          <span className="text-lg font-medium">Personne concernée</span>
                        </label>

                        <label
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            profil === "aidant"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value="aidant" />
                          <span className="text-lg font-medium">Aidant / proche</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="prenom" className="text-lg font-semibold mb-2 block">
                          Prénom *
                        </Label>
                        <Input
                          id="prenom"
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                          placeholder="Jean"
                          className="h-14 text-lg rounded-xl"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="nom" className="text-lg font-semibold mb-2 block">
                          Nom *
                        </Label>
                        <Input
                          id="nom"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          placeholder="Dupont"
                          className="h-14 text-lg rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="telephone" className="text-lg font-semibold mb-2 block">
                          Téléphone *
                        </Label>
                        <Input
                          id="telephone"
                          type="tel"
                          value={telephone}
                          onChange={(e) => {
                            setTelephone(e.target.value);
                            clearFieldError("telephone");
                          }}
                          onBlur={() => validateField("telephone", telephone)}
                          placeholder="06 12 34 56 78"
                          aria-invalid={!!formErrors.telephone}
                          aria-describedby={formErrors.telephone ? "tel-error" : undefined}
                          className={`h-14 text-lg rounded-xl ${formErrors.telephone ? "border-destructive" : ""}`}
                          required
                        />
                        {formErrors.telephone && (
                          <p id="tel-error" className="text-sm text-destructive mt-1" role="alert">
                            {formErrors.telephone}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-lg font-semibold mb-2 block">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            clearFieldError("email");
                          }}
                          onBlur={() => validateField("email", email)}
                          placeholder="jean@exemple.fr"
                          aria-invalid={!!formErrors.email}
                          aria-describedby={formErrors.email ? "email-error" : undefined}
                          className={`h-14 text-lg rounded-xl ${formErrors.email ? "border-destructive" : ""}`}
                          required
                        />
                        {formErrors.email && (
                          <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                      <Checkbox
                        id="rgpd"
                        checked={rgpdAccepted}
                        onCheckedChange={(checked) => setRgpdAccepted(checked === true)}
                        className="mt-1"
                      />
                      <label htmlFor="rgpd" className="text-base text-muted-foreground cursor-pointer leading-relaxed">
                        <Shield className="w-4 h-4 inline mr-1" />
                        J'accepte que mes données personnelles soient utilisées pour traiter ma demande de rendez-vous
                        conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>. Vos
                        informations ne seront ni vendues ni partagées avec des tiers. Vous pouvez exercer vos droits
                        d'accès, de rectification et de suppression en nous contactant à tout moment.
                      </label>
                    </div>

                    <div className="text-center">
                      <Button type="submit" variant="default" size="lg" disabled={isSubmitting} className="min-w-64">
                        <Send className="w-5 h-5" />
                        {isSubmitting ? "Envoi en cours…" : `Demander un rendez-vous — ${selectedPrice} €`}
                      </Button>

                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Un appel téléphonique confirmera votre rendez-vous. Aucun paiement en ligne.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactBilan;
