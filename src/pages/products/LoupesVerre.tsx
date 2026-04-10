import { Search } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import loupeClassique from "@/assets/products/loupe-classique.jpg";
import loupeEclairante from "@/assets/products/loupe-eclairante.jpg";
import loupeDome from "@/assets/products/loupe-dome.jpg";
import heroImage from "@/assets/loupe-verre.jpg";

const products = [
  {
    name: "Loupe de lecture classique",
    slug: "loupe-classique",
    image: loupeClassique,
    imageAlt: "Illustration aquarelle d'une loupe de lecture classique en verre",
    description:
      "Loupe à main avec lentille en verre optique de haute qualité. Grossissement fixe, idéale pour une utilisation ponctuelle : courrier, étiquettes, notices.",
    features: [
      "Grossissement ×2 à ×5 selon modèle",
      "Lentille en verre minéral traité anti-reflets",
      "Manche ergonomique antidérapant",
      "Légère et sans batterie",
    ],
    idealFor: [
      "Lecture ponctuelle de textes imprimés",
      "Consultation d'étiquettes et de notices",
      "Premier équipement d'aide à la lecture",
    ],
    priceRange: "À partir de 15 €",
  },
  {
    name: "Loupe éclairante rectangulaire",
    slug: "loupe-eclairante",
    image: loupeEclairante,
    imageAlt: "Illustration aquarelle d'une loupe rectangulaire avec éclairage LED intégré",
    description:
      "Loupe grand format avec éclairage LED intégré. Le format rectangulaire suit la ligne de lecture et améliore le confort sur des textes denses.",
    features: [
      "Format rectangulaire adapté à la lecture de lignes",
      "Éclairage LED blanc intégré (piles ou rechargeable)",
      "Grossissement ×2,5 à ×4",
      "Large champ de vision pour lecture de journaux",
    ],
    idealFor: [
      "Lecture de journaux et de livres",
      "Personnes sensibles à l'éclairage ambiant",
      "Utilisation prolongée sur des textes denses",
    ],
    priceRange: "À partir de 25 €",
  },
  {
    name: "Loupe dôme à poser",
    slug: "loupe-dome",
    image: loupeDome,
    imageAlt: "Illustration aquarelle d'une loupe dôme posée sur un texte",
    description:
      "Loupe à poser directement sur le texte. Son format dôme permet un positionnement stable et une vision large, sans effort de maintien.",
    features: [
      "Se pose directement sur la page",
      "Pas de tremblement : vision stable",
      "Grossissement ×3 à ×5",
      "Idéale pour les mains peu agiles",
    ],
    idealFor: [
      "Personnes ayant des tremblements",
      "Lecture prolongée sans fatigue du bras",
      "Documents à plat : courrier, formulaires",
    ],
    priceRange: "À partir de 20 €",
  },
];

const buyingGuide = {
  title: "Comment choisir sa loupe en verre ?",
  intro:
    "Le choix d'une loupe optique dépend de votre usage principal, du grossissement nécessaire et de votre confort de prise en main.",
  criteria: [
    {
      title: "Le grossissement",
      description:
        "Plus le grossissement est élevé, plus le champ de vision est réduit. Un ×2 à ×3 suffit pour la plupart des lectures courantes.",
    },
    {
      title: "Le format",
      description:
        "Ronde pour un usage ponctuel, rectangulaire pour suivre les lignes, dôme pour poser sur le texte sans effort.",
    },
    {
      title: "L'éclairage intégré",
      description:
        "Un éclairage LED intégré améliore considérablement le confort, surtout dans les pièces mal éclairées.",
    },
    {
      title: "L'ergonomie",
      description:
        "Poids, taille du manche, matière antidérapante : essayez avant d'acheter, surtout en cas de tremblements ou de fatigue.",
    },
  ],
};

const LoupesVerre = () => (
  <CategoryPageLayout
    icon={Search}
    heroImage={heroImage}
    title="Loupes en verre"
    subtitle="Grossissement optique simple, direct et sans technologie"
    intro="La loupe en verre reste l'aide à la lecture la plus accessible et intuitive. Avec une lentille convergente de qualité, elle offre un grossissement immédiat pour lire un texte, une étiquette ou un document imprimé. Légère, sans batterie et facile à utiliser, c'est le premier réflexe quand la vision de près diminue."
    semanticKeywords="loupe de lecture, loupe optique, grossissement visuel, lecture rapprochée, vision de près, aide visuelle optique, loupe à main, loupe éclairante, loupe dôme, loupe malvoyant, loupe pour malvoyant"
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une loupe en verre"
    bottomCta="Demandez-nous des informations sur les loupes en verre"
    contactSubject="loupes-verre"
    seo={{
      title: "Loupes en Verre pour Malvoyants | LirElia",
      description: "Loupe classique, éclairante ou dôme : trouvez la loupe en verre adaptée à votre vue. Grossissements de ×2 à ×12, conseil personnalisé gratuit.",
      canonicalPath: "/aides-lecture-bassevision/loupes-verre",
    }}
    ctaText="Être conseillé(e) pour choisir ma loupe"
  />
);

export default LoupesVerre;
