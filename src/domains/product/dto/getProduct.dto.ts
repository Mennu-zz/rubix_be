import { Product } from "../../../db/models/index";
import { GetProductResponse } from "../../../interfaces/product.interface";
import { GetProducts } from "./getProducts.dto";

export class GetProduct {
    static toDTO(data: Product): GetProductResponse {
        return {
            data: GetProducts.mapProducts(data)
        }
    }
}