"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form } from "antd";
import "./LoginPage.css";

const { Title, Text, Link } = Typography;

const Login = () => {
  React.useEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <div className="login-container">
      <Row style={{ height: "101vh" }} gutter={[16, 0]}>
        <Col span={14} className="login-illustration">
          <img
            src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg"
            alt="Illustration"
            className="illustration-image"
          />
        </Col>

        <Col span={10} className="login-form">
          <Form className="form-content">
            <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
            <img src="../../../logo/logo.png" alt=""  style={{width:"300px"}} />
            </div>
            <br />
            <div className="form-fields">
              <Form.Item
              label="Email"
              labelCol={{ span: 24 }}
              >
                <Input
                  placeholder="Email"
                  className="input-field"
                  style={{ height: '50px', borderRadius: '10px' }}
                />
              </Form.Item>

              <Form.Item
              label="Password"
              labelCol={{ span: 24 }}
              >
                <Input.Password
                  placeholder="Password"
                  className="input-field"
                  style={{ height: '50px', borderRadius: '10px' }}
                />
              </Form.Item>
            </div>
            <div className="form-options">
              <Checkbox>Remember me</Checkbox>
              <Link className="forgot-password">Quên mật khẩu?</Link>
            </div>
            <Button type="primary" block className="login-button" style={{ height: '50px', marginTop: "20px" }}>
              Login
            </Button>
            <div className="register-link">
              <Text style={{ fontSize: "15px" }}>
                Chưa có tài khoản? <Link href="../../register">Đăng ký</Link>
              </Text>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
