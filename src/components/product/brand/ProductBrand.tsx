'use client';
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message,Divider } from "antd";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Paragraph, Text } = Typography;

const brands = [
  "Lenovo", "Dell", "Asus", "HP", "Acer", "MSI", "LG", "Apple", "Microsoft",
  "GIGABYTE", "Razer", "Samsung", "HUAWEI", "AVITA", "VAIO", "Colorful", "Xiaomi"
];

interface LaptopPageProps {
  id: number;
}

const ProductBrand: React.FC<LaptopPageProps> = ({ id }) => {
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(8);
  const [productData, setProductData] = useState<any[]>([]);
  const [brand, setBrand] = useState<any>({});

  const router = useRouter();

  // Hàm giả lập gọi API và nhận dữ liệu mô tả
  const fetchDescription = async (): Promise<void> => {
    setTimeout(() => {
      // setDescription(fakeDescription); // Thay vì lấy từ API, gán trực tiếp fake data
      setLoading(false);
    }, 1000); // Giả lập thời gian trễ khi gọi API
  };

  const fectchProdutByCategoryData = async () => {
    try {
      const api = await axios.get(`http://localhost:4000/api/getProductByBrand/${id}`);
      setProductData(api.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  const fetchCategory = async () => {
    try {
      const api = await axios.post(`http://localhost:4000/api/get1Brand`, { id: id });
      setBrand(api.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  useEffect(() => {
    fectchProdutByCategoryData();
    fetchCategory();
    fetchDescription();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Header with carousel */}
      <div style={{ marginBottom: "20px" }}>
        <Card style={{ backgroundColor: "white", borderRadius: "10px", marginBottom: "20px" }}>
          <Title level={2}>{brand.name}</Title>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Paragraph style={{ fontSize: "16px", marginBottom: "20px" }}>
              {brand.description}
            </Paragraph>
          )}
          <Carousel
            autoplay
            dots={false}
            slidesToShow={8}
            arrows
            style={{ padding: "0 10px" }} // Giảm padding chung của carousel
          >
            {brands.map((brand, index) => (
              <div key={index} style={{ textAlign: "center", padding: "0 5px" }}>
                <Tag
                  style={{
                    fontSize: "14px", // Giữ kích thước font chữ vừa phải
                    padding: "4px 8px", // Giảm padding của tag
                    borderRadius: "15px",
                    cursor: "pointer",
                    backgroundColor: "#f0f2f5",
                    margin: "0 10px", // Loại bỏ margin của mỗi tag
                    letterSpacing: "-0.05em", // Giảm khoảng cách giữa các ký tự trong mỗi từ
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  {brand}
                </Tag>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>

      {/* Product list */}
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
           <Row gutter={[16, 16]} style={{ width: '1200px', marginBottom: '3rem' }}>
          {productData.slice(0, visibleItems).map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={`http://localhost:4000/${product.productImage}`} />}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                onClick={() => router.push(`/product/detail/${product.id}`)}
              >
                <Card.Meta
                  title={product.name}
                  description={
                    <>
                      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        <span style={{ color: 'black'}}>Giá:</span>{' '}
                        <span style={{ color: '#fe3464' }}>
                          {Number(product.variants[0]?.price || 0).toLocaleString()} VNĐ
                        </span>
                      </p>
                      <div>
                        <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                          Màu: <Tag color="cyan">{product.variants[0]?.color || 'Không có màu'}</Tag>
                        </Text>
                      </div>
                      <Divider style={{ margin: '10px 0' }} />
                      {product.specifications && product.specifications.length > 0 ? (
                        product.specifications.slice(0, 4).map((spec: { title: string; info: string }, index: number) => (
                          <div key={index}>
                            <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                              <strong>{spec.title}</strong>: {spec.info || 'Không có thông tin'}
                            </Text>
                          </div>
                        ))
                      ) : (
                        <div>
                          <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                            Không có thông số kỹ thuật.
                          </Text>
                        </div>
                      )}
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {visibleItems < productData.length && (
          <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Button
              type="default"
              onClick={handleLoadMore}
              style={{
                width: '400px',
                backgroundColor: 'white',
                color: '#1890ff',
                borderColor: '#ffffff',
                fontWeight: 'bold',
              }}
            >
              Xem thêm
            </Button>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default ProductBrand;

