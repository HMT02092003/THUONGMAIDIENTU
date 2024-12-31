'use client';
import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message, ConfigProvider } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import Brand from "@/src/Models/BrandModel";

const { Title, Paragraph, Text } = Typography;

const brands = [
  "Lenovo", "Dell", "Asus", "HP", "Acer", "MSI", "LG", "Apple", "Microsoft",
  "GIGABYTE", "Razer", "Samsung", "HUAWEI", "AVITA", "VAIO", "Colorful", "Xiaomi"
];


interface LaptopPageProps {
  id: number;
}

const ProductCategory: React.FC<LaptopPageProps> = ({ id }) => {
  const carouselRef = useRef<any>(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<any[]>([]);
  const [category, setCategory] = useState<any>({});

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

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const fectchProdutByCategoryData = async () => {
    try {
      const api = await axios.get(`http://localhost:4000/api/getProductByCategory/${id}`);
      setProductData(api.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

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
            <Col span={1} style={{ display: 'flex' }}>
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
              </Col>
            <Col span={22} style={{ position: 'relative' }}>
              <Carousel
                ref={carouselRef}  // Gán ref cho Carousel
                dots={false}
                slidesToShow={9}
                slidesToScroll={5}
                infinite={false}
              >
                {brands.map((category: any, index: any) => (
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
                        color="default" variant="outlined"
                        style={{ width:'100px' }}
                        onClick={() => router.push(`http://localhost:4000/product/category/${category.id}`)}  // Gọi hàm handleCategoryClick khi click vào button
                      >
                        {brands[index]}
                      </Button>
                  </div>
                ))}
              </Carousel>
            </Col>

            {/* Nút mũi tên bên ngoài carousel, ở bên phải */}
            <Col span={1} style={{ display: 'flex' }}>
              <Button
                type='text'
                shape="circle"
                onClick={handleNext}  // Gọi hàm handleNext
                style={{
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

