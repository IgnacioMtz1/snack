import React from 'react';

interface MenuCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'bebidas', name: 'Bebidas', color: 'bg-blue-100 text-blue-800' },
  { id: 'jugos-licuados', name: 'Jugos y Licuados', color: 'bg-pink-100 text-pink-800' },
  { id: 'chilaquiles-desayunos', name: 'Chilaquiles y Desayunos', color: 'bg-orange-100 text-orange-800' },
  { id: 'postres', name: 'Postres', color: 'bg-purple-100 text-purple-800' },
];

const MenuCategories: React.FC<MenuCategoriesProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-md mx-auto">
        <div className="flex overflow-x-auto pb-2 px-4 space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-yellow-400 text-black shadow-md'
                  : `${category.color} hover:shadow-sm`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;