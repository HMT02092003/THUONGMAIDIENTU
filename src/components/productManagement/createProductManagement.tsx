"use client";

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, Row, Col, InputNumber, Select, message } from 'antd';
import { UploadOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import FormDataBuilder from '../../utils/formData';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

const CreateProductManagement: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [mainImageFileList, setMainImageFileList] = useState<any[]>([]);
  const [descImageFileList, setDescImageFileList] = useState<any[]>([]);

  const handleFinish = async () => {
    try {
      const values = await form.validateFields();
      let formData = new FormData();
      const formDataBuilder = new FormDataBuilder();
      formDataBuilder.buildFormData(formData, values);

      await axios({
        method: 'post',
        url: 'http://localhost:4000/api/createProduct',
        data: formData,
      });
      
      message.success("Tạo sản phẩm thành công");
      router.push('/productManagement');
    } catch (err: any) {
      if (err.errorFields) {
        message.error("Vui lòng điền đầy đủ thông tin bắt buộc!");
      } else {
        message.error(err.response?.data?.message || "Có lỗi xảy ra khi tạo sản phẩm");
      }
      console.error(err);
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/allCategory');
      const categoryData = data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setCategories(categoryData);
    } catch (err: any) {
      message.error(err.response?.data?.message || "Không thể tải danh sách thể loại");
    }
  };

  const getAllBrand = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/allBrand');
      const brandData = data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setBrands(brandData);
    } catch (err: any) {
      message.error(err.response?.data?.error || "Không thể tải danh sách thương hiệu");
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllBrand();
  }, []);

  return (
    <div style={{ borderRadius: '8px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: 0 }}>Thêm thông tin sản phẩm</h2>
        <Button
          type="primary"
          style={{ backgroundColor: '#73d13d', borderColor: '#52c41a' }}
          onClick={handleFinish}
        >
          <PlusOutlined /> Thêm thông tin sản phẩm
        </Button>
      </div>

      <Form 
        layout="vertical" 
        form={form}
        initialValues={{
          configurations: [{ title: '', info: '' }]
        }}
      >
        <Row gutter={[16, 16]} align="top">
          <Col span={8} style={{ textAlign: 'center', paddingTop: '20px' }}>
            {/* Main Product Image */}
            <Form.Item
              name="mainImage"
              label="Ảnh chính sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[{ required: true, message: 'Vui lòng tải lên ảnh chính sản phẩm!' }]}
            >
              <Upload
                name="mainImage"
                listType="picture-card"
                fileList={mainImageFileList}
                onChange={({ fileList }) => setMainImageFileList(fileList)}
                beforeUpload={() => false}
                maxCount={1}
              >
                {mainImageFileList.length >= 1 ? null : (
                  <div>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Tải ảnh chính</div>
                  </div>
                )}
              </Upload>
            </Form.Item>

            {/* Description Images */}
            <Form.Item
              name="descriptionImages"
              label="Ảnh mô tả sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
            >
              <Upload
                name="descriptionImages"
                listType="picture-card"
                fileList={descImageFileList}
                onChange={({ fileList }) => setDescImageFileList(fileList)}
                beforeUpload={() => false}
                multiple
              >
                {descImageFileList.length >= 3 ? null : (
                  <div>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Tải ảnh mô tả</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Col>

          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="productName"
                  label="Tên sản phẩm"
                  rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                >
                  <Input placeholder="Nhập tên sản phẩm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="productID"
                  label="Mã sản phẩm"
                  rules={[{ required: true, message: 'Vui lòng nhập mã sản phẩm!' }]}
                >
                  <Input placeholder="Nhập mã sản phẩm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Thể loại"
                  rules={[{ required: true, message: 'Vui lòng chọn thể loại!' }]}
                >
                  <Select
                    placeholder="Chọn thể loại"
                    options={categories}
                    mode="multiple"
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="brand"
                  label="Thương hiệu"
                  rules={[{ required: true, message: 'Vui lòng chọn thương hiệu!' }]}
                >
                  <Select placeholder="Chọn thương hiệu" options={brands} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Giá tiền"
                  rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                >
                  <InputNumber
                    addonAfter="VNĐ"
                    min={0}
                    style={{ width: '100%' }}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as any}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="quantity"
                  label="Số lượng trong kho"
                  rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Form.List name="configurations">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Row key={key} gutter={16} style={{ marginBottom: 16 }}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[{ required: true, message: 'Vui lòng nhập tiêu đề cấu hình' }]}
                      label={`Tiêu đề cấu hình ${index + 1}`}
                    >
                      <Input placeholder="Nhập tiêu đề cấu hình" />
                    </Form.Item>
                  </Col>
                  <Col span={14}>
                    <Form.Item
                      {...restField}
                      name={[name, 'info']}
                      rules={[{ required: true, message: 'Vui lòng nhập thông tin cấu hình' }]}
                      label={`Thông tin cấu hình ${index + 1}`}
                    >
                      <Input placeholder="Nhập thông tin cấu hình" />
                    </Form.Item>
                  </Col>
                  <Col span={2} style={{ display: 'flex', alignItems: 'center', paddingTop: '5px', fontSize: '20px' }}>
                    <MinusCircleOutlined onClick={() => remove(name)} style={{ color: '#ff4d4f' }} />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button 
                  type="dashed" 
                  onClick={() => add()} 
                  icon={<PlusOutlined />}
                  style={{ maxWidth: 200 }}
                >
                  Thêm cấu hình đặc điểm
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item 
          name="description" 
          label="Mô tả sản phẩm"
        >
          <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProductManagement;