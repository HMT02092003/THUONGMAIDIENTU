import React, { useRef, useState } from "react";
import { Layout, Row, Col, Typography, Button, Space, Card, ConfigProvider, Carousel } from "antd";
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

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;


const App: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const textStyle = { fontSize: "13px", lineHeight: "1.5" }; // Cỡ chữ nhỏ hơn
  const titleStyle = { fontSize: "15px", marginBottom: "8px" };
  const buttons = [
    { id: 1, image: "/icon/laptop.png", text: "Laptop" },
    { id: 2, image: "/icon/banphim.png", text: "Bàn phím" },
    { id: 3, image: "/icon/amthanh.png", text: "Ghế gaming" },
    { id: 4, image: "/icon/bannangha.png", text: "Bàn nâng hạ" },
    { id: 5, image: "/icon/manhinh.png", text: "màn hình" },
    { id: 6, image: "/icon/phukien.png", text: "Phụ kiện" },
    { id: 7, image: "/icon/thucteao.png", text: "Thực tế ảo" },
    { id: 8, image: "/icon/balo,tui.png", text: "Balo, túi" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
    { id: 9, image: "/icon/phanmem.png", text: "Phần mềm" },
  ];

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

  return (
    <>
      <div style={{ justifySelf: 'center', width: '1200px' }}>
        <div>
          <Row style={{ height: '300px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px', borderRadius: '5px', color: 'white' }}>
            <Col span={8} style={{ paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
              <h1 style={{ fontSize: '28px', lineHeight: '40px', fontWeight: '600' }}>💥 Ra mắt KM mới</h1>
              <p style={{ fontSize: '16px', marginTop: '.5rem' }}>
                ThinkPro ra mắt chương trình Deal Hời Mỗi Ngày, giúp bạn dễ dàng mua sắm các sản phẩm công nghệ chất lượng với Giá Rẻ Nhất Thị Trường!!
              </p>
            </Col>
            <Col span={16}><img src="/logo/frame-96101455-thinkpro.webp" alt="" width={800} /></Col>
          </Row>
        </div>
        <Row style={{ fontWeight: '600', fontSize: '28px', lineHeight: '40px' }}>Danh mục nổi bật</Row>
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '2.25rem', paddingRight: '2.25rem', borderRadius: '.25rem', backgroundColor: 'white' }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
              <Row gutter={[16, 16]} justify="center">
                {buttons.map((button, index) => (
                  <Col key={button.id} xs={6} sm={6} md={3}>
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
                          src={button.image}
                          alt={button.text}
                          style={{ width: "103px", height: "103px", marginBottom: "8px" }}
                        />
                        <span>{button.text}</span>
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
            <span style={{ fontSize: 28, fontWeight: 600 }}>Gợi ý cho bạn</span>
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
                      {categories.map((category, index) => (
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
      </div>
    </>
  );
};

export default App;
