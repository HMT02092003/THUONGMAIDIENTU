"use client";

import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined, CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
const CategoryManagement = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);

  const fakeData = [
    {
      id: 1,
      categoryName: 'Thể loại 1',
      description: 'Mô tả về thể loại 1',
    },
    {
      id: 2,
      categoryName: 'Thể loại 2',
      description: 'Mô tả về thể loại 2',
    },
    {
      id: 3,
      categoryName: 'Thể loại 3',
      description: 'Mô tả về thể loại 3',
    },
    {
      id: 4,
      categoryName: 'Thể loại 4',
      description: 'Mô tả về thể loại 4',
    },
    {
      id: 5,
      categoryName: 'Thể loại 5',
      description: 'Mô tả về thể loại 5',
    },
  ];

  const rowSelection: TableProps<any>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedUsers(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
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
      title: 'Tên thể loại',
      dataIndex: 'categoryName',
      align: 'center',
      key: 'categoryName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
  ];
  return (
    <>
          <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 40px" }}>
      <Button
          type="primary"
          // onClick={importExcel}
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
          // onClick={exportExcel}
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

        <Button type="primary"
          onClick={() => router.push('/productManagement/create')}
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            background: "#73d13d",
            width: "100px",
            margin: "0 5px",
          }} >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button 
          type="primary"
          // onClick={handleDelete}
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
        dataSource={fakeData}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
      />
    </>
  )
}

export default CategoryManagement