"use client";
import React, { useState, useEffect } from "react";
import { Card, Tag, Button, Spin } from "antd";
import "antd/dist/reset.css";
import "@/src/cssfolder/index.css"; // 

const { Meta } = Card;

const fakeApiData = [
  {
    id: 1,
    title: "Cách kiểm tra dung lượng RAM tối đa laptop đơn giản nhất",
    description:
      "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM tối đa laptop trên Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
    image: "https://via.placeholder.com/300x150",
    tag: "Thủ thuật",
  },
  {
    id: 2,
    title: "Laptop rò điện: Nguyên nhân, cách khắc phục & phòng tránh",
    description:
      "Laptop bị rò điện? Khám phá nguyên nhân & cách xử lý hiệu quả tại nhà. Tìm hiểu ngay mẹo phòng tránh rò điện laptop.",
    image: "https://via.placeholder.com/300x150",
    tag: "Thủ thuật",
  },
  {
    id: 3,
    title: "Cách gửi file Word qua Messenger trên Laptop nhanh chóng, đơn giản",
    description:
      "Hướng dẫn chi tiết cách gửi file Word qua Messenger trên laptop. Nhanh chóng, đơn giản, hiệu quả. Xem ngay!",
    image: "https://via.placeholder.com/300x150",
    tag: "Thủ thuật",
    
  },
  {
    id: 4,
    title: "Cách để laptop chạy hết công suất Win 11",
    description:
      "Laptop Win 11 chạy chậm? Khám phá ngay cách tối ưu laptop chạy hết công suất, tăng tốc sử dụng máy tính nhanh và mượt mà.",
    image: "https://via.placeholder.com/300x150",
    tag: "Thủ thuật",
    
  },
  {
    id: 5,
    title: "Làm thế nào để khắc phục lỗi màn hình xanh trên Windows 10?",
    description:
      "Khám phá cách sửa lỗi màn hình xanh trên Windows 10 nhanh chóng và hiệu quả.",
    image: "https://via.placeholder.com/300x150",
    tag: "Thủ thuật",
  
  },
  {
    id: 6,
    title: "Cách chọn mua laptop phù hợp cho dân văn phòng",
    description:
      "Hướng dẫn cách chọn laptop tối ưu dành cho dân văn phòng, từ hiệu năng đến giá cả.",
    image: "https://via.placeholder.com/300x150",
    tag: "Hướng dẫn",
   
  },
  {
    id: 7,
    title: "Sạc laptop đúng cách để kéo dài tuổi thọ pin",
    description:
      "Tìm hiểu mẹo sạc laptop đúng cách để bảo vệ pin lâu dài, tránh chai pin.",
    image: "https://via.placeholder.com/300x150",
    tag: "Hướng dẫn",
   
  },
  {
    id: 8,
    title: "Top 5 laptop tốt nhất dành cho sinh viên năm 2024",
    description:
      "Danh sách các mẫu laptop tốt nhất phù hợp với sinh viên, giá hợp lý, hiệu năng cao.",
    image: "https://via.placeholder.com/300x150",
    tag: "Đánh giá",
    
  },
  // Các dữ liệu khác...
];

const fakeProductData = [
    {
      id: 101,
      name: "Bàn phím cơ Rainy75 Aluminum CNC Silver",
      price: "1.890.000",
      discountPrice: "2.390.000",
      image: "https://via.placeholder.com/100x100",
    },
    {
      id: 102,
      name: "Lenovo ThinkPad X1 Carbon Gen 7",
      price: "9.990.000",
      discountPrice: "13.990.000",
      image: "https://via.placeholder.com/100x100",
    },
    {
      id: 103,
      name: "Bàn phím cơ NuPhy Air75 v2",
      price: "2.990.000",
      discountPrice: "3.490.000",
      image: "https://via.placeholder.com/100x100",
    },
    {
      id: 104,
      name: "Chuột Microsoft Modern Mouse",
      price: "849.000",
      discountPrice: "1.290.000",
      image: "https://via.placeholder.com/100x100",
    },
    {
      id: 105,
      name: "Chuột Logitech",
      price: "800.000",
      discountPrice: "1.290.000",
      image: "https://via.placeholder.com/100x100",
    },
  
];

const TechnologyNews: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [visibleArticles, setVisibleArticles] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setArticles(fakeApiData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLoadMore = () => {
    setVisibleArticles(visibleArticles + 3);
  };

  return (
    <div className="technology-news-container">
      {/* Danh sách bài viết chính */}
      <div className="main-content">
        <h2 className="section-title">Tin tức công nghệ</h2>
        {loading ? (
          <div className="loading-spinner">
            <Spin tip="Đang tải dữ liệu..." />
          </div>
        ) : (
          <>
            <div className="article-list">
              {articles.slice(0, visibleArticles).map((article) => (
                <Card key={article.id} hoverable className="article-card">
                  <div className="article-content">
                    <img
                      alt={article.title}
                      src={article.image}
                      className="article-image"
                    />
                    <div className="article-details">
                      <Tag color="blue" className="article-tag">
                        {article.tag}
                      </Tag>
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-description">{article.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {visibleArticles < articles.length && (
              <div className="load-more-button">
                <Button type="primary" onClick={handleLoadMore}>
                  Xem thêm
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <h3 className="sidebar-title">Có thể bạn thích</h3>
          {fakeProductData.map((product) => (
            <Card key={product.id} hoverable className="product-card">
              <div className="product-content">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-price">
                    Giá: <b>{product.price}đ</b>{" "}
                    <del>{product.discountPrice}đ</del>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyNews;
