import { Model } from 'objection';
import Brand from './BrandModel';
import Category from './CategoryModel';
import OrderDetail from './OrderDetailModel';

class Product extends Model {
  static get tableName() {
    return 'Product';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'brandId', 'price', 'quantity'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        brandId: { type: 'integer' },
        categoryId: { type: ['integer', 'null'] },
        price: { type: 'number' },
        quantity: { type: 'integer' },
        description: { type: ['string', 'null'] },
        specifications: { type: ['object', 'null'] },
        imageUrl: { type: ['string', 'null'] },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    return {
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'Product.brandId',
          to: 'Brand.id'
        }
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'Product.categoryId',
          to: 'Category.id'
        }
      },
      orderDetails: {
        relation: Model.HasManyRelation,
        modelClass: OrderDetail,
        join: {
          from: 'Product.id',
          to: 'OrderDetail.productId'
        }
      }
    };
  }
}

export default Product;