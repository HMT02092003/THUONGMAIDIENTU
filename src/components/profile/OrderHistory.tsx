import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Tag, message } from 'antd';
import type { TableColumnsType } from 'antd';
import { createStyles } from 'antd-style';
import { render } from 'react-dom';

const useStyle = createStyles(({ css, token }: { css: any; token: any }) => {
    const { antCls } = token;
    return {
        customTable: css`
        ${antCls}-table {
          ${antCls}-table-container {
            ${antCls}-table-body,
            ${antCls}-table-content {
              scrollbar-width: thin;
              scrollbar-color: #eaeaea transparent;
              scrollbar-gutter: stable;
            }
          }
        }
      `,
    };
});


const OrderHistory: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const { styles } = useStyle();
    const [dataSource, setDataSource] = useState<any[]>([]);

    const showModal = (order: any) => {
        setSelectedOrder(order);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedOrder(null);
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/getAllOrder');
            const data = await response.json();
            setDataSource(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
            message.error('Không thể tải dữ liệu đơn hàng');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const columns: any = [
        {
            title: 'Mã Đơn Hàng',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
        },
        {
            title: 'Trạng Thái',
            dataIndex: 'status',
            key: 'status',
            fixed: 'left' as 'left',
            render: (status: string) => {
                let color = '';
                let text = status;
                switch (status) {
                    case 'pending':
                        color = 'orange';
                        text = 'Chờ Xác Nhận';
                        break;
                    case 'confirmed':
                        color = 'blue';
                        text = 'Đã Xác Nhận';
                        break;
                    case 'shipped':
                        color = 'purple';
                        text = 'Đang Giao';
                        break;
                    case 'delivered':
                        color = 'green';
                        text = 'Đã Giao';
                        break;
                    case 'cancelled':
                        color = 'red';
                        text = 'Đã Hủy';
                        break;
                }
                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (total: string) => <span style={{ color: "#ff4d4f" }}>{total}</span>
        },
        {
            title: 'Ngày Đặt Hàng',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'name',
            key: 'name',
            render: (customer: string) => <span style={{ color: "#69b1ff" }}>{customer}</span>
        },
        {
            title: 'Số Điện Thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
        },
        {
            title: 'Phương Thức Thanh Toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
            render: (paymentMethod: string | number) => {
                let text = '';
                let color = '';
                switch (String(paymentMethod)) {
                    case '1':
                        text = 'Thanh Toán Trực Tiếp';
                        color = 'green';
                        break;
                    case '2':
                        text = 'ZaloPay';
                        color = 'blue';
                        break;
                    case '3':
                        text = 'Momo';
                        color = 'magenta';
                        break;
                    default:
                        text = 'Không xác định';
                        color = 'red';
                }
                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: 'Hành Động',
            key: 'action',
            fixed: 'right',
            render: (_: any, record: any) => (
                <Button color='primary' variant="filled" type="primary" onClick={() => showModal(record)}>
                    Xem Chi Tiết
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={dataSource} scroll={{ x: 'max-content' }} className={styles.customTable} />

            <Modal
                title="Chi Tiết Đơn Hàng"
                open={isModalVisible}
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
