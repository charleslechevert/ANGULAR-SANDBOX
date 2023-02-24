export interface Material {
    id?: number; 
    name: string;
    cost: number;
    greenCost: number; 
    quality: string; 
    supplier: object;
    shippingDate: Date;
}

export interface Supplier {
    id?: number; 
    name: string;
    country: string; 
    rating: string; 
}