'use client';

import React, { useState } from "react";
import { Button, Card, Col, Empty, Row, Typography, Image } from "antd";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  version: string;
  color: string;
  productType: string;
}

// Fake data giả để test
const initialCartData: CartItem[] = [
  { id: 1, name: "Laptop A", price: 15000000, quantity: 1, image: "https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2022/3/9/ps5-01.jpg", version: "2023", color: "Silver", productType: "Ultrabook" },
  { id: 2, name: "Laptop B", price: 20000000, quantity: 2, image: "https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/4/4/dell-inspiron-14-5430-thinkpro-01.png", version: "2022", color: "Black", productType: "Gaming" }
];

const ShoppingCart: React.FC = () => {
  const [cartData, setCartData] = useState<CartItem[]>(initialCartData);

  // Tính tổng tiền
  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1.1;

  // Hàm xử lý tăng số lượng sản phẩm
  const increaseQuantity = (id: number) => {
    setCartData(
      cartData.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Hàm xử lý giảm số lượng sản phẩm
  const decreaseQuantity = (id: number) => {
    setCartData(
      cartData.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Hàm xử lý xóa sản phẩm
  const removeItem = (id: number) => {
    setCartData(cartData.filter(item => item.id !== id));
  };

  return (
    <Row gutter={16} style={{ padding: "20px" }}>
      <Col span={16}>
        <Card
          title={<Title level={4}>Giỏ hàng ({cartData.length})</Title>}
          bordered={false}
          style={{ height: "100%" }}
        >
          {cartData.length === 0 ? (
            <Empty
              image={<ShoppingCartOutlined style={{ fontSize: "64px", color: "#1890ff" }} />}
              imageStyle={{ height: 100 }}
              description={<span>Giỏ hàng trống</span>}
            >
              <Button type="primary" onClick={() => console.log("Redirect to explore page")}>
                Khám phá ngay
              </Button>
            </Empty>
          ) : (
            cartData.map(item => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                {/* Hình ảnh sản phẩm */}
                <Image src={item.image} alt={item.name} width={80} height={80} style={{ marginRight: "16px" }} />

                {/* Thông tin sản phẩm */}
                <div style={{ flex: 1 }}>
                  {/* Tên sản phẩm */}
                  <p style={{ margin: "0", fontWeight: "bold" }}>{item.name}</p>

                  {/* Version, Color, Product Type */}
                  <p style={{ margin: "4px 0", color: "#555" }}>
                    Phiên bản: {item.version} | Màu sắc: {item.color} | Loại: {item.productType}
                  </p>

                  {/* Giá sản phẩm */}
                  <p style={{ color: "red", textAlign: "right", fontWeight: "bold", marginBottom: 4 }}>
                    Giá: {item.price.toLocaleString()} đ
                  </p>

                  {/* Khung chứa tăng/giảm số lượng */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #d9d9d9", padding: "8px", borderRadius: "8px", width: "fit-content" }}>
                    <Button
                      icon={<MinusOutlined />}
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    />
                    <span style={{ minWidth: "24px", textAlign: "center" }}>{item.quantity}</span>
                    <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(item.id)} />
                  </div>
                </div>

                {/* Nút xóa sản phẩm */}
                <div style={{ marginLeft: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => removeItem(item.id)}
                    style={{ marginTop: "8px" }}
                  />
                </div>
              </div>
            ))
          )}
        </Card>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
          <Title level={5}>Tóm tắt đơn hàng</Title>
          <p>Tạm tính: {totalPrice.toLocaleString()} đ</p>
          <p style={{ fontWeight: "bold" }}>Tổng cộng: {totalPriceWithVAT.toLocaleString()} đ</p>
          <Button type="primary" block disabled={totalPrice === 0}>
            Đặt hàng
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ShoppingCart;
