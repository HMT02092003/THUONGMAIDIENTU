"use client";

import React from 'react';
import { Form, Input, Button, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CreateProductManagement: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div style={{ padding: '24px', background: '#f6f8fa', borderRadius: '8px', marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, marginLeft: '450px' }}>Thêm sản phẩm</h2>
        <Button type="primary" style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>
          Tạo mới
        </Button>
      </div>

      <Form layout="vertical" onFinish={handleFinish}>
        <Row gutter={24} align="top">
          {/* Cột bên trái: Đẩy xuống cạnh Sản phẩm */}
          <Col
            span={8}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingRight: '16px',
              marginTop: '140px',
            }}
          >
            <Form.Item
              name="image"
              label="Thêm ảnh sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
              style={{ textAlign: 'center' }}
            >
              <Upload name="image" listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Tải lên</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>

          {/* Cột bên phải: Các trường thông tin */}
          <Col span={16}>
            <Form.Item name="category" label="Tên sản phẩm" rules={[{ required: true, message: 'Vui lòng nhập danh mục!' }]}>
              <Input placeholder="Nhập danh mục" />
            </Form.Item>

            <Form.Item name="productCode" label="Mô tả" rules={[{ required: true, message: 'Vui lòng nhập Mô tả!' }]}>
              <Input placeholder="Nhập mã sản phẩm" />
            </Form.Item>

            <Form.Item name="brand" label="Cấu hình đặc điểm" rules={[{ required: true, message: 'Vui lòng nhập Cấu hình đặc điểm!' }]}>
              <Input placeholder="Nhập thương hiệu" />
            </Form.Item>

            <Form.Item name="version" label="Phiên bản">
              <Input placeholder="Nhập phiên bản" />
            </Form.Item>

            <Form.Item name="color" label="Màu">
              <Input placeholder="Nhập màu sản phẩm" />
            </Form.Item>

            <Form.Item name="product" label="Giá tiền" rules={[{ required: true, message: 'Vui lòng nhập Giá tiền!' }]}>
              <Input placeholder="Nhập tên sản phẩm" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateProductManagement;
