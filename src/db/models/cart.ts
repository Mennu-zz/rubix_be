import { Table, Column, Model, PrimaryKey, AllowNull, ForeignKey, CreatedAt, HasMany, Default } from 'sequelize-typescript';
import { User } from './user';
import { PurchaseProduct } from './purchaseProduct';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Cart extends Model<Partial<Cart>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    userId!: string;
    
    @CreatedAt
    creationDate!: Date;

    @Default(false)
    @Column
    fullFilled!: Boolean;

    @HasMany(() => PurchaseProduct)
    purchaseProducts!: PurchaseProduct[];
}