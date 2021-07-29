import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, requestBody, requestParam } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { CreateOrder, orderListResponse, orderResponse } from "../../interfaces/order.interface";
import { OrderService } from "./order.service";
import { Request } from 'express';
import { verify } from "../../middleware/jwt";

@controller('/api/order', verify)
export class OrderController {
    constructor(@inject(TYPES.OrderService) private service: OrderService) {}

    @httpGet('/')
    public async list(req: Request): Promise<orderListResponse> {
        return await this.service.list(req.user.id as string);
    }

    @httpGet('/:orderId')
    public async getOrder(@requestParam('orderId') orderId: string, req: Request): Promise<orderResponse> {
        return await this.service.getOrderById(orderId, req.user.id as string)
    }

    @httpPost('/')
    public async createOrder(@requestBody() payload: CreateOrder, req: Request): Promise<orderResponse> {
        const { userAddressId, cartId } = payload;
        const uid = req.user.id as string;
        return await this.service.createOrder({ userAddressId, uid, cartId });
    }

    @httpDelete('/:orderId')
    public async cancelOrder(@requestParam('orderId') orderId: string, req: Request): Promise<orderResponse> {
        const uid = req.user.id as string;
        return await this.service.cancelOrder(orderId, uid);
    }
}