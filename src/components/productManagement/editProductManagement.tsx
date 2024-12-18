"use client";

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, Row, Col, InputNumber, Select, message } from 'antd';
import { UploadOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import FormDataBuilder from '../../utils/formData';
import router from '@/api';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

const EditProductManagement: React.FC<any> = ({ id }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [configurations, setConfigurations] = useState<{ title: string; info: string }[]>([
    { title: '', info: '' },
  ]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [fileList, setFileList] = useState<any[]>([]);

  const fetchData = async () => {
    if (id) {
      try {
        const Product: any = await axios.post('http://localhost:4000/api/getProductById', { id });
        console.log(Product.data);

        const categoryData = Product.data.categories.map((item: any) => item.id);

        const value = {
          productName: Product.data.name,
          productID: Product.data.productId,
          category: categoryData,
          brand: Product.data.brand.id,
          price: Product.data.price,
          quantity: Product.data.quantity,
          description: Product.data.description,
        };

        form.setFieldsValue(value);

        const imgUrl = Product.data.imageUrl;

        const imageList = Object.entries(imgUrl).map(([key, value]) => {
          console.log("value==========================", value);
          console.log("key==========================", key);
          return {
            uid: key,
            name: `${key}.png`,
            status: 'done',
            url: `http://localhost:4000/${(value as string).replace(/\\/g, '/')}`,
          };
        });

        console.log("imageList==========================", imageList);  
        setFileList(imageList);

        setConfigurations(Product.data.specifications);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleFinish = async () => {
    try {
      const data = form.getFieldsValue();
      data.configurations = configurations;

      let formData = new FormData();
      const formDataBuilder = new FormDataBuilder();
      formDataBuilder.buildFormData(formData, data);

      const API = await axios.post('http://localhost:4000/api/updateProduct', formData);
      message.success("Tạo sản phẩm thành công");
      router.push('/productManagement');
    } catch (err: any) {
      console.log(err);
      message.error(err.response.data.message);
    }
  };

  const handleAddConfiguration = () => {
    setConfigurations([...configurations, { title: '', info: '' }]); // Thêm một cấu hình rỗng
  };

  const handleRemoveConfiguration = (index: number) => {
    const updatedConfigurations = configurations.filter((_, i) => i !== index);
    setConfigurations(updatedConfigurations);
  };

  const handleConfigurationChange = (
    value: string,
    index: number,
    field: 'title' | 'info'
  ) => {
    const updatedConfigurations = [...configurations];
    updatedConfigurations[index][field] = value; // Cập nhật giá trị tại vị trí được thay đổi
    setConfigurations(updatedConfigurations);
  };

  const getAllCategories = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allCategory');
      let categoryData = data.data.map((item: any) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      setCategories(categoryData);
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  };

  const getAllBrand = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allBrand');
      let brandData = data.data.map((item: any) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      setBrands(brandData);
    } catch (err: any) {
      message.error(err.response.data.error);
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

      <Form layout="vertical" form={form}>
        {/* Form layout */}
        <Row gutter={[16, 16]} align="top">
          <Col span={8} style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Form.Item
              name="imageUrl"
              label="Thêm ảnh sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
              style={{ marginBottom: '20px' }}
            >
              <Upload
                name="image"
                listType="picture-card"
                fileList={fileList}
                onChange={({ fileList }) => setFileList(fileList)}
              >
                {fileList.length >= 4 ? null : (
                  <div>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Tải lên</div>
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
                  rules={[{ required: true, message: 'Vui lòng nhập thể loại!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Select
                    placeholder="Nhập thể loại"
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
                  rules={[{ required: true, message: 'Vui lòng nhập thương hiệu!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <Select placeholder="Nhập thương hiệu" options={brands} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Giá tiền"
                  rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                  style={{ marginBottom: '20px' }}
                >
                  <InputNumber
                    addonAfter="VNĐ"
                    style={{ width: '100%' }}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="quantity"
                  label="Số lượng trong kho:"
                  rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
                  style={{ marginBottom: '20px' }}
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

        {/* Danh sách cấu hình đặc điểm */}
        <Form.Item label="Cấu hình đặc điểm">
          {configurations.map((config, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <Form.Item label={`Tiêu đề cấu hình ${index + 1}`} style={{ flex: 1 }}>
                <Input
                  value={config.title}
                  placeholder="Nhập tiêu đề cấu hình"
                  onChange={(e) => handleConfigurationChange(e.target.value, index, 'title')}
                />
              </Form.Item>
              <Form.Item label={`Thông tin cấu hình ${index + 1}`} style={{ flex: 2 }}>
                <Input
                  value={config.info}
                  placeholder="Nhập thông tin cấu hình"
                  onChange={(e) => handleConfigurationChange(e.target.value, index, 'info')}
                />
              </Form.Item>
              <Button
                type="text"
                danger
                style={{ marginTop: '30px' }}
                onClick={() => handleRemoveConfiguration(index)}
                icon={<MinusCircleOutlined />}
              />
            </div>
          ))}
          <Button style={{ color: "#1677ff" }} onClick={handleAddConfiguration} icon={<PlusOutlined />}>
            Thêm cấu hình đặc điểm
          </Button>
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
