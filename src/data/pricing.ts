export interface PricingFeature {
  label: string;
  value?: string;
  included: 'yes' | 'limited' | 'no';
}

export interface PricingPlan {
  name: string;
  price: number | null;
  period?: string;
  description: string;
  featured: boolean;
  cta: { label: string; href: string };
  features: PricingFeature[];
}

export const plans: PricingPlan[] = [
  {
    name: 'Découverte',
    price: null,
    description: 'Testez Recèto sans engagement',
    featured: false,
    cta: { label: 'Essayer', href: 'https://app.receto.fr' },
    features: [
      { label: 'Recettes', value: '3', included: 'limited' },
      { label: 'Fournisseurs', value: '2', included: 'limited' },
      { label: 'Scan de factures', included: 'no' },
      { label: 'Empreinte carbone', value: 'aperçu', included: 'limited' },
      { label: 'Export PDF', value: 'filigrane', included: 'limited' },
      { label: 'Historique & comparaison', included: 'no' },
      { label: 'Support email', included: 'yes' },
    ],
  },
  {
    name: 'Essentiel',
    price: 39,
    period: '/mois',
    description: 'Pour les restaurateurs qui passent à l\'action',
    featured: true,
    cta: { label: 'Commencer', href: 'https://app.receto.fr' },
    features: [
      { label: 'Recettes', value: '25', included: 'yes' },
      { label: 'Fournisseurs', value: '10', included: 'yes' },
      { label: 'Scan de factures', value: '3/mois', included: 'limited' },
      { label: 'Empreinte carbone', value: 'complète', included: 'yes' },
      { label: 'Export PDF', included: 'yes' },
      { label: 'Historique & comparaison', included: 'no' },
      { label: 'Support email', included: 'yes' },
    ],
  },
  {
    name: 'Pro',
    price: 69,
    period: '/mois',
    description: 'Gestion complète, sans limites',
    featured: false,
    cta: { label: 'Passer Pro', href: 'https://app.receto.fr' },
    features: [
      { label: 'Recettes', value: 'illimitées', included: 'yes' },
      { label: 'Fournisseurs', value: 'illimités', included: 'yes' },
      { label: 'Scan de factures', value: 'illimités', included: 'yes' },
      { label: 'Empreinte carbone', value: 'complète', included: 'yes' },
      { label: 'Export PDF', included: 'yes' },
      { label: 'Historique & comparaison', included: 'yes' },
      { label: 'Support prioritaire', included: 'yes' },
    ],
  },
];
