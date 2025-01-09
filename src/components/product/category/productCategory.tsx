'use client';
import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message, ConfigProvider } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Paragraph, Text } = Typography;



interface LaptopPageProps {
  id: number;
}

const ProductCategory: React.FC<LaptopPageProps> = ({ id }) => {
  const carouselRef = useRef<any>(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<any[]>([]);
  const [category, setCategory] = useState<any>({});
  const [Brand, setBrand] = useState<any>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [originalProductData, setOriginalProductData] = useState<any[]>([]);


  const router = useRouter();

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

  const fectchProdutByCategoryData = async () => {
    try {
      const api = await axios.get(`http://localhost:4000/api/getProductByCategory/${id}`);
      setProductData(api.data);
      setOriginalProductData(api.data); // Lưu dữ liệu gốc
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  const handleBrandClick = (brandId: number) => {
    const filteredProducts = originalProductData.filter(product => product.brand.id === brandId);
    setProductData(filteredProducts); // Chỉ thay đổi dữ liệu hiển thị
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const getAllBrand = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allBrand')
      console.log('count:', data)
      setBrand(data.data)
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  }

  useEffect(() => {
    getAllBrand();
  }, [])

  const fetchCategory = async () => {
    try {
      const api = await axios.post(`http://localhost:4000/api/get1Category`, { id: id });
      setCategory(api.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  useEffect(() => {
    fectchProdutByCategoryData();
    fetchCategory();
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      {/* Header with carousel */}
      <div style={{ marginBottom: "20px" }}>
        <Card style={{ backgroundColor: "white", borderRadius: "10px", marginBottom: "20px" }}>
          <Title level={2}>{category.name}</Title>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Paragraph style={{ fontSize: "16px", marginBottom: "20px" }}>
              {category.description}
            </Paragraph>
          )}
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
                    {Brand.map((Brand: any, index: any) => (
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
                          color="default"
                          variant="outlined"
                          onClick={() => handleBrandClick(Brand.id)}
                          style={{
                            fontWeight: 600,
                            fontSize: '14px',
                            borderRadius: '20px',
                            height: 40,
                            width: '100%',
                            maxWidth: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img
                            src={`http://localhost:4000/${Brand.imageUrl}`}  // Đường dẫn đến ảnh từ localhost:4000
                            style={{ width: '45px' }} // Đặt kích thước ảnh và khoảng cách với text
                          />
                          {Brand.name}
                        </Button>
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
        </Card>
      </div>

      {/* Product list */}
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {productData.slice(0, visibleItems).map((laptop) => (
              <Col key={laptop.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={<img alt={laptop.name} src={`http://localhost:4000/${laptop.productImage}`} />}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  onClick={() => router.push(`/product/detail/${laptop.id}`)}
                >
                  <Card.Meta
                    title={laptop.name}
                    description={
                      <>
                        <p style={{ color: '#fe3464', fontWeight: 'bold', fontSize: '16px' }}>
                          Giá: {Number(laptop.variants[0]?.price || 0).toLocaleString()} VNĐ
                        </p>
                        <div>
                          <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                            Thương hiệu: <Tag color="cyan">{laptop.brand.name}</Tag>
                          </Text>
                        </div>
                        <br />
                        <div>
                          <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                            Thể loại: {laptop.categories.map((item: { id: number; name: string }) => (
                              <Tag key={item.id} color="green">{item.name}</Tag>
                            ))}
                          </Text>
                        </div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {visibleItems < productData.length && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button type="primary" onClick={handleLoadMore}>
                Xem thêm
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCategory;

