import React, { useState } from 'react';
import { Modal, Form, Upload, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

type FileType = any;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface CreateBrandModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateBrandModal: React.FC<CreateBrandModalProps> = ({ 
  isVisible, 
  onClose, 
  onSuccess 
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const validateImageUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Chỉ được upload file định dạng JPG hoặc PNG!');
      return Upload.LIST_IGNORE;
    }
    return isJpgOrPng;
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleFileChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const handleCreateBrand = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('brandName', values.brandName);
      
      if (values.description) {
        formData.append('description', values.description);
      }

      if (values.image && values.image.file) {
        formData.append('image', values.image.file.originFileObj);
      }

      await axios.post('http://localhost:4000/api/createBrand', formData);
      
      message.success('Tạo mới danh mục thành công!');
      form.resetFields();
      setFileList([]);
      onSuccess();
      onClose();
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Modal
        title="Tạo mới thương hiệu"
        open={isVisible}
        onCancel={() => {
          onClose();
          form.resetFields();
          setFileList([]);
        }}
        footer={null}
      >
        <Form onFinish={handleCreateBrand} layout="vertical" form={form}>
          <Form.Item
            label="Thêm ảnh"
            name="image"
            rules={[{ required: true, message: 'Vui lòng thêm ảnh!' }]}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              beforeUpload={validateImageUpload}
              onPreview={handlePreview}
              onChange={handleFileChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Tên thương hiệu"
            name="brandName"
            rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={previewOpen}
        title="Xem trước hình ảnh"
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default CreateBrandModal;