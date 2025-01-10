"use client";

import React, { useState } from "react";
import { Input, Button, Layout, Menu, Table, Form, Row, Col, Divider, Space, Modal } from "antd";
import { UserOutlined, HistoryOutlined, LogoutOutlined, SearchOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

// Define data types
interface ProfileData {
  name: string;
  phone: string;
  email: string;
}

interface OrderData {
  key: string;
  orderId: string;
  orderNumber: string;
  orderDate: string;
  status: string;
  totalAmount: string;
  shippingAddress: string;
  paymentMethod: string;
  name: string;
  phoneNumber: string;
  items: string[];
  productDetails: {
    image: string;
    name: string;
    quantity: number;
    description: string;
    tagName: string;
    variants: { cpu: string; ram: string };
    price: string;
    speed: string;
    onboardCard: string;
    discreteCard: string;
    ssdCapacity: string;
    color: string;
  }[];
}

const Profile: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("1");
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState<any | null>(null); // To store details of selected order for modal

  // Profile data state
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Nguyen Van A",
    phone: "0987654321",
    email: "nguyenvana@gmail.com",
  });

  const [editableProfile, setEditableProfile] = useState<ProfileData>({ ...profileData });

  // Fake order data
  const orderData: OrderData[] = [
    {
      key: "1",
      orderId: "DH001",
      orderNumber: "ORD001",
      orderDate: "2024-05-01",
      status: "Đã giao",
      totalAmount: "1,200,000 VND",
      shippingAddress: "123 Đường ABC, Quận 1, TP.HCM",
      paymentMethod: "Thanh toán khi nhận hàng",
      name: "Nguyen Van A",
      phoneNumber: "0987654321",
      items: ["Laptop", "Chuột", "Bàn phím"],
      productDetails: [
        {
          image: "https://via.placeholder.com/150",
          name: "Laptop",
          quantity: 1,
          description: "Laptop high-performance",
          tagName: "Electronics",
          variants: { cpu: "Intel i7", ram: "16GB" },
          price: "800,000 VND",
          speed: "3.6 GHz",          // Tốc độ
          onboardCard: "Intel UHD", // Card onboard
          discreteCard: "NVIDIA GTX 1650", // Card rời
          ssdCapacity: "512GB",     // Dung lượng SSD
          color: "Black",           // Màu sắc
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Chuột",
          quantity: 2,
          description: "Wireless mouse",
          tagName: "Accessories",
          variants: { cpu: "N/A", ram: "N/A" },
          price: "200,000 VND",
          speed: "N/A",              // Tốc độ
          onboardCard: "N/A",        // Card onboard
          discreteCard: "N/A",       // Card rời
          ssdCapacity: "N/A",        // Dung lượng SSD
          color: "White",            // Màu sắc
        },
      ]
    }

  ];

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ProfileData) => {
    setEditableProfile({ ...editableProfile, [field]: e.target.value });
  };

  const handleProfileSubmit = () => {
    setProfileData({ ...editableProfile });
  };

  const handleRowExpand = (expanded: boolean, record: OrderData) => {
    const newExpandedRowKeys = expanded ? [record.key] : [];
    setExpandedRowKeys(newExpandedRowKeys);
  };

  const handleExpandButtonClick = (record: OrderData) => {
    setCurrentOrderDetails(record.productDetails);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      {/* Sidebar */}
      <div style={{ border: "2px solid #003366", borderRadius: "8px", padding: "10px", background: "#e6f7ff" }}>
        <Sider theme="light" width={250} style={{ background: "#e6f7ff", border: "none" }}>
          <Menu mode="vertical" defaultSelectedKeys={["1"]} selectedKeys={[selectedMenu]} onClick={({ key }) => setSelectedMenu(key)} style={{ backgroundColor: "#e6f7ff" }}>
            <Menu.Item key="1" icon={<UserOutlined />} style={{ backgroundColor: selectedMenu === "1" ? "#b3e0ff" : "transparent" }}>Thông tin tài khoản</Menu.Item>
            <Menu.Item key="2" icon={<HistoryOutlined />} style={{ backgroundColor: selectedMenu === "2" ? "#b3e0ff" : "transparent" }}>Lịch sử đơn hàng</Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} style={{ backgroundColor: selectedMenu === "4" ? "#b3e0ff" : "transparent" }}>Đăng xuất</Menu.Item>
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
                      <Input placeholder="Tên của bạn" value={editableProfile.name} onChange={(e) => handleProfileChange(e, "name")} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Số điện thoại">
                      <Input placeholder="Số điện thoại" value={editableProfile.phone} onChange={(e) => handleProfileChange(e, "phone")} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Email">
                      <Input placeholder="Email" value={editableProfile.email} onChange={(e) => handleProfileChange(e, "email")} />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />
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
                  { title: "Mã đơn hàng", dataIndex: "orderNumber", key: "orderNumber" },
                  { title: "Ngày đặt", dataIndex: "orderDate", key: "orderDate" },
                  { title: "Trạng thái", dataIndex: "status", key: "status" },
                  { title: "Tổng tiền", dataIndex: "totalAmount", key: "totalAmount" },
                  { title: "Địa chỉ giao hàng", dataIndex: "shippingAddress", key: "shippingAddress" },
                  { title: "Phương thức thanh toán", dataIndex: "paymentMethod", key: "paymentMethod" },
                  { title: "Tên người nhận", dataIndex: "name", key: "name" },
                  { title: "Số điện thoại người nhận", dataIndex: "phoneNumber", key: "phoneNumber" },
                  {
                    title: "Chi tiết",
                    render: (text, record) => <Button onClick={() => handleExpandButtonClick(record)}>Xem chi tiết</Button>,
                  },
                ]}
                dataSource={orderData}
                expandedRowKeys={expandedRowKeys}
                onExpand={handleRowExpand}
                pagination={false}
                scroll={{ x: "max-content" }}
              />

              {/* Modal for detailed order information */}
              <Modal
                title="Thông tin chi tiết đơn hàng"
                visible={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
                width={1000}
              >
                <Row gutter={[16, 16]} justify="center">
                  {currentOrderDetails &&
                    currentOrderDetails.map((item: any, index: number) => (
                      <Col key={index} span={24} style={{ display: "flex", alignItems: "center" }}>
                        {/* Ảnh sản phẩm */}
                        <div style={{ flex: 1, textAlign: "center" }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "150px", height: "150px" }}
                          />
                        </div>

                        {/* Thông tin sản phẩm bên cạnh ảnh */}
                        <div style={{ flex: 3, textAlign: "left", paddingLeft: "20px" }}>
                          <h3 style={{ marginTop: "-10px" }}>
                            {item.name}
                          </h3>
                          <Row gutter={[16, 16]} align="middle">
                            <Col span={8} style={{ fontWeight: "bold" }}>
                              Số lượng:
                            </Col>
                            <Col span={16}>{item.quantity}</Col>
                          </Row>
                          <Row gutter={[16, 16]} align="middle">
                            <Col span={8} style={{ fontWeight: "bold" }}>
                              Màu sắc:
                            </Col>
                            <Col span={16}>{item.color || "N/A"}</Col>
                          </Row>
                          <Row gutter={[16, 16]} align="middle">
                            <Col span={8} style={{ fontWeight: "bold" }}>
                              Phiên bản:
                            </Col>
                            <Col span={16}>
                              CPU: {item.variants.cpu || "N/A"}, RAM: {item.variants.ram || "N/A"}
                            </Col>
                          </Row>
                          <Row gutter={[16, 16]} align="middle">
                            <Col span={8} style={{ fontWeight: "bold" }}>
                              Giá:
                            </Col>
                            <Col span={16}>{item.price}</Col>
                          </Row>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Modal>

            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;