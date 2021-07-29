import { orderResponse, OrderSchema } from "../../../interfaces/order.interface";
import { Order as OrderModel } from "../../../db/models";
import { ListCart } from "../../cart/dto/listCart.dto";

export class Order {

    static transformOrder({ id='', cartId, products, status, userAddress, createdAt }: OrderModel): OrderSchema {
        return {
            id,
            cartId,
            products: products.map(ListCart.transformProducts),
            status,
            userAddress,
            createdAt
        }
    }

    static toDTO(data: OrderModel): orderResponse {
        return {
            data: Order.transformOrder(data)
        }
    }
}