import { Eye } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import teleAgrandisseurBureau from "@/assets/products/tele-agrandisseur-bureau.jpg";
import teleAgrandisseurPortable from "@/assets/products/tele-agrandisseur-portable.jpg";
import teleAgrandisseurTv from "@/assets/products/tele-agrandisseur-tv.jpg";
import heroImage from "@/assets/tele-agrandisseur.jpg";

const products = [
  {
    name: "Télé-agrandisseur de bureau",
    slug: "tele-agrandisseur-bureau",
    image: teleAgrandisseurBureau,
    imageAlt: "Illustration aquarelle d'un télé-agrandisseur de bureau avec grand écran",
    description:
      "Station de lecture professionnelle avec écran haute définition de 19 à 24 pouces. Plateau coulissant XY, grossissement jusqu'à ×60 et modes de contraste avancés.",
    features: [
      "Écran HD 19\" à 24\" avec traitement antireflet",
      "Grossissement continu ×2 à ×60",
      "Plateau coulissant XY pour navigation fluide",
      "Modes de contraste multiples (16+ combinaisons)",
      "Ligne de lecture et masque de fenêtre",
      "Autofocus permanent",
    ],
    idealFor: [
      "Lecture prolongée quotidienne (livres, journaux)",
      "Rédaction de courrier et formulaires administratifs",
      "Déficiences visuelles sévères (DMLA avancée)",
    ],
    priceRange: "À partir de 1 500 €",
  },
  {
    name: "Télé-agrandisseur portable",
    slug: "tele-agrandisseur-portable",
    image: teleAgrandisseurPortable,
    imageAlt: "Illustration aquarelle d'un télé-agrandisseur portable pliable",
    description:
      "Modèle compact et pliable avec écran intégré de 10 à 13 pouces. Conçu pour voyager tout en conservant un confort de lecture supérieur aux loupes électroniques.",
    features: [
      "Écran 10\" à 13\" pliable",
      "Grossissement ×2 à ×30",
      "Poids : 1,5 à 2,5 kg",
      "Autonomie 3 à 4 heures sur batterie",
      "Modes lecture, distance et miroir",
      "Connexion HDMI vers écran externe",
    ],
    idealFor: [
      "Usage en déplacement (voyages, sorties)",
      "Lecture dans plusieurs pièces de la maison",
      "Personnes actives avec déficience visuelle",
    ],
    priceRange: "À partir de 1 200 €",
  },
  {
    name: "Caméra de lecture sur TV",
    slug: "tele-agrandisseur-tv",
    image: teleAgrandisseurTv,
    imageAlt: "Illustration aquarelle d'une caméra de lecture projetant un document sur un grand écran TV",
    description:
      "Caméra compacte qui projette le document agrandi sur votre téléviseur existant. Solution économique pour bénéficier d'un grand écran sans acheter un télé-agrandisseur complet.",
    features: [
      "Se branche sur un téléviseur (HDMI)",
      "Grossissement selon taille de l'écran TV",
      "Caméra HD avec autofocus",
      "Modes de contraste intégrés",
      "Très compact et léger",
      "Télécommande simple d'utilisation",
    ],
    idealFor: [
      "Personnes disposant déjà d'un grand écran TV",
      "Budget limité pour un premier équipement",
      "Lecture dans le salon ou la chambre",
    ],
    priceRange: "À partir de 400 €",
  },
];

const buyingGuide = {
  title: "Comment choisir son télé-agrandisseur ?",
  intro:
    "Le télé-agrandisseur est un investissement important. Le choix dépend de votre niveau de vision résiduelle, de votre usage quotidien et de votre environnement.",
  criteria: [
    {
      title: "Taille et qualité de l'écran",
      description:
        "Un écran plus grand offre plus de confort. Privilégiez un écran HD avec traitement antireflet pour réduire la fatigue visuelle.",
    },
    {
      title: "Mobilité vs confort",
      description:
        "Un modèle de bureau offre le meilleur confort mais reste fixe. Un portable est plus polyvalent mais avec un écran plus petit.",
    },
    {
      title: "Plateau coulissant",
      description:
        "Le plateau XY avec freins est essentiel pour suivre les lignes sans effort. Sa fluidité fait une grande différence au quotidien.",
    },
    {
      title: "Financement et prise en charge",
      description:
        "Certains télé-agrandisseurs sont pris en charge partiellement par la MDPH ou l'assurance maladie. Renseignez-vous sur les aides possibles.",
    },
  ],
};

const TeleAgrandisseurs = () => (
  <CategoryPageLayout
    icon={Eye}
    heroImage={heroImage}
    title="Télé-agrandisseurs"
    subtitle="Confort maximal et grand écran pour lire longtemps, même avec une vision très réduite"
    intro="Le télé-agrandisseur, ou vidéo-agrandisseur, est l'aide à la lecture la plus avancée pour les personnes atteintes de basse vision sévère. Il affiche les documents sur un grand écran avec un grossissement stable et puissant, permettant de lire, écrire et consulter des documents pendant de longues périodes sans fatigue excessive."
    semanticKeywords="télé agrandisseur malvoyant, vidéo agrandisseur, lecture écran agrandi, basse vision sévère, agrandisseur de documents, DMLA aide lecture, caméra lecture TV, loupe grand écran"
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'un télé-agrandisseur"
    bottomCta="Demandez-nous des informations sur les télé-agrandisseurs"
    contactSubject="tele-agrandisseur"
    ctaText="Découvrir les télé-agrandisseurs"
    seo={{
      title: "Télé-agrandisseurs pour Basse Vision | LirElia",
      description: "Lisez longtemps et confortablement grâce aux télé-agrandisseurs : grand écran, zoom puissant et mains libres. Idéal pour DMLA et basse vision sévère.",
      canonicalPath: "/aides-lecture-bassevision/tele-agrandisseurs",
    }}
  />
);

export default TeleAgrandisseurs;
