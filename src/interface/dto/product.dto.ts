export interface ProductDto {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  image: string[];
  short_description: string;
  rating: number;
  tags: string[];
  category: string;
  links: {
    topvalue?: string;
    shopee?: string;
    lazada?: string;
    jd?: string;
  };
  description: string;
}
