import { Table, Column, Model, AutoIncrement, PrimaryKey, ForeignKey, AllowNull, HasMany, Default } from 'sequelize-typescript';
import { Category } from './category';
import { SubCategory } from './subCategory';
import { ProductType } from './productType';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Product extends Model<Partial<Product>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @Column
    name!: string;

    @AllowNull(false)
    @Column
    slug!: string;

    @AllowNull(false)
    @ForeignKey(() => Category)
    @Column
    categoryId!: string;
    
    @AllowNull(false)
    @Column
    categoryName!: string;
    
    @AllowNull(false)
    @ForeignKey(() => SubCategory)
    @Column
    subCategoryId!: string;

    @AllowNull(false)
    @Column
    subCategoryName!: string;

    @AllowNull(false)
    @Column
    price!: number;

    @AllowNull(false)
    @Column
    details!: string;

    @HasMany(() => ProductType)
    types?: ProductType[]

    @AllowNull(false)
    @Column
    images!: string
}