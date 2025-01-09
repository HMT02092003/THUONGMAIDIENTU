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
            createdAt: new Date().toISOString(),
            customerId: customerInfo.customerID,
        }

        console.log('data', data);

        // Tạo order mới
        const newOrder = await Order.query().insert(data).returning('*');

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

        return res.status(201).json({
            status: 'success',
            message: 'Order created successfully',
            order: newOrder,
            orderDetails,
        });

    } catch (error: any) {
        await trx.rollback(); // Rollback transaction khi có lỗi
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const updatePaymentMethod = async (req: any, res: any) => {
    try {
        console.log('req.body', req.body);
        console.log('req.params.id', req.params.id);
        const { values } = req.body;

        const data = {
            paymentMethod: values,
        }

        const PaymentMenthod = await Order.query().findById(req.params.id).patch(data);

        res.status(200).json({
            status: 'success',
            message: 'Payment method updated successfully',
            PaymentMenthod,
        });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const getAllOrder = async (req: any, res: any) => {
    try {
        const orders = await Order.query()
            .orderBy('createdAt', 'desc');

        res.status(200).send(orders);

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getOrderByID = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        const order = await Order.query().findById(id);

        if (!order) {
            return res.status(404).send('Order not found');
        }

        const orderDetails = await OrderDetail.query().where('orderId', id);

        res.status(200).send({ order, orderDetails });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};