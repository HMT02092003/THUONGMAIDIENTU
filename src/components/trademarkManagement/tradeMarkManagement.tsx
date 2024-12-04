"use client";

import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined, CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const TradeMarkManagement = () => {
    const router = useRouter();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);

    const fakeBrandData = [
        {
          id: 1,
          tradeMarkName: 'Thương hiệu A',
          description: 'Thương hiệu nổi tiếng về đồ điện tử',
          country: 'Nhật Bản',
        },
        {
          id: 2,
          tradeMarkName: 'Thương hiệu B',
          description: 'Thương hiệu thời trang cao cấp',
          country: 'Pháp',
        },
        {
          id: 3,
          tradeMarkName: 'Thương hiệu C',
          description: 'Thương hiệu nổi tiếng về thực phẩm',
          country: 'Mỹ',
        },
        {
          id: 4,
          tradeMarkName: 'Thương hiệu D',
          description: 'Thương hiệu chuyên cung cấp sản phẩm gia dụng',
          country: 'Hàn Quốc',
        },
        {
          id: 5,
          tradeMarkName: 'Thương hiệu E',
          description: 'Thương hiệu nổi bật về sản phẩm công nghệ',
          country: 'Đức',
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
          dataSource={fakeBrandData}
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          rowKey="id"
        />
      </>
    )
}

export default TradeMarkManagement