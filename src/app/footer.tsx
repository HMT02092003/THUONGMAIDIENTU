import React from "react";
import { Layout, Row, Col, Typography, Button, Space, Card } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

const App: React.FC = () => {
  const textStyle = { fontSize: "13px", lineHeight: "1.5" }; // Cỡ chữ nhỏ hơn
  const titleStyle = { fontSize: "15px", marginBottom: "8px" };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ marginBottom: "16px" }}>
          <Title level={4} style={{ textAlign: "left", fontSize: "15px" }}>
            Hệ thống cửa hàng
          </Title>
        </Col>
        <Col span={24} style={{ marginBottom: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card style={{ backgroundColor: "#F6F9FC" }}> {/* Màu mới */}
                <Text style={textStyle}>
                  <strong>Thành phố Hồ Chí Minh</strong>
                  <br />
                  Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                  <br />
                  <Text type="danger">Đã đóng cửa, hẹn bạn 09:00</Text>
                  <br />
                  09:00 - 21:00
                </Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ backgroundColor: "#F6F9FC" }}> {/* Màu mới */}
                <Text style={textStyle}>
                  <strong>Thành phố Hồ Chí Minh</strong>
                  <br />
                  95 Trần Thiện Chánh, Q10
                  <br />
                  <Text type="danger">Đã đóng cửa, hẹn bạn 09:00</Text>
                  <br />
                  09:00 - 21:00
                </Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ backgroundColor: "#F6F9FC" }}> {/* Màu mới */}
                <Text style={textStyle}>
                  <strong>Hà Nội</strong>
                  <br />
                  53 Thái Hà, Đống Đa
                  <br />
                  <Text type="success">Mở cửa</Text>
                  <br />
                  09:00 - 22:00
                </Text>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Title level={4} style={{ textAlign: "left", fontSize: "15px" }}>
            ThinkPro
          </Title>
        </Col>

        <Col span={6} style={{ backgroundColor: "#F6F9FC", padding: "16px", marginBottom: "16px" }}> {/* Màu mới và padding */}
          <Title level={5} style={titleStyle}>
            Đa dạng thanh toán
          </Title>
          <ul style={{ padding: 0, listStyle: "none", ...textStyle }}>
            <li>Chuyển khoản</li>
            <li>Tiền mặt</li>
            <li>VNPay</li>
            <li>VietQR</li>
            <li><img src="./icon/atm-card.png" width={10} />Thẻ ATM</li>
            <li>Thẻ Quốc tế</li>
          </ul>
        </Col>
        <Col span={6} style={{ backgroundColor: "#F6F9FC", padding: "16px", marginBottom: "16px" }}> {/* Màu mới và padding */}
          <Title level={5} style={titleStyle}>
            Thông tin hữu ích
          </Title>
          <ul style={{ padding: 0, listStyle: "none", ...textStyle }}>
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách kiểm hàng</li>
            <li>Hướng dẫn mua hàng online</li>
            <li>Về chúng tôi</li>
          </ul>
        </Col>

        <Col span={6} style={{ backgroundColor: "#F6F9FC", padding: "16px", marginBottom: "16px" }}> {/* Màu mới và padding */}
          <Title level={5} style={titleStyle}>
            Social networks
          </Title>
          <Space direction="vertical">
            <Link href="https://facebook.com" style={textStyle}>
              <FacebookOutlined /> Facebook
            </Link>
            <Link href="https://youtube.com" style={textStyle}>
              <YoutubeOutlined /> Youtube
            </Link>
            <Link href="https://tiktok.com" style={textStyle}>
              Tiktok
            </Link>
            <Link href="https://telegram.org" style={textStyle}>
              Telegram
            </Link>
          </Space>
        </Col>

        <Col span={6} style={{ backgroundColor: "#F6F9FC", padding: "16px", marginBottom: "16px" }}> {/* Màu mới và padding */}
          <Title level={5} style={titleStyle}>
            Phản hồi, góp ý, khiếu nại
          </Title>
          <Text style={textStyle}>
            Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát
            Chất Lượng của chúng tôi sẵn sàng lắng nghe quý khách.
          </Text>
          <br />
          <Button type="primary" style={{ marginTop: "10px" }}>
            Gửi phản hồi ngay
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default App;
