import React, { useState } from 'react';
import { Table, Button, Modal, Tag } from 'antd';

const orderData = [
    {
        key: '1',
        orderId: 'd5cfb4ce-ee38-4941-8db1-66c39b830ae7',
        status: 'Chờ Xác Nhận',
        total: '3,000.00 VNĐ',
        orderDate: '10/1/2025',
        customer: 'Hoàng Mạnh Toàn SSSA',
        phone: '1234567890',
        address: 'SDFHBEWKJHUFUSDF',
        paymentMethod: 'không xác định',
        approver: 'không xác định',
    },
    {
        key: '2',
        orderId: 'ed4892a1-9f62-423e-beda-ea382bc1813c',
        status: 'Đã Giao',
        total: '3,190,000.00 VNĐ',
        orderDate: '10/1/2025',
        customer: 'Nguyễn Văn A',
        phone: '1234567890',
        address: 'queqwe',
        paymentMethod: 'Thanh toán khi nhận hàng',
        approver: 'Admin User',
    },
    {
        key: '3',
        orderId: 'd01dc553-8a92-42fa-a241-2b3b9a49755',
        status: 'Đang Giao',
        total: '3,000.00 VNĐ',
        orderDate: '10/1/2025',
        customer: 'Nguyễn Văn A',
        phone: '1234567890',
        address: 'queqwequr',
        paymentMethod: 'Thanh toán khi nhận hàng',
        approver: 'Admin User 2',
    },
    {
        key: '4',
        orderId: 'da560b6f-b7dc-42b1-a45d-469e250ca4d3',
        status: 'Đã Xác Nhận',
        total: '5,170,000.00 VNĐ',
        orderDate: '10/1/2025',
        customer: 'Hoàng Mạnh Toàn',
        phone: '1234567890',
        address: 'SDFHBEWKJHUFUSDF',
        paymentMethod: 'Thanh toán khi nhận hàng',
        approver: 'Admin User',
    },
    {
        key: '5',
        orderId: '71ba86cd-a107-46e6-a323-6db14a53a210',
        status: 'Đã Hủy',
        total: '6,000.00 VNĐ',
        orderDate: '10/1/2025',
        customer: 'Hoàng Mạnh Toàn',
        phone: '1234567890',
        address: 'SDFHBEWKJHUFUSDF',
        paymentMethod: 'MoMo',
        approver: 'Admin User',
    },
];

const OrderHistory: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const showModal = (order: any) => {
        setSelectedOrder(order);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedOrder(null);
    };

    const columns = [
        {
            title: 'Mã Đơn Hàng',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Trạng Thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color = 'green';
                if (status === 'Chờ Xác Nhận') color = 'orange';
                else if (status === 'Đang Giao') color = 'blue';
                else if (status === 'Đã Hủy') color = 'red';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Ngày Đặt Hàng',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Số Điện Thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Phương Thức Thanh Toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        {
            title: 'Người duyệt',
            dataIndex: 'approver',
            key: 'approver',
        },
        {
            title: 'Hành Động',
            key: 'action',
            render: (_: any, record: any) => (
                <Button type="primary" onClick={() => showModal(record)}>
                    Xem Chi Tiết
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={orderData} />

            <Modal
                title="Chi Tiết Đơn Hàng"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                {selectedOrder && (
                    <div>
                        <p><b>Mã Đơn Hàng:</b> {selectedOrder.orderId}</p>
                        <p><b>Trạng Thái:</b> {selectedOrder.status}</p>
                        <p><b>Tổng Tiền:</b> {selectedOrder.total}</p>
                        <p><b>Ngày Đặt Hàng:</b> {selectedOrder.orderDate}</p>
                        <p><b>Khách Hàng:</b> {selectedOrder.customer}</p>
                        <p><b>Số Điện Thoại:</b> {selectedOrder.phone}</p>
                        <p><b>Địa Chỉ:</b> {selectedOrder.address}</p>
                        <p><b>Phương Thức Thanh Toán:</b> {selectedOrder.paymentMethod}</p>
                        <p><b>Người Duyệt:</b> {selectedOrder.approver}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default OrderHistory;
