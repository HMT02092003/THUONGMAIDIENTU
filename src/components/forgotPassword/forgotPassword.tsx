
"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form, message } from "antd";
import "./ForgotPassword.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SendOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Title, Text, Link } = Typography;

const ForgotPassword = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const [step, setStep] = useState<'email' | 'otp' | 'newPassword'>('email');
    const [countdown, setCountdown] = useState<number>(0);

    // const sendOTPMutation: any = trpc.sendOTP.useMutation();

    const handleSendOTP = async () => {
        try {
            const email = form.getFieldsValue();

            const sendLink = await axios.post("http://localhost:4000/api/forgot-password",  email );
            console.log("sendLink", sendLink);
            // Gọi mutation sendOTP
            // await sendOTPMutation.mutateAsync({ email });
            message.success('Link dổi mật khẩu đã được gửi đến email của bạn');
            setStep('otp');
            setCountdown(30); // Bắt đầu đếm ngược 60 giây
        } catch (error:any) {
            message.error(error.response.data.error);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

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
                    <Form
                        className="form-content"
                        form={form}
                    >
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <img src="../../../logo/logo.png" alt="" style={{ width: "300px" }} />
                        </div>
                        <br />
                        <div className="form-fields">
                            <Form.Item
                                name="email"
                                label="Email"
                                labelCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
                            >
                                <Input
                                    placeholder="Email"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>
                        </div>

                        <Row>
                            <Col md={12} style={{ padding: "0 5px" }}>
                                <Form.Item>
                                    <Button onClick={() => { router.push('/login') }}
                                        style={{
                                            backgroundColor: "#8c8c8c",
                                            width: "100%",
                                            height: "50px",
                                            color: "white",
                                        }}>
                                        <LeftCircleOutlined />Trở lại
                                    </Button>
                                </Form.Item>
                            </Col>

                            <Col md={12} style={{ padding: "0 5px" }}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        onClick={handleSendOTP}
                                        disabled={countdown > 0}
                                        style={{
                                            height: "50px",
                                            backgroundColor: "#69b1ff",
                                            width: "100%",
                                        }}
                                    >
                                        {countdown > 0 ? <div style={{ width: "100%", color: "white", textAlign: "center" }}>{`${countdown}s`}</div>
                                            :
                                            <><div style={{ width: "100%", color: "white", textAlign: "center" }}><SendOutlined /> Gửi link đổi mật khẩu</div></>}
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ForgotPassword;

