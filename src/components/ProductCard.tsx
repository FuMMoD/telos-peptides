'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from './Card'
import { Button } from './Button'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'

interface ProductCardProps {
  id: number
  name: string
  slug: string
  price: string
  image: string
  description: string
}

export function ProductCard({ id, name, slug, price, image, description }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)
    try {
      await addItem(id, 1)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden">
        <Link href={`/shop/${slug}`}>
          <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-dark-800">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        <Link href={`/shop/${slug}`} className="group/link">
          <h3 className="text-lg font-semibold text-white group-hover/link:text-accent-cyan transition-colors duration-300">
            {name}
          </h3>
        </Link>

        <p className="text-sm text-dark-300 mt-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-accent-gold">${price}</span>
          <Button
            size="sm"
            variant="primary"
            onClick={handleAddToCart}
            isLoading={isAdding}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
