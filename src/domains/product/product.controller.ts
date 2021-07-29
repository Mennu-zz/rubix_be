import { inject } from "inversify";
import { controller, httpGet, requestParam } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { ProductService } from "./product.service";
import express from "express";
import { GetProductsResponse } from "../../interfaces/product.interface";

@controller('/api/products')
export class ProductController {

    constructor(@inject(TYPES.ProductService) private service: ProductService) {}
    
    @httpGet('/')
    public async getProducts(req: express.Request): Promise<GetProductsResponse> {
        const searchCriteria = req.query;
        return await this.service.getProducts(searchCriteria);
    }

    @httpGet('/:id')
    public async getProductById(@requestParam('id') id: string): Promise<any> {
        return await this.service.getProductById(id);
    }

}