export interface Material {
  id?: number;
  label: string;
  cost: number;
  greencost: number;
  quality: string;
  supplier: object;
  shippingdate: Date;
}

export interface Supplier {
  id?: number;
  label: string;
  country: string;
  rating: string;
}
