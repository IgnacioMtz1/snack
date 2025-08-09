import React, { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import StoreInfoModal from './StoreInfoModal';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [showStoreInfo, setShowStoreInfo] = useState(false);

  return (
    <>
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto">
          {/* Header principal */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black text-lg font-bold">ICA</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">ICA SNACK</h1>
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span>🏪 Tienda • Licuados</span>
                  <span>🚚 DOMICILIOS Y DESAYUNOS</span>
                  <span>📞 Promociones</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowStoreInfo(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Más información"
              >
                <Info className="w-5 h-5 text-gray-600" />
              </button>
              
              <button 
                onClick={onCartClick}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <StoreInfoModal 
        isOpen={showStoreInfo}
        onClose={() => setShowStoreInfo(false)}
      />
    </>
  );
};

export default Header;