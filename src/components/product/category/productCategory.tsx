'use client';
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message } from "antd";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Paragraph, Text } = Typography;

interface Laptop {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  imageUrl: string;
  tags: string[];
}

// Dữ liệu giả lập
// const fakeData: Laptop[] = [
//   {
//     id: 1,
//     name: "Lenovo ThinkPad X1 Carbon Gen 11",
//     price: "26.990.000",
//     category: "Ultrabook",
//     brand: "Lenovo",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 512GB"],
//   },

//   {
//     id: 2,
//     name: "Dell Inspiron 15 5630",
//     price: "15.990.000",
//     category: "Laptop phổ thông",
//     brand: "Dell",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 256GB"],
//   },
//   {
//     id: 3,
//     name: "HP Spectre x360 14",
//     price: "24.990.000",
//     category: "Ultrabook",
//     brand: "HP",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 1TB"],
//   },
//   {
//     id: 4,
//     name: "Asus ZenBook 14",
//     price: "19.990.000",
//     category: "Laptop cao cấp",
//     brand: "Asus",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 512GB"],
//   },
//   {
//     id: 5,
//     name: "Acer Aspire 5",
//     price: "12.990.000",
//     category: "Laptop phổ thông",
//     brand: "Acer",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i3", "4GB RAM", "SSD 256GB"],
//   },
//   {
//     id: 6,
//     name: "MacBook Air M2",
//     price: "30.990.000",
//     category: "Ultrabook",
//     brand: "Apple",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["M2 Chip", "8GB RAM", "SSD 512GB"],
//   },
//   {
//     id: 7,
//     name: "Dell XPS 13",
//     price: "27.990.000",
//     category: "Laptop cao cấp",
//     brand: "Dell",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 1TB"],
//   },
//   {
//     id: 8,
//     name: "MSI GF63 Thin",
//     price: "18.990.000",
//     category: "Laptop gaming",
//     brand: "MSI",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 512GB", "GTX 1650"],
//   },
//   {
//     id: 9,
//     name: "Razer Blade 15",
//     price: "40.990.000",
//     category: "Laptop gaming",
//     brand: "Razer",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 1TB", "RTX 3070"],
//   },
//   {
//     id: 10,
//     name: "Gigabyte Aero 15",
//     price: "35.990.000",
//     category: "Laptop gaming",
//     brand: "Gigabyte",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i9", "32GB RAM", "SSD 1TB", "RTX 3080"],
//   },
//   {
//     id: 11,
//     name: "Lenovo IdeaPad Flex 5",
//     price: "14.990.000",
//     category: "Laptop 2-in-1",
//     brand: "Lenovo",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 256GB"],
//   },
//   {
//     id: 12,
//     name: "HP Pavilion x360",
//     price: "16.990.000",
//     category: "Laptop 2-in-1",
//     brand: "HP",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 512GB"],
//   },
//   {
//     id: 13,
//     name: "Microsoft Surface Laptop 4",
//     price: "29.990.000",
//     category: "Ultrabook",
//     brand: "Microsoft",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 512GB"],
//   },
//   {
//     id: 14,
//     name: "Asus TUF Gaming F15",
//     price: "22.990.000",
//     category: "Laptop gaming",
//     brand: "Asus",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i7", "16GB RAM", "SSD 512GB", "RTX 3050"],
//   },
//   {
//     id: 15,
//     name: "Samsung Galaxy Book Pro",
//     price: "23.990.000",
//     category: "Ultrabook",
//     brand: "Samsung",
//     imageUrl: "https://via.placeholder.com/200",
//     tags: ["Core i5", "8GB RAM", "SSD 256GB"],
//   },
// ];

// Dữ liệu mô phỏng mô tả
// const fakeDescription = "Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.";

const brands = [
  "Lenovo", "Dell", "Asus", "HP", "Acer", "MSI", "LG", "Apple", "Microsoft",
  "GIGABYTE", "Razer", "Samsung", "HUAWEI", "AVITA", "VAIO", "Colorful", "Xiaomi"
];

interface LaptopPageProps {
  id: number;
}

const LaptopPage: React.FC<LaptopPageProps> = ({ id }) => {
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(12);

  // Hàm giả lập gọi API và nhận dữ liệu mô tả
  const fetchDescription = async (): Promise<void> => {
    setTimeout(() => {
      // setDescription(fakeDescription); // Thay vì lấy từ API, gán trực tiếp fake data
      setLoading(false);
    }, 1000); // Giả lập thời gian trễ khi gọi API
  };

  const fectchProdutByCategoryData = async () => {
    try {
      const api = await axios.get(`http://localhost:4000/api/getProductByCategory/${id}`);

    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  useEffect(() => {
    fectchProdutByCategoryData();
    fetchDescription();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Header with carousel */}
      <div style={{ marginBottom: "20px" }}>
        <Card style={{ backgroundColor: "white", borderRadius: "10px", marginBottom: "20px" }}>
          <Title level={2}>Laptop</Title>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Paragraph style={{ fontSize: "16px", marginBottom: "20px" }}>
              {description}
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
          <Row gutter={[16, 16]}>
            {/* {fakeData.slice(0, visibleItems).map((laptop) => (
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
                    title={laptop.name}
                    description={
                      <>
                        <p style={{ color: "#fe3464", fontWeight: "bold", fontSize: "16px" }}>
                          Giá: {laptop.price} VND
                        </p>
                        <div>
                          <Text type="secondary" style={{ fontSize: "14px", fontWeight: "bold" }}>
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
                              <Tag color="gold" key={index} style={{ fontSize: "12px" }}>
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
            ))} */}
          </Row>
          {/* 
          {visibleItems < fakeData.length && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button type="primary" onClick={handleLoadMore}>
                Xem thêm
              </Button>
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default LaptopPage;

