"use client";

import React from 'react';
import { Form, Input, Button, Upload, Row, Col } from 'antd';
import { UploadOutlined, EditOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EditProductManagement: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    const data = form.getFieldsValue();
    console.log('Form values:', data);
  };

  return (
    <div style={{borderRadius: '8px', }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Cập nhật thông tin sản phẩm</h2>
        <Button type="primary" style={{ backgroundColor: '#ff7a45', borderColor: '#52c41a' }} onClick={handleFinish}>
        <EditOutlined />Cập nhật thông tin sản phẩm
        </Button>
      </div>

      <Form layout="vertical" form={form}>
        <Row gutter={[16, 16]} align="top">
          {/* Cột bên trái: Ảnh sản phẩm */}
          <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20px' }}>
            <Form.Item
              name="image"
              label="Thêm ảnh sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
              style={{ textAlign: 'center', marginBottom: '20px' }}
            >
              <Upload name="image" listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Tải lên</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>

          {/* Cột bên phải: Tên sản phẩm và Giá tiền */}
          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Tên sản phẩm"
                  rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Input placeholder="Nhập tên sản phẩm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="product"
                  label="Giá tiền"
                  rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Input placeholder="Nhập giá tiền" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Các trường thông tin bên dưới */}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item name="version" label="Phiên bản" style={{ marginBottom: '20px' }}>
              <Input placeholder="Nhập phiên bản" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="color" label="Màu" style={{ marginBottom: '20px' }}>
              <Input placeholder="Nhập màu sản phẩm" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="productType" label="Loại hàng" style={{ marginBottom: '20px' }}>
              <Input placeholder="Nhập loại hàng" />
            </Form.Item>
          </Col>
        </Row>

        {/* TextArea cho mô tả sản phẩm */}
        <Form.Item name="description" label="Mô tả sản phẩm">
          <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProductManagement;
