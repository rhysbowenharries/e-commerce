export interface Node {
  id: string;
  name: string;
  // TODO: Fix this!
  description: { k: JSON };
  productType: { name: string; slug: string };
  thumbnail: { url: string; alt: string };
  pricing: {
    priceRange: {
      stop: {
        gross: {
          amount: number;
          currency: string;
        };
      };
    };
  };
}

export interface NodeObject {
  node: Node;
}

export interface ProductsType {
  edges: [NodeObject];
  totalCount: number;
}
