import createHttpError from "http-errors";
import { injectable } from "inversify";
import { Cart, Product, PurchaseProduct } from "../../db/models";
import { Order } from "../../db/models/order";
import { CreateOrder, orderListResponse, orderResponse } from "../../interfaces/order.interface";
import { Order as OrdeDTO } from "./dto/order.dto";
import { OrderList } from "./dto/orderList.dto";

@injectable()
export class OrderService {
    
    public async list(uid: string): Promise<orderListResponse> {
        const odList = await Order.findAndCountAll({
            where: {
                userId: uid
            },
            include: [{model: PurchaseProduct, include:[Product]}],
            limit:10,
        })
        return OrderList.toDTO(odList);
    }

    public async getOrderById(orderId: string, uid: string): Promise<orderResponse> {
        const od = await Order.findOne({ 
            where: { id: orderId, userId: uid },
            include: [{model: PurchaseProduct, include:[Product]}]
        });
        
        if(!od) {
            throw new createHttpError.BadRequest('Order Not Found');
        }
        return OrdeDTO.toDTO(od);
    }

    public async createOrder({uid, cartId, userAddressId}: CreateOrder): Promise<orderResponse> {
        const cart = await Cart.findOne({where: { id: cartId }});
        if(!cart) {
            throw new createHttpError.BadRequest('No Cart Found');
        }
        const [od] = await Order.findOrCreate({
            where: { cartId, userId: uid },
            defaults: {
                cartId,
                userId: uid,
                userAddressId,
            },
            include: [{model: PurchaseProduct, include:[Product]}]
        });
        cart.fullFilled = true;
        await cart.save();
        return OrdeDTO.toDTO(od);
    }

    public async cancelOrder(orderId: string, uid: string): Promise<orderResponse> {
        const od = await Order.findOne({ 
            where: { id: orderId, userId: uid }, 
            include: [{model: PurchaseProduct, include:[Product]}] 
        });
        if(!od) {
            throw new createHttpError.BadRequest('No Order Found');
        }
        od.status = "RequestToCancel";
        await od.save();
        return OrdeDTO.toDTO(od);
    }

    // public async fillOrder(): Promise<Boolean> {
    //     // process order from razorPay
    // }

    // public async reOrder(orderId: string): Promise<Order> {
    //     const od = await Order.findOne({ where: { id: orderId,  } });

 
    // }
}