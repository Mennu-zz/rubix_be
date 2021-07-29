import { Cart } from "../../../db/models/cart";
import { PurchaseProduct } from "../../../db/models/purchaseProduct";
import { ICartResponse } from "../../../interfaces/cart.interface";

export class ListCart {
    public static transformProducts({ id, productId, quantity, price, product }: PurchaseProduct){
        return {
            id,
            pid: productId,
            quantity,
            price,
            name: product.name,
            images: product.images?.split(','),
        }
    }
    public static toDTO({ id='', purchaseProducts=[] }: Cart): ICartResponse {
        return {
            data: {
                id,
                products: purchaseProducts.map(ListCart.transformProducts)
            }
        }
    }
}