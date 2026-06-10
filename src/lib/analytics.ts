import { ANALYTICS_CONFIG } from '@/config/constants'

// Google Analytics 4 Events
export const GA4_EVENTS = {
  pageView: (path: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title,
      })
    }
  },
  viewItem: (product: { id: string; name: string; price: string; category: string }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            item_category: product.category,
          },
        ],
      })
    }
  },
  addToCart: (product: { id: string; name: string; price: string; quantity: number }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'add_to_cart', {
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            quantity: product.quantity,
          },
        ],
      })
    }
  },
  purchase: (order: { id: string; value: number; tax: number; shipping: number; items: any[] }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: order.id,
        value: order.value,
        tax: order.tax,
        shipping: order.shipping,
        items: order.items,
      })
    }
  },
}

// Klaviyo Events
export const klaviyoTrack = (event: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.klaviyo) {
    window.klaviyo('track', event, properties)
  }
}

// Affiliate Tracking
export const trackAffiliateClick = () => {
  if (typeof window !== 'undefined') {
    const img = new Image(1, 1)
    img.src = `https://www.shareasale.com/sale.cms?merchandiseID=&transactionID=${Date.now()}&amount=&tracking=${process.env.NEXT_PUBLIC_SHAREASALE_ID || ''}&ref=${document.referrer}&click=${window.location.href}`
  }
}

// Pixel Tracking
export const trackConversion = (value: number, orderId: string) => {
  if (typeof window !== 'undefined' && ANALYTICS_CONFIG.GA4_ID) {
    GA4_EVENTS.purchase({
      id: orderId,
      value,
      tax: 0,
      shipping: 0,
      items: [],
    })
  }
}

declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: Record<string, any>) => void
    klaviyo?: (command: string, event: string, properties?: Record<string, any>) => void
  }
}
