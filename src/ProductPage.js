import React from 'react';
import Products from './Products';
import productData from './Product.json'; // Assuming product data is stored in a JSON file
import './Product.css'
const ProductsPage = () => {
  return (
    <div>
      <h1 className='text-3xl justify-center text-center mt-20 text-black font-bold '>Our Products</h1>
      <div className="product-list">
        {productData.map(product => (
          <Products key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;