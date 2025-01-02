import { Order } from '@/src/Models/OrderModel';
import { OrderDetail } from '@/src/Models/OrderDetailModel';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'lodash';

export const createOrder = async (req: any, res: any) => {
    const trx = await Order.startTransaction(); // Bắt đầu transaction
    try {
        const { customerInfo, cartItems, totalAmount } = req.body;

        console.log('customerInfo', req.body);

        // Validate input
        if (!customerInfo || !cartItems || cartItems.length === 0 || !totalAmount) {
            return res.status(400).send('Invalid order data');
        }

        const data = {
            orderNumber: uuidv4(),
            shippingAddress: customerInfo.address,
            totalAmount: totalAmount,
            orderDate: new Date().toISOString(),
            status: 'pending',
            name: customerInfo.name,
            phoneNumber: customerInfo.phoneNumber,
            createdAt: new Date().toISOString()
        }

        // Tạo order mới
        const newOrder = await Order.query().insert(data).returning('*');

        res.status(201).send({ message: 'Order created successfully', orderId: newOrder.id });

        const orderDetails = cartItems.map((item: any) => {
            return {
                orderId: newOrder.id,
                quantity: item.quantity,
                name: item.name,
                productId: item.productId,
                description: item.description,
                tagName: item.tagName,
                variants: item.variants,
                specifications: item.specifications,
                productImage: item.productImage,
                imageUrl: item.imageUrl,
                price: item.price,
                createdAt: new Date().toISOString(),
            };
        });


        console.log('orderDetails', orderDetails);

        await OrderDetail.query().insertGraph(orderDetails);

    } catch (error) {
        await trx.rollback(); // Rollback transaction khi có lỗi
        console.error(error);
        res.status(500).send('Failed to create order');
    }
};
