import { Model } from 'objection';
import Product from './ProductModel';
import Order from './OrderDetailModel';

class OrderDetail extends Model {
  static get tableName() {
    return 'OrderDetail';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['orderId', 'productId', 'quantity', 'unitPrice', 'subtotal', 'productName'],
      properties: {
        id: { type: 'integer' },
        orderId: { type: 'integer' },
        productId: { type: 'integer' },
        quantity: { type: 'integer' },
        unitPrice: { type: 'number' },
        subtotal: { type: 'number' },
        productName: { type: 'string' },
        productDescription: { type: ['string', 'null'] },
        productSpecifications: { type: ['object', 'null'] },
        productImageUrl: { type: ['string', 'null'] }
      }
    };
  }

  static get relationMappings() {
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'OrderDetail.productId',
          to: 'Product.id'
        }
      },
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: 'OrderDetail.orderId',
          to: 'Order.id'
        }
      }
    };
  }
}

export default OrderDetail;