'use client';

import React, { use, useState, useEffect } from "react";
import { Button, Card, Col, Empty, Row, Typography, Image, message } from "antd";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined, DeleteOutlined, DollarOutlined } from "@ant-design/icons";
import "./ShoppingCart.css";

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
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

  console.log("productData", productData);

  const fetchProductData = async () => {
    try {
      const storedData = localStorage.getItem('cart'); // Lấy dữ liệu từ localStorage
      if (!storedData) {
        throw new Error("No product data found in cart");
      }

      const parsedData = JSON.parse(storedData); // Chuyển chuỗi JSON thành object

      const transformedData = parsedData.map((product: any) => ({
        id: product.id,
        name: product.name,
        price: product.variants[0]?.price || 0,
        quantity: product.quantity || 1,
        image: product.productImage,
        version: product.variants[0]?.version || 'N/A',
        color: product.variants[0]?.color || 'N/A',
        productType: product.categories[0]?.name || 'Unknown',
      }));

      setCartData(transformedData);
    } catch (error: any) {
      // Kiểm tra lỗi và hiển thị thông báo
      if (error instanceof SyntaxError) {
        message.error("Failed to parse product data. Invalid format in localStorage.");
      } else {
        message.error(error.message || "An unknown error occurred.");
      }
    }
  };


  useEffect(() => {
    fetchProductData();
  }, []);

  // Tính tổng tiền
  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1.1;

  // Hàm xử lý tăng số lượng sản phẩm
  const increaseQuantity = (id: number) => {
    setCartData(
      productData.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Hàm xử lý giảm số lượng sản phẩm
  const decreaseQuantity = (id: number) => {
    setCartData(
      productData.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Hàm xử lý xóa sản phẩm
  const removeItem = (id: number) => {
    setCartData(cartData.filter(item => item.id !== id));
  };

  return (
    <Row gutter={16} className="cartRow">
      <Col span={16}>
        <Card
          title={<Title level={4}>Giỏ hàng ({cartData.length})</Title>}
          bordered={false}
          className="cartCard"
        >
          {cartData.length === 0 ? (
            <Empty
              image={<ShoppingCartOutlined className="emtyCart" />}
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
                <div className="product">
                  {/* Tên sản phẩm */}
                  <p style={{ margin: "0", fontWeight: "bold" }}>{item.name}</p>

                  {/* Version, Color, Product Type */}
                  <p style={{ margin: "4px 0", color: "#555" }}>
                    Phiên bản: {item.version} | Màu sắc: {item.color} | Loại: {item.productType}
                  </p>

                  {/* Giá sản phẩm */}
                  <p style={{ color: "red", textAlign: "right", fontWeight: "bold", marginBottom: 4 }}>
                    Giá: {Number(item.price).toLocaleString()} đ
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
        <Card bordered={false} title="Tóm tắt đơn hàng">
          <p>Tạm tính: {totalPrice.toLocaleString()} đ</p>
          <p style={{ fontWeight: "bold" }}>Tổng cộng: {totalPriceWithVAT.toLocaleString()} đ</p>
          <Button type="primary" block disabled={totalPrice === 0} onClick={() => setPaymentMethod(true)}>
            Đặt hàng
          </Button>
        </Card>

        <br />

        {paymentMethod == true && (
          <Card bordered={false} title="Chọn hình thức thanh toán">
            <Button type="primary" block style={{ marginBottom: "8px", backgroundColor: "#73d13d" }} onClick={() => console.log("Thanh toán khi nhận hàng")}>
              <DollarOutlined />Thanh toán khi nhận hàng
            </Button>
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
