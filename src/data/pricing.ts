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
    cta: { label: 'Essayer gratuitement', href: '/demo' },
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
    description: 'L\'essentiel pour piloter la rentabilité de votre restaurant',
    annualInfo: 'Engagement 12 mois — 468 €/An',
    annualSaving: 'Économisez 96,00 euros',
    featured: true,
    cta: { label: 'Demander une démo', href: '/demo' },
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
    description: 'Multi-établissements, sans limites, support prioritaire',
    annualInfo: 'Engagement 12 mois — 828 €/An',
    annualSaving: 'Économisez 168,00 euros',
    featured: false,
    cta: { label: 'Demander une démo', href: '/demo' },
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
