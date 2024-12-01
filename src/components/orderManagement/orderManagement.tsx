import React, { useState } from 'react';
import { Table, Button, Modal, Input, Form, message, Space, Select, Row, Col, ConfigProvider } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

// Khai báo kiểu dữ liệu OrderType
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

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<OrderType[]>([]); // Sử dụng OrderType ở đây
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingOrder, setEditingOrder] = useState<OrderType | null>(null); // Lưu thông tin đơn hàng khi chỉnh sửa

  // Xử lý Thêm Mới
  const handleAdd = () => {
    form.validateFields().then((values) => {
      try {
        // Kiểm tra số lượng không được âm
        if (values.quantity <= 0) {
          message.error('Số lượng phải lớn hơn 0!');
          return;
        }

        if (new Date(values.orderDate) > new Date(values.deliveryDate)) {
          message.error('Ngày đặt hàng không thể sau ngày giao hàng!');
          return;
        }

        const newData: OrderType = {
          key: Date.now(),
          ...values,
        };

        setDataSource((prev) => [...prev, newData]);
        setIsModalVisible(false);
        form.resetFields();
        message.success('Thêm mới thành công!');
      } catch (error: any) {
        message.error(error.message);
      }
    });
  };

  // Xử lý Sửa
  const handleEdit = (record: OrderType) => {
    setEditingOrder(record);
    form.setFieldsValue({
      ...record,
    });
    setIsModalVisible(true);
  };

  // Xử lý Xóa
  const handleDelete = (key: React.Key) => {
    setDataSource((prev) => prev.filter((item) => item.key !== key));
    message.success('Xóa thành công!');
  };

  // Chỉnh sửa đơn hàng
  const handleEditSubmit = () => {
    form.validateFields().then((values) => {
      try {
        // Kiểm tra số lượng không được âm
        if (values.quantity <= 0) {
          message.error('Số lượng phải lớn hơn 0!');
          return;
        }

        if (new Date(values.orderDate) > new Date(values.deliveryDate)) {
          message.error('Ngày đặt hàng không thể sau ngày giao hàng!');
          return;
        }

        const updatedData = dataSource.map((item) =>
          item.key === editingOrder?.key ? { ...item, ...values } : item
        );
        setDataSource(updatedData);
        setIsModalVisible(false);
        form.resetFields();
        message.success('Chỉnh sửa thành công!');
      } catch (error: any) {
        message.error(error.message);
      }
    });
  };

  // Mở Modal để Thêm Mới hoặc Chỉnh Sửa
  const showModal = () => {
    setEditingOrder(null); // Đặt lại trạng thái khi mở modal để thêm mới
    setIsModalVisible(true);
  };

  // Cột của bảng
  const columns = [
    {
      title: 'Mã Đơn Hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Ngày Đặt Hàng',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Ngày Giao Hàng',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'Người Đặt',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Thao Tác',
      key: 'operation',
      render: (_: any, record: OrderType) => (
        <Space size="middle">
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => handleEdit(record)}
            style={{
              backgroundColor: '#80c4e9',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontWeight: 'bold',
            }}
          >
            Sửa
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.key)}
            style={{
              backgroundColor: '#FF9292',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f5222d';
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.backgroundColor = '#FF9292';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    }
  ];

  const modalProps = {
    title: editingOrder ? 'Chỉnh Sửa Đơn Hàng' : 'Tạo Đơn Hàng Mới',
    visible: isModalVisible,
    onCancel: () => setIsModalVisible(false),
    footer: [
      <Button
        danger
        style={{
          backgroundColor: '#FF9292',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#f5222d';
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.backgroundColor = '#FF9292';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
        key="back" onClick={() => setIsModalVisible(false)}>
        Hủy
      </Button>,
      <Button
        icon={<PlusOutlined />}
        style={{
          backgroundColor: '#BDFFBA',
          color: '#4CAF50',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4CAF50';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#BDFFBA';
          e.currentTarget.style.color = '#4CAF50';
        }}
        key="submit"
        type="primary"
        onClick={editingOrder ? handleEditSubmit : handleAdd}
      >
        {editingOrder ? 'Chỉnh Sửa' : 'Thêm Mới'}
      </Button>,
    ],
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#BDFFBA',
        },
      }}
    >
      <div style={{ width: '1200px', margin: '0 auto' }}>
      <Row style={{ display: 'flex', marginBottom: '20px', marginTop: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
  <Col span={12} style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 25 }}>
    <img src="\icon\box.png" alt="" style={{ width: 35, marginRight: 15 }} /> 
    Quản lí đơn hàng
  </Col>
  <Col span={12} style={{ textAlign: 'right' }}>
    <Button
      type="primary"
      onClick={showModal}
      icon={<PlusOutlined />}
      style={{
        backgroundColor: '#BDFFBA',
        color: '#4CAF50',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4CAF50';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#BDFFBA';
        e.currentTarget.style.color = '#4CAF50';
      }}
    >
      Tạo Mới
    </Button>
  </Col>
</Row>


        <Table<OrderType>
          columns={columns}
          dataSource={dataSource}
          rowKey="key"
        />

        <Modal {...modalProps}>
          <Form form={form} layout="vertical" name="orderForm">
            <Form.Item
              name="orderCode"
              label="Mã Đơn Hàng"
              rules={[{ required: true, message: 'Vui lòng nhập mã đơn hàng!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="quantity"
              label="Số Lượng"
              rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="orderDate"
              label="Ngày Đặt Hàng"
              rules={[{ required: true, message: 'Vui lòng chọn ngày đặt hàng!' }]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="deliveryDate"
              label="Ngày Giao Hàng"
              rules={[{ required: true, message: 'Vui lòng chọn ngày giao hàng!' }]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="customerName"
              label="Người Đặt"
              rules={[{ required: true, message: 'Vui lòng nhập tên người đặt!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa Chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="status"
              label="Trạng Thái"
              rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
            >
              <Select>
                <Option value="Chờ xử lý">Chờ xử lý</Option>
                <Option value="Đã giao">Đã giao</Option>
                <Option value="Đã hủy">Đã hủy</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default App;
