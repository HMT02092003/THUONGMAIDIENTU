import React, { useEffect } from 'react';
import { Space, Table, Tag, Button, Modal } from 'antd';
import { EditOutlined, CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import axios from 'axios';
import type { TableColumnsType, TableProps } from 'antd';


const ProductManagement: React.FC = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedProducts, setSelectedProducts] = useState<React.Key[]>([]);
  const [data, setData] = useState<any>([]);
  const [productData, setProductData] = useState<any[]>([]);
  console.log(data);


  const rowSelection: TableProps<any>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedProducts(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const getAllProduct = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getAllProduct');
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch product data:', error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const columns: TableColumnsType<any> = [
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
      title: 'Mã sản phẩm',
      dataIndex: 'productId',
      align: 'center',
      key: 'productId',
      fixed: 'left',
      width: "5%",
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      fixed: 'left',
      width: "15%",
    },
    {
      title: 'Thể loại',
      dataIndex: 'categories',
      key: 'categories',
      align: 'center',
      fixed: 'left',
      width: "25%",
      render: (categories: any) => categories.map((category: any) => {
        const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <Tag color={randomColor} key={category.id}>{category.name}</Tag>;
      }),
    },
    {
      title: 'Thương hiệu',
      dataIndex: "brand",
      key: 'brand',
      align: 'center',
      fixed: 'left',
      width: "10%",
      render: (brand: any) => brand ? brand.name : 'N/A',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      width: "20%",
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      align: 'center',
      key: 'quantity',
      width: "15%",
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      align: 'center',
      key: 'description',
      width: "200px",
    },
  ];

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất một người dùng để xóa.',
      });
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedProducts.length} sản phẩm đã chọn?`,
      onOk: async () => {
        try {
          const deleteProduct = await axios.delete('http://localhost:4000/api/deleteProduct', {
            data: { ids: selectedProducts },
          });

          setProductData(prevData => prevData.filter(product => !selectedProducts.includes(product.id)));
          setSelectedProducts([]);

          Modal.success({
            title: 'Thành công',
            content: 'Đã xóa người dùng thành công.',
          });

          getAllProduct();
        } catch (error) {
          console.error('Error deleting users:', error);
          Modal.error({
            title: 'Lỗi',
            content: 'Có lỗi xảy ra khi xóa người dùng. Vui lòng thử lại.',
          });
        }
      },
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 40px" }}>

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
        dataSource={data}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
        scroll={{ x: 'max-content' }}
      />
    </>
  )
};

export default ProductManagement;