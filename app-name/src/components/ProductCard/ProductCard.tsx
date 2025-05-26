import React from 'react';

export interface Product {
  name: string;
  price: number;
  description: string;
}

 interface ProductCardOperations{
   product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardOperations> = ({ product, addToCart }) =>{
  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold text-green-700 mb-4">{product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => addToCart(product)}
        >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;
