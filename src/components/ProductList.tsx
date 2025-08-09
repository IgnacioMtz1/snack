import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { products } from '../data/products';

interface ProductListProps {
  category: string;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ category, onAddToCart }) => {
  const filteredProducts = products.filter(product => product.category === category);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'bebidas': return 'Bebidas';
      case 'jugos-licuados': return 'Jugos y Licuados';
      case 'chilaquiles-desayunos': return 'CHILAQUILES Y DESAYUNO';
      case 'postres': return 'Postres';
      default: return 'Productos';
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          {getCategoryTitle(category)}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;