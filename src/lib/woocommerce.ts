import axios from 'axios'
import { API_CONFIG } from '@/config/constants'

const client = axios.create({
  baseURL: `${API_CONFIG.WOOCOMMERCE_URL}/wp-json/wc/v3`,
  auth: {
    username: API_CONFIG.WOOCOMMERCE_KEY,
    password: API_CONFIG.WOOCOMMERCE_SECRET,
  },
})

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  short_description: string
  price: string
  regular_price: string
  sale_price: string
  images: Array<{ id: number; src: string; alt: string }>
  attributes: Array<{ name: string; options: string[] }>
  stock_quantity: number
  sku: string
}

export interface CartItem {
  key: string
  product_id: number
  product_name: string
  quantity: number
  price: string
}

export interface Order {
  id: number
  order_key: string
  status: string
  currency: string
  total: string
  billing: { email: string; phone: string }
  line_items: Array<{ name: string; quantity: number; total: string }>
}

// Products
export async function getProducts(params?: Record<string, any>) {
  try {
    const response = await client.get('/products', { params })
    return response.data as Product[]
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export async function getProduct(id: string | number) {
  try {
    const response = await client.get(`/products/${id}`)
    return response.data as Product
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

export async function searchProducts(query: string) {
  try {
    const response = await client.get('/products', {
      params: { search: query, per_page: 20 },
    })
    return response.data as Product[]
  } catch (error) {
    console.error('Error searching products:', error)
    throw error
  }
}

// Orders (for admin)
export async function getOrders(params?: Record<string, any>) {
  try {
    const response = await client.get('/orders', { params })
    return response.data as Order[]
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw error
  }
}

export async function getOrder(id: number) {
  try {
    const response = await client.get(`/orders/${id}`)
    return response.data as Order
  } catch (error) {
    console.error('Error fetching order:', error)
    throw error
  }
}

// Categories
export async function getCategories() {
  try {
    const response = await client.get('/products/categories')
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export default client
