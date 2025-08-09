import { StoreInfo } from '../types';

// Ubicaciones aleatorias en García, NL
const garciaLocations = [
  "Av. Miguel Alemán 1234, Centro, García, N.L.",
  "Calle Morelos 567, Col. Benito Juárez, García, N.L.",
  "Blvd. García Salinas 890, Col. Las Flores, García, N.L.",
  "Av. Revolución 345, Col. Moderna, García, N.L.",
  "Calle Hidalgo 678, Col. Centro, García, N.L.",
  "Av. Constitución 901, Col. Independencia, García, N.L.",
  "Calle Allende 234, Col. Reforma, García, N.L.",
  "Blvd. Solidaridad 456, Col. Nueva García, García, N.L."
];

export const getRandomStoreInfo = (): StoreInfo => {
  const randomAddress = garciaLocations[Math.floor(Math.random() * garciaLocations.length)];
  
  return {
    name: "ICA SNACK",
    address: randomAddress,
    phone: "(81) 8123-4567",
    hours: {
      "Lunes": "08:00h-22:00h",
      "Martes": "08:00h-22:00h", 
      "Miércoles": "08:15h-22:00h",
      "Jueves": "08:00h-22:00h",
      "Viernes": "08:00h-22:00h",
      "Sábado": "08:00h-22:00h",
      "Domingo": "08:00h-22:00h"
    },
    socialMedia: {
      facebook: "https://facebook.com/icasnack",
      instagram: "https://instagram.com/icasnack"
    }
  };
};