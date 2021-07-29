import { Op } from "sequelize";
import { ProductType } from "../../db/models/productType";

export const getProductsQueryBuilder = ({skip, categoryId, subCategoryId, text}: any) => {
    const query: any = {
        where: {},
        include: [{ model: ProductType }],
        limit: 10,
    };
    if(skip) {
        query.offset = skip;
    }

    if(categoryId) {
        query.where.categoryId = categoryId;
    }

    if(subCategoryId) {
        query.where.subCategoryId = subCategoryId;
    }

    if(text) {
        query.where.slug = {
            [Op.like]: '%' + text + '%'
        }
    }

    return query
}