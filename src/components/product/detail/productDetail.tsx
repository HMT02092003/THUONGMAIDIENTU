'use client';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Divider, Tag, Button, Spin, message } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const ProductDetail: React.FC<any> = ({ id }) => {
  const router = useRouter();
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/getProductById', { id });
        setProductData(response.data);
        setMainImage(response.data.image);
      } catch (error: any) {
        message.error(error.response?.data?.message)
      }
    };

    fetchProductData();
  }, [id]);

  const addProductToCart = (buyNow: boolean = false) => {
    if (!selectedVersion || !selectedType) {
      message.warning("Vui lòng chọn phiên bản sản phẩm!");
      return;
    }

    try {
      let cartData: any = localStorage.getItem('cart');
      cartData = cartData ? JSON.parse(cartData) : [];

      const existingProductIndex = cartData.findIndex((item: any) =>
        item.id === productData.id && item.selectedVersion === selectedVersion
      );

      if (existingProductIndex !== -1) {
        cartData[existingProductIndex].quantity += 1;
      } else {
        cartData.push({
          ...productData,
          selectedVersion,
          price: Number(selectedType),
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cartData));
      message.success("Sản phẩm đã được thêm vào giỏ hàng");

      if (buyNow) {
        router.push('/shoppingCart');
      }
    } catch (error: any) {
      message.error("Lỗi trong quá trình thêm sản phẩm vào giỏ hàng");
    }
  };

  if (!productData) return <div><Spin /></div>;

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={24}>
        <Col span={14}>
          <Card
            cover={
              <img
                alt={productData.name}
                src={`http://localhost:4000/${productData.productImage}`}
                style={{ height: '500px', objectFit: 'contain' }}
              />
            }
          />
          <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
            {Object.keys(productData.imageUrl).map((key: any) => (
              <Col span={6} key={key}>
                <img
                  alt={productData.name}
                  src={`http://localhost:4000/${productData.imageUrl[key]}`}
                  style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setMainImage(productData.imageUrl[key])}
                />
              </Col>
            ))}
          </Row>
          <br />
          <Card title="Cấu hình đặc điểm" style={{ marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <ul style={{ padding: '0 20px' }}>
              {productData.specifications.map((item: any) => (
                <li key={item.title} style={{ marginBottom: '10px', listStyleType: 'disc' }}>
                  <Title level={5}>
                    <Text>{item.title}: {item.info}</Text>
                  </Title>
                </li>
              ))}
            </ul>
          </Card>
          <br />
          <Card title="Chính sách bảo hành & đổi trả" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div>Bảo hành 12 tháng tại chuỗi cửa hàng</div>
            <div>Đổi mới trong 15 ngày đầu tiên</div>
          </Card>
          <br />
          <Card title="Bài viết mô tả">
            {productData.description}
          </Card>
        </Col>

        <Col span={10}>
          <div style={{
            position: 'sticky',
            top: '20px',
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            maxHeight: '100vh',
            overflow: 'auto',
          }}>
            <div style={{ fontSize: '14px', backgroundColor: "#ff4d4f", padding: "20px", color: "white", fontWeight: "bold" }}>
              <TagOutlined /> {productData.tagName.toUpperCase()}
            </div>
            <div style={{ padding: "20px" }}>
              <Title level={3}>{productData.name}</Title>
              <Text type="secondary">MSP: {productData.productId}</Text>
              <Divider />
              <Title level={5}>Phiên bản ( Chọn phiên bản )</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag
                  key={`version-${item.version}-${index}`}
                  color={selectedVersion === item.version ? 'gold' : 'blue'}
                  style={{ fontSize: '16px', padding: '5px 10px', cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedVersion(item.version);
                    setSelectedType(item.price);
                  }}
                >
                  {item.version}
                </Tag>
              ))}
              <br />
              <Title level={5}>Màu</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`color-${item.color}-${index}`} color='lime' style={{ fontSize: '16px', padding: '5px 10px' }}>
                  {item.color}
                </Tag>
              ))}
              <br />
              <Title level={5}>Loại hàng</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`type-${item.type}-${index}`} color='volcano' style={{ fontSize: '16px', padding: '5px 10px' }}>
                  {item.type}
                </Tag>
              ))}
              <Divider />
              {selectedType ? (
                <Title level={2} style={{ color: 'red' }}>
                  {Number(selectedType).toLocaleString() + 'đ'}
                </Title>
              ) : (
                <Text type="secondary">
                  Vui lòng chọn phiên bản để xem giá!
                </Text>
              )}
              <Divider />
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Button
                    style={{ width: "100%", height: "40px", backgroundColor: "#69c0ff", color: "white", fontWeight: "bold" }}
                    onClick={() => addProductToCart(false)}
                  >
                    Thêm vào giỏ
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    style={{ width: "100%", height: "40px", backgroundColor: "#ff4d4f", fontWeight: "bold", color: "white" }}
                    onClick={() => addProductToCart(true)}
                  >
                    Mua ngay
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;