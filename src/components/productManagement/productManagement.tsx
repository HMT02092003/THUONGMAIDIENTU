import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {useRouter} from 'next/navigation'


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const data: any[] = [
  {
    productType: 'Bàn phím',
    category: 'Bàn phím Keychron K3 V2 Ultra-slim',
    description: 'Loại switch: Optical Brown (Switch quang Low Profile)(Cho phép Hotswap), Kết nối qua: Bluetooth/USB Type C, Loại kết nối: Không dây, Bluetooth/USB Type C, Chất liệu khung: ABS & Aluminum, Số nút bấm: 84Nút, Loại bàn phím: Phím Cơ, Layout: 75%, Tương thích: Windows/MacOS',
    product: '1.590.000',
    version: ['Keychron Optical Red - RGB, Keychron Optical Brown - RGB'],
    color: ['Dark Grey'],
  },
  {
    productType: 'Bàn nâng hạ',
    category: 'Bàn làm việc nâng hạ HyperWork ATLAS',
    description: 'Chất liệu mặt bàn: Gỗ MDF, Chất liệu khung: Thép, Cao tối thiểu - tối đa: 60-125cm, Rộng mặt bàn: 75cm, Dài mặt bàn: 160cm, Tải trọng tối đa: 140kg, Khay đi dây: Chưa có',
    product: '10.900.000',
    version: [' Mặt Bàn Đen - 160x75x2.5cm, Mặt Bàn Trắng - 160x75x2.5cm, Mặt Bàn Vân Gỗ - 160x75x2.5cm'],
    color: ['Khung đen'],
  },
  {
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

  const columns: any = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_:any, record: any) => (
        <div
          onClick={() => router.push(`/profileManagement/edit/${record.id}`)}
          style={{display:"flex",alignItems:"center",justifyContent:"center"}}
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
return(
  <>
<Table<DataType> columns={columns} dataSource={data} />
  </>
)};

export default ProductManagement;