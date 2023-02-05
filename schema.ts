export interface Node {
  id: String;
  name: String;
  description: { k: string };
  productType: { name: string; slug: string };
  slug: string;
  rating: number;
  thumbnail: { url: string; alt: string };
  pricing: {
    onSale: boolean;
    discount: {
      gross: { amount: number; currency: string };
    };
  };
  priceRange: {
    stop: {
      gross: {
        amount: number;
        currency: string;
      };
    };
  };
  media: {
    id: string;
    sortOrder: number;
    alt: string;
    url: string;
  };
}

export interface NodeObject {
  node: Node;
}

export interface ProductsType {
  edges: [NodeObject];
  totalCount: number;
}
