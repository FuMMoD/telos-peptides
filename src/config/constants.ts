// API Configuration
export const API_CONFIG = {
  WOOCOMMERCE_URL: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || 'https://telos-peptides.com',
  WOOCOMMERCE_KEY: process.env.WOOCOMMERCE_KEY || '',
  WOOCOMMERCE_SECRET: process.env.WOOCOMMERCE_SECRET || '',
}

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
  KLAVIYO_KEY: process.env.NEXT_PUBLIC_KLAVIYO_KEY || '',
  SEGMENT_KEY: process.env.NEXT_PUBLIC_SEGMENT_KEY || '',
}

// Affiliate Configuration
export const AFFILIATE_CONFIG = {
  SHAREASALE_ID: process.env.NEXT_PUBLIC_SHAREASALE_ID || '',
  IMPACT_ID: process.env.NEXT_PUBLIC_IMPACT_ID || '',
}

// Products
export const FEATURED_PRODUCTS = [
  'bac-water',
  'bpc-157',
  'ghk-cu',
  'sermorelin',
  'ipamorelin-cjc',
  'tesamorelin',
]

// Site Configuration
export const SITE_CONFIG = {
  name: 'Telos Peptides',
  description: 'Research-grade peptides for scientific laboratories. Triple-tested, cGMP certified, shipped cold-chain.',
  url: 'https://telos-peptides.com',
  ogImage: 'https://telos-peptides.com/og-image.png',
  twitterHandle: '@teloswellness',
}

// Navigation
export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  {
    label: 'Learn More',
    href: '#',
    submenu: [
      { label: 'What Are Peptides', href: '/learn/what-are-peptides' },
      { label: 'GLP-3, GLP-2 & BAC', href: '/learn/glp-protocols' },
      { label: 'About Telos', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  { label: 'Affiliate Login', href: '/affiliate' },
]

// Trust Signals
export const TRUST_SIGNALS = [
  {
    icon: '✧',
    title: 'cGMP Origin',
    description: 'Peptides produced in ISO-9001 facilities following cGMP principles.',
  },
  {
    icon: '✦',
    title: 'Triple-Filtered',
    description: '0.22 µm filtration and gamma irradiation safeguard sterility.',
  },
  {
    icon: '♡',
    title: '3rd-Party Tested',
    description: 'Each lot validated by independent lab for purity, identity, and endotoxin.',
  },
  {
    icon: '⟡',
    title: 'Research Focus',
    description: 'Every product engineered for laboratory precision and reproducibility.',
  },
]
