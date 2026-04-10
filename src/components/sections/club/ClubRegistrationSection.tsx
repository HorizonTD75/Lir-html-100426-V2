import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Shield, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";

const profiles = [
  { value: "patient", label: "Personne concernée" },
  { value: "aidant", label: "Aidant" },
  { value: "pro", label: "Professionnel" },
];

const sessions = [
  { value: "monthly", label: "Session mensuelle gratuite" },
  { value: "weekly-info", label: "Être informé du futur hebdo" },
];

const themes = [
  { id: "voyage", label: "Voyage" },
  { id: "tech", label: "Tech & IA" },
  { id: "livres", label: "Livres" },
  { id: "musiques", label: "Musiques" },
];

const ClubRegistrationSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    profile: "",
    session: "monthly",
    themes: [] as string[],
    themePropose: "",
    needZoomHelp: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { errors: formErrors, validateField, clearFieldError, validateAll } = useFormValidation();
  const [honeypot, setHoneypot] = useState("");
  const { toast } = useToast();

  const handleThemeToggle = (themeId: string) => {
    setFormData((prev) => ({
      ...prev,
      themes: prev.themes.includes(themeId) ? prev.themes.filter((t) => t !== themeId) : [...prev.themes, themeId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    if (
      !validateAll([
        { field: "email", value: formData.email },
        { field: "telephone", value: formData.telephone },
      ])
    ) {
      return;
    }

    setLoading(true);

    try {
      const profileLabel = profiles.find((p) => p.value === formData.profile)?.label || formData.profile;

      const sessionLabel = sessions.find((s) => s.value === formData.session)?.label || formData.session;

      const themeLabels = formData.themes.map((t) => themes.find((th) => th.id === t)?.label || t).join(", ");

      const messageParts: string[] = [];

      if (sessionLabel) {
        messageParts.push(`Je souhaite ${sessionLabel}`);
      }

      if (themeLabels) {
        messageParts.push(`Thèmes de discussion préférés : ${themeLabels}`);
      }

      if (formData.themePropose.trim()) {
        messageParts.push(`Thème proposé : ${formData.themePropose.trim()}`);
      }

      if (formData.needZoomHelp) {
        messageParts.push("J'ai besoin d'aide pour Zoom");
      }

      const message = messageParts.join("\n");

      const result = await supabase.functions
        .invoke("brevo-club-registration", {
          body: {
            email: formData.email.trim(),
            prenom: formData.prenom.trim(),
            nom: formData.nom.trim(),
            telephone: formData.telephone.trim(),
            type: profileLabel,
            souhait: sessionLabel,
            themes: themeLabels,
            themePropose: formData.themePropose.trim(),
            needZoomHelp: formData.needZoomHelp,
            message,
            source_url: window.location.href,
            source_tag: "SRC_club",
          },
        })
        .catch((err) => {
          return {
            data: null,
            error: err instanceof Error ? err : new Error("Erreur réseau ou serveur."),
          };
        });

      const { data, error } = result ?? { data: null, error: new Error("Réponse invalide.") };

      if (error) {
        toast({
          title: "Inscription impossible",
          description: "Une erreur est survenue. Merci de réessayer un peu plus tard.",
          variant: "destructive",
        });
        return;
      }

      if (!data || data.success !== true) {
        toast({
          title: "Inscription impossible",
          description: "Votre inscription n'a pas pu être finalisée.",
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
    } catch {
      toast({
        title: "Inscription impossible",
        description: "Une erreur inattendue est survenue. Merci de réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-background" id="registration">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card variant="highlighted" className="text-center py-12">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Merci pour votre inscription !</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Vous recevrez prochainement un e-mail avec les informations pour la prochaine session du Club.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="registration">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated" className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <UserPlus className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-primary-foreground">Rejoindre le Club LirElia</CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">
                    Inscription gratuite, sans engagement
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-lg font-semibold">
                      Nom
                    </Label>
                    <Input
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="h-14 text-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-lg font-semibold">
                      Prénom
                    </Label>
                    <Input
                      id="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      className="h-14 text-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        clearFieldError("email");
                      }}
                      onBlur={() => validateField("email", formData.email)}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? "club-email-error" : undefined}
                      className={`h-14 text-lg ${formErrors.email ? "border-destructive" : ""}`}
                      required
                    />
                    {formErrors.email && (
                      <p id="club-email-error" className="text-sm text-destructive" role="alert">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-lg font-semibold">
                      Téléphone
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.telephone}
                      onChange={(e) => {
                        setFormData({ ...formData, telephone: e.target.value });
                        clearFieldError("telephone");
                      }}
                      onBlur={() => validateField("telephone", formData.telephone)}
                      aria-invalid={!!formErrors.telephone}
                      aria-describedby={formErrors.telephone ? "club-tel-error" : undefined}
                      className={`h-14 text-lg ${formErrors.telephone ? "border-destructive" : ""}`}
                    />
                    {formErrors.telephone && (
                      <p id="club-tel-error" className="text-sm text-destructive" role="alert">
                        {formErrors.telephone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Profile Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Je suis</Label>
                  <RadioGroup
                    value={formData.profile}
                    onValueChange={(value) => setFormData({ ...formData, profile: value })}
                    className="grid sm:grid-cols-3 gap-4"
                  >
                    {profiles.map((profile) => (
                      <label
                        key={profile.value}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.profile === profile.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={profile.value} id={profile.value} />
                        <span className="font-semibold">{profile.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Session Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Je souhaite</Label>
                  <RadioGroup
                    value={formData.session}
                    onValueChange={(value) => setFormData({ ...formData, session: value })}
                    className="space-y-3"
                  >
                    {sessions.map((session) => (
                      <label
                        key={session.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.session === session.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={session.value} id={session.value} />
                        <span className="font-semibold">{session.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Theme Preferences */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Thèmes préférés (optionnel)</Label>
                  <div className="flex flex-wrap gap-3">
                    {themes.map((theme) => (
                      <label
                        key={theme.id}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.themes.includes(theme.id)
                            ? "border-secondary bg-secondary/10"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        <Checkbox
                          checked={formData.themes.includes(theme.id)}
                          onCheckedChange={() => handleThemeToggle(theme.id)}
                        />
                        <span className="font-semibold">{theme.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-3 space-y-2">
                    <Label htmlFor="themePropose" className="text-base font-medium">
                      Thème proposé (optionnel)
                    </Label>
                    <Input
                      id="themePropose"
                      type="text"
                      placeholder="Proposez un thème qui vous intéresse…"
                      value={formData.themePropose}
                      onChange={(e) => setFormData({ ...formData, themePropose: e.target.value })}
                      className="h-14 text-lg"
                      maxLength={200}
                    />
                  </div>
                </div>

                {/* Zoom Help */}
                <div className="space-y-4">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.needZoomHelp ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <Checkbox
                      checked={formData.needZoomHelp}
                      onCheckedChange={(checked) => setFormData({ ...formData, needZoomHelp: checked as boolean })}
                    />
                    <div>
                      <span className="font-semibold block">Besoin d'aide pour Zoom ?</span>
                      <span className="text-muted-foreground text-sm">
                        On peut vous accompagner pour la première connexion
                      </span>
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                {/* Honeypot */}
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

                <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" /> Inscription en cours…
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-6 h-6" /> Je m'inscris
                    </>
                  )}
                </Button>

                {/* Trust Message */}
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span>Pas de spam. Vous pouvez vous désinscrire à tout moment.</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClubRegistrationSection;
