"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form, message } from "antd";
import "@/src/cssfolder/RegisterPage.css";
import axios from "axios";
import router from "@/api";
import { useRouter } from "next/navigation";

const { Title, Text, Link } = Typography;

const Register = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        try {
            const sendDataa = await axios.post("http://localhost:4000/api/register", values);
            message.success("Đăng ký thành công");
            router.push("/login");
        } catch (err: any) {
            console.log(err);
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
                        src="/logo/undraw_podcast_re_wr88.svg"
                        alt="Illustration"
                        className="illustration-image"
                        style={{ width: 700 }}
                    />
                </Col>

                <Col span={10} className="login-form">
                    <Form
                        className="form-content"
                        onFinish={onFinish}
                    >
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <img src="../../../logo/logo.png" alt="" style={{ width: "150px" }} />
                        </div>
                        <br />
                        <div className="form-fields">
                            <Form.Item
                                name="name"
                                label="Họ và tên"
                                labelCol={{ span: 24 }}
                            >
                                <Input
                                    placeholder="Họ và tên"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>

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
                                label="Mât khẩu"
                                labelCol={{ span: 24 }}
                            >
                                <Input.Password
                                    placeholder="Mật khẩu"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="rePassword"
                                label="Nhập lại mật khẩu"
                                labelCol={{ span: 24 }}
                            >
                                <Input.Password
                                    placeholder="Nhập lại mật khẩu"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>
                        </div>
                        <Button type="primary" htmlType="submit" block className="login-button" style={{ height: '50px', marginTop: "20px" }}>
                            Đăng ký
                        </Button>
                        <div className="register-link">
                            <Text style={{ fontSize: "15px" }}>
                                Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
                            </Text>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;
