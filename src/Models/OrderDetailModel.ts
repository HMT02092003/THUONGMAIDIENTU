import { Model } from 'objection';
import { Order } from './OrderModel';

export class OrderDetail extends Model {
  static get tableName() {
    return 'OrderDetail';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['orderId', 'quantity', 'unitPrice', 'subtotal'],
      properties: {
        id: { type: 'integer' },
        orderId: { type: 'integer' },
        quantity: { type: 'integer' },
        unitPrice: { type: 'number' },
        subtotal: { type: 'number' },
        productSnapshot: { type: 'object' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    return {
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