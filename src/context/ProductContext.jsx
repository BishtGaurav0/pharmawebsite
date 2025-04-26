import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://pharma-7c9f9-default-rtdb.firebaseio.com/products.json')
        if (response.data) {
          const dataArray = Object.values(response.data)
          setProducts(dataArray)
        } else {
          setProducts([])
        }
      } catch (err) {
        console.error('Failed to fetch products:', err)
        setError('Something went wrong. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };

  return (
    <ProductContext.Provider value={{ products, loading, error , getProductById }}>
      {children}
    </ProductContext.Provider>
  )
}
