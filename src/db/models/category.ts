import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull, Default } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Category extends Model<Partial<Category>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @Column
    name!: string;
    
    @AllowNull(false)
    @Column
    icon!: string;
}