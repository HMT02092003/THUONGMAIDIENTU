'use client';

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Empty,
  Row,
  Typography,
  Image,
  message,
  Divider,
  Modal,
  Steps,
  theme,
  Form,
  Input,
  Result,
} from "antd";
import {
  ShoppingCartOutlined,
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  DollarOutlined,
  UserOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  RollbackOutlined,
  CheckOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "@/src/cssfolder/shoppingCart.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const ShoppingCart: React.FC = () => {
  const [cartData, setCartData] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);


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

  const handleCreateOrder = async (): Promise<void> => {
    try {

      const dataOfForm = form.getFieldsValue();
      const isValid = await form.validateFields();

      const productData = localStorage.getItem("cart");
      if (!productData) {
        throw new Error("No product data found in cart");
      }
      const productDataPaser = JSON.parse(productData);

      const orderData = {
        customerInfo: dataOfForm,
        cartItems: productDataPaser,
        totalAmount: totalPrice
      };

      const response = await axios.post('http://localhost:4000/api/createOrder', orderData);
      next();

    } catch (error: any) {
      message.error('Vui lòng điền đầy đủ thông tin');
    }
  };

  // Declare totalPrice and totalPriceWithVAT only once
  const totalPrice = cartData.reduce((total, item) => total + item.variants[0]?.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1;

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

  const removeItem = (id: number, selectedVersion: string) => {
    const updatedCart = cartData.filter(item =>
      !(item.id === id && item.selectedVersion === selectedVersion)
    );
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


  const steps = [
    {
      title: 'Giỏ hàng',
      icon: <ShoppingCartOutlined />,
      content: (
        <div className="cartCard">
          {cartData.length === 0 ? (
            <Empty
              image={<ShoppingCartOutlined className="emptyCart" />}
              imageStyle={{ height: 100 }}
              description={<span>Giỏ hàng trống</span>}
            >
            </Empty>
          ) : (
            cartData.map(item => (
              <div key={`${item.id}-${item.selectedVersion}`} className="cartItem">
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
                    {Number(item.price || 0).toLocaleString()} đ
                  </Text>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => removeItem(item.id, item.selectedVersion)}
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
      icon: <UserOutlined />,
      content: (
        <div>
          <Form form={form} layout="vertical" style={{ padding: '0 15%' }} >
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
          </Form>
        </div>
      ),
    },
    {
      title: 'Thanh toán',
      icon: <CreditCardOutlined />,
      content: (
        <>
          <Card
            title={<Title level={5}>Tóm tắt đơn hàng</Title>}
            className="cartSummary"
            style={{ borderRadius: '8px', padding: '16px' }}
          >
            <Text style={{ fontSize: '14px', color: '#595959' }}>
              Tạm tính: <strong style={{ fontSize: '16px', color: '#333' }}>{totalPrice.toLocaleString()} đ</strong>
            </Text>
            <Divider />
            <Text style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>
              Tổng cộng: <strong className="totalPrice" style={{ color: '#1890ff' }}>{totalPriceWithVAT.toLocaleString()} đ</strong>
            </Text>
            <Divider />
            <Button
              type="primary"
              block
              disabled={totalPrice === 0}
              style={{
                height: '48px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: totalPrice === 0 ? '#d9d9d9' : '#1890ff',
              }}
              onClick={() => {
                setPaymentMethod(true)

              }}
            >
              Chọn phương thức thanh toán
            </Button>
          </Card>

          <br />

          {paymentMethod && (
            <Card
              bordered={false}
              title={<Title level={5} style={{ color: '#333' }}>Chọn hình thức thanh toán</Title>}
              className="paymentMethod"
              style={{ borderRadius: '8px', background: '#fafafa', padding: '16px' }}
            >
              <Button
                type="primary"
                block
                style={{
                  marginBottom: '12px',
                  height: '48px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: '#73d13d',
                  borderColor: '#73d13d',
                }}
                onClick={next}
              >
                <DollarOutlined /> Thanh toán khi nhận hàng
              </Button>
              <Divider style={{ margin: '12px 0', fontSize: '12px', color: '#595959' }}>Hoặc</Divider>
              <Button.Group style={{ width: '100%', display: 'flex', gap: '8px' }}>
                <Button
                  type="primary"
                  block
                  style={{
                    backgroundColor: '#005BAA',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                  onClick={() => console.log("Thanh toán qua VNPay")}
                >
                  ZaloPay
                </Button>
                <Button
                  type="primary"
                  block
                  style={{
                    backgroundColor: '#AF2070',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                  onClick={() => MomoHandel()}
                >
                  MoMo
                </Button>
              </Button.Group>
            </Card>
          )}
        </>
      ),
    },
    {
      title: 'Hoàn thành',
      icon: <CheckCircleOutlined />,
      content: (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Result
              status="success"
              title="Thanh toán thành công!"
              subTitle="Cảm ơn bạn đã mua hàng. Chúng tôi đã nhận được thanh toán của bạn."
              icon={<SmileOutlined />}
              extra={[
                <Button type="primary" key="home" onClick={() => router.push('/home')} >
                  Quay lại trang chủ
                </Button>,
                <Button key="orders" >
                  Xem lịch sử đơn hàng
                </Button>,
              ]}
            />
          </div>
        </>
      )
    },
  ];

  const renderStepButtons = () => {
    const buttons = [];

    if (current > 0 && current < steps.length - 1) {
      buttons.push(
        <Button key="back" onClick={prev} className="prevButton">
          <RollbackOutlined />Trở lại
        </Button>
      );
    }

    if (current < steps.length - 1) {
      switch (current) {
        case 0:
          if (cartData.length > 0) {
            buttons.push(
              <Button key="next" type="primary" onClick={next} className="nextButton">
                <ShoppingCartOutlined style={{ fontSize: '15px' }} />Đặt hàng ngay
              </Button>
            );
          }
          break;
        case 1:
          buttons.push(
            <Button type="primary" htmlType="submit" form="" onClick={handleCreateOrder} className="nextButton">
              <CheckOutlined />Xác nhận thông tin
            </Button>
          );
          break;
        case 2:
          // Only show back button during payment step
          break;
      }
    }

    return buttons;
  };

  return (
    <Row gutter={[16, 16]} className="cartRow">
      <Col span={24}>
        <Card
          title={
            <Steps
              current={current}
              items={steps.map((item) => ({
                key: item.title,
                title: item.title,
                icon: item.icon
              }))}
              className="stepStyle"
            />
          }
          className="cartCard"
        >
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 44, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            {renderStepButtons()}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ShoppingCart;
