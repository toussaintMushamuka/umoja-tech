import { Printer, Palette, Shirt, Globe, BookOpen, Camera, Share2 } from "lucide-react"

export const services = [
  {
    id: "impression-papier",
    icon: "Printer",
    title: "Impression sur papier",
    shortDescription: "Formats A4, A3 et plus, impression de qualité pour tous vos documents",
    description:
      "Nous offrons des services d'impression de haute qualité sur différents formats de papier (A4, A3, etc.). Idéal pour vos documents professionnels, brochures, flyers et plus encore.",
    details: [
      "Impression noir et blanc ou couleur",
      "Différents grammages de papier disponibles",
      "Finitions professionnelles (reliure, plastification, etc.)",
      "Délais rapides et service express disponible",
    ],
    features: [
      {
        title: "Impression de documents",
        description: "Impression de documents professionnels avec une qualité irréprochable.",
      },
      {
        title: "Brochures et flyers",
        description: "Création et impression de brochures et flyers pour vos événements et promotions.",
      },
      {
        title: "Cartes de visite",
        description: "Impression de cartes de visite professionnelles qui reflètent votre image de marque.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Quel est le délai pour l'impression de documents?",
        answer:
          "Pour les documents standards, nous proposons un service en 24h. Pour les commandes urgentes, nous offrons un service express en quelques heures.",
      },
      {
        question: "Quels formats de papier proposez-vous?",
        answer:
          "Nous proposons tous les formats standards (A4, A3, A2, etc.) ainsi que des formats personnalisés sur demande.",
      },
      {
        question: "Proposez-vous des finitions spéciales?",
        answer: "Oui, nous offrons diverses finitions comme la reliure, la plastification, le pliage, et plus encore.",
      },
    ],
  },
  {
    id: "conception-affiches",
    icon: "Palette",
    title: "Conception et création d'affiches",
    shortDescription: "Création d'affiches professionnelles et attractives pour vos événements",
    description:
      "Notre équipe de designers crée des affiches attrayantes et impactantes pour vos événements, promotions ou campagnes publicitaires.",
    details: [
      "Design personnalisé selon vos besoins",
      "Formats variés, du A4 aux grands formats",
      "Conseils professionnels sur la conception",
      "Impression haute résolution",
    ],
    features: [
      {
        title: "Design créatif",
        description: "Nos designers créent des affiches uniques et attrayantes qui captent l'attention.",
      },
      {
        title: "Grands formats",
        description: "Impression d'affiches en grand format pour une visibilité maximale.",
      },
      {
        title: "Matériaux de qualité",
        description: "Utilisation de matériaux durables et de haute qualité pour vos affiches.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Quel est le processus de création d'une affiche?",
        answer:
          "Nous commençons par une consultation pour comprendre vos besoins, puis nous créons plusieurs concepts. Après vos retours, nous finalisons le design et procédons à l'impression.",
      },
      {
        question: "Quels sont les délais pour la création d'affiches?",
        answer:
          "Le délai dépend de la complexité du projet, mais généralement, nous pouvons livrer en 3-5 jours ouvrables.",
      },
      {
        question: "Puis-je apporter des modifications après avoir vu le premier concept?",
        answer:
          "Absolument! Nous offrons jusqu'à trois séries de révisions pour s'assurer que le résultat final répond parfaitement à vos attentes.",
      },
    ],
  },
  {
    id: "impression-textile",
    icon: "Shirt",
    title: "Impression sur textile",
    shortDescription: "Personnalisation de T-shirts, vareuses, chapeaux et autres produits",
    description:
      "Personnalisez vos vêtements et accessoires avec notre service d'impression sur textile de qualité supérieure.",
    details: [
      "Impression sur T-shirts, vareuses, chapeaux",
      "Techniques variées : sérigraphie, transfert thermique, broderie",
      "Idéal pour équipes sportives, événements, uniformes d'entreprise",
      "Possibilité de petites et grandes quantités",
    ],
    features: [
      {
        title: "Sérigraphie",
        description: "Technique d'impression durable idéale pour les grandes quantités.",
      },
      {
        title: "Transfert thermique",
        description: "Parfait pour les designs détaillés et les petites séries.",
      },
      {
        title: "Broderie",
        description: "Finition élégante et professionnelle pour vos vêtements d'entreprise.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Quelle technique d'impression est la plus adaptée pour mon projet?",
        answer:
          "Cela dépend de plusieurs facteurs: la quantité, le type de textile, la complexité du design et votre budget. Nous vous conseillons la meilleure option lors de notre consultation.",
      },
      {
        question: "Puis-je commander une petite quantité de t-shirts personnalisés?",
        answer:
          "Oui, nous acceptons les commandes à partir d'une seule pièce, bien que les prix unitaires soient plus avantageux pour les grandes quantités.",
      },
      {
        question: "Quels types de vêtements pouvez-vous personnaliser?",
        answer:
          "Nous pouvons imprimer sur presque tous les types de vêtements: t-shirts, polos, sweats, casquettes, sacs en tissu, et bien plus encore.",
      },
    ],
  },
  {
    id: "conception-web",
    icon: "Globe",
    title: "Conception de sites web et d'applications",
    shortDescription: "Création de sites web et d'applications sur mesure pour votre entreprise",
    description:
      "Nous développons des sites web modernes et des applications sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
    details: [
      "Sites web responsives adaptés à tous les appareils",
      "Applications web et mobiles personnalisées",
      "Intégration de systèmes de paiement et de gestion de contenu",
      "Maintenance et support technique",
    ],
    features: [
      {
        title: "Design responsive",
        description: "Sites web adaptés à tous les appareils: ordinateurs, tablettes et smartphones.",
      },
      {
        title: "E-commerce",
        description: "Solutions de commerce électronique complètes avec gestion des paiements et des stocks.",
      },
      {
        title: "Applications sur mesure",
        description: "Développement d'applications web et mobiles adaptées à vos besoins spécifiques.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Combien coûte la création d'un site web?",
        answer:
          "Le coût varie en fonction de la complexité du projet. Nous proposons des solutions adaptées à différents budgets, à partir de sites vitrines simples jusqu'aux plateformes e-commerce complexes.",
      },
      {
        question: "Combien de temps faut-il pour créer un site web?",
        answer:
          "Un site vitrine simple peut être réalisé en 2-3 semaines, tandis qu'un site e-commerce ou une application plus complexe peut prendre 1-3 mois.",
      },
      {
        question: "Proposez-vous des services de maintenance après la mise en ligne?",
        answer:
          "Oui, nous offrons des forfaits de maintenance qui incluent les mises à jour de sécurité, les sauvegardes régulières et le support technique.",
      },
    ],
  },
  {
    id: "formation-ms-office",
    icon: "BookOpen",
    title: "Formation MS Office",
    shortDescription: "Formations personnalisées sur les outils Microsoft Office",
    description:
      "Améliorez vos compétences avec nos formations personnalisées sur la suite Microsoft Office (Word, Excel, PowerPoint, etc.).",
    details: [
      "Formations individuelles ou en groupe",
      "Programmes adaptés à tous les niveaux",
      "Exercices pratiques et cas réels",
      "Certification disponible",
    ],
    features: [
      {
        title: "Excel avancé",
        description: "Maîtrisez les fonctions avancées, les tableaux croisés dynamiques et les macros.",
      },
      {
        title: "Word professionnel",
        description: "Apprenez à créer des documents professionnels avec mise en page avancée.",
      },
      {
        title: "PowerPoint efficace",
        description: "Créez des présentations impactantes avec animations et transitions professionnelles.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Les formations sont-elles adaptées aux débutants?",
        answer:
          "Oui, nous proposons des formations pour tous les niveaux, du débutant à l'expert. Chaque formation est adaptée au niveau de compétence des participants.",
      },
      {
        question: "Proposez-vous des formations en entreprise?",
        answer:
          "Absolument! Nous pouvons organiser des formations dans vos locaux, adaptées aux besoins spécifiques de votre entreprise.",
      },
      {
        question: "Quelle est la durée d'une formation?",
        answer:
          "La durée varie selon le programme et le niveau. Nous proposons des formations d'une demi-journée, d'une journée complète ou des programmes plus longs répartis sur plusieurs semaines.",
      },
    ],
  },
  {
    id: "photos-professionnelles",
    icon: "Camera",
    title: "Photos professionnelles",
    shortDescription: "Photos passeport et photos pour cérémonies de haute qualité",
    description: "Service professionnel de photographie pour vos documents officiels et événements importants.",
    details: [
      "Photos d'identité aux normes internationales",
      "Photos pour passeport, visa, permis de conduire",
      "Photographie d'événements et de cérémonies",
      "Retouche photo professionnelle",
    ],
    features: [
      {
        title: "Photos d'identité",
        description: "Photos conformes aux normes internationales pour tous vos documents officiels.",
      },
      {
        title: "Photographie d'événements",
        description: "Capturez les moments importants de vos cérémonies et événements professionnels.",
      },
      {
        title: "Retouche professionnelle",
        description: "Service de retouche photo pour un résultat parfait et naturel.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Les photos d'identité sont-elles conformes aux normes officielles?",
        answer:
          "Oui, nos photos respectent toutes les normes internationales pour les passeports, visas et autres documents officiels.",
      },
      {
        question: "Quel est le délai pour obtenir des photos d'identité?",
        answer: "Le service est généralement immédiat. Vous repartez avec vos photos en quelques minutes.",
      },
      {
        question: "Proposez-vous des séances photo en extérieur?",
        answer:
          "Oui, nous offrons des séances photo en extérieur pour les portraits, les événements familiaux ou professionnels.",
      },
    ],
  },
  {
    id: "marketing-digital",
    icon: "Share2",
    title: "Marketing digital",
    shortDescription: "Gestion des réseaux sociaux et stratégies marketing efficaces",
    description: "Boostez votre présence en ligne avec nos services complets de marketing digital.",
    details: [
      "Gestion des réseaux sociaux",
      "Stratégies marketing personnalisées",
      "Campagnes publicitaires en ligne",
      "Analyse de performance et rapports détaillés",
    ],
    features: [
      {
        title: "Gestion des réseaux sociaux",
        description: "Création et gestion de contenu engageant pour vos plateformes sociales.",
      },
      {
        title: "Publicité en ligne",
        description: "Campagnes publicitaires ciblées sur Google, Facebook, Instagram et autres plateformes.",
      },
      {
        title: "Analyse et rapports",
        description: "Suivi détaillé des performances avec rapports réguliers et recommandations.",
      },
    ],
    gallery: [1, 2, 3],
    faq: [
      {
        question: "Sur quels réseaux sociaux pouvez-vous gérer ma présence?",
        answer:
          "Nous gérons tous les principaux réseaux sociaux: Facebook, Instagram, Twitter, LinkedIn, TikTok, et plus encore, selon votre cible et vos objectifs.",
      },
      {
        question: "Comment mesurez-vous les résultats des campagnes marketing?",
        answer:
          "Nous utilisons des outils d'analyse avancés pour suivre les performances: taux d'engagement, conversions, ROI, etc. Vous recevez des rapports détaillés régulièrement.",
      },
      {
        question: "Puis-je choisir un forfait adapté à mon budget?",
        answer:
          "Oui, nous proposons différents forfaits adaptés à tous les budgets, des startups aux grandes entreprises. Nous pouvons également créer un forfait sur mesure.",
      },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.id === slug)
}

export function getAllServiceIds() {
  return services.map((service) => service.id)
}

export function getServiceIcon(iconName) {
  const icons = {
    Printer,
    Palette,
    Shirt,
    Globe,
    BookOpen,
    Camera,
    Share2,
  }

  return icons[iconName]
}
