export const modules = [
  {
    title: "Loue une voiture",
    description: "Réservation en ligne, données client, paiement, confirmation et prise en charge du véhicule.",
    href: "/rent",
  },
  {
    title: "Choisis ta voiture",
    description: "Catalogue véhicule, disponibilité, catégorie et sélection du modèle.",
    href: "/choose-car",
  },
  {
    title: "Besoin d’un transport",
    description: "Demande de transport, transfert ou service chauffeur depuis une interface simple.",
    href: "/transport",
  },
  {
    title: "Gestion de ton sinistre",
    description: "Déclaration de sinistre, suivi du dossier et envoi de documents utiles.",
    href: "/claim",
  },
] as const;

export const rentSteps = [
  {
    number: "1.1",
    title: "Sélection des dates",
    text: "Le client choisit ses dates pour réserver un véhicule.",
    href: "/rent/date",
  },
  {
    number: "1.2",
    title: "Choix du véhicule",
    text: "Le client choisit la voiture souhaitée selon la disponibilité et la catégorie.",
    href: "/rent/vehicle",
  },
  {
    number: "1.3",
    title: "Données client",
    text: "Le client saisit ses données personnelles, son e-mail, son adresse privée et ajoute une photo du permis.",
    href: "/rent/customer",
  },
  {
    number: "1.4",
    title: "Paiement",
    text: "Le client procède au paiement et valide sa réservation.",
    href: "/rent/payment",
  },
  {
    number: "1.5",
    title: "Confirmation e-mail",
    text: "Envoi du code de réservation, confirmation des dates, contrat de location, facture et rappels futurs.",
    href: "/rent",
  },
  {
    number: "1.6",
    title: "Modification de réservation",
    text: "Le client se connecte avec code de réservation et mot de passe pour modifier dates ou véhicule sous conditions.",
    href: "/rent/manage",
  },
  {
    number: "1.7",
    title: "Prise en charge du véhicule",
    text: "Photos du véhicule, km, essence, remarques et signature avant départ.",
    href: "/rent/checkin",
  },
  {
    number: "1.8",
    title: "Confirmation après prise en charge",
    text: "Envoi du contrat de prise en charge avec preuves, facture et procédures utiles en cas de problème.",
    href: "/rent",
  },
  {
    number: "1.9",
    title: "Panne véhicule",
    text: "Déclaration simple d’une panne. Le véhicule devient non sélectionnable dans la liste.",
    href: "/rent/breakdown",
  },
] as const;
