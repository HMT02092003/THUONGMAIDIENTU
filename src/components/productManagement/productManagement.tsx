import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined, CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const data: any[] = [
  {
    id: 1,
    productType: 'Bàn phím',
    category: 'Bàn phím Keychron K3 V2 Ultra-slim',
    description: 'Loại switch: Optical Brown (Switch quang Low Profile)(Cho phép Hotswap), Kết nối qua: Bluetooth/USB Type C, Loại kết nối: Không dây, Bluetooth/USB Type C, Chất liệu khung: ABS & Aluminum, Số nút bấm: 84Nút, Loại bàn phím: Phím Cơ, Layout: 75%, Tương thích: Windows/MacOS',
    product: '1.590.000',
    version: ['Keychron Optical Red - RGB, Keychron Optical Brown - RGB'],
    color: ['Dark Grey'],
  },
  {
    id: 2,
    productType: 'Bàn nâng hạ',
    category: 'Bàn làm việc nâng hạ HyperWork ATLAS',
    description: 'Chất liệu mặt bàn: Gỗ MDF, Chất liệu khung: Thép, Cao tối thiểu - tối đa: 60-125cm, Rộng mặt bàn: 75cm, Dài mặt bàn: 160cm, Tải trọng tối đa: 140kg, Khay đi dây: Chưa có',
    product: '10.900.000',
    version: [' Mặt Bàn Đen - 160x75x2.5cm, Mặt Bàn Trắng - 160x75x2.5cm, Mặt Bàn Vân Gỗ - 160x75x2.5cm'],
    color: ['Khung đen'],
  },
  {
    id : 3,
    productType: 'Máy chơi game Sony PlayStation 5 - PS5',
    category: 'Máy chơi game',
    description: 'Trọng lượng: 4,78kg, RAM: 16GB',
    product: '11.990.000',
    version: ['Standard, Standard - Marvels Spider-Man 2'],
    color: ['Frost White'],
  },
];

const ProductManagement: React.FC = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);


  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedUsers(selectedRowKeys);
    },
    getCheckboxProps: (record: DataType) => ({
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
      title: 'Loại hàng',
      dataIndex: 'productType',
      align: 'center',
      width: '10%',
      key: 'productType',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'category',
      key: 'category',
      width: '25%',
      align: 'center',
      fixed: 'left',
    },
    {
      title: 'Mô tả sản phẩm',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
      width: '30%',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
      fixed: 'left',
    },
    {
      title: 'Phiên bản',
      dataIndex: 'version',
      key: 'version',
      width: '15%',
      align: 'center',
      fixed: 'left',
    },
    {
      title: 'Màu',
      dataIndex: 'color',
      align: 'center',
      key: 'color',
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
      <Table<DataType>
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
      />
    </>
  )
};

export default ProductManagement;