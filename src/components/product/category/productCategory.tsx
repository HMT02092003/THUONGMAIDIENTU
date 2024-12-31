'use client';
import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message } from "antd";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import '@/src/cssfolder/ProductCategory.css'; // Import file CSS

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

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
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
    <div className="container">
      <div className="header-card">
        <Card>
          <Title className="category-title">{category.name}</Title>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Paragraph className="category-description">
              {category.description}
            </Paragraph>
          )}
          <Carousel autoplay dots={false} slidesToShow={8} arrows className="carousel-container">
            {brands.map((brand, index) => (
              <div key={index} className="carousel-tag-container">
                <Tag className="carousel-tag">{brand}</Tag>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>

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
                  className="product-card"
                  onClick={() => router.push(`/product/detail/${laptop.id}`)}
                >
                  <Card.Meta
                    title={laptop.name}
                    description={
                      <>
                        <p className="product-card-title">
                          Giá: {Number(laptop.variants[0]?.price || 0).toLocaleString()} VNĐ
                        </p>
                        <div>
                          <Text type="secondary" className="product-card-brand">
                            Thương hiệu: <Tag color="cyan">{laptop.brand.name}</Tag>
                          </Text>
                        </div>
                        <br />
                        <div>
                          <Text type="secondary" className="product-card-category">
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
            <div className="load-more-container">
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
