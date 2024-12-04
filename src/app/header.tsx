import React, { useRef } from 'react';
import { ConfigProvider, Input, Button, Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { CarouselRef } from 'antd/es/carousel'; // Thêm import CarouselRef

const { Search } = Input;

const HeaderPage = () => {
  const router = useRouter();
  const carouselRef = useRef<CarouselRef>(null);  // Khai báo ref đúng kiểu

  const categories = [
    { name: 'Laptop', image: '/icon/laptop.png' },
    { name: 'Bàn phím', image: '/icon/banphim.png' },
    { name: 'Âm thanh', image: '/icon/amthanh.png' },
    { name: 'Ghế gaming', image: '/icon/ghecongthaihoc.png' },
    { name: 'Bàn', image: '/icon/bannangha.png' },
    { name: 'Màn hình', image: '/icon/manhinh.png' },
    { name: 'Phụ kiện', image: '/icon/phukien.png' },
    { name: 'Thực tế ảo', image: '/icon/thucteao.png' },
    { name: 'Balo, túi', image: '/icon/balo,tui.png' },
    { name: 'Phần mềm', image: '/icon/phanmem.png' },
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
      {/* Header chính */}
      <Row style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <Row style={{ display: "flex", height: "80px", alignItems: "center" }}>
          <Col span={2}>
            <img src="/logo/logo.png" alt="" style={{ flexShrink: '0', height: '2.5rem', width: "80px" }} />
          </Col>
          <Col span={7}>
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    colorBgContainer: '#f5f5f5',
                    colorBorder: '#f5f5f5',
                  }
                }
              }}>
              <Search size='large' placeholder="Tên sản phẩm, nhu cầu hãng" allowClear style={{ width: 350 }} />
            </ConfigProvider>
          </Col>
          <Col span={3}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBorder: 'transparent',
                    defaultHoverBorderColor: 'transparent',
                    defaultHoverColor: 'black',
                    defaultShadow: '0',
                    defaultHoverBg: '#f5f5f5'
                  }
                }
              }}>
              <Button style={{ marginLeft: '30px', fontWeight: 600 }}>
                <img src="/icon/phone-call.png" alt="" style={{ width: 18 }} />1900.63.3579
              </Button>
            </ConfigProvider>
          </Col>
          <Col span={3}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBorder: 'transparent',
                    defaultHoverBorderColor: 'transparent',
                    defaultHoverColor: 'black',
                    defaultShadow: '0',
                    defaultHoverBg: '#f5f5f5'
                  }
                }
              }}>
              <Button style={{ marginLeft: '20px', fontWeight: 600 }}>
                <img src="/icon/gps.png" alt="" style={{ width: 25 }} />Địa chỉ cửa hàng
              </Button>
            </ConfigProvider>
          </Col>
          <Col span={3}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBorder: 'transparent',
                    defaultHoverBorderColor: 'transparent',
                    defaultHoverColor: 'black',
                    defaultShadow: '0',
                    defaultHoverBg: '#f5f5f5'
                  }
                }
              }}>
              <Button style={{ marginLeft: '40px', fontWeight: 600 }}>
                <img src="/icon/online-support.png" alt="" style={{ width: 21 }} />Khiếu nại
              </Button>
            </ConfigProvider>
          </Col>
          <Col span={3}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBorder: 'transparent',
                    defaultHoverBorderColor: 'transparent',
                    defaultHoverColor: 'black',
                    defaultShadow: '0',
                    defaultHoverBg: '#f5f5f5'
                  }
                }
              }}>
              <Button style={{ marginLeft: '20px', fontWeight: 600 }}>
                <img src="/icon/news.png" alt="" style={{ width: 18 }} />Tin công nghệ
              </Button>
            </ConfigProvider>
          </Col>
          <Col span={2} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' shape='circle' size='large' variant='filled' style={{ marginRight: '10px' }}>
              <img src="/icon/user.png" alt="" style={{ width: 15 }} />
            </Button>
          </Col>
          <Col span={1} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' shape='circle' size='large' variant='filled' onClick={() => { router.push('/shoppingCart') }}>
              <img src="/icon/grocery-store.png" alt="" style={{ width: 17 }} />
            </Button>
          </Col>
        </Row>
      </Row>

      <Row style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: '2px' }}>
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
          {/* Nút "Danh Mục" */}
          <Col span={2} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' variant='text' style={{ height: '60px', fontWeight: 600 }}>
              <img src="/icon/options-lines.png" alt="" style={{ width: 17 }} />Danh Mục
            </Button>
          </Col>

          {/* Carousel cho danh sách danh mục */}
          <Col span={19} offset={1} style={{ position: 'relative' }}>
            <Carousel
              ref={carouselRef}  // Gán ref cho Carousel
              dots={false}
              slidesToShow={6}
              slidesToScroll={5}
              infinite={false}
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
                  <Button
                    style={{
                      fontWeight: 500,
                      border: 'transparent',
                      borderRadius: '5px',
                      width: '100%',
                      maxWidth: '150px',
                      display: 'flex', // Để sắp xếp ảnh và text theo chiều ngang
                      alignItems: 'center', // Canh chỉnh ảnh và text
                      justifyContent: 'center', // Canh giữa nội dung
                    }}
                  >
                    {/* Thêm ảnh nhỏ trước text */}
                    <img
                      src={category.image}  // Đường dẫn đến ảnh cho mỗi danh mục
                      alt={category.name}   // Thêm alt text cho ảnh
                      style={{ width: '45px', marginRight: '8px' }} // Đặt kích thước ảnh và khoảng cách với text
                    />
                    {category.name}
                  </Button>
                </div>
              ))}
            </Carousel>
          </Col>

          {/* Nút mũi tên bên ngoài carousel, ở bên phải */}
          <Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              shape="circle"
              onClick={handlePrev}  // Gọi hàm handlePrev
              style={{
                backgroundColor: 'white',
                borderColor: 'transparent'
              }}
            >
              <LeftOutlined />
            </Button>
            <Button
              shape="circle"
              onClick={handleNext}  // Gọi hàm handleNext
              style={{
                marginLeft: '10px',
                backgroundColor: 'white',
                borderColor: 'transparent'
              }}
            >
              <RightOutlined />
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default HeaderPage;
