import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glowing?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glowing = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl border border-dark-700 bg-dark-900/50 backdrop-blur-md p-6 transition-all duration-300',
          glowing && 'border-accent-cyan shadow-glow',
          hover && 'hover:border-accent-cyan hover:shadow-glow hover:bg-dark-900/80',
          className
        )}
        whileHover={hover ? { y: -4 } : undefined}
        transition={{ duration: 0.3 }}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }