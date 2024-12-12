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
      <div>
        <Row style={{ justifySelf: 'center', width: '1200px', height: '300px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px', borderRadius: '5px', color: 'white' }}>
          <Col span={8} style={{ paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
            <h1 style={{ fontSize: '28px', lineHeight: '40px', fontWeight: '600' }}>💥 Ra mắt KM mới</h1>
            <p style={{fontSize:'16px', marginTop:'.5rem'}}>
              ThinkPro ra mắt chương trình Deal Hời Mỗi Ngày, giúp bạn dễ dàng mua sắm các sản phẩm công nghệ chất lượng với Giá Rẻ Nhất Thị Trường!!
            </p>
          </Col>
          <Col span={16}><img src="/logo/frame-96101455-thinkpro.webp" alt="" width={800} /></Col>
        </Row>
      </div>
    </>
  );
};

export default App;
