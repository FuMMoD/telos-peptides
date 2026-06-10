import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (id: number, quantity: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  total: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (id: number, quantity: number) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
              ),
            }
          }
          // Note: In a real app, fetch product details from API
          return {
            items: [
              ...state.items,
              {
                id,
                name: 'Product',
                price: '0',
                quantity,
                image: '',
              },
            ],
          }
        })
      },
      removeItem: (id: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      updateQuantity: (id: number, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }))
      },
      clearCart: () => {
        set({ items: [] })
      },
      total: () => {
        return get().items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
      },
    }),
    {
      name: 'telos-cart',
    }
  )
)
