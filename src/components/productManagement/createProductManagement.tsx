"use client";

import React, { useEffect } from 'react';
import { Form, Input, Button, Upload, Row, Col, InputNumber, Select } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EditProductManagement: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    const data = form.getFieldsValue();
    console.log('Form values:', data);
  };

  useEffect(() => {

  }, []);

  return (
    <div style={{borderRadius: '8px', }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Thêm thông tin sản phẩm</h2>
        <Button type="primary" style={{ backgroundColor: '#73d13d', borderColor: '#52c41a' }} onClick={handleFinish}>
        <PlusOutlined />Thêm thông tin sản phẩm
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
                  name="productName"
                  label="Tên sản phẩm"
                  rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Input placeholder="Nhập tên sản phẩm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="productID"
                  label="Mã sản phẩm"
                  rules={[{ required: true, message: 'Vui lòng nhập mã sản phẩm!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Input placeholder="Nhập mã sản phẩm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Giá tiền"
                  rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <InputNumber addonAfter="VNĐ" style={{width:"100%"}}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Thể loại"
                  rules={[{ required: true, message: 'Vui lòng nhập thể loại!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Select placeholder="Nhập thể loại" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Trademark"
                  label="Thương hiệu"
                  rules={[{ required: true, message: 'Vui lòng nhập thương hiệu!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Select placeholder="Nhập thương hiệu" />
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

        <Form.Item name="configuration" label="Cấu hình đặc điểm">
          <TextArea rows={4} placeholder="Nhập cấu hình đặc điểm" />
        </Form.Item>

        {/* TextArea cho mô tả sản phẩm */}
        <Form.Item name="description" label="Mô tả sản phẩm">
          <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProductManagement;
