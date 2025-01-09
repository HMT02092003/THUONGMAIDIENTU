import React, { useEffect } from 'react';
import { Table, Card, Typography, Select, Row, Col, ConfigProvider, Descriptions, Tag, Space, Button } from 'antd';
import { ShopOutlined, UserOutlined, PhoneOutlined, HomeOutlined, BorderlessTableOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const OrderDetailView: React.FC<any> = ({ id }) => {

  const fetchOrderDetail = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/getOrderById/${id}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching order detail:', error);
    }
  }

  useEffect(() => {

  }, [id]);

  const orderData = {
    orderNumber: 'DH001',
    orderDate: '2024-01-09',
    status: 'pending',
    totalAmount: 13700000,
    customer: {
      name: 'Nguyễn Văn A',
      phoneNumber: '0123456789',
      shippingAddress: '123 Đường ABC, Quận XYZ, TP.HCM'
    }
  };

  const products = [
    {
      key: 1,
      name: 'Bàn phím cơ',
      quantity: 3,
      price: 1500000,
      productId: 'P001',
    },
    {
      key: 2,
      name: 'Chuột gaming',
      quantity: 1,
      price: 1200000,
      productId: 'P002',
    }
  ];

  const columns: any = [
    {
      title: 'Mã SP',
      dataIndex: 'productId',
      key: 'productId',
      width: '15%',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '15%',
      align: 'center',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      align: 'right',
      render: (price: any) => price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
    {
      title: 'Thành tiền',
      key: 'total',
      width: '15%',
      align: 'right',
      render: (record: any) => (record.price * record.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
  ];

  return (
    <>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              <ShopOutlined style={{ marginRight: 8 }} />
              Đơn hàng #{orderData.orderNumber}
            </Title>
          </Col>
          <Col>
            <Space size="large" align="center">
              <span style={{ fontSize: 14 }}>Trạng thái đơn hàng:</span>
              <Select
                defaultValue={orderData.status}
                style={{ width: 200 }}
                options={[
                  { value: 'pending', label: 'Chờ xử lý' },
                  { value: 'confirmed', label: 'Đã xác nhận' },
                  { value: 'shipped', label: 'Đang giao' },
                  { value: 'delivered', label: 'Đã giao' },
                  { value: 'cancelled', label: 'Đã hủy' },
                ]}
              />
              <Button variant="solid" color='danger'>
                Cập nhật trạng thái
              </Button>
            </Space>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Descriptions title="Thông tin đơn hàng" column={1}>
              <Descriptions.Item label={<><BorderlessTableOutlined />&nbsp;Mã đơn hàng</>}>{orderData.orderNumber}</Descriptions.Item>
              <Descriptions.Item label={<><CalendarOutlined />&nbsp;Ngày đặt</>}>{orderData.orderDate}</Descriptions.Item>
              <Descriptions.Item label={<><DollarOutlined />&nbsp;Tổng tiền</>}>
                <span style={{ color: '#f50' }}>
                  {orderData.totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions title="Thông tin khách hàng" column={1}>
              <Descriptions.Item label={<><UserOutlined />&nbsp;Khách hàng</>}>
                {orderData.customer.name}
              </Descriptions.Item>
              <Descriptions.Item label={<><PhoneOutlined />&nbsp;Số điện thoại</>}>
                {orderData.customer.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item label={<><HomeOutlined />&nbsp;Địa chỉ</>}>
                {orderData.customer.shippingAddress}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      <Card
        title="Chi tiết sản phẩm"
        bordered={false}
        style={{ marginBottom: 24 }}
      >
        <Table
          columns={columns}
          dataSource={products}
          pagination={false}
          bordered
          summary={(pageData) => {
            const total = pageData.reduce((sum, current) => sum + (current.price * current.quantity), 0);
            return (
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4} align="right">
                  <strong>Tổng cộng</strong>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} align="right">
                  <strong style={{ color: '#f50' }}>
                    {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </strong>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            );
          }}
        />
      </Card>
    </>
  );
};

export default OrderDetailView;