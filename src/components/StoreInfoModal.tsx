import React, { useState, useEffect } from 'react';
import { X, Facebook, Instagram, MapPin } from 'lucide-react';
import { getRandomStoreInfo } from '../data/storeInfo';
import { StoreInfo } from '../types';

interface StoreInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoreInfoModal: React.FC<StoreInfoModalProps> = ({ isOpen, onClose }) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStoreInfo(getRandomStoreInfo());
    }
  }, [isOpen]);

  if (!isOpen || !storeInfo) return null;

  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Información</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Horario */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Horario:
            </h3>
            <div className="space-y-2">
              {Object.entries(storeInfo.hours).map(([day, hours]) => (
                <div 
                  key={day}
                  className={`flex flex-col items-center py-2 rounded-lg ${
                    day === todayCapitalized 
                      ? 'bg-red-100 text-red-600 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-sm">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Redes Sociales:
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href={storeInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={storeInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Ubicación:
            </h3>
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="w-12 h-12 text-gray-400" />
              <p className="text-sm text-gray-600 text-center">
                {storeInfo.address}
              </p>
              <p className="text-sm text-gray-500">
                Versión 1.0.2
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
            <p className="text-sm">
              Contrata <span className="font-semibold">Pfick</span> aquí
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoModal;