export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  size?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
  };
}