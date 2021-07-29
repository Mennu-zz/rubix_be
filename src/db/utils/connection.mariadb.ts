import { Sequelize } from 'sequelize-typescript'
import { User, UserAddress, Category, SubCategory, Product, ProductType, Cart, PurchaseProduct, Order } from '../models/index';

const logging = process.env.ENABLE_DB_LOGGING == 'true' ? true : false;

const sequelize = new Sequelize(process.env.DB_NAME || 'users', process.env.DB_USER || 'dbuser', process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: process.env.db_timezone || 'Europe/Berlin'
  },
  pool: {
    min: 0,
    max: 10,
    idle: 10000
  },
  define: {
    charset: 'utf8',
    timestamps: false
  },
  database: 'rubix',
  benchmark: true,
  logging,
  ssl: true,
  models: [User, UserAddress, Category, SubCategory, Product, ProductType, PurchaseProduct, Cart, Order]
});


export default sequelize;