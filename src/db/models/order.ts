import { Table, Column, Model, PrimaryKey, AllowNull, ForeignKey, CreatedAt, HasMany, HasOne, Default } from 'sequelize-typescript';
import { User } from './user';
import { Cart } from './cart';
import { v4 as uuidv4 } from 'uuid';
import { PurchaseProduct, UserAddress } from '.';

@Table
export class Order extends Model<Partial<Order>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    userId!: string;

    @AllowNull(false)
    @ForeignKey(() => Cart)
    @Column
    cartId!: string;

    @Default("PENDING_PAYMENT")
    @Column
    status!: string;
    
    @CreatedAt
    creationDate!: Date;

    @HasMany(() => PurchaseProduct, { sourceKey: 'cartId', foreignKey: 'cartId' })
    products!: PurchaseProduct[]
        
    @AllowNull(false)
    @ForeignKey(() => UserAddress)
    @Column
    userAddressId!: string;

    @HasOne(() => UserAddress, "userAddressId")
    userAddress!: UserAddress
}