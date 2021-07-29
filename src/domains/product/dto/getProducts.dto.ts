import { Product, ProductType } from "../../../db/models/index";
import { GetProductQueryResponse, GetProductsResponse, ProductResponse, ProductTypeResponse } from "../../../interfaces/product.interface";

export class GetProducts {
    static mapproductTypes({ type, quantity, id='' }: ProductType): ProductTypeResponse {
        return {
            type,
            quantity,
            id,
        }
    }

    static mapProducts({ id = '', name, price, types = [], details, images: image }: Product): ProductResponse {
        return {
            id,
            name,
            price,
            types: types.map(GetProducts.mapproductTypes),
            details,
            images: image.split(','),
        }
    }
    static toDTO(queryResponse: GetProductQueryResponse): GetProductsResponse {
        const { rows, count } = queryResponse;
        return {
            data: {
                products: rows.map(GetProducts.mapProducts),
                totalProducts: count,
            }
        }
    }
}