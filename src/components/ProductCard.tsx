import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-gray-800 text-sm leading-tight">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {(product.brand || product.size) && (
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            {product.brand && <span>{product.brand}</span>}
            {product.size && <span>{product.size}</span>}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold text-gray-800">
            ${product.price}.00
          </span>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center border rounded-lg bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-3 h-3 text-gray-600" />
              </button>
              <span className="px-2 py-1 text-xs font-medium min-w-[24px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-3 h-3 text-gray-600" />
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white p-1.5 rounded-full transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;