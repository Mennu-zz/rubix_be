import { Product } from "../../db/models/product";
import { getProductsQueryBuilder } from "./util";
import { GetProducts } from "./dto/getProducts.dto";
import { GetProduct } from "./dto/getProduct.dto";
import createHttpError from "http-errors";
import { GetProductResponse, GetProductsResponse } from "../../interfaces/product.interface";
import { injectable } from "inversify";
import { ProductType } from "../../db/models/productType";

@injectable()
export class ProductService {
    
    public async getProducts(searchCriteria: any): Promise<GetProductsResponse> {
        const products = await Product.findAndCountAll(getProductsQueryBuilder(searchCriteria));
        return GetProducts.toDTO(products);
    }

    public async getProductById(id: string): Promise<GetProductResponse> {
        const data = await Product.findOne({ where: { id }, include: [{ model: ProductType }], });
        if(data) {
            return GetProduct.toDTO(data);
        }
        throw new createHttpError.NotFound('Product Not Found');
    }

}