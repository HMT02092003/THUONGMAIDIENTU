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


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const TradeMarkManagement = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [brandData, setBrandData] = useState([
    { id: 1, tradeMarkName: 'Thương hiệu A', description: 'Thương hiệu nổi tiếng về đồ điện tử', country: 'Nhật Bản' },
    { id: 2, tradeMarkName: 'Thương hiệu B', description: 'Thương hiệu thời trang cao cấp', country: 'Pháp' },
  ]);
  const [fileList, setFileList] = useState<any[]>([]);  // Đảm bảo fileList là mảng rỗng

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
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Tên thương hiệu',
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
      const updatedData = brandData.filter(item => !selectedUsers.includes(item.id));
      setBrandData(updatedData);
      setSelectedUsers([]);
    }
  };

  const handleCreateNewBrand = (values: any) => {
    const newBrand = {
      id: brandData.length + 1,
      tradeMarkName: values.tradeMarkName,
      description: values.description,
      country: 'Chưa xác định',
      image: fileList[0] ? fileList[0].url : '', // Lấy ảnh đầu tiên trong danh sách
    };
    setBrandData([...brandData, newBrand]);
    setIsCreateModalVisible(false);
    setFileList([]);  // Xóa danh sách ảnh sau khi tạo thương hiệu mới
    message.success('Tạo mới thương hiệu thành công!');
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
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 40px" }}>
        <Button
          type="primary"
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#722ed1",
            margin: "0 5px"
          }}
        >
          <CloudUploadOutlined />
          Nhập excel
        </Button>

        <Button
          type="primary"
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#4096ff",
            margin: "0 5px"
          }}
        >
          <CloudDownloadOutlined />
          Xuất excel
        </Button>

        <Button
          type="primary"
          onClick={() => setIsCreateModalVisible(true)}
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            background: "#73d13d",
            width: "100px",
            margin: "0 5px",
          }}
        >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button
          type="primary"
          onClick={handleDelete}
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            background: "#ff4d4f",
            width: "100px",
            margin: "0 5px"
          }}
        >
          <DeleteOutlined />
          Xóa
        </Button>
      </div>

      <Table<any>
        columns={columns}
        dataSource={brandData}
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
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        okText="Đồng ý"
        cancelText="Hủy bỏ"
      >
        <p>Vui lòng chọn ít nhất một thể loại để xóa.</p>
      </Modal>

      {/* Modal tạo mới thương hiệu */}
      <Modal
        title="Tạo mới thương hiệu"
        visible={isCreateModalVisible}
        onCancel={() => setIsCreateModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleCreateNewBrand} layout="vertical">
          <Form.Item
            label="Thêm ảnh"
            name="image"
            valuePropName="fileList"
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 4 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </Form.Item>

          <Form.Item
            label="Tên thương hiệu"
            name="tradeMarkName"
            rules={[{ required: true, message: 'Vui lòng nhập tên thương hiệu!' }]} >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]} >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TradeMarkManagement;
