"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, Layout, Menu, Table, Form, Row, Col, Divider, Modal } from "antd";
import { UserOutlined, HistoryOutlined, GiftOutlined, EnvironmentOutlined, StarOutlined, QuestionCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';

const { Content } = Layout;

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
  const [currentOrderDetails, setCurrentOrderDetails] = useState<any | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const [greetingIcon, setGreetingIcon] = useState<string>("");

  // Profile data state
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Sơn Đặng",
    phone: "",
    email: "pankimoon189@gmail.com",
  });

  const [editableProfile, setEditableProfile] = useState<ProfileData>({ ...profileData });

  // Update greeting based on time of day
  useEffect(() => {
    const hour = dayjs().hour();
    if (hour >= 5 && hour < 12) {
      setGreeting("Chào buổi sáng");
      setGreetingIcon("https://cdn-0.emojis.wiki/emoji-pics/facebook/sun-behind-cloud-facebook.png"); // Morning sun icon
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Chào buổi chiều");
      setGreetingIcon("/icon/afternoon.png"); // Afternoon sun icon
    } else {
      setGreeting("Chào buổi tối");
      setGreetingIcon("https://cdn-0.emojis.wiki/emoji-pics/facebook/sun-behind-cloud-facebook.png"); // Night moon icon
    }
  }, []);

  // Menu items configuration
  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "Thông tin tài khoản" },
    { key: "2", icon: <HistoryOutlined />, label: "Lịch sử đơn hàng" },
    { key: "3", icon: <GiftOutlined />, label: "Ví voucher" },
    { key: "4", icon: <EnvironmentOutlined />, label: "Sổ địa chọ" },
    { key: "5", icon: <StarOutlined />, label: "Đánh giá & nhận xét" },
    { key: "6", icon: <QuestionCircleOutlined />, label: "Câu hỏi thường gặp" },
    { key: "7", icon: <LogoutOutlined />, label: "Đăng xuất" },
  ];

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    minHeight: '80vh',
    padding: '50px 100px',
    margin: '24px 0',
    borderRadius: '15px'
  };

  const greetingContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px',
    marginLeft: '36px'
  };

  const greetingImageStyle: React.CSSProperties = {
    width: '88px',
    height: '88px',
    marginRight: '36px'
  };

  const greetingTextStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const subGreetingStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '20px'
  };

  const sidebarStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    padding: '16px',
    borderRadius: '8px',
    border: '2px solid #1890ff',
  };

  const menuStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px'
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px'
  };

  return (
    <Layout style={containerStyle}>
      <div>
        {/* Greeting Section */}
        <div style={greetingContainerStyle}>
          <img src={greetingIcon} alt="greeting" style={greetingImageStyle} />
          <div>
            <h1 style={greetingTextStyle}>{greeting},</h1>
            <h2 style={subGreetingStyle}>{profileData.name}</h2>
          </div>
        </div>

        <Row gutter={24}>
          {/* Sidebar */}
          <Col span={9}>
            <div style={sidebarStyle}>
              <Menu
                mode="vertical"
                selectedKeys={[selectedMenu]}
                onClick={({ key }) => setSelectedMenu(key)}
                style={menuStyle}
                items={menuItems}
              />
            </div>
          </Col>

          {/* Main Content */}
          <Col span={15}>
            <div style={contentStyle}>
              {selectedMenu === "1" && (
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                    Thông tin tài khoản
                  </h2>
                  <Form layout="vertical">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Tên của bạn">
                          <Input
                            prefix={<UserOutlined />}
                            value={profileData.name}
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Số điện thoại">
                          <Input
                            placeholder="Nhập số điện thoại"
                            value={profileData.phone}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Email">
                          <Input
                            value={profileData.email}
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Divider />
                    <Button type="primary">Đổi mật khẩu</Button>
                  </Form>
                </div>
              )}

              {selectedMenu === "2" && (
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                    Lịch sử đơn hàng
                  </h2>
                  <Table
                    columns={[
                      { title: "Mã đơn hàng", dataIndex: "orderNumber", key: "orderNumber" },
                      { title: "Ngày đặt", dataIndex: "orderDate", key: "orderDate" },
                      { title: "Trạng thái", dataIndex: "status", key: "status" },
                      { title: "Tổng tiền", dataIndex: "totalAmount", key: "totalAmount" },
                      {
                        title: "Chi tiết",
                        key: "action",
                        render: (_, record) => (
                          <Button type="link" onClick={() => setIsModalVisible(true)}>
                            Xem chi tiết
                          </Button>
                        ),
                      },
                    ]}
                    dataSource={[]}
                  />
                </div>
              )}

              {/* Other menu content would go here */}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Profile;