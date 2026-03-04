import { url } from '../utils/url';

export const mainNav = [
  { label: 'Produit', href: url('/produit') },
  { label: 'Tarifs', href: url('/tarifs') },
  { label: 'À propos', href: url('/a-propos') },
  { label: 'Blog', href: url('/blog') },
];

export const ctaNav = {
  primary: { label: 'Essayer gratuitement', href: 'https://app.receto.fr' },
  secondary: { label: 'Demander une démo', href: url('/demo') },
};

export const footerNav = {
  product: [
    { label: 'Produit', href: url('/produit') },
    { label: 'Tarifs', href: url('/tarifs') },
    { label: 'Demander une démo', href: url('/demo') },
  ],
  company: [
    { label: 'À propos', href: url('/a-propos') },
    { label: 'Blog', href: url('/blog') },
  ],
  legal: [
    { label: 'Mentions légales', href: url('/mentions-legales') },
    { label: 'CGV', href: url('/cgv') },
    { label: 'Confidentialité', href: url('/politique-confidentialite') },
  ],
};
