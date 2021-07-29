import { Order, UserAddress } from "../db/models";
import { IPurchaseProduct } from "./cart.interface";

export interface CreateOrder {
    cartId: string;
    uid: string;
    userAddressId: string;
}

export interface OrderSchema {
    id: string;
    cartId: string;
    products: IPurchaseProduct[];
    status: string;
    userAddress: UserAddress;
    createdAt: string;
}

export interface orderResponse {
    data: OrderSchema
}

export interface orderListService {
    rows: Order[];
    count: number;
}

export interface orderListResponse {
    data: {
        orders: OrderSchema[];
        count: number;
    }
}