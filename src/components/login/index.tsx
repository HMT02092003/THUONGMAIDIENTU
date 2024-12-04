"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form, message, ConfigProvider } from "antd";
import "./LoginPage.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Text, Link } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      const login = await axios.post("http://localhost:4000/api/login", values);
      message.success("Đăng nhập thành công");
      router.push("/home");
    } catch (err: any) {
      message.error(err.response.data.error);
    }
  };
  React.useEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <div className="login-container">
      <Row style={{ height: "101vh" }} gutter={[16, 0]}>
        <Col span={14} className="login-illustration">
          <img
            src="/logo/undraw_in_the_office_re_jtgc.svg"
            alt="Illustration"
            className="illustration-image"
            style={{ width: 700 }}
          />
        </Col>

        <Col span={10} className="login-form" style={{ backgroundColor: 'white', boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
          <Form
            className="form-content"
            onFinish={onFinish}
          >
            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", }}>
              <img src="../../../logo/logo.png" alt="" style={{ width: "300px" }} />
            </div>
            <br />
            <div className="form-fields">
              <Form.Item
                name="email"
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
                name="password"
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
              <Link className="forgot-password" href="/forgotPassword">Quên mật khẩu?</Link>
            </div>
            <Button type="primary" htmlType="submit" block className="login-button" style={{ height: '50px', marginTop: "20px" }}>
              Đăng nhập
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
