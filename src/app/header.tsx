// AppHeader.tsx
import React from "react";
import { Layout, Input, Menu, Row, Col, Typography, Button, Dropdown } from "antd";
import {
  SearchOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  NotificationOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./header.css";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader: React.FC = () => {
  // Mock danh mục
  const categories = [
    { key: "1", name: "Laptop", icon: "./icon/laptop.png" },
    { key: "2", name: "Bàn phím", icon: "./icon/keyboard.png" },
    { key: "3", name: "Âm thanh", icon: "./icon/audio.png" },
    { key: "4", name: "Ghế công thái học", icon: "./icon/chair.png" },
    { key: "5", name: "Bàn nâng hạ", icon: "./icon/desk.png" },
    { key: "6", name: "Thực tế ảo", icon: "./icon/vr.png" },
  ];

  const menuItems = categories.map((category) => ({
    key: category.key,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={category.icon}
          alt={category.name}
          style={{ width: "24px", height: "24px" }}
        />
        {category.name}
      </div>
    ),
  }));

  const menu = <Menu items={menuItems} />;

  // Handle click events
  const handleLoginClick = () => {
    console.log("Đăng nhập clicked!");
    // Chuyển hướng đến trang đăng nhập, ví dụ:
    // window.location.href = "/login"; 
  };

  const handleCartClick = () => {
    console.log("Shopping cart clicked!");
    // Chuyển hướng đến giỏ hàng, ví dụ:
    // window.location.href = "/cart"; 
  };

  const handlePhoneClick = () => {
    console.log("Phone clicked!");
    // Ví dụ chuyển hướng tới số điện thoại hoặc trang liên hệ
    // window.location.href = "tel:1900633579"; 
  };

  const handleAddressClick = () => {
    console.log("Address clicked!");
    // Ví dụ mở Google Maps hoặc trang địa chỉ cửa hàng
    // window.location.href = "/address"; 
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked!");
    // Ví dụ chuyển hướng đến trang tin tức công nghệ
    // window.location.href = "/news"; 
  };

  return (
    <Header className="header">
      <Row align="middle" justify="space-between" gutter={[16,0]}>
        {/* Logo */}
        <Col span={2}>
          <img
            src="../../../logo/logo.png"
            alt="ThinkPro Logo"
            className="logo"
            style={{ height: "40px", width: "auto", cursor: "pointer", position:"relative" }}
          />
        </Col>

        {/* Tìm kiếm */}
        <Col span={8}>
          <Input
            placeholder="Tên sản phẩm, nhu cầu, hãng"
            prefix={<SearchOutlined />}
            style={{
              borderRadius: "10px",
              height: "30px", 
              width:"100%",
            }}
          />
        </Col>

        {/* Thông tin liên hệ và tài khoản */}
        <Col span={14}>
          <Row align="middle" gutter={8}>
            <Col>
              <Button
                type="link"
                style={{ padding: 0, marginRight: "8px" }}
                onClick={handlePhoneClick}
              >
                <PhoneOutlined />
                <Text style={{ marginLeft: "8px", marginRight: "8px" }}>1900.63.3579</Text>
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{ padding: 0, marginRight: "8px" }}
                onClick={handleAddressClick}
              >
                <EnvironmentOutlined />
                <Text style={{ marginRight: "8px" }}>Địa chỉ cửa hàng</Text>
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{ padding: 0, marginRight: "8px" }}
                onClick={handleNotificationClick}
              >
                <NotificationOutlined />
                <Text style={{ marginRight: "8px" }}>Tin công nghệ</Text>
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{ padding: 0, marginRight: "8px" }}
                onClick={handleLoginClick}
              >
                <UserOutlined style={{ fontSize: "20px" }} />
                
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{ padding: 0 }}
                onClick={handleCartClick}
              >
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Danh mục */}
      <Row align="middle" className="menu-row" justify="space-between">
        <Col>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MenuOutlined />}>Danh mục</Button>
          </Dropdown>
        </Col>
        <Col flex="auto" className="menu-scroll">
          <Row gutter={[16, 0]}>
            {categories.map((category) => (
              <Col key={category.key}>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  type="text"
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    style={{ width: "24px", height: "24px" }}
                  />
                  {category.name}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;