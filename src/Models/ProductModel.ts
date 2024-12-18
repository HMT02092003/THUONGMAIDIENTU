import { Model } from 'objection';
import Brand from './BrandModel';
import Category from './CategoryModel';
import OrderDetail from './OrderDetailModel';

class Product extends Model {
  id?: number;
  name?: string;
  productId?: string;
  brandId?: number;
  price?: number;
  quantity?: number;
  description?: string;
  specifications?: object;
  imageUrl?: object;
  createdAt?: string;
  updatedAt?: string;
    

  static get idColumn() {
    return 'id';
  }

  static get tableName() {
    return 'Product';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'brandId', 'price', 'productId'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        productId: { type: 'string', maxLength: 255 },
        brandId: { type: 'integer' },
        price: { type: 'number' },
        quantity: { type: 'integer' },
        description: { type: ['string', 'null'] },
        specifications: { type: ['object','array','null'] },
        imageUrl: { type: ['object', 'null'] },
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
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Category,
        join: {
          from: 'Product.id',
          through: {
            from: 'ProductCategory.productId',
            to: 'ProductCategory.categoryId'
          },
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
