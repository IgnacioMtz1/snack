import { Product } from '../types';

export const products: Product[] = [
  // Bebidas
  {
    id: 'agua-pepinillos-500',
    name: 'Agua Pepinillos 500 ml',
    description: 'Agua natural con pepinillos',
    price: 40,
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '500ml'
  },
  {
    id: 'joya-frescura-400',
    name: 'Joya Frescura 400 ml',
    description: 'Bebida refrescante sabor frutas',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '400ml'
  },
  {
    id: 'agua-tamarindo-500',
    name: 'Agua Tamarindo 500 ml',
    description: 'Agua fresca de tamarindo natural',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '500ml'
  },
  {
    id: 'coca-cola-light-600',
    name: 'Coca Cola Light 600 ml',
    description: 'Refresco de cola sin azúcar',
    price: 40,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '600ml'
  },
  {
    id: 'coca-cola-sin-azucar-600',
    name: 'Coca Cola Sin Azúcar 600 ml',
    description: 'Refresco de cola sin azúcar',
    price: 35,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '600ml'
  },
  {
    id: 'joya-frescura-600',
    name: 'Joya Frescura 600 ml',
    description: 'Bebida refrescante sabor frutas',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '600ml'
  },
  {
    id: 'agua-limon-600',
    name: 'Agua Limón 600 ml',
    description: 'Agua fresca de limón natural',
    price: 40,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '600ml'
  },
  {
    id: 'agua-horchata',
    name: 'Agua Horchata',
    description: 'Agua fresca de horchata tradicional',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas'
  },
  {
    id: 'joya-maracuya-400',
    name: 'Joya Maracuyá 400 ml',
    description: 'Bebida sabor maracuyá',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '400ml'
  },
  {
    id: 'agua-natural',
    name: 'Agua Natural',
    description: 'Agua purificada natural',
    price: 40,
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas'
  },
  {
    id: 'coca-cola-regular-600',
    name: 'Coca Cola Regular 600 ml',
    description: 'Refresco de cola clásico',
    price: 40,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bebidas',
    size: '600ml'
  },

  // Jugos y Licuados
  {
    id: 'licuado-fresa',
    name: 'Licuado',
    description: 'Licuado cremoso sabor fresa',
    price: 45,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados',
    brand: 'ANNA'
  },
  {
    id: 'licuado-papaya',
    name: 'Licuado de papaya',
    description: 'Licuado natural de papaya fresca',
    price: 45,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    description: 'Bebida especial para diabéticos',
    price: 45,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'jugo-detox-citricos',
    name: 'Jugo detox cítricos',
    description: 'Jugo detox con cítricos naturales',
    price: 45,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'jugo-premium-alfa',
    name: 'Jugo premium alfa',
    description: 'Jugo premium de frutas selectas',
    price: 45,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'licuado-griego',
    name: 'Licuado griego',
    description: 'Licuado estilo griego con yogurt',
    price: 45,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'licuado-mango',
    name: 'Licuado de Mango',
    description: 'Licuado cremoso de mango natural',
    price: 40,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'jugo-chia',
    name: 'Jugo Chía',
    description: 'Jugo natural con semillas de chía',
    price: 45,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'fatiga',
    name: 'FATIGA',
    description: 'Bebida energizante natural',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'indigestion',
    name: 'Indigestión',
    description: 'Bebida natural para la digestión',
    price: 40,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },
  {
    id: 'activia',
    name: 'Activia',
    description: 'Bebida probiótica saludable',
    price: 45,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'jugos-licuados'
  },

  // Chilaquiles y Desayunos
  {
    id: 'machacado-huevo',
    name: 'Machacado con huevo',
    description: 'Machacado tradicional con huevo revuelto',
    price: 90,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'sandwich-premium',
    name: 'Sandwich Premium',
    description: 'Sandwich gourmet con ingredientes premium',
    price: 85,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'sandwich-jamon-queso',
    name: 'Sandwich de jamón y queso',
    description: 'Sandwich clásico de jamón y queso',
    price: 65,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'chilaquiles-salsa-verde',
    name: 'Chilaquiles con salsa verde',
    description: 'Chilaquiles tradicionales con salsa verde',
    price: 90,
    image: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'croissant-jamon',
    name: 'Croissant de jamón',
    description: 'Croissant francés relleno de jamón',
    price: 65,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'huevos-guisado',
    name: 'Huevos al Guisado',
    description: 'Huevos preparados al guisado tradicional',
    price: 70,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'papas-hashbrown',
    name: 'Papas Hashbrown',
    description: 'Papas doradas estilo hashbrown',
    price: 25,
    image: 'https://images.pexels.com/photos/162763/delicious-garnish-close-up-potato-162763.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'croissant-ensalada',
    name: 'Croissant con Ensalada',
    description: 'Croissant fresco con ensalada mixta',
    price: 55,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'sandwich-ensalada',
    name: 'Sandwich con Ensalada',
    description: 'Sandwich saludable con ensalada fresca',
    price: 65,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'cake-regular',
    name: 'Cake Regular',
    description: 'Pastel casero tradicional',
    price: 35,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'gla-biscuit',
    name: 'Gla Biscuit',
    description: 'Galleta glaseada artesanal',
    price: 45,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'mini-muffins',
    name: 'Mini muffins',
    description: 'Mini muffins de diferentes sabores',
    price: 50,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'cartel-fruta-miel',
    name: 'Cartel de Fruta con Miel',
    description: 'Cartel de frutas frescas con miel',
    price: 55,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'chilaquiles-cebolla',
    name: 'Chilaquiles con cebolla',
    description: 'Chilaquiles tradicionales con cebolla',
    price: 140,
    image: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'cartel-fruta',
    name: 'Cartel de Fruta',
    description: 'Cartel de frutas frescas de temporada',
    price: 45,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'chilaquiles-pollo',
    name: 'CHILAQUILES CON POLLO',
    description: 'Chilaquiles con pollo desmenuzado',
    price: 80,
    image: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },
  {
    id: 'chilaquiles-huevo',
    name: 'Chilaquiles con huevo',
    description: 'Chilaquiles tradicionales con huevo',
    price: 60,
    image: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chilaquiles-desayunos'
  },

  // Postres
  {
    id: 'pastel-santana',
    name: 'Pastel Santana',
    description: 'Pastel especial de la casa',
    price: 60,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'postres'
  },
  {
    id: 'pastel-tortuga',
    name: 'Pastel Tortuga',
    description: 'Pastel de chocolate con nueces',
    price: 60,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'postres'
  },
  {
    id: 'pastel-milky-way',
    name: 'Pastel Milky Way',
    description: 'Pastel inspirado en Milky Way',
    price: 60,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'postres'
  },
  {
    id: 'cheesecake-oreo',
    name: 'Cheesecake Oreo',
    description: 'Cheesecake cremoso con galletas Oreo',
    price: 60,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'postres'
  },
  {
    id: 'cheesecake-fresa',
    name: 'Cheesecake Fresa',
    description: 'Cheesecake con fresas naturales',
    price: 60,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'postres'
  }
];