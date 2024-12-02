'use client';
import React from 'react';
import { Card, Col, Row, Button, Typography, Divider, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ProductDetail: React.FC = () => {
  const productData = {
    name: 'Dell Inspiron 16 5630',
    sku: 'Inspiron1656300',
    price: 15990000,
    options: ['i5 1340P, 16GB, 512GB, FHD+'],
    color: 'Platinum Silver',
    status: 'Mới, Sealed, Nhập khẩu',
    gift: 'Chuột không dây M3 199.000đ',
    specs: {
      cpu: 'Intel Core i5 1340P, 12C/16T',
      speed: '1.0GHz, lên tới 4.6GHz',
      cache: '12MB',
      graphics: 'Intel Iris Xe Graphics',
      ram: '16GB LPDDR5 5200MHz',
      storage: '512GB SSD (M.2 NVMe)',
      upgrade: 'Không hỗ trợ nâng cấp',
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={24}>
        {/* Hình ảnh sản phẩm */}
        <Col span={10}>
          <Card
            cover={
              <img
                alt={productData.name}
                src="https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00055rf110-sl.jpg"
                style={{ height: '500px', objectFit: 'contain' }}
              />
            }
          />
        </Col>

        {/* Thông tin sản phẩm sticky */}
        <Col span={14}>
          <div
            style={{
              position: 'sticky',
              top: '20px',
              background: '#fff',
              padding: '16px',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              zIndex: 10,
            }}
          >
            <Tag color="magenta" style={{ fontSize: '14px' }}>
              LAPTOP DELL VĂN PHÒNG TIỆN DỤNG
            </Tag>
            <Title level={3}>{productData.name}</Title>
            <Text type="secondary">SKU: {productData.sku}</Text>
            <Divider />

            {/* Phiên bản */}
            <Text strong>Phiên bản:</Text>
            <div
              style={{
                display: 'block', // Chỉnh lại thành 'block' để các phần tử xếp theo chiều dọc
                padding: '6px 10px',
                border: '1px solid #1890ff',
                borderRadius: '4px',
                marginBottom: '8px', // Điều chỉnh khoảng cách giữa các phần tử
                backgroundColor: '#e6f7ff',
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
            >
              <Text style={{ color: '#1890ff' }}>{productData.options[0]}</Text>
            </div>

            {/* Màu */}
            <Text strong>Màu:</Text>
            <div
              style={{
                display: 'block', // Thay 'inline-block' thành 'block' để xếp dọc
                padding: '6px 10px',
                border: '1px solid #1890ff',
                borderRadius: '4px',
                marginBottom: '8px',
                backgroundColor: '#e6f7ff',
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
            >
              <Text style={{ color: '#1890ff' }}>{productData.color}</Text>
            </div>

            {/* Loại hàng */}
            <Text strong>Loại hàng:</Text>
            <div
              style={{
                display: 'block', // Thay 'inline-block' thành 'block' để xếp dọc
                padding: '6px 10px',
                border: '1px solid #1890ff',
                borderRadius: '4px',
                marginBottom: '8px',
                backgroundColor: '#e6f7ff',
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
            >
              <Text style={{ color: '#1890ff' }}>{productData.status}</Text>
            </div>

            {/* Quà tặng miễn phí */}
            <Text strong>Quà tặng miễn phí:</Text>
            <div
              style={{
                display: 'block', // Thay 'inline-block' thành 'block' để xếp dọc
                padding: '6px 10px',
                border: '1px solid #1890ff',
                borderRadius: '4px',
                marginBottom: '16px', // Giữ khoảng cách cuối cùng lớn hơn
                backgroundColor: '#e6f7ff',
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
            >
              <Text style={{ color: '#1890ff' }}>{productData.gift}</Text>
            </div>

            {/* Phần giá và nút thêm vào giỏ */}
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={4} style={{ marginBottom: 0 }}>
                  {productData.price.toLocaleString()} ₫
                </Title>
              </Col>
              <Col>
                <Button type="primary" size="large" icon={<ShoppingCartOutlined />} style={{ marginRight: '8px' }}>
                  Thêm vào giỏ
                </Button>
                <Button type="default" size="large">
                  Mua ngay
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Divider />

      {/* Khung cấu hình đặc điểm */}
      <div
        style={{
          background: '#fff',
          padding: '16px',
          border: '1px solid #f0f0f0',
          borderRadius: '8px',
        }}
      >
        <Title level={4}>Cấu hình đặc điểm</Title>
        <Row gutter={[16, 8]}>
          <Col span={14}>
            <Text strong>CPU:</Text> <Text>{productData.specs.cpu}</Text>
          </Col>
          <Col span={14}>
            <Text strong>Tốc độ:</Text> <Text>{productData.specs.speed}</Text>
          </Col>
          <Col span={14}>
            <Text strong>Cache:</Text> <Text>{productData.specs.cache}</Text>
          </Col>
          <Col span={14}>
            <Text strong>Đồ họa:</Text> <Text>{productData.specs.graphics}</Text>
          </Col>
          <Col span={14}>
            <Text strong>RAM:</Text> <Text>{productData.specs.ram}</Text>
          </Col>
          <Col span={14}>
            <Text strong>Lưu trữ:</Text> <Text>{productData.specs.storage}</Text>
          </Col>
          <Col span={14}>
            <Text strong>Nâng cấp:</Text> <Text>{productData.specs.upgrade}</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
