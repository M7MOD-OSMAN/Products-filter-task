import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductList from './components/ProductList'
import Filter from './components/Filter'

const App = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    priceRange: [0, 1300],
  })

  useEffect(() => {
    axios
      .get('/products.json')
      .then(response => {
        setProducts(response.data)
        setFilteredProducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching the products data', error)
      })
  }, [])

  useEffect(() => {
    let filtered = products

    if (filters.category) {
      filtered = filtered.filter(
        product => product.category === filters.category,
      )
    }

    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand)
    }

    filtered = filtered.filter(
      product =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    )

    setFilteredProducts(filtered)
  }, [filters, products])

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Product Filter</h1>
        <Filter
          filters={filters}
          setFilters={setFilters}
          onFilterChange={handleFilterChange}
        />

        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default App
