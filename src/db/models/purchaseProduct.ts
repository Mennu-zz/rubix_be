import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull, BelongsTo, ForeignKey, DataType, Default } from 'sequelize-typescript';
import { Product } from './product';
import { User } from './user'
import { Cart } from './cart';
import { v4 as uuidv4 } from 'uuid';


@Table
export class PurchaseProduct extends Model<Partial<PurchaseProduct>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @ForeignKey(() => Product)
    @Column
    productId!: string;
    
    @ForeignKey(() => Cart)
    @Column
    cartId!: string;
    
    @ForeignKey(() => User)
    @Column
    uid!: string;

    @AllowNull(false)
    @Column
    quantity!: number;

    @AllowNull(false)
    @Column
    price!: number;

    @BelongsTo(() => Product, "productId")
    product!: Product;

    @BelongsTo(() => Cart, "cartId")
    cart!: Cart;

    @BelongsTo(() => User, "uid")
    user!: User;
}