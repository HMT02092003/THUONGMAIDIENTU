"use client";

import React, { useState } from 'react';
import { Table, Button, Modal, Input, Form, message, Space, Row, Col, ConfigProvider, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/src/cssfolder/OrderManagement.css'; // Import file CSS

const { Option } = Select;

interface OrderType {
  key: React.Key;
  orderCode: string;
  quantity: number;
  orderDate: string;
  deliveryDate: string;
  customerName: string;
  address: string;
  status: string;
}

const data: OrderType[] = [
  {
    key: 1,
    orderCode: 'DH001',
    quantity: 3,
    orderDate: '2024-11-01',
    deliveryDate: '2024-11-05',
    customerName: 'Nguyễn Văn A',
    address: '123 Đường A, Quận B, TP. HCM',
    status: 'Chờ xử lý',
  },
  {
    key: 2,
    orderCode: 'DH002',
    quantity: 1,
    orderDate: '2024-11-02',
    deliveryDate: '2024-11-06',
    customerName: 'Trần Thị B',
    address: '456 Đường C, Quận D, Hà Nội',
    status: 'Đã giao',
  },
  {
    key: 3,
    orderCode: 'DH003',
    quantity: 5,
    orderDate: '2024-11-03',
    deliveryDate: '2024-11-07',
    customerName: 'Lê Văn C',
    address: '789 Đường E, Quận F, TP. Đà Nẵng',
    status: 'Đã hủy',
  },
];

const OrderManagement: React.FC = () => {
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
    if (selectedRowKeys.length === 0) {
      message.warning("Vui lòng chọn ít nhất một hàng để xóa.");
      return;
    }
  
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedRowKeys.length} đơn hàng đã chọn?`,
      onOk: () => {
        setDataSource((prev) => prev.filter((item) => !selectedRowKeys.includes(item.key)));
        setSelectedRowKeys([]);
        message.success('Đã xóa các hàng được chọn!');
      },
      onCancel: () => {
        message.info('Hành động xóa đã bị hủy.');
      },
    });
  };

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns: any = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_: any, record: any) => (
        <div
          onClick={() => router.push(`/orderManagement/detail/${record.id}`)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Mã Đơn Hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
      sorter: (a: OrderType, b: OrderType) => a.orderCode.localeCompare(b.orderCode),
      sortOrder: sortedInfo.columnKey === 'orderCode' ? sortedInfo.order : null,
      filters: [
        { text: 'DH001', value: 'DH001' },
        { text: 'DH002', value: 'DH002' },
        { text: 'DH003', value: 'DH003' },
      ],
      filteredValue: filteredInfo.orderCode || null,
      onFilter: (value: boolean | string | number | bigint, record: OrderType) => {
        return record.orderCode.includes(value.toString());
      },
      fixed: 'left',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Chờ xử lý', value: 'Chờ xử lý' },
        { text: 'Đã giao', value: 'Đã giao' },
        { text: 'Đã hủy', value: 'Đã hủy' },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value: boolean | string | number | bigint, record: OrderType) => {
        return record.status.includes(value.toString());
      },
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
      title: 'Ngày Giao Hàng',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      sorter: (a: OrderType, b: OrderType) => new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime(),
      sortOrder: sortedInfo.columnKey === 'deliveryDate' ? sortedInfo.order : null,
    },
    {
      title: 'Người Đặt',
      dataIndex: 'customerName',
      key: 'customerName',
      sorter: (a: OrderType, b: OrderType) => a.customerName.localeCompare(b.customerName),
      sortOrder: sortedInfo.columnKey === 'customerName' ? sortedInfo.order : null,
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <ConfigProvider>
      <div className="container">
        <Row className="header">
          <Col className="title">
            <h2>
              <img src="\icon\box.png" alt="" />
              Quản lý đơn hàng
            </h2>
          </Col>
          <Col className="button-group">
            <Space>
              <Button
                type="primary"
                className="button-create"
                icon={<PlusOutlined />}
                onClick={handleAddNew}
              >
                Tạo mới
              </Button>
              <Button
                type="primary"
                className="button-delete"
                onClick={handleDeleteSelected}
                icon={<DeleteOutlined />}
              >
                Xóa
              </Button>
            </Space>
          </Col>
        </Row>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          rowKey="key"
          pagination={false}
          onChange={handleChange}
          scroll={{ x: 'max-content' }}
          className="table-container"
        />
      </div>
    </ConfigProvider>
  );
};

export default OrderManagement;
