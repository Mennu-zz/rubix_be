import { Cart } from "../../db/models/cart";
import { PurchaseProduct } from "../../db/models/purchaseProduct";
import { Product } from "../../db/models/product";
import createHttpError from "http-errors";
import { ICreateCartInput, ICartProductInput, ICartRemoveProductInput, ICartResponse, ICartPurchaseUpdateInput } from "../../interfaces/cart.interface";
import { ListCart } from "./dto/listCart.dto";
import { injectable } from "inversify";

@injectable()
export class CartService {
    public async getCartForUser(uid: string): Promise<ICartResponse> {
        const cart = await Cart.findOne({ where: { userId: uid }, include: [{model: PurchaseProduct, include:[Product]}] });
        if(cart) {
            return ListCart.toDTO(cart);
        }
        throw new createHttpError.NotFound('Cart Not Found');
    }

    public async addProductToCart({ uid, pid, quantity }: ICreateCartInput): Promise<ICartResponse> {
        const product = await Product.findOne({ where: { id: pid }});
        if(product) {
            const [cart] = await Cart.findOrCreate({
                where: { userId: uid, fullFilled: false },
                defaults: {
                    userId: uid,
                }
            });
            await PurchaseProduct.create({ cartId: cart.id, quantity, price: product.price*quantity, productId: pid, uid, }, { include: [Product] });
            await cart.reload({ include: [{model: PurchaseProduct, include:[Product]}] });
            return ListCart.toDTO(cart);
        }else {
            throw new createHttpError.BadRequest();
        }
    }

    public async updateProductInCart({ cid, uid, pid, quantity, purchaseId }: ICartPurchaseUpdateInput): Promise<Boolean> {
        const product = await Product.findOne({ where: { id: pid }});
        const cart = await Cart.findOne({ where: { id: cid } });

        console.log(product, cart, pid);

        if(product && cart) {
            await PurchaseProduct.update({ quantity }, { where: { cartId: cid, id: purchaseId, uid } });
            return true;
        } else {
            throw new createHttpError.BadRequest();
        }
    }

    public async removeProductFromCart({ cid, pid, uid }: ICartRemoveProductInput): Promise<Boolean> {
        await PurchaseProduct.destroy({ where: { cartId: cid, id: pid, uid: uid } });
        return true;
    }
}