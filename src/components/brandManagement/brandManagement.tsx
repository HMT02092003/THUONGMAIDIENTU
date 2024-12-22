'use client';
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, message, TableProps } from 'antd';
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import CreateBrandModal from './createBrandModal';
import UpdateBrandModal from './updateBrandModal';

const BrandManagement = () => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [currentEditBrandId, setCurrentEditBrandId] = useState<string | null>(null);

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
          onClick={() => handleEditBrand(record.id)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Tên thương hiệu',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
  ];

  const fetchData = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allBrand');
      setBrandData(data?.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (selectedUsers.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất một thương hiệu để xóa.',
      });
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedUsers.length} thương hiệu đã chọn?`,
      onOk: async () => {
        try {
          const deleteUser = await axios.delete('http://localhost:4000/api/deleteBrand', {
            data: { ids: selectedUsers },
          });

          message.success('Xóa thương hiệu thành công!');
          fetchData();
          setSelectedUsers([]);

          Modal.success({
            title: 'Thành công',
            content: 'Đã xóa thương hiệu thành công.',
          });
        } catch (error) {
          console.error('Error deleting users:', error);
          Modal.error({
            title: 'Lỗi',
            content: 'Có lỗi xảy ra khi xóa thương hiệu. Vui lòng thử lại.',
          });
        }
      },
    });
  };

  const handleEditBrand = (brandId: string) => {
    setCurrentEditBrandId(brandId);
    setIsEditModalVisible(true);
  };

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
        open={isWarningModalVisible}
        onOk={() => setIsWarningModalVisible(false)}
        onCancel={() => setIsWarningModalVisible(false)}
        okText="Đồng ý"
        cancelText="Hủy bỏ"
      >
        <p>Vui lòng chọn ít nhất một danh mục để xóa.</p>
      </Modal>

      {/* Modal tạo mới danh mục */}
      <CreateBrandModal 
        isVisible={isCreateModalVisible}
        onClose={() => setIsCreateModalVisible(false)}
        onSuccess={fetchData}
      />

      {/* Modal chỉnh sửa danh mục */}
      <UpdateBrandModal 
        isVisible={isEditModalVisible}
        brandId={currentEditBrandId}
        onClose={() => setIsEditModalVisible(false)}
        onSuccess={fetchData}
      />
    </>
  );
};

export default BrandManagement;