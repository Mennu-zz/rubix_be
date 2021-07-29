import { Table, Column, Model, AutoIncrement, PrimaryKey, ForeignKey, AllowNull, Default } from 'sequelize-typescript';
import { User } from './user';
import { v4 as uuidv4 } from 'uuid';

@Table
export class UserAddress extends Model<Partial<UserAddress>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    createdBy!: string;

    @AllowNull(false)
    @Column
    title!: string;
    
    @AllowNull(false)
    @Column
    addressLine1!: string;
    
    @AllowNull(false)
    @Column
    addressLine2!: string;

    @AllowNull(false)
    @Column
    city!: string;
    
    @AllowNull(false)
    @Column
    state!: string;

    @AllowNull(false)
    @Column
    country!: string;

    @AllowNull(false)
    @Column
    phone!: string;
}