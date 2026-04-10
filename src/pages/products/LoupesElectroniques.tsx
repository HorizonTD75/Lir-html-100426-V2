import { Monitor, ArrowRight } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import loupePortable from "@/assets/products/loupe-electronique-portable.jpg";
import loupeBureau from "@/assets/products/loupe-electronique-bureau.jpg";
import loupePoche from "@/assets/products/loupe-electronique-poche.jpg";
import heroImage from "@/assets/loupe-electronique.jpg";

const products = [
  {
    name: "Loupe électronique portable",
    slug: "loupe-electronique-portable",
    image: loupePortable,
    imageAlt: "Illustration aquarelle d'une loupe électronique portable tenue en main",
    description:
      "Loupe numérique compacte avec écran intégré de 5 à 7 pouces. Zoom continu, modes de contraste multiples, et autonomie de plusieurs heures. Se glisse dans un sac.",
    features: [
      "Zoom continu de ×2 à ×20",
      "Modes de contraste : blanc/noir, jaune/noir, inversé",
      "Écran HD 5\" à 7\" antireflet",
      "Autonomie 3 à 5 heures (rechargeable USB)",
      "Poids : 150 à 300 g",
    ],
    idealFor: [
      "Lecture en déplacement : restaurant, magasin, transport",
      "Consultation de documents variés",
      "Personnes ayant besoin de grossissements élevés",
    ],
    priceRange: "À partir de 250 €",
  },
  {
    name: "Loupe électronique de bureau",
    slug: "loupe-electronique-bureau",
    image: loupeBureau,
    imageAlt: "Illustration aquarelle d'une loupe électronique de bureau avec grand écran",
    description:
      "Station de lecture avec écran large (10 à 14 pouces). Conçue pour la lecture prolongée à domicile avec une qualité d'image supérieure et un confort maximal.",
    features: [
      "Écran large 10\" à 14\" haute définition",
      "Plateau coulissant pour guider le document",
      "Zoom jusqu'à ×25",
      "Capture et gel d'image",
      "Modes de contraste personnalisables",
    ],
    idealFor: [
      "Lecture prolongée à domicile : livres, journaux",
      "Rédaction de courrier et formulaires",
      "Déficiences visuelles modérées à sévères",
    ],
    priceRange: "À partir de 600 €",
  },
  {
    name: "Loupe électronique de poche",
    slug: "loupe-electronique-poche",
    image: loupePoche,
    imageAlt: "Illustration aquarelle d'une loupe électronique ultra-compacte de poche",
    description:
      "Ultra-compacte (taille d'un smartphone), cette loupe numérique se glisse dans une poche. Idéale pour un usage ponctuel et discret en extérieur.",
    features: [
      "Format ultra-compact (< 100 g)",
      "Écran 3,5\" à 4,5\"",
      "Zoom ×2 à ×12",
      "Contraste automatique ou manuel",
      "Rechargeable par USB-C",
    ],
    idealFor: [
      "Usage discret en public",
      "Lecture d'étiquettes, menus, prix",
      "Complément à un agrandisseur de bureau",
    ],
    priceRange: "À partir de 150 €",
    shopLink: "/boutique/loupe-amelie",
    shopLabel: "Découvrir la Loupe Amélie",
  },
];

const buyingGuide = {
  title: "Comment choisir sa loupe électronique ?",
  intro:
    "Le choix dépend de votre usage principal : mobile ou fixe, ponctuel ou prolongé, et du niveau de grossissement requis par votre déficience visuelle.",
  criteria: [
    {
      title: "Taille de l'écran",
      description:
        "Plus l'écran est grand, plus la lecture est confortable sur la durée. Un écran 5\" convient en déplacement, 10\"+ pour la maison.",
    },
    {
      title: "Plage de zoom",
      description:
        "Vérifiez le grossissement maximal. Un ×10 couvre la majorité des besoins, ×20+ pour les déficiences sévères.",
    },
    {
      title: "Modes de contraste",
      description:
        "Le contraste inversé (texte clair sur fond sombre) réduit considérablement la fatigue. Assurez-vous d'avoir au moins 4 modes.",
    },
    {
      title: "Autonomie et poids",
      description:
        "Pour un usage mobile, privilégiez un modèle léger (< 200 g) avec une autonomie d'au moins 3 heures.",
    },
  ],
};

const LoupesElectroniques = () => (
  <CategoryPageLayout
    icon={Monitor}
    heroImage={heroImage}
    title="Loupes électroniques"
    subtitle="Grossissement variable et contraste renforcé pour une lecture sans compromis"
    intro="La loupe électronique, ou loupe numérique, utilise une caméra et un écran pour afficher le texte agrandi avec des contrastes optimisés. Avec un zoom réglable de ×2 à ×25 et des modes de contraste adaptés à la basse vision, elle offre un confort de lecture incomparable pour les déficiences visuelles modérées à sévères."
    semanticKeywords="loupe électronique malvoyant, loupe numérique, zoom lecture, contraste élevé, aide visuelle électronique, loupe portable basse vision, agrandisseur numérique, lecture DMLA"
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une loupe électronique"
    bottomCta="Demandez-nous des informations sur les loupes électroniques"
    contactSubject="loupe-electronique"
    ctaText="Être orienté(e) vers une loupe électronique adaptée"
    seo={{
      title: "Loupes Électroniques pour Basse Vision | LirElia",
      description: "Zoom réglable, contraste renforcé et écran HD : découvrez les loupes électroniques qui changent la vie des personnes malvoyantes. Conseil gratuit.",
      canonicalPath: "/aides-lecture-bassevision/loupes-electroniques",
    }}
  />
);

export default LoupesElectroniques;
