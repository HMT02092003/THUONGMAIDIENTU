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
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [mainImageFileList, setMainImageFileList] = useState<any[]>([]);
  const [descImageFileList, setDescImageFileList] = useState<any[]>([]);

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
          configurations: Product.data.specifications.map((spec: any) => ({
            title: spec.title,
            info: spec.info
          }))
        };

        form.setFieldsValue(value);

        // Xử lý ảnh chính
        if (Product.data.productImage) {
          const mainImage = {
            uid: '-1',
            name: 'main-image.png',
            status: 'done',
            url: `http://localhost:4000/${Product.data.productImage}`,
          };
          setMainImageFileList([mainImage]);
          form.setFieldsValue({ productImage: [mainImage] });
        }

        // Xử lý ảnh mô tả
        const imgUrl = Product.data.imageUrl;
        if (imgUrl) {
          const imageList = Object.entries(imgUrl).map(([key, value]) => ({
            uid: `-${key}`,
            name: `-${key}.png`,
            status: 'done',
            url: `http://localhost:4000/${value}`,
          }));
          setDescImageFileList(imageList);
          form.setFieldsValue({ descriptionImages: imageList });
        }

      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleFinish = async () => {
    try {
      const data = form.getFieldsValue();
      data.id = id;

      let formData = new FormData();
      const formDataBuilder = new FormDataBuilder();
      formDataBuilder.buildFormData(formData, data);

      const API = await axios.put('http://localhost:4000/api/updateProduct', formData);
      message.success("Cập nhật sản phẩm thành công");
      router.push('/productManagement');
    } catch (err: any) {
      console.log(err);
      message.error(err.response.data.message);
    }
  };

  const getAllCategories = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allCategory');
      let categoryData = data.data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setCategories(categoryData);
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  };

  const getAllBrand = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allBrand');
      let brandData = data.data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
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
        <h2 style={{ margin: 0 }}>Chỉnh sửa thông tin sản phẩm</h2>
        <Button
          type="primary"
          style={{ backgroundColor: '#73d13d', borderColor: '#52c41a' }}
          onClick={handleFinish}
        >
          <PlusOutlined /> Lưu thay đổi
        </Button>
      </div>

      <Form layout="vertical" form={form}>
        <Row gutter={[16, 16]} align="top">
          <Col span={8} style={{ textAlign: 'center', paddingTop: '20px' }}>
            {/* Ảnh chính sản phẩm */}
            <Form.Item
              name="productImage"
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

            {/* Ảnh mô tả sản phẩm */}
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
                  rules={[{ required: true, message: 'Vui lòng nhập thể loại!' }]}
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
                >
                  <Select placeholder="Nhập thương hiệu" options={brands} />
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

        <Form.List name="configurations" initialValue={[{ title: '', info: '' }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={16} style={{ marginBottom: 16 }}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[{ required: true, message: 'Vui lòng nhập tiêu đề cấu hình' }]}
                      label={`Tiêu đề cấu hình ${name + 1}`}
                    >
                      <Input placeholder="Nhập tiêu đề cấu hình" />
                    </Form.Item>
                  </Col>
                  <Col span={14}>
                    <Form.Item
                      {...restField}
                      name={[name, 'info']}
                      rules={[{ required: true, message: 'Vui lòng nhập thông tin cấu hình' }]}
                      label={`Thông tin cấu hình ${name + 1}`}
                    >
                      <Input placeholder="Nhập thông tin cấu hình" />
                    </Form.Item>
                  </Col>
                  <Col span={2} style={{ display: 'flex', alignItems: 'center', fontSize:"25px", marginTop:"5px" }}>
                    <MinusCircleOutlined onClick={() => remove(name)} style={{ color: '#ff4d4f' }} />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button 
                  type="dashed" 
                  onClick={() => add()} 
                  block 
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
          rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProductManagement;