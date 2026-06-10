'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { getProducts } from '@/lib/woocommerce'

interface Product {
  id: number
  name: string
  slug: string
  price: string
  description: string
  images: Array<{ src: string }>
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts({ per_page: 100 })
        setProducts(
          data.map((p) => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            price: p.price,
            description: p.short_description || p.description.substring(0, 100),
            images: p.images,
          }))
        )
      } catch (err) {
        setError('Failed to load products')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4">Research Compounds</h1>
          <p className="text-dark-300 max-w-2xl">
            All products are research-use-only, triple-tested for purity, and shipped cold-chain.
          </p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="flex items-center justify-center min-h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 border-3 border-dark-700 border-t-accent-cyan rounded-full"
            />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-accent-rose text-lg">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                price={product.price}
                description={product.description}
                image={product.images?.[0]?.src || 'https://via.placeholder.com/400x400'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
