'use client';

import React, { useState, useEffect } from "react";
import { Button, Card, Col, Empty, Row, Typography, Image, message, Divider, Modal, Steps, theme, Form, Input, Checkbox } from "antd";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined, DeleteOutlined, DollarOutlined } from "@ant-design/icons";
import "@/src/cssfolder/shoppingCart.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const ShoppingCart: React.FC = () => {
  const [cartData, setCartData] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const fetchProductData = async () => {
    try {
      const storedData = localStorage.getItem("cart");
      if (!storedData) {
        throw new Error("No product data found in cart");
      }

      const parsedData = JSON.parse(storedData);
      setCartData(parsedData);
    } catch (error: any) {
      message.error(error.message || "An unknown error occurred.");
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Declare totalPrice and totalPriceWithVAT only once
  const totalPrice = cartData.reduce((total, item) => total + item.variants[0]?.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1;

  const steps = [
    {
      title: 'Giỏ hàng',
      content: (
        <div className="cartCard">
          {cartData.length === 0 ? (
            <Empty
              image={<ShoppingCartOutlined className="emptyCart" />}
              imageStyle={{ height: 100 }}
              description={<span>Giỏ hàng trống</span>}
            >
              <Button type="primary" onClick={() => console.log("Redirect to explore page")}>
                Khám phá ngay
              </Button>
            </Empty>
          ) : (
            cartData.map(item => (
              <div key={item.id} className="cartItem">
                <Image src={item.productImage} alt={item.name} width={100} height={100} className="cartImage" />
                <div className="product">
                  <Title level={5}>{item.name}</Title>
                  <Text type="secondary">Phiên bản: {item.version} | Màu: {item.color}</Text>
                  <div className="quantityControl">
                    <Button
                      icon={<MinusOutlined />}
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    />
                    <span className="quantityValue">{item.quantity}</span>
                    <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(item.id)} />
                  </div>
                </div>
                <div className="cartPrice">
                  <Text strong className="priceText">
                    {Number(item.variants[0]?.price || 0).toLocaleString()} đ
                  </Text>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => removeItem(item.id)}
                    className="removeButton"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      title: 'Thông tin đặt hàng',
      content: (
        <div>
          <p style={{ fontSize: '20px', fontWeight: 600 }}>Thông tin khách mua hàng</p>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Họ và tên"
                rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phoneNumber"
                label="Số điện thoại"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại!' },
                  { pattern: /^\d{10}$/, message: 'Số điện thoại phải có đủ 10 số!' }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          {/* Phần chọn cách giao hàng */}
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '20px', fontWeight: 600 }}>Địa chỉ giao hàng</p>

        <Form.Item
          name="address"
          label="Số nhà, tên đường"
          rules={[{ required: true, message: 'Vui lòng nhập số nhà, tên đường!' }]}
        >
          <Input />
        </Form.Item>
      </div>
        </div>
      ),
    },
    {
      title: 'Thanh toán',
      content: 'Last-content',
    },
    {
      title: 'Hoàn thành',
      content: 'Last-content',
    },
  ];

  const increaseQuantity = (id: number) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cartData.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartData.filter(item => item.id !== id);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const MomoHandel = async () => {
    try {
      const data = { amount: totalPrice, cartData: cartData };
      const api = await axios.post('http://localhost:4000/api/momopayment', { data });
      router.push(api.data.payUrl);
    } catch (error: any) {
      message.error(error.message || "Lỗi trong quá trình thanh toán.");
    }
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Row gutter={[16, 16]} className="cartRow">
        <Col span={24}>
          <Card title={<Steps current={current} items={steps.map((item) => ({ key: item.title, title: item.title }))} />} className="cartCard">
            <div>{steps[current].content}</div>
            <div style={{ marginTop: 44, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={next}><ShoppingCartOutlined style={{fontSize:'15px'}}/>Đặt hàng ngay</Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={prev}>Trở lại</Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ShoppingCart;
