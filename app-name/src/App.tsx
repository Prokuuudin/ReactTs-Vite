import React from 'react';
// import { useState } from 'react'
import './App.css'
// import ProductCard from './components/ProductCard/ProductCard'
// import Calculator from './components/Calculator/Calculator'
// import ProductCategories from './components/ProductCategories/ProductCategories';
import DesignSystem from './components/DesignSystem/DesignSystem';

// type Product = {
//   name: string;
//   price: number;
//   description: string;
// };

// const product: Product = {
//   name: "Продукт 1",
//   price: 100,
//   description: "Описание продукта 1",
// };

// const handleAddToCart = (product: Product) => {
//   console.log("Товар добавлен в корзину:", product);
// };

const App: React.FC = () => {  
  return (
    <>
        <DesignSystem/>
        {/* <ProductCategories/> */}
        {/* <Calculator /> */}
        {/* <ProductCard product={product} addToCart={handleAddToCart}/>         */}
    </>      
  )
}
export default App
