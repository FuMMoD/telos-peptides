# Telos Peptides - Modern E-Commerce Website

A cinematic, luxury-designed e-commerce website for Telos Peptides built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Cinematic Dark Aesthetic**: Premium dark navy/black color scheme with gold and cyan accents
- **Smooth Animations**: Framer Motion animations throughout for cinematic feel
- **Responsive Design**: Mobile-first approach with full responsive support
- **Luxury Typography**: Playfair Display serif headings for premium feel
- **Glass Morphism**: Frosted glass UI elements with backdrop blur
- **Glowing Effects**: Cyan and gold glow effects for premium product showcase

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom color system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand (cart state)
- **E-Commerce**: WooCommerce REST API integration
- **Analytics**: Google Analytics 4, Klaviyo, Segment

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Homepage
│   ├── shop/           # Product catalog
│   ├── cart/           # Shopping cart
│   └── layout.tsx      # Root layout
├── components/          # Reusable React components
│   ├── Hero.tsx        # Hero section with animations
│   ├── Navigation.tsx   # Header navigation
│   ├── ProductCard.tsx  # Product card component
│   ├── Button.tsx       # Styled button component
│   └── Footer.tsx       # Footer component
├── lib/                 # Utility functions
│   ├── woocommerce.ts   # WooCommerce API client
│   ├── analytics.ts     # Analytics tracking
│   └── utils.ts         # Helper functions
├── hooks/               # Custom React hooks
│   └── useCart.ts       # Shopping cart hook
├── config/              # Configuration
│   └── constants.ts     # Site-wide constants
└── styles/              # Global styles
    └── globals.css      # Tailwind directives
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/telos-peptides.git
cd telos-peptides
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### WooCommerce Integration

1. Generate REST API credentials in WooCommerce:
   - Settings → Advanced → REST API
   - Create new key with appropriate permissions
   
2. Add to `.env.local`:
```
NEXT_PUBLIC_WOOCOMMERCE_URL=https://your-store.com
WOOCOMMERCE_KEY=your_key
WOOCOMMERCE_SECRET=your_secret
```

### Analytics Setup

#### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables

#### Klaviyo Integration
1. Get Klaviyo API Key
2. Implement Klaviyo script in layout
3. Track events via `klaviyoTrack()`

#### Affiliate Tracking
- ShareASale: Add merchant ID
- Impact: Add account ID
- Custom pixels supported

## 🎯 Features

### Core Features
- ✅ Product catalog from WooCommerce
- ✅ Shopping cart with persistent storage
- ✅ Responsive product grid
- ✅ Cinematic animations throughout
- ✅ Dark luxury design system
- ✅ Mobile-optimized navigation
- ✅ Fast image loading with Next.js Image optimization

### Planned Features
- 🔄 Checkout experience
- 🔄 Product filtering & search
- 🔄 Customer reviews
- 🔄 Wishlist functionality
- 🔄 Email newsletter integration
- 🔄 Affiliate dashboard
- 🔄 Admin analytics dashboard

## 📊 Analytics & Tracking

### Implemented Events

**Google Analytics 4:**
- Page views
- Product views (`viewItem`)
- Add to cart (`addToCart`)
- Purchase (`purchase`)

**Klaviyo:**
- Custom event tracking
- Email signup integration
- Customer tracking

**Affiliate:**
- Click tracking
- Conversion pixels
- Commission tracking

## 🎨 Design System

### Colors
- **Primary**: Dark Navy (`#1a1515`) to Black
- **Accents**: Cyan (`#00d9ff`), Gold (`#d4af37`), Purple (`#9d4edd`)
- **Text**: White, with dark grays for secondary

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: IBM Plex Mono (monospace)

### Components

#### Button Variants
- `primary`: Gradient cyan-purple with glow
- `secondary`: Dark with cyan border
- `outline`: Gold border outline
- `ghost`: Transparent with hover effect

#### Animations
- `fadeIn`: Fade in from 0 to 100% opacity
- `slideUp`: Slide up with fade
- `slideInLeft/Right`: Lateral slide in
- `glow`: Pulsing glow effect

## 🔒 Security

- API keys stored in environment variables only
- HTTPS enforced in production
- CSRF protection via Next.js
- Input validation with Zod
- No sensitive data in client code

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in project settings
4. Deploy automatically on push

```bash
npm run build
npm start
```

### Self-Hosted

```bash
npm run build
npm start
```

## 📈 Performance

- Lighthouse score targets:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 100

- Image optimization with Next.js Image
- Code splitting per route
- Lazy loading for below-fold content
- Optimized fonts with `font-display: swap`

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type check
npm run type-check
```

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

For questions or issues:
- Email: support@telos-peptides.com
- Website: https://telos-peptides.com
- GitHub Issues: [Project Issues](https://github.com/yourusername/telos-peptides/issues)

## 🎯 Next Steps

1. **Connect WooCommerce API** with your credentials
2. **Set up Analytics** (GA4, Klaviyo, Segment)
3. **Configure Affiliate Program** links
4. **Deploy to Vercel** or your hosting platform
5. **Set up Domain** and SSL certificate
6. **Test Checkout Flow** end-to-end
7. **Monitor Analytics** and optimize

---

Built with ❤️ for Telos Peptides
