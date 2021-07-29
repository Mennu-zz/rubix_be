import { Product } from "../db/models";

export interface ProductTypeResponse {
    id: string;
    type: string;
    quantity: number;
}

export interface ProductResponse {
    id: string;
    name: string;
    price: number;
    types: ProductTypeResponse[];
    details: string;
    images: string[];
}

export interface GetProductQueryResponse {
    rows: Product[],
    count: number;
}

export interface GetProductsResponse {
    data: {
        products: ProductResponse[];
        totalProducts: number;
    }
}

export interface GetProductResponse {
    data: ProductResponse
}