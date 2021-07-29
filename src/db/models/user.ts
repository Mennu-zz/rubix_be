import { Table, Column, Model, PrimaryKey, CreatedAt, AllowNull, Unique, HasMany, Default } from 'sequelize-typescript'
import { UserAddress } from '.';
import { createHash } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

@Table
export class User extends Model<Partial<User>> {
  @Default(uuidv4)
  @PrimaryKey
  @Column
  id?: string;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @AllowNull(false)
  @Unique
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  phone!: string;

  @AllowNull(false)
  @Column({
    set: function (val: string) {
      const password = createHash('sha256').update(val).digest('hex');
      return this.setDataValue('password', password);
    }
  })
  password!: string;

  @CreatedAt
  creationDate!: Date;

  @AllowNull(false)
  @Column
  role!: string;

  @AllowNull(false)
  @Column
  blocked!: boolean;

  @AllowNull(false)
  @Column
  confirmed!: boolean;

  @AllowNull(false)
  @Column
  provider!: string;

  @HasMany(() => UserAddress)
  addresses?: UserAddress[];

}