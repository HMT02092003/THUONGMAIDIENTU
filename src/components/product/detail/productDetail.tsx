'use client';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Divider, Tag, Button, Spin, message } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Text } = Typography;

const ProductDetail: React.FC<any> = ({ id }) => {
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<any>(null);
  console.log(selectedType);

  // Fake API call
  useEffect(() => {
    // Giả lập fetch từ API
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/getProductById', { id });
        setProductData(response.data);
        setMainImage(response.data.image);
      } catch (error: any) {
        message.error(error.response?.data?.message)
      }

      // const response = await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve({
      //       name: 'Dell Inspiron 16 5630',
      //       sku: 'Inspiron1656300',
      //       price: 15990000,
      //       options: ['i5 1340P, 16GB, 512GB, FHD+'],
      //       color: 'Platinum Silver',
      //       status: 'Mới, Sealed, Nhập khẩu',
      //       gift: 'Chuột không dây M3 199.000đ',
      //       thumbnails: [
      //         'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00060rb055-sl.jpg',
      //         'https://imagor.owtg.one/unsafe/fit-in/200x200/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00000ff090-sl.jpg',
      //         'https://imagor.owtg.one/unsafe/fit-in/200x200/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-90000td090-sl-fpr.jpg',
      //       ],
      //       specs:
      //         'CPU: Intel Core i5 1340P, 12C/16T; Speed: 1.0GHz, lên tới 4.6GHz; Cache: 12MB; Graphics: Intel Iris Xe Graphics; RAM: 16GB LPDDR5 5200MHz; Storage: 512GB SSD (M.2 NVMe); Upgrade: Không hỗ trợ nâng cấp',
      //       description: `
      //         Dell Inspiron 16 5630 là một lựa chọn tuyệt vời dành cho những người dùng đang tìm kiếm một chiếc laptop văn phòng với hiệu năng vượt trội và thiết kế hiện đại. 
      //         Với bộ vi xử lý Intel Core i5 thế hệ 13, máy đáp ứng tốt nhu cầu làm việc từ cơ bản đến nâng cao, từ việc chỉnh sửa tài liệu đến các tác vụ đồ họa nhẹ.
      //         Điểm nổi bật của sản phẩm là màn hình FHD+ 16 inch, mang lại trải nghiệm hình ảnh sắc nét và không gian làm việc rộng rãi, lý tưởng cho các ứng dụng đa nhiệm hoặc giải trí.

      //         Thiết kế của máy được hoàn thiện với lớp vỏ Platinum Silver cao cấp, mang đến cảm giác chắc chắn và chuyên nghiệp. Cấu hình mạnh mẽ với RAM 16GB LPDDR5 và ổ SSD 512GB NVMe giúp khởi động nhanh, chạy mượt các ứng dụng nặng, và có khả năng lưu trữ dữ liệu lớn.

      //         Ngoài ra, chiếc laptop này được trang bị bàn phím gõ êm, touchpad nhạy, cùng công nghệ Intel Iris Xe Graphics hỗ trợ các nhu cầu thiết kế đồ họa cơ bản hoặc chơi các tựa game nhẹ. Với cân nặng chỉ khoảng 1.8kg, Dell Inspiron 16 5630 là người bạn đồng hành lý tưởng cho công việc và học tập.

      //         Khi mua hàng, khách hàng sẽ được tặng kèm chuột không dây M3 trị giá 199.000đ, giúp trải nghiệm sử dụng trở nên tiện lợi hơn bao giờ hết. Sản phẩm có sẵn hàng với chế độ bảo hành chính hãng 12 tháng và dịch vụ hỗ trợ kỹ thuật nhanh chóng.
      //       `,
      //     });
      //   }, 1000); // Giả lập độ trễ 1s
      // });
      // setProductData(response);
      // setMainImage(
      //   'https://imagor.owtg.one/unsafe/fit-in/1000x1000/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/products/2023/3/14/in5630nt-cnb-00055rf110-sl.jpg'
      // );
    };

    fetchProductData();
  }, [id]);

  if (!productData) return <div><Spin /></div>;

  // const specsArray = productData.specs.split(';').map((spec: string) => spec.trim());

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={24}>
        {/* Hình ảnh sản phẩm */}
        <Col span={14}>
          <Card
            cover={
              <img
                alt={productData.name}
                src={`http://localhost:4000/${productData.productImage}`}
                style={{ height: '500px', objectFit: 'contain' }}
              />
            }
          />
          {/* Hình ảnh phụ */}
          <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
            {Object.keys(productData.imageUrl).map((key: any) => (
              <Col span={6}>
                <img
                  alt={productData.name}
                  src={`http://localhost:4000/${productData.imageUrl[key]}`}
                  style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setMainImage(productData.imageUrl[key])}
                />
              </Col>
            ))}
          </Row>
          <br />
          <Card title="Cấu hình đặc điểm" style={{ marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <ul style={{ padding: '0 20px' }}>
              {productData.specifications.map((item: any) => (
                <li key={item.title} style={{ marginBottom: '10px', listStyleType: 'disc' }}>
                  <Title level={5}>
                    <Text >{item.title}: {item.info}</Text>
                  </Title>
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
              <TagOutlined /> {productData.tagName.toUpperCase()}
            </div>
            <div style={{ padding: "20px" }}>
              <Title level={3}>{productData.name}</Title>
              <Text type="secondary">MSP: {productData.productId}</Text>
              <Divider />
              <Title level={5}>Phiên bản ( Chọn phiên bản )</Title>
              {productData.variants.map((item: any) => {
                return (
                  <Tag color='blue' style={{ fontSize: '16px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => setSelectedType(item.price)}>{item.version}</Tag>
                )
              })}
              <br />
              <Title level={5}>Màu</Title>
              {productData.variants.map((item: any) => {
                return (
                  <Tag color='lime' style={{ fontSize: '16px', padding: '5px 10px' }}>{item.color}</Tag>
                )
              })}
              <br />
              <Title level={5}>Loại hàng</Title>
              {productData.variants.map((item: any) => {
                return (
                  <Tag color='volcano' style={{ fontSize: '16px', padding: '5px 10px' }}>{item.type}</Tag>
                )
              })}
              <Divider />
              {selectedType ? (
                <Title level={2} style={{ color: 'red' }}>
                  {Number(selectedType).toLocaleString() + 'đ'}
                </Title>
              ) : (
                <Text type="secondary">
                  Vui lòng chọn phiên bản để xem giá!
                </Text>
              )}

              <Divider />
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Button style={{ width: "100%", height: "40px", backgroundColor: "#69c0ff", color: "white", fontWeight: "bold" }}>
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
