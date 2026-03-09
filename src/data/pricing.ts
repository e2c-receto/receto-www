export interface PricingPlan {
  name: string;
  price: number | null;
  originalPrice?: number;
  period?: string;
  description: string;
  subtitle?: string;
  annualInfo?: string;
  annualSaving?: string;
  featured: boolean;
  cta: { label: string; href: string };
  currentFeatures: string[];
  futureLabel?: string;
  futureFeatures: string[];
}

export const plans: PricingPlan[] = [
  {
    name: 'Découverte',
    price: null,
    description: 'Tester gratuitement Recèto sans engagement pendant 14 jours',
    subtitle: 'Sans engagement et sans carte bancaire',
    featured: false,
    cta: { label: 'Commencer', href: 'https://app.receto.fr' },
    currentFeatures: [
      '3 Recettes',
      '2 Fournisseurs',
      'Empreinte carbone',
    ],
    futureLabel: 'Disponible mi-2026',
    futureFeatures: [
      'Scans de factures illimités',
      'Support',
      '20 Scans de factures',
      'Export PDF',
      'Historique et comparaison',
    ],
  },
  {
    name: 'Pro',
    price: 39,
    originalPrice: 47,
    period: '/mois',
    description: 'Pour aller plus loin et augmenter encore plus vos marges',
    annualInfo: 'Engagement 12 mois — 468 €/An',
    annualSaving: 'Économisez 96,00 euros',
    featured: true,
    cta: { label: 'Commencer', href: 'https://app.receto.fr' },
    currentFeatures: [
      '25 Recettes',
      '10 Fournisseurs',
      'Empreinte carbone',
      'Support',
    ],
    futureLabel: 'Disponible mi-2026',
    futureFeatures: [
      'Scans de factures illimités',
      'Export PDF',
      'Historique et comparaison',
    ],
  },
  {
    name: 'Illimité',
    price: 69,
    originalPrice: 83,
    period: '/mois',
    description: 'Pour aller plus loin et augmenter encore plus vos marges',
    annualInfo: 'Engagement 12 mois — 828 €/An',
    annualSaving: 'Économisez 168,00 euros',
    featured: false,
    cta: { label: 'Commencer', href: 'https://app.receto.fr' },
    currentFeatures: [
      'Recettes illimitées',
      'Fournisseurs illimités',
      'Empreinte carbone',
      'Support',
    ],
    futureLabel: 'Disponible mi-2026',
    futureFeatures: [
      'Scans de factures illimités',
      'Export PDF',
      'Historique et comparaison',
    ],
  },
];
