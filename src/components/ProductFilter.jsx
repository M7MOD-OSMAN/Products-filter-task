import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductFilter = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')

  useEffect(() => {
    axios.get('/products.json').then(response => {
      const data = response.data
      const categories = Array.from(
        new Set(data.map(product => product.category)),
      )
      const brands = Array.from(new Set(data.map(product => product.brand)))
      setCategories(categories)
      setBrands(brands)
    })
  }, [])

  useEffect(() => {
    onFilterChange({ selectedCategory, minPrice, maxPrice, selectedBrand })
  }, [selectedCategory, minPrice, maxPrice, selectedBrand])

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="price-range"
          className="block text-sm font-medium text-gray-700"
        >
          Price Range:
        </label>
        <input
          type="number"
          id="min-price"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
        />
        <input
          type="number"
          id="max-price"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Brand:
        </label>
        <select
          id="brand"
          value={selectedBrand}
          onChange={e => setSelectedBrand(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => {
          setSelectedCategory('')
          setMinPrice('')
          setMaxPrice('')
          setSelectedBrand('')
        }}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default ProductFilter
