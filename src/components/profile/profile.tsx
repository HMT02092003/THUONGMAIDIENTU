"use client";

import React, { useState } from "react";
import { Input, Button, Layout, Menu, Table, Form, Modal, Empty, Popconfirm, Row, Col } from "antd";
import {
  UserOutlined,
  HistoryOutlined,
  EnvironmentOutlined,
  LogoutOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

// Định nghĩa kiểu dữ liệu
interface ProfileData {
  name: string;
  phone: string;
  email: string;
}

interface AddressData {
  key: string;
  fullName: string;
  phone: string;
  area: string;
  address: string;
}

interface OrderData {
  key: string;
  orderId: string;
  date: string;
  total: string;
  status: string;
}

const Profile: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("1");

  // State quản lý thông tin tài khoản
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Nguyen Van A",
    phone: "0987654321",
    email: "nguyenvana@gmail.com",
  });

  const [editableProfile, setEditableProfile] = useState<ProfileData>({ ...profileData });

  // Fake data cho lịch sử đơn hàng
  const orderData: OrderData[] = [
    { key: "1", orderId: "DH001", date: "2024-05-01", total: "1,200,000 VND", status: "Đã giao" },
    { key: "2", orderId: "DH002", date: "2024-05-10", total: "850,000 VND", status: "Đang vận chuyển" },
    { key: "3", orderId: "DH003", date: "2024-06-01", total: "2,000,000 VND", status: "Đã hủy" },
  ];

  // State quản lý sổ địa chỉ
  const [addressList, setAddressList] = useState<AddressData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [form] = Form.useForm();

  // Xử lý mở modal thêm/sửa địa chỉ
  const showModal = (record?: AddressData) => {
    setIsEditMode(!!record); // Kiểm tra chế độ Edit
    if (record) {
      form.setFieldsValue(record);
      setEditingKey(record.key);
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (isEditMode && editingKey) {
        // Sửa địa chỉ
        setAddressList(
          addressList.map((item) =>
            item.key === editingKey ? { ...item, ...values } : item
          )
        );
      } else {
        // Thêm địa chỉ mới
        const newAddress: AddressData = {
          key: String(addressList.length + 1),
          ...values,
        };
        setAddressList([...addressList, newAddress]);
      }
      form.resetFields();
      setIsModalVisible(false);
      setIsEditMode(false);
      setEditingKey(null);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEditMode(false);
    setEditingKey(null);
  };

  const handleDelete = (key: string) => {
    setAddressList(addressList.filter((item) => item.key !== key));
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ProfileData) => {
    setEditableProfile({ ...editableProfile, [field]: e.target.value });
  };

  const handleProfileSubmit = () => {
    setProfileData({ ...editableProfile });
  };

  return (
    <Layout>
      {/* Sidebar được bọc trong khung */}
      <div style={{ border: "2px solidrgb(255, 255, 255)", borderRadius: "8px", padding: "10px", background: "#fff" }}>
        <Sider theme="light" width={250}>
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedMenu]}
            onClick={({ key }) => setSelectedMenu(key)}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>Thông tin tài khoản</Menu.Item>
            <Menu.Item key="2" icon={<HistoryOutlined />}>Lịch sử đơn hàng</Menu.Item>
            <Menu.Item key="3" icon={<EnvironmentOutlined />}>Sổ địa chỉ</Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />}>Đăng xuất</Menu.Item>
          </Menu>
        </Sider>
      </div>

      {/* Nội dung */}
      <Layout>
        <Content style={{ padding: "20px", backgroundColor: "#ffffff" }}>
          {/* Thông tin tài khoản */}
          {selectedMenu === "1" && (
            <>
              <h2>Thông tin tài khoản</h2>
              <Form layout="vertical" onFinish={handleProfileSubmit}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Tên của bạn">
                      <Input
                        placeholder="Tên của bạn"
                        value={editableProfile.name}
                        onChange={(e) => handleProfileChange(e, "name")}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Số điện thoại">
                      <Input
                        placeholder="Số điện thoại"
                        value={editableProfile.phone}
                        onChange={(e) => handleProfileChange(e, "phone")}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Email">
                  <Input
                    placeholder="Email"
                    value={editableProfile.email}
                    onChange={(e) => handleProfileChange(e, "email")}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Cập nhật thông tin</Button>
                </Form.Item>
              </Form>
            </>
          )}

          {/* Lịch sử đơn hàng */}
          {selectedMenu === "2" && (
            <>
              <h2>Lịch sử đơn hàng</h2>
              <Table
                columns={[
                  { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
                  { title: "Ngày đặt", dataIndex: "date", key: "date" },
                  { title: "Tổng tiền", dataIndex: "total", key: "total" },
                  { title: "Trạng thái", dataIndex: "status", key: "status" },
                ]}
                dataSource={orderData}
                pagination={false}
              />
            </>
          )}

          {/* Sổ địa chỉ */}
          {selectedMenu === "3" && (
            <>
              <h2>Sổ địa chỉ</h2>
              {addressList.length === 0 ? (
                <Empty description="0 địa chỉ được lưu" />
              ) : (
                <Table
                  columns={[
                    { title: "Họ và tên", dataIndex: "fullName", key: "fullName" },
                    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
                    { title: "Khu vực", dataIndex: "area", key: "area" },
                    { title: "Địa chỉ nhận hàng", dataIndex: "address", key: "address" },
                    {
                      title: "Hành động",
                      key: "actions",
                      render: (_, record) => (
                        <>
                          <Button
                            type="link"
                            icon={<EditOutlined />}
                            onClick={() => showModal(record)}
                          >
                            Sửa
                          </Button>
                          <Popconfirm
                            title="Bạn có chắc chắn muốn xóa?"
                            onConfirm={() => handleDelete(record.key)}
                            okText="Có"
                            cancelText="Hủy"
                          >
                            <Button type="link" danger icon={<DeleteOutlined />}>Xóa</Button>
                          </Popconfirm>
                        </>
                      ),
                    },
                  ]}
                  dataSource={addressList}
                  pagination={false}
                />
              )}
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button type="dashed" icon={<PlusOutlined />} onClick={() => showModal()}>
                  Thêm địa chỉ nhận
                </Button>
              </div>
            </>
          )}

          {/* Modal thêm/sửa địa chỉ */}
          <Modal
            title={isEditMode ? "Sửa địa chỉ nhận" : "Thêm địa chỉ nhận"}
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Lưu"
            cancelText="Hủy"
          >
            <Form layout="vertical" form={form}>
              <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item
                label="Khu vực"
                name="area"
                rules={[{ required: true, message: "Vui lòng nhập khu vực" }]}
              >
                <Input placeholder="Nhập khu vực" />
              </Form.Item>
              <Form.Item
                label="Địa chỉ nhận hàng"
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ nhận hàng" }]}
              >
                <Input placeholder="Nhập địa chỉ nhận hàng" />
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
