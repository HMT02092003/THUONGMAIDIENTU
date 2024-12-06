'use client';
import React, { useState } from 'react';
import { Table, Button, Modal, Input, Form, Upload, message, TableProps, Image } from 'antd';
import {
  EditOutlined,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  PlusOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useRouter } from 'next/navigation';
import axios from 'axios';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const CategoryManagement = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [categoryData, setCategoryData] = useState([
    { id: 1, tradeMarkName: 'Danh mục A', description: 'Danh mục về đồ điện tử', country: 'Nhật Bản' },
    { id: 2, tradeMarkName: 'Danh mục B', description: 'Danh mục thời trang cao cấp', country: 'Pháp' },
  ]);
  const [fileList, setFileList] = useState<any[]>([]); // Đảm bảo fileList là mảng rỗng

  const rowSelection: TableProps<any>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedUsers(selectedRowKeys);
    },
  };

  const columns: any = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_: any, record: any) => (
        <div
          onClick={() => router.push(`/productManagement/edit/${record.id}`)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'tradeMarkName',
      align: 'center',
      key: 'tradeMarkName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
  ];

  const handleDelete = () => {
    if (selectedUsers.length === 0) {
      setIsModalVisible(true);
    } else {
      const updatedData = categoryData.filter(item => !selectedUsers.includes(item.id));
      setCategoryData(updatedData);
      setSelectedUsers([]);
    }
  };

  const handleCreateNewCategory = async (values: any) => {
    try{

      // const data = await axios.post('http://localhost:4000/api/createCategory', values);
      setIsCreateModalVisible(false);
      setFileList([]); // Xóa danh sách ảnh sau khi tạo danh mục mới
      message.success('Tạo mới danh mục thành công!');
    }catch(error){
      console.log(error);
    }
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 40px' }}>
        <Button
          type="primary"
          onClick={() => setIsCreateModalVisible(true)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#73d13d',
            width: '100px',
            margin: '0 5px',
          }}
        >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button
          type="primary"
          onClick={handleDelete}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ff4d4f',
            width: '100px',
            margin: '0 5px',
          }}
        >
          <DeleteOutlined />
          Xóa
        </Button>
      </div>

      <Table<any>
        columns={columns}
        dataSource={categoryData}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
      />

      {/* Modal cảnh báo */}
      <Modal
        title={
          <span>
            <ExclamationCircleOutlined style={{ color: '#faad14', marginRight: '8px' }} />
            Cảnh báo
          </span>
        }
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        okText="Đồng ý"
        cancelText="Hủy bỏ"
      >
        <p>Vui lòng chọn ít nhất một danh mục để xóa.</p>
      </Modal>

      {/* Modal tạo mới danh mục */}
      <Modal
        title="Tạo mới danh mục"
        open={isCreateModalVisible}
        onCancel={() => setIsCreateModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleCreateNewCategory} layout="vertical">
          <Form.Item label="Thêm ảnh" name="image" valuePropName="fileList">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: visible => setPreviewOpen(visible),
                  afterOpenChange: visible => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </Form.Item>

          <Form.Item
            label="Tên danh mục"
            name="categoryName"
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
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryManagement;
