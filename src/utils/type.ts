type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
};

type HeaderType = {
  backAction: () => void;
  showBag: boolean;
  cartAction?: () => void;
  title?: string;
};

type RatingType = {
  rating: number;
  totalReview: number;
};

export type {Product, HeaderType, RatingType};
export default {};
