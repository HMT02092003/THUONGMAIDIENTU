"use client";

import React, { useState, useEffect } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined,CloudUploadOutlined, CloudDownloadOutlined } from '@ant-design/icons';
// import style from '../Layout.module.css';
// import { getAllAuthUser } from '@/utils/auth/get-auth-all-user';
// import { deleteUser } from '@/utils/auth/delete-auth-user';
import { Table, Button, Modal, Tag } from "antd";
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
// import { exportExcelHandel } from '@/utils/excel/exportExcelHandel';


type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export interface DataType {
  id: number;
  name: string;
  email: string;
  verified: boolean;
  password?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  provider?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  nationality?: string;
  hometown?: string;
  img?: string;
  gender?: string;
  CCCD?: string;
}

const ProfileManagement = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [userData, setUserData] = useState<DataType[]>([]);
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [nameOfIndexColumn, setNameOfIndexColumn] = useState<any>({
    name: "Họ và tên",
    email: "Email",
    role: "Vai trò",
    addressProvince: "Tỉnh / Thành phố",
    addressDistrict: "Quận / Huyện / Thị xã",
    addressWard: "Phường / Xã / Thị trấn / Thôn / Đội",
    hometownProvince: "Tỉnh / Thành phố",
    hometownDistrict: "Quận / Huyện / Thị xã",
    hometownWard: "Phường / Xã / Thị trấn / Thôn / Đội",
    CCCD: "CCCD",
    phoneNumber: "Số điện thoại",
    dateOfBirth: "Ngày sinh",
    gender: "Giới tính",
    nationality: "Quốc tịch",
    salary: "Tiền lương/1 tháng",
    baseHourlyOT: "Tiền lương tăng ca/1h làm",
  });
  const [dataToFormat, setDataToFormat] = useState<any>({
    nameOfSheet: "DANH SÁCH NGƯỜI DÙNG",
    format: {
      name: 30,
      email: 30,
      role: 20,
      addressProvince: 50,
      addressDistrict: 50,
      addressWard: 50,
      hometownProvince: 50,
      hometownDistrict: 50,
      hometownWard: 50,
      CCCD: 25,
      phoneNumber: 25,
      dateOfBirth: 25,
      gender: 25,
      nationality: 25,
      salary: 35,
      baseHourlyOT: 50,
    }
  });
  console.log('userData:', userData);

  const router = useRouter();

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const authUser: any = await getAllAuthUser();
  //       console.log(authUser);

  //       const newUserData: DataType[] = authUser.map((user: any) => ({
  //         id: user.id,
  //         name: user.name,
  //         email: user.email,
  //         verified: user.verified,
  //         role: user.role,
  //         createdAt: user.createdAt,
  //         updatedAt: user.updatedAt,
  //         provider: user.provider,
  //         phoneNumber: user.phoneNumber,
  //         dateOfBirth: user.dateOfBirth,
  //         address: `${user.addressWard?.name}, ${user.addressDistrict?.name}, ${user.addressProvince?.name}`,
  //         nationality: user.nationality,
  //         hometown: `${user.hometownWard?.name}, ${user.hometownDistrict?.name}, ${user.hometownProvince?.name}`,
  //         img: user.img,
  //         gender: user.gender,
  //         CCCD: user.CCCD,
  //       }));

  //       setUserData(newUserData);
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleDelete = () => {
  //   if (selectedUsers.length === 0) {
  //     Modal.warning({
  //       title: 'Cảnh báo',
  //       content: 'Vui lòng chọn ít nhất một người dùng để xóa.',
  //     });
  //     return;
  //   }

  //   Modal.confirm({
  //     title: 'Xác nhận xóa',
  //     content: `Bạn có chắc chắn muốn xóa ${selectedUsers.length} người dùng đã chọn?`,
  //     onOk: async () => {
  //       try {
  //         await deleteUser(selectedUsers);

  //         setUserData(prevData => prevData.filter(user => !selectedUsers.includes(user.id)));
  //         setSelectedUsers([]);

  //         Modal.success({
  //           title: 'Thành công',
  //           content: 'Đã xóa người dùng thành công.',
  //         });
  //       } catch (error) {
  //         console.error('Error deleting users:', error);
  //         Modal.error({
  //           title: 'Lỗi',
  //           content: 'Có lỗi xảy ra khi xóa người dùng. Vui lòng thử lại.',
  //         });
  //       }
  //     },
  //   });
  // };

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

  const colors = [
    'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'
  ];
  const colorMap: { [key: string]: string } = {};
  
  const getColor = (tag: string) => {
    if (!colorMap[tag]) {
      const colorIndex = Object.keys(colorMap).length % colors.length;
      colorMap[tag] = colors[colorIndex];
    }
    return colorMap[tag];
  };

  const renderTags = (tags: string) => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    return (
      <span>
        {tagArray.map((tag) => (
          <Tag
            color={getColor(tag)}
            key={tag}
          >
            {tag.toUpperCase()}
          </Tag>
        ))}
      </span>
    );
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_, record) => (
        <div
          onClick={() => router.push(`/profileManagement/edit/${record.id}`)}
          style={{display:"flex",alignItems:"center",justifyContent:"center"}}
        >
          <EditOutlined />
        </div>
      ),  
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      filters: Array.from(new Set(userData.map(user => user.name))).map(name => ({ text: name, value: name })),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '6%',
      fixed: 'left',
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.role?.includes(value as string) ?? false,
      sorter: (a, b) => (a.role ?? '').localeCompare(b.role ?? ''),
      sortOrder: sortedInfo.columnKey === 'role' ? sortedInfo.order : null,
      render: renderTags,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (date: string) => date ? dayjs(date).format('DD/MM/YYYY') : '',
      sorter: (a, b) => dayjs(a.dateOfBirth).unix() - dayjs(b.dateOfBirth).unix(),
      sortOrder: sortedInfo.columnKey === 'dateOfBirth' ? sortedInfo.order : null,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'CCCD',
      dataIndex: 'CCCD',
      key: 'CCCD',
      width: '10%',
    },
    {
      title: 'Quốc tịch',
      dataIndex: 'nationality',
      key: 'nationality',
      width: '6%',  
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '300px',
    },
    {
      title: 'Hometown',
      dataIndex: 'hometown',
      key: 'hometown',
      width: '300px',
    },
  ];

  const importExcel = () => {
    router.push('/profileManagement/importExcel');
  }

  // const exportExcel = () => {
  //   const updatedDataToFormat = {
  //     ...dataToFormat,
  //     startRow: 1,
  //   };

  //   exportExcelHandel(userData, nameOfIndexColumn, updatedDataToFormat);
  // }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 40px" }}>
      <Button
          type="primary"
          onClick={importExcel}
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
          onClick={() => router.push('/profileManagement/create')}
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

      <div >
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={userData}
          onChange={handleChange}
          rowKey="id"
          scroll={{ x: 'max-content' }}
        />
      </div>
    </>
  );
};

export default ProfileManagement;
