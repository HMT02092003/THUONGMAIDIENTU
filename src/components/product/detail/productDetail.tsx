import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Divider, Tag, Button, Spin, message } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '@/src/cssfolder/ProductDetail.css';

const { Title, Text } = Typography;

const ProductDetail: React.FC<any> = ({ id }) => {
  const router = useRouter();
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<any>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/getProductById', { id });
        setProductData(response.data);
        setMainImage(response.data.image);
      } catch (error: any) {
        message.error(error.response?.data?.message);
      }
    };

    fetchProductData();
  }, [id]);

  if (!productData) return <div className="spinner-container"><Spin /></div>;

  const addProductToCart = () => {
    try {
      let cartData: any = localStorage.getItem('cart');

      if (!cartData) {
        cartData = [];
      } else {
        cartData = JSON.parse(cartData);
      }

      const existingProductIndex = cartData.findIndex((item: any) => item.id === productData.id);
      if (existingProductIndex !== -1) {
        cartData[existingProductIndex].quantity += 1;
      } else {
        cartData.push({ ...productData, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cartData));
      message.success("Sản phẩm đã được thêm vào giỏ hàng");
    } catch {
      message.error("Lỗi trong quá trình thêm sản phẩm vào giỏ hàng");
    }
  };

  return (
    <div className="product-detail-container">
      <Row gutter={24}>
        <Col span={14}>
          <Card
            cover={
              <img
                alt={productData.name}
                src={`http://localhost:4000/${productData.productImage}`}
                className="product-card"
              />
            }
          />
          <Row gutter={[8, 8]} className="product-image-list">
            {Object.keys(productData.imageUrl).map((key: any) => (
              <Col span={6} key={key}>
                <img
                  alt={productData.name}
                  src={`http://localhost:4000/${productData.imageUrl[key]}`}
                  className="product-image"
                  onClick={() => setMainImage(productData.imageUrl[key])}
                />
              </Col>
            ))}
          </Row>
          <Card title="Cấu hình đặc điểm" className="specifications-card">
            <ul className="specifications-list">
              {productData.specifications.map((item: any) => (
                <li key={item.title} className="specifications-item">
                  <Title level={5}><Text>{item.title}: {item.info}</Text></Title>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Chính sách bảo hành & đổi trả" className="warranty-card">
            <div>Bảo hành 12 tháng tại chuỗi cửa hàng</div>
            <div>Đổi mới trong 15 ngày đầu tiên</div>
          </Card>
          <Card title="Bài viết mô tả">
            {productData.description}
          </Card>
        </Col>
        <Col span={10}>
          <div className="sticky-info">
            <div className="tag-section">
              <TagOutlined /> {productData.tagName.toUpperCase()}
            </div>
            <div className="product-details">
              <Title level={3}>{productData.name}</Title>
              <Text type="secondary">MSP: {productData.productId}</Text>
              <Divider />
              <Title level={5}>Phiên bản (Chọn phiên bản)</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag
                  key={`version-${item.version}-${index}`}
                  className="version-tag"
                  onClick={() => setSelectedType(item.price)}
                >
                  {item.version}
                </Tag>
              ))}
              <Title level={5}>Màu</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`color-${item.color}-${index}`} className="color-tag">
                  {item.color}
                </Tag>
              ))}
              <Title level={5}>Loại hàng</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`type-${item.type}-${index}`} className="type-tag">
                  {item.type}
                </Tag>
              ))}
              <Divider />
              {selectedType ? (
                <Title level={2} className="price-text">
                  {Number(selectedType).toLocaleString()}đ
                </Title>
              ) : (
                <Text type="secondary">Vui lòng chọn phiên bản để xem giá!</Text>
              )}
              <Divider />
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Button
                    className="add-to-cart-btn"
                    onClick={addProductToCart}
                  >
                    Thêm vào giỏ
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    className="buy-now-btn"
                    onClick={() => {
                      addProductToCart();
                      router.push('/shoppingCart');
                    }}
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
