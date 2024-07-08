import React from 'react'

const getRandomImage = category => {
  const images = {
    Electronics: 'https://source.unsplash.com/random/400x300?electronics',
    Appliances: 'https://source.unsplash.com/random/400x300?appliances',
    Sports: 'https://source.unsplash.com/random/400x300?sports',
    Fashion: 'https://source.unsplash.com/random/400x300?fashion',
  }
  return (
    images[category] || 'https://source.unsplash.com/random/400x300?product'
  )
}

const ProductList = ({ products }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-500">No results found</p>
        ) : (
          products.map(product => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-1">
                  Category: {product.category}
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                  Price: ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-500">Brand: {product.brand}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList
