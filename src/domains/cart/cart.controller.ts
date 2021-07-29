import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { ICartPurchaseUpdateInput, ICartResponse, ICreateCartInput } from "../../interfaces/cart.interface";
import { verify } from "../../middleware/jwt";
import { CartService } from "./cart.service";
import { Request } from 'express';

@controller('/api/cart', verify)
export class CartController {
    constructor(@inject(TYPES.CartService) private service: CartService) {}

    @httpGet('/')
    public async getCart(req: Request): Promise<ICartResponse> {
        return this.service.getCartForUser(req.user.id as string)
    }

    @httpPost('/product')
    public async createCart(@requestBody() payload: ICreateCartInput, req: Request): Promise<ICartResponse> {
        const uid = req.user.id as string;
        const { pid, quantity } = payload;
        return this.service.addProductToCart({ uid, pid, quantity })
    }

    // @httpPost('/:cid/product')
    // public async addProductToCart(@requestBody() payload: ICartProductInput, @requestParam('cid') cid: string, req: Request): Promise<ICartResponse> {
    //     const uid = req.user.id as string;
    //     const { pid, quantity } = payload;
    //     return this.service.addProductToCart({ uid, pid, cid, quantity });
    // }

    @httpPut('/:cid/product')
    public async updateProductInCart(@requestBody() payload: ICartPurchaseUpdateInput, @requestParam('cid') cid: string, req: Request): Promise<Boolean> {
        const uid = req.user.id as string;
        const { pid, quantity, purchaseId } = payload;
        return this.service.updateProductInCart({ cid, pid, quantity, purchaseId, uid });
    }

    @httpDelete('/:cid/product/:pid')
    public async removeProductFromCart(@requestParam('pid') pid: string, @requestParam('cid') cid: string, req: Request): Promise<Boolean> {
        const uid = req.user.id as string;
        return this.service.removeProductFromCart({ uid, pid, cid });
    }

}