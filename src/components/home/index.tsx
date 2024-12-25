import React, { useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Typography, Button, Space, Card, ConfigProvider, Carousel, message, Tag } from "antd";
import {
  CheckCircleFilled,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import { Color } from "antd/es/color-picker";
import { CarouselRef } from 'antd/es/carousel';
import axios from "axios";

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

interface Laptop {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  imageUrl: string;
  tags: string[];
}


const App: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const textStyle = { fontSize: "13px", lineHeight: "1.5" }; // Cỡ chữ nhỏ hơn
  const titleStyle = { fontSize: "15px", marginBottom: "8px" };
  const [visibleItems, setVisibleItems] = useState(12);

  const [category, setCategory] = useState<any>([])

  const boxes = [
    { id: 1, text: 'Trải nghiệm tận tay', img: '/icon/usp-1.png', Color: '#faf4ff' },
    { id: 2, text: 'Tư vấn viên tận tâm', img: '/icon/usp-2.png', Color: '#FEEECC' },
    { id: 3, text: 'Trung tâm bảo vệ khách hàng', img: '/icon/usp-3.png', Color: '#CBE7FE' },
    { id: 4, text: 'Bảo hành dài lâu', img: '/icon/usp-4.png', Color: '#FBCFD8' },
  ];

  const categories = [
    { name: 'Laptop' },
    { name: 'Bàn phím' },
    { name: 'Âm thanh' },
    { name: 'Ghế gaming' },
    { name: 'Bàn' },
    { name: 'Màn hình' },
    { name: 'Phụ kiện' },
    { name: 'Thực tế ảo' },
    { name: 'Balo, túi' },
    { name: 'Phần mềm' },
    { name: 'Hộc tủ' },
    { name: 'Arm màn mình' },
    { name: 'Online giá rẻ' },
    { name: 'Phần mềm' },
  ];

  const fakeData: Laptop[] = [
    {
      id: 1,
      name: "Lenovo ThinkPad X1 Carbon Gen 11",
      price: "26.990.000",
      category: "Ultrabook",
      brand: "Lenovo",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 512GB"],
    },
    {
      id: 2,
      name: "Dell Inspiron 15 5630",
      price: "15.990.000",
      category: "Laptop phổ thông",
      brand: "Dell",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 256GB"],
    },
    {
      id: 3,
      name: "HP Spectre x360 14",
      price: "24.990.000",
      category: "Ultrabook",
      brand: "HP",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 1TB"],
    },
    {
      id: 4,
      name: "Asus ZenBook 14",
      price: "19.990.000",
      category: "Laptop cao cấp",
      brand: "Asus",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 512GB"],
    },
    {
      id: 5,
      name: "Acer Aspire 5",
      price: "12.990.000",
      category: "Laptop phổ thông",
      brand: "Acer",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i3", "4GB RAM", "SSD 256GB"],
    },
    {
      id: 6,
      name: "MacBook Air M2",
      price: "30.990.000",
      category: "Ultrabook",
      brand: "Apple",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["M2 Chip", "8GB RAM", "SSD 512GB"],
    },
    {
      id: 7,
      name: "Dell XPS 13",
      price: "27.990.000",
      category: "Laptop cao cấp",
      brand: "Dell",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 1TB"],
    },
    {
      id: 8,
      name: "MSI GF63 Thin",
      price: "18.990.000",
      category: "Laptop gaming",
      brand: "MSI",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 512GB", "GTX 1650"],
    },
    {
      id: 9,
      name: "Razer Blade 15",
      price: "40.990.000",
      category: "Laptop gaming",
      brand: "Razer",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 1TB", "RTX 3070"],
    },
    {
      id: 10,
      name: "Gigabyte Aero 15",
      price: "35.990.000",
      category: "Laptop gaming",
      brand: "Gigabyte",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i9", "32GB RAM", "SSD 1TB", "RTX 3080"],
    },
    {
      id: 11,
      name: "Lenovo IdeaPad Flex 5",
      price: "14.990.000",
      category: "Laptop 2-in-1",
      brand: "Lenovo",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 256GB"],
    },
    {
      id: 12,
      name: "HP Pavilion x360",
      price: "16.990.000",
      category: "Laptop 2-in-1",
      brand: "HP",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 512GB"],
    },
    {
      id: 13,
      name: "Microsoft Surface Laptop 4",
      price: "29.990.000",
      category: "Ultrabook",
      brand: "Microsoft",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 512GB"],
    },
    {
      id: 14,
      name: "Asus TUF Gaming F15",
      price: "22.990.000",
      category: "Laptop gaming",
      brand: "Asus",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i7", "16GB RAM", "SSD 512GB", "RTX 3050"],
    },
    {
      id: 15,
      name: "Samsung Galaxy Book Pro",
      price: "23.990.000",
      category: "Ultrabook",
      brand: "Samsung",
      imageUrl: "https://via.placeholder.com/200",
      tags: ["Core i5", "8GB RAM", "SSD 256GB"],
    },
  ];

  // Hàm xử lý khi nhấn nút mũi tên trái
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();  // Di chuyển về slide trước
    }
  };

  // Hàm xử lý khi nhấn nút mũi tên phải
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();  // Di chuyển đến slide tiếp theo
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const getAllCategory = async () => {
    try {
      const data=await axios.get('http://localhost:4000/api/allCategory')
      console.log('count:',data)
      setCategory(data.data)
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  }

  useEffect(()=>{
    getAllCategory();
  },[])

  return (
    <>
      <div style={{ justifySelf: 'center', width: '1200px' }}>
        <div>
          <Row style={{ height: '300px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px', borderRadius: '5px', color: 'white' }}>
            <Col><img src="/logo/frame-961182-optimized-thinkpro.webp" alt="" width={1200} /></Col>
          </Row>
        </div>
        <Row style={{ fontWeight: '600', fontSize: '28px', lineHeight: '40px' }}>Danh mục nổi bật</Row>
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '2.25rem', paddingRight: '2.25rem', borderRadius: '.25rem', backgroundColor: 'white' }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
              <Row gutter={[16, 16]} justify="center">
                {category.map((category:any, index:any) => (
                  <Col key={category.id} xs={6} sm={6} md={3}>
                    <ConfigProvider
                      theme={{
                        components: {
                          Button: {
                            colorBorder: 'transparent',
                            defaultHoverBorderColor: 'transparent',
                            defaultHoverColor: '#80c4e9',
                            defaultShadow: '0',
                            defaultHoverBg: '#80c4e9'
                          }
                        }
                      }}>
                      <Button
                        type="text"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "160px",
                          width: "100%",
                          padding: "10px",
                          fontWeight: 600,
                          fontSize: '14px'
                        }}
                      >
                        <img
                          src={category.imageUrl}
                          alt={category.name}
                          style={{ width: "103px", height: "103px", marginBottom: "8px" }}
                        />
                        <span>{category.name}</span>
                      </Button>
                    </ConfigProvider>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
        <div style={{ width: '1200px', height: '196px', marginTop: '3rem' }}>
          <Row>
            <span style={{ fontSize: 28, fontWeight: 600 }}>Chọn Think?
              <span style={{ fontSize: 24, fontWeight: 600, marginLeft: '1rem', color: 'rgb(107 112 117)' }}>Chọn sự thoải mái, an tâm vì có sự tận tâm.</span></span>
          </Row>
          <Row
            gutter={[16, 16]} // Khoảng cách giữa các cột
            style={{ width: '1200px', marginTop: '1.5rem', alignContent: '' }}
          >
            {boxes.map((box) => (
              <Col key={box.id} span={5}> {/* Mỗi hộp chiếm 1/4 hàng (24/4 = 6) */}
                <div
                  style={{
                    padding: '8px',
                    backgroundColor: box.Color,
                    borderRadius: '4px',
                    fontWeight: 600,
                    lineHeight: '150%',
                    position: 'relative',
                    width: '100%', // Để phù hợp với kích thước cột
                    height: '132px', // Cố định chiều cao như hộp gốc
                  }}
                >
                  <p style={{ fontSize: '14px', width: '85px' }}>{box.text}</p>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                    }}
                  >
                    <img
                      src={box.img}
                      alt=""
                      style={{
                        width: 80,
                      }}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col span={4}>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  fontWeight: 600,
                  lineHeight: '150%',
                  position: 'relative',
                  width: '200px', // Để phù hợp với kích thước cột
                  height: '132px', // Cố định chiều cao như hộp gốc
                  display: 'flex', // Sử dụng flexbox
                  flexDirection: 'column', // Sắp xếp theo cột
                }}
              >
                <CheckCircleFilled style={{ marginTop: '10px', fontSize: '23px', color: 'rgb(59 179 70)' }} />
                <span style={{ fontSize: '12px', fontWeight: 400, marginTop: '8px' }}>Thành viên thuộc Group 4. Made with love</span> {/* Thêm khoảng cách giữa icon và text */}
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ width: '1200px', height: '196px', marginTop: '3rem' }}>
          <Row>
            <span style={{ fontSize: 28, fontWeight: 600 }}></span>
            <Row>
              <span style={{ fontSize: 28, fontWeight: 600 }}>Gợi ý cho bạn</span>
            </Row>
            <Row>
              <div style={{ position: 'relative', width: '100%', marginTop: '1rem' }}>
                <Row
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    display: 'flex',
                    height: '80px',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                  }}
                >
                  <Col span={22} style={{ position: 'relative' }}>
                    <Carousel
                      ref={carouselRef}
                      dots={false}
                      slidesToShow={7}
                      slidesToScroll={6}
                      infinite={false}
                      responsive={[
                        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                      ]}
                    >
                      {category.map((category:any, index:any) => (
                        <div
                          key={index}
                          style={{
                            padding: '10px',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <ConfigProvider
                            theme={{
                              components: {
                                Button: {
                                  colorBorder: 'transparent',
                                  defaultHoverBorderColor: 'transparent',
                                  defaultHoverColor: 'black',
                                  defaultShadow: '0',
                                  defaultHoverBg: '#f5f5f5',
                                },
                              },
                            }}
                          >
                            <Button
                              style={{
                                fontWeight: 400,
                                fontSize: '12px',
                                border: 'transparent',
                                borderRadius: '8px',
                                height: 40,
                                width: '100%',
                                maxWidth: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {category.name}
                            </Button>
                          </ConfigProvider>
                        </div>
                      ))}
                    </Carousel>
                  </Col>
                  <Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type='text'
                      shape="circle"
                      onClick={handlePrev}  // Gọi hàm handlePrev
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        borderColor: 'transparent',
                        border: 'transparent'
                      }}
                    >
                      <LeftOutlined />
                    </Button>
                    <Button
                      type='text'
                      shape="circle"
                      onClick={handleNext}  // Gọi hàm handleNext
                      style={{
                        marginLeft: '15px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        borderColor: 'transparent',
                        border: 'transparent'
                      }}
                    >
                      <RightOutlined />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Row>
        </div>
        <Row gutter={[16, 16]} style={{ width: '1200px', marginBottom:'3rem'}}>
            {fakeData.slice(0, visibleItems).map((laptop) => (
              <Col key={laptop.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={<img alt={laptop.name} src={laptop.imageUrl} />}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Card.Meta
                    title={
                      <div
                        style={{
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {laptop.name}
                      </div>
                    }
                    description={
                      <>
                        <p style={{ color: "#fe3464", fontWeight: "bold", fontSize: "16px" }}>
                          Giá: {laptop.price} VND
                        </p>
                        <div>
                          <Text
                            type="secondary"
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                          >
                            Thương hiệu: {laptop.brand}
                          </Text>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <Text style={{ fontSize: "12px" }}>Thể loại:</Text>
                          <div style={{ marginTop: "5px" }}>
                            <Tag color="blue" style={{ fontSize: "12px" }}>
                              {laptop.category}
                            </Tag>
                            {laptop.tags.map((tag, index) => (
                              <Tag
                                color="gold"
                                key={index}
                                style={{ fontSize: "12px" }}
                              >
                                {tag}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {visibleItems < fakeData.length && (
            <div style={{ textAlign: "center", marginTop: "20px", marginBottom:'20px' }}>
              <Button type="primary" onClick={handleLoadMore}>
                Xem thêm
              </Button>
            </div>
          )}
      </div>
    </>
  );
};

export default App;
