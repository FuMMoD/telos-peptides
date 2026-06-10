/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'telos-peptides.com',
      'woocommerce.api',
      'cdn.shopify.com',
      'temp.4d4f16c61d89ec64e760039c4ec50717.r2.cloudflarestorage.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
}

module.exports = nextConfig