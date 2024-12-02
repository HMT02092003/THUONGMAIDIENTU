"use client";

import React, { useState } from 'react';
import { Table, Button, Card, DatePicker, Modal, Input, Form, message, Space, Select, Row, Col, ConfigProvider } from 'antd';
import { FormOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Option } = Select;

interface OrderType {
  key: React.Key;
  orderCode: string;
  quantity: number;
  orderDate: string;
  totalPrice: number;
  productName: string;
}

const data: OrderType[] = [
  {
    key: 1,
    orderCode: 'DH001',
    productName: 'Bàn phím cơ',
    quantity: 3,
    orderDate: '2024-11-01',
    totalPrice: 4500000,
  },
  {
    key: 2,
    orderCode: 'DH002',
    productName: 'Chuột gaming',
    quantity: 1,
    orderDate: '2024-11-02',
    totalPrice: 1200000,
  },
  {
    key: 3,
    orderCode: 'DH003',
    productName: 'Màn hình 27 inch',
    quantity: 2,
    orderDate: '2024-11-03',
    totalPrice: 8000000,
  },
];

const OrderDetailManagement: React.FC = () => {
  const [dataSource, setDataSource] = useState<OrderType[]>(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<any>({});
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const router = useRouter();

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  };

  const handleAddNew = () => {
    setModalType('add');
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleAddSubmit = () => {
    form.validateFields().then((values) => {
      const newOrder: OrderType = {
        key: dataSource.length + 1,
        ...values,
      };
      setDataSource([...dataSource, newOrder]);
      setIsModalVisible(false);
      message.success('Thêm mới đơn hàng thành công!');
    });
  };

  const handleEditSelected = () => {
    if (selectedRowKeys.length === 0) {
      message.warning("Vui lòng chọn ít nhất một hàng để sửa.");
      return;
    }
    setModalType('edit');
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditSubmit = () => {
    form.validateFields().then((values) => {
      const updatedData = dataSource.map((item) =>
        selectedRowKeys.includes(item.key) ? { ...item, ...values } : item
      );
      setDataSource(updatedData);
      setSelectedRowKeys([]);
      setIsModalVisible(false);
      message.success('Cập nhật thành công!');
    });
  };

  const handleDeleteSelected = () => {
    setDataSource((prev) => prev.filter((item) => !selectedRowKeys.includes(item.key)));
    setSelectedRowKeys([]);
    message.success('Đã xóa các hàng được chọn!');
  };

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns: any = [
    {
      title: 'Mã Đơn Hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
      sorter: (a: OrderType, b: OrderType) => a.orderCode.localeCompare(b.orderCode),
      sortOrder: sortedInfo.columnKey === 'orderCode' ? sortedInfo.order : null,
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'productName',
      key: 'productName',
      sorter: (a: OrderType, b: OrderType) => a.productName.localeCompare(b.productName),
      sortOrder: sortedInfo.columnKey === 'productName' ? sortedInfo.order : null,
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a: OrderType, b: OrderType) => a.quantity - b.quantity,
      sortOrder: sortedInfo.columnKey === 'quantity' ? sortedInfo.order : null,
    },
    {
      title: 'Ngày Đặt Hàng',
      dataIndex: 'orderDate',
      key: 'orderDate',
      sorter: (a: OrderType, b: OrderType) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime(),
      sortOrder: sortedInfo.columnKey === 'orderDate' ? sortedInfo.order : null,
    },
    {
      title: 'Tổng Giá (VND)',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      sorter: (a: OrderType, b: OrderType) => a.totalPrice - b.totalPrice,
      sortOrder: sortedInfo.columnKey === 'totalPrice' ? sortedInfo.order : null,
      render: (value: number) => value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
  ];

  const Handlesubmit=(value:any)=>{
    console.log(value)
  }
  return (
    <ConfigProvider>
      <div style={{ margin: '20px' }}>
      <Form onFinish={Handlesubmit}>
        <Row justify="space-between" align="middle">
          <Col style={{ paddingLeft: 50, display: 'flex', alignItems: 'center' }}>
            <h2 style={{ display: 'inline-flex', alignItems: 'center' }}>
            <FormOutlined style={{fontSize:35, marginRight: 10}}/>
              Chi tiết đơn hàng
            </h2>
          </Col>
          <Col style={{ paddingRight: 50 }}>
            <Space>
              <Button type="primary" style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: "center",
                background: "orange",
                width: "100px",
                margin: "0 5px",
              }}
              htmlType="submit"
              icon={<EditOutlined />}>
                Chỉnh sửa
              </Button>
            </Space>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Card title="Thông tin đơn hàng" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Mã đơn hàng"
                    label="Mã đơn hàng"
                    rules={[
                      { required: true, message: 'Vui lòng nhập Mã đơn hàng!' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Ngày đặt hàng"
                    label="Ngày đặt hàng"
                    rules={[{ required: true, message: 'Vui lòng nhập Ngày đặt hàng!' }]}
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Ngày giao hàng"
                    label="Ngày giao hàng"
                    rules={[{ required: true, message: 'Vui lòng nhập Ngày giao hàng!' }]}
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Trạng thái giao hàng"
                    label="Trạng thái giao hàng"
                    rules={[{ required: true, message: 'Vui lòng chọn Trạng thái giao hàng!' }]}
                  >
                    <Select
                      options={[
                        { value: '1', label: 'Chờ xử lí' },
                        { value: '2', label: 'Đã giao' },
                        { value: '3', label: 'Đang giao' },
                        { value: '3', label: 'Đã hủy' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 15 }}>
          <Col span={24}>
            <Card title="Thông tin đơn hàng" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Họ tên khách hàng"
                    label="Họ tên khách hàng"
                    rules={[
                      { required: true, message: 'Vui lòng nhập Họ tên khách hàng!' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Số điện thoại"
                    label="Số điện thoại"
                    rules={[
                      { required: true, message: 'Vui lòng nhập Số điện thoại!' },
                      { pattern: /^\d{10}$/, message: 'Số điện thoại phải có đủ 10 số!' }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Email"
                    label="Email"
                    rules={[
                      { required: true, type: "email", message: 'Vui lòng nhập Email hợp lệ!' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item layout="vertical"
                    name="Địa chỉ giao hàng"
                    label="Địa chỉ giao hàng"
                    rules={[
                      { required: true, message: 'Vui lòng nhập Địa chỉ giao hàng!' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="key"
          onChange={handleChange}
          pagination={false}
          style={{ marginTop: '20px', boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", borderRadius: 10 }}
        />
        <Row style={{ marginTop: 15 }}>
          <Col span={24}>
            <Card title="Phương thức thanh toán" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Form.Item
                    layout="vertical"
                    name="phuongThucThanhToan"
                    label="Phương thức thanh toán"
                    rules={[{ required: true, message: 'Vui lòng chọn phương thức thanh toán!' }]}
                  >
                    <Select
                      options={[
                        { value: 'cash', label: 'Tiền mặt' },
                        { value: 'creditCard', label: 'Thẻ tín dụng' },
                        { value: 'paypal', label: 'PayPal' },
                        { value: 'bankTransfer', label: 'Chuyển khoản ngân hàng' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    layout="vertical"
                    name="transactionCode"
                    label="Mã giao dịch"
                    rules={[{ required: true, message: 'Vui lòng nhập mã giao dịch!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    layout="vertical"
                    name="paymentDate"
                    label="Ngày thanh toán"
                    rules={[{ required: true, message: 'Vui lòng nhập ngày thanh toán!' }]}
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    layout="vertical"
                    name="paymentStatus"
                    label="Trạng thái thanh toán"
                    rules={[{ required: true, message: 'Vui lòng chọn trạng thái thanh toán!' }]}
                  >
                    <Select
                      options={[
                        { value: 'pending', label: 'Chưa thanh toán' },
                        { value: 'completed', label: 'Đã thanh toán' },
                        { value: 'failed', label: 'Thanh toán thất bại' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default OrderDetailManagement