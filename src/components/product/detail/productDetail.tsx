'use client';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Divider, Tag, Button } from 'antd';
import { TagOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ProductDetail: React.FC = () => {
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any>(null);

  // Fake API call
  useEffect(() => {
    // Giả lập fetch từ API
    const fetchProductData = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: 'Dell Inspiron 16 5630',
            sku: 'Inspiron1656300',
            price: 15990000,
            options: ['i5 1340P, 16GB, 512GB, FHD+'],
            color: 'Platinum Silver',
            status: 'Mới, Sealed, Nhập khẩu',
            gift: 'Chuột không dây M3 199.000đ',
            thumbnails: [
              'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00060rb055-sl.jpg',
              'https://imagor.owtg.one/unsafe/fit-in/200x200/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00000ff090-sl.jpg',
              'https://imagor.owtg.one/unsafe/fit-in/200x200/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-90000td090-sl-fpr.jpg',
            ],
            specs:
              'CPU: Intel Core i5 1340P, 12C/16T; Speed: 1.0GHz, lên tới 4.6GHz; Cache: 12MB; Graphics: Intel Iris Xe Graphics; RAM: 16GB LPDDR5 5200MHz; Storage: 512GB SSD (M.2 NVMe); Upgrade: Không hỗ trợ nâng cấp',
            description: `
              Dell Inspiron 16 5630 là một lựa chọn tuyệt vời dành cho những người dùng đang tìm kiếm một chiếc laptop văn phòng với hiệu năng vượt trội và thiết kế hiện đại. 
              Với bộ vi xử lý Intel Core i5 thế hệ 13, máy đáp ứng tốt nhu cầu làm việc từ cơ bản đến nâng cao, từ việc chỉnh sửa tài liệu đến các tác vụ đồ họa nhẹ.
              Điểm nổi bật của sản phẩm là màn hình FHD+ 16 inch, mang lại trải nghiệm hình ảnh sắc nét và không gian làm việc rộng rãi, lý tưởng cho các ứng dụng đa nhiệm hoặc giải trí.
              
              Thiết kế của máy được hoàn thiện với lớp vỏ Platinum Silver cao cấp, mang đến cảm giác chắc chắn và chuyên nghiệp. Cấu hình mạnh mẽ với RAM 16GB LPDDR5 và ổ SSD 512GB NVMe giúp khởi động nhanh, chạy mượt các ứng dụng nặng, và có khả năng lưu trữ dữ liệu lớn.

              Ngoài ra, chiếc laptop này được trang bị bàn phím gõ êm, touchpad nhạy, cùng công nghệ Intel Iris Xe Graphics hỗ trợ các nhu cầu thiết kế đồ họa cơ bản hoặc chơi các tựa game nhẹ. Với cân nặng chỉ khoảng 1.8kg, Dell Inspiron 16 5630 là người bạn đồng hành lý tưởng cho công việc và học tập.
              
              Khi mua hàng, khách hàng sẽ được tặng kèm chuột không dây M3 trị giá 199.000đ, giúp trải nghiệm sử dụng trở nên tiện lợi hơn bao giờ hết. Sản phẩm có sẵn hàng với chế độ bảo hành chính hãng 12 tháng và dịch vụ hỗ trợ kỹ thuật nhanh chóng.
            `,
          });
        }, 1000); // Giả lập độ trễ 1s
      });
      setProductData(response);
      setMainImage(
        'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00055rf110-sl.jpg'
      );
    };

    fetchProductData();
  }, []);

  if (!productData) return <div>Loading...</div>;

  const specsArray = productData.specs.split(';').map((spec: string) => spec.trim());

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={24}>
        {/* Hình ảnh sản phẩm */}
        <Col span={14}>
          <Card
            cover={
              <img
                alt={productData.name}
                src={mainImage}
                style={{ height: '500px', objectFit: 'contain' }}
              />
            }
          />
          {/* Hình ảnh phụ */}
          <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
            {productData.thumbnails.map((thumbnail: string, index: number) => (
              <Col key={index} span={8}>
                <img
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: '100%',
                    cursor: 'pointer',
                    border: mainImage === thumbnail ? '2px solid #1890ff' : '1px solid #d9d9d9',
                    borderRadius: '4px',
                  }}
                  onClick={() => setMainImage(thumbnail)}
                />
              </Col>
            ))}
          </Row>
          <br />
          <Card title="Cấu hình đặc điểm" style={{ marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <ul style={{ padding: '0 20px' }}>
              {specsArray.map((spec: string, index: number) => (
                <li key={index} style={{ marginBottom: '10px', listStyleType: 'disc' }}>
                  <Text>{spec}</Text>
                </li>
              ))}
            </ul>
          </Card>
          <br />
          <Card title="Chính sách bảo hành & đổi trả" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div>Bảo hành 12 tháng tại chuỗi cửa hàng</div>
            <div>Đổi mới trong 15 ngày đầu tiên</div>
          </Card>
          <br />
          <Card title="Bài viết mô tả">
              {productData.description}
          </Card>
        </Col>

        {/* Thông tin sản phẩm */}
        <Col span={10}>
          <div
            style={{
              position: 'sticky',
              top: '20px',
              background: '#fff',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              maxHeight: '100vh',
              overflow: 'auto',
            }}
          >
            <div style={{ fontSize: '14px', backgroundColor: "#ff4d4f", padding: "20px", color: "white", fontWeight: "bold" }}>
              <TagOutlined /> LAPTOP DELL VĂN PHÒNG TIỆN DỤNG
            </div>
            <div style={{ padding: "20px" }}>
              <Title level={3}>{productData.name}</Title>
              <Text type="secondary">SKU: {productData.sku}</Text>
              <Divider />
              <Title level={5}>Phiên bản</Title>
              <Tag color='blue' style={{ fontSize: '16px', padding: '5px 10px' }}>{productData.options}</Tag>
              <br />
              <Title level={5}>Màu</Title>
              <Tag color='blue' style={{ fontSize: '16px', padding: '5px 10px' }}>{productData.color}</Tag>
              <br />
              <Title level={5}>Loại hàng</Title>
              <Tag color='blue' style={{ fontSize: '16px', padding: '5px 10px' }}>{productData.status}</Tag>
              <Divider />
              <Title level={2} style={{ color: 'red' }}>{productData.price.toLocaleString()}đ</Title>
              <Divider />
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Button style={{ width: "100%", height: "40px", backgroundColor: "#bae0ff", color: "white", fontWeight: "bold" }}>
                    Thêm vào giỏ
                  </Button>
                </Col>

                <Col span={12}>
                  <Button style={{ width: "100%", height: "40px", backgroundColor: "#ff4d4f", fontWeight: "bold", color: "white" }}>
                    Mua ngay
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
