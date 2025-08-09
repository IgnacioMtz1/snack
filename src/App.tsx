import React, { useState } from 'react';
import Header from './components/Header';
import MenuCategories from './components/MenuCategories';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartItem, Product } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('bebidas');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <MenuCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ProductList 
        category={selectedCategory}
        onAddToCart={addToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;