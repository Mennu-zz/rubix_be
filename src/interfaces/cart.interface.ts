interface IUserAndProductInput {
    uid: string;
    pid: string;
}

export interface ICreateCartInput extends IUserAndProductInput {
    quantity: number;
}

export interface ICartProductInput extends ICreateCartInput {
    cid: string;
}

export interface ICartPurchaseUpdateInput extends ICartProductInput {
    purchaseId: string;
}
 
export interface ICartRemoveProductInput extends IUserAndProductInput {
    cid: string;
}

export interface IPurchaseProduct {
    pid: string;
    quantity: number;
    price: number;
    name: string;
    images: string[];
}

interface ICart {
    id: string;
    products: IPurchaseProduct[]
}

export interface ICartResponse {
    data: ICart
}