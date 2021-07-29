import { orderListResponse, orderListService } from "../../../interfaces/order.interface";
import { Order as OrderDTO } from "./order.dto";

export class OrderList {
    static toDTO({ rows, count }: any): orderListResponse{
        return {
            data: {
                orders: rows.map(OrderDTO.transformOrder),
                count,
            }
        }
    }
}