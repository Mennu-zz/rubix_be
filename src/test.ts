import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import { Order, Product, User, UserAddress } from './db/models/index';
import sequelize from "./db/utils/connection.mariadb";
import { Cart } from "./db/models/cart";
import { PurchaseProduct } from "./db/models/purchaseProduct";

sequelize.sync({force: true}).then(() => {

    // User.findOne({ where: { id: 1 }, include: [{ model: UserAddress }] }).then(async (data) => {
    //     console.log(data);
    //     const tt = await User.update({ firstName: "Naveen" }, { where: { id: 1 } })
    //     console.log(tt)
    // });

    // Cart.findOne({ where: { userId: 1 }, include: [{model: PurchaseProduct, include: [Product]}] }).then((data) => {
    //     console.log(data);
    // })

    // PurchaseProduct.findOne({include:}).then((data) => {
    //     console.log(data)
    // })

    // User.findOne({include: [UserAddress]}).then((data) => {
    //     console.log(data);
    // })

    Order.findOne({ include: [{ model: PurchaseProduct }] }).then((data) => {
        console.log(data);
    })

}).catch(error=> {
    console.error(error);
})