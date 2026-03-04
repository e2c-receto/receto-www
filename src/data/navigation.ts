export const mainNav = [
  { label: 'Produit', href: '/produit' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
] as const;

export const ctaNav = {
  primary: { label: 'Essayer gratuitement', href: 'https://app.receto.fr' },
  secondary: { label: 'Demander une démo', href: '/demo' },
} as const;

export const footerNav = {
  product: [
    { label: 'Produit', href: '/produit' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Demander une démo', href: '/demo' },
  ],
  company: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Confidentialité', href: '/politique-confidentialite' },
  ],
} as const;
