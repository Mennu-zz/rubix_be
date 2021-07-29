import { Table, Column, Model, PrimaryKey, AllowNull, Default } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Comments extends Model<Partial<Comments>> {
    @Default(uuidv4)
    @PrimaryKey
    @Column
    id?: string;

    @AllowNull(false)
    @Column
    text!: string;

    @AllowNull(false)
    @Column
    refId!: string;

    @AllowNull(false)
    @Column
    type!: string;
}