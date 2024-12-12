'use client';

import React, { useState, useEffect } from 'react';
import { Spin } from 'antd'; // Hiển thị spinner khi tải dữ liệu
import './Info.css'; // Import CSS

// Fake dữ liệu bài viết chi tiết
const fakeDetailData = {
  1: {
    title: "Cách kiểm tra dung lượng RAM tối đa laptop đơn giản nhất",
    description:
      "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM tối đa laptop trên Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
    content: [
      {
        heading: "1. Cách Kiểm Tra Dung Lượng RAM Tối Đa Laptop Đơn Giản Nhất",
        subheading: "1.1 Tại sao cần kiểm tra dung lượng RAM tối đa?",
        text: "Kiểm tra dung lượng RAM tối đa của laptop là bước cần thiết trước khi nâng cấp. Laptop hoạt động chậm, giật lag thường do thiếu RAM, và nâng cấp RAM là một giải pháp đơn giản, hiệu quả để cải thiện hiệu suất...",
        image: "https://d28jzcg6y4v9j1.cloudfront.net/2024/10/31/tai_sao_can_kiem_tra_dung_luong_ram_tren_laptop_1730383460695.jpg", // Hình ảnh giả
      },
      {
        heading: "2. Các bước kiểm tra dung lượng RAM tối đa",
        subheading: "2.1 Kiểm tra trên Windows",
        text: (
          <>
            Trên Windows, bạn có thể kiểm tra dung lượng RAM tối đa bằng cách mở Task Manager, vào tab Performance và kiểm tra phần Memory...
            <br /><br />
            Các bước này giúp bạn xác định xem máy tính có thể nâng cấp RAM hay không và mức RAM tối đa mà hệ thống hỗ trợ.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+2", // Hình ảnh giả
      },
      {
        heading: "3. Các bước kiểm tra trên macOS và Linux",
        subheading: "3.1 Kiểm tra trên macOS",
        text: (
          <>
            Trên macOS, bạn có thể kiểm tra dung lượng RAM tối đa trong mục About This Mac và System Report...
            <br /><br />
            Các bước này giúp bạn kiểm tra khả năng nâng cấp RAM trên máy Mac và các thông tin liên quan.
          </>
        ),
        image: "https://d28jzcg6y4v9j1.cloudfront.net/2024/10/31/chon_bieu_tuong_qua_tao_o_goc_trai_1730383498786.jpg", // Hình ảnh giả
      },
      {
        heading: "4. Kiểm tra dung lượng RAM tối đa trên Linux",
        subheading: "4.1 Kiểm tra trên Ubuntu",
        text: (
          <>
            Trên Ubuntu, bạn có thể kiểm tra dung lượng RAM tối đa bằng cách sử dụng lệnh `free -h` trong terminal, hoặc kiểm tra thông qua `System Monitor`.
            <br /><br />
            Điều này sẽ giúp bạn xác định chính xác dung lượng RAM đã cài đặt và mức tối đa hệ thống hỗ trợ.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+4", // Hình ảnh giả
      },
      {
        heading: "5. Tăng hiệu suất với RAM ngoài nâng cấp",
        subheading: "5.1 Sử dụng các công cụ tối ưu hóa RAM",
        text: (
          <>
            Nếu bạn không thể nâng cấp RAM, có thể thử sử dụng các công cụ tối ưu hóa như CleanMem hoặc RAMMap để giải phóng bộ nhớ RAM không sử dụng.
            <br /><br />
            Những công cụ này sẽ giúp bạn cải thiện hiệu suất tạm thời mà không cần phải thay đổi phần cứng.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+5", // Hình ảnh giả
      },
      {
        heading: "6. Những lưu ý khi nâng cấp RAM",
        subheading: "6.1 Kiểm tra khả năng tương thích",
        text: (
          <>
            Trước khi nâng cấp RAM, bạn cần phải kiểm tra khả năng tương thích của RAM mới với hệ thống và mainboard của bạn. Bạn có thể tham khảo thông tin từ website của nhà sản xuất hoặc sử dụng phần mềm như CPU-Z.
            <br /><br />
            Điều này giúp tránh việc mua phải RAM không tương thích với máy tính của bạn.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+6", // Hình ảnh giả
      },
      {
        heading: "7. Tìm hiểu về các loại RAM",
        subheading: "7.1 DDR, DDR2, DDR3, DDR4",
        text: (
          <>
            Khi nâng cấp RAM, bạn cũng cần phải hiểu sự khác biệt giữa các loại RAM như DDR, DDR2, DDR3 và DDR4. Mỗi loại RAM có tốc độ và độ tương thích khác nhau với hệ thống.
            <br /><br />
            Việc chọn loại RAM phù hợp với máy tính của bạn sẽ giúp tối ưu hóa hiệu suất hệ thống.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+7", // Hình ảnh giả
      },
      {
        heading: "8. Cách kiểm tra RAM trên các dòng laptop khác nhau",
        subheading: "8.1 Kiểm tra trên các dòng MacBook",
        text: (
          <>
            Đối với MacBook, bạn có thể dễ dàng kiểm tra dung lượng RAM tối đa thông qua phần "About This Mac" trong menu Apple.
            <br /><br />
            Việc biết chính xác dung lượng RAM của MacBook sẽ giúp bạn nâng cấp hợp lý khi cần thiết.
          </>
        ),
        image: "https://via.placeholder.com/600x300?text=Image+8", // Hình ảnh giả
      },
    ]
  },
};

const TechnologyNewsInfo: React.FC = () => {
  const [articleDetail, setArticleDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setArticleDetail(fakeDetailData[1]); // Lấy dữ liệu giả cho bài viết có ID là 1
      setLoading(false);
    }, 1000); // Mô phỏng tải dữ liệu
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin tip="Đang tải dữ liệu..." />
      </div>
    );
  }

  return (
    <div className="article-container">
      <div className="article-content">
        <h1 className="article-title">{articleDetail.title}</h1>
        <p className="article-description">{articleDetail.description}</p>
        <div>
          {articleDetail.content.map((section: any, index: number) => (
            <div key={index} className="section">
              <h2 className="section-heading">{section.heading}</h2>
              <h3 className="section-subheading">{section.subheading}</h3>
              <p className="section-text">{section.text}</p>
              <img 
                src={section.image} 
                alt={`Image for ${section.heading}`} 
                className="section-image" // Căn chỉnh hình ảnh
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyNewsInfo;
