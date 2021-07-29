import { Table, Column, Model, AutoIncrement, PrimaryKey, ForeignKey, AllowNull, Default } from 'sequelize-typescript';
import { Product } from "./product";
import { v4 as uuidv4 } from 'uuid';

@Table
export class ProductType extends Model<Partial<ProductType>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;
    
    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column
    productId!: string;

    @AllowNull(false)
    @Column
    type!: string;

    @AllowNull(false)
    @Column
    quantity!: number;
}