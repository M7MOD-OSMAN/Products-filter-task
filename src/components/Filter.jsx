import React from 'react'
import { Range } from 'react-range'

const Filter = ({ filters, onFilterChange }) => {
  const categories = ['Electronics', 'Appliances', 'Sports', 'Fashion']
  const brands = [
    'TechCo',
    'HomeBrew',
    'ActiveGear',
    'UrbanStyle',
    'AudioPro',
    'CoffeeLuxe',
    'OutdoorX',
    'SunShades',
    'FitLife',
    'KitchenAid',
  ]
  const maxPrice = 1300

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          value={filters.category}
          onChange={e => onFilterChange('category', e.target.value)}
          className="block w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Brand</label>
        <select
          value={filters.brand}
          onChange={e => onFilterChange('brand', e.target.value)}
          className="block w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price Range</label>
        <Range
          step={1}
          min={0}
          max={maxPrice}
          values={filters.priceRange}
          onChange={values => onFilterChange('priceRange', values)}
          renderTrack={({ props, children }) => (
            <div {...props} className=" bg-gray-300 rounded-lg w-100 h-2">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-4 w-4 bg-blue-500 rounded-full"
              style={{ height: '16px', width: '16px' }}
            />
          )}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default Filter
