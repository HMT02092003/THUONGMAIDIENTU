'use client';

import React, { useState, useEffect } from "react";
import { Button, Card, Col, Empty, Row, Typography, Image, message, Divider } from "antd";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined, DeleteOutlined, DollarOutlined } from "@ant-design/icons";
import "./shoppingCart.css";

const { Title, Text } = Typography;



const ShoppingCart: React.FC = () => {
  const [cartData, setCartData] = useState<any[]>([]);
  console.log(cartData);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

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

  const totalPrice = cartData.reduce((total, item) => total + item.variants[0]?.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1;

  const increaseQuantity = (id: number) => {
    // setCartData(
    //   cartData.map(item =>
    //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //   )
    // );

    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartData.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    );

    fetchProductData();
  };

  const decreaseQuantity = (id: number) => {
    // setCartData(
    //   cartData.map(item =>
    //     item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    //   )
    // );

    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartData.map(item =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    );

    fetchProductData();
  };

  const removeItem = (id: number) => {
    // setCartData(cartData.filter(item => item.id !== id));

    localStorage.setItem(
      "cart",
      JSON.stringify(cartData.filter(item => item.id !== id))
    );

    fetchProductData();
  };

  return (
    <Row gutter={[16, 16]} className="cartRow">
      <Col span={16}>
        <Card
          title={<Title level={4}>Giỏ hàng ({cartData.length})</Title>}
          className="cartCard"
        >
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
            cartData.map(item => {
              console.log("item", item);
              return (
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
                    <Text strong className="priceText">{Number(item.variants[0]?.price || 0).toLocaleString()} đ</Text>
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => removeItem(item.id)}
                      className="removeButton"
                    />
                  </div>
                </div>
              );
            })
          )}
        </Card>
      </Col>

      <Col span={8}>
        <Card
          title={<Title level={5}>Tóm tắt đơn hàng</Title>}
          className="cartSummary"
        >
          <Text>Tạm tính: <strong>{totalPrice.toLocaleString()} đ</strong></Text>
          <Divider />
          <Text style={{ fontSize: "16px" }}>Tổng cộng: <strong className="totalPrice">{totalPriceWithVAT.toLocaleString()} đ</strong></Text>
          <Divider />
          <Button type="primary" block disabled={totalPrice === 0} onClick={() => setPaymentMethod(true)}>
            Đặt hàng
          </Button>
        </Card>

        <br />

        {paymentMethod == true && (
          <Card bordered={false} title="Chọn hình thức thanh toán" className="paymentMethod">
            <Button type="primary" block style={{ marginBottom: "8px", backgroundColor: "#73d13d" }} onClick={() => console.log("Thanh toán khi nhận hàng")}>
              <DollarOutlined />Thanh toán khi nhận hàng
            </Button>
            <Divider>Hoặc</Divider>
            <Button.Group style={{ width: '100%', display: 'flex' }}>
              <Button
                type="primary"
                block
                style={{ backgroundColor: '#005BAA' }}
                onClick={() => console.log("Thanh toán qua VNPay")}
              >
                VNPay
              </Button>
              <Button
                type="primary"
                block
                style={{ backgroundColor: '#AF2070' }}
                onClick={() => console.log("Thanh toán qua MoMo")}
              >
                MoMo
              </Button>
            </Button.Group>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default ShoppingCart;
