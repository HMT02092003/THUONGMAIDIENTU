'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const InspectionPolicy: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
                <Typography>
                    {/* Header */}
                    <Title level={2}>Chính sách kiểm hàng - ThinkPro</Title>

                    <Divider />

                    {/* Nội dung chính sách kiểm hàng */}
                    <Title level={3}>Thời điểm kiểm hàng</Title>
                    <Paragraph>
                        ThinkPro chấp nhận cho khách hàng đồng kiểm với nhân viên giao hàng tại thời điểm nhận hàng. Không hỗ trợ thử hàng.
                    </Paragraph>
                    <Paragraph>
                        Sau khi nhận hàng, khách hàng kiểm lại phát hiện sai có thể liên lạc với bộ phận chăm sóc khách hàng để được hỗ trợ đổi trả.
                    </Paragraph>
                    <Paragraph>
                        <strong>Lưu ý:</strong> Quý khách vui lòng quay video lúc mở hàng để đối chiếu khi cần thiết.
                    </Paragraph>

                    <Title level={3}>Phạm vi kiểm tra hàng hóa</Title>
                    <Paragraph>
                        Khách hàng được kiểm tra các sản phẩm thực nhận, đối chiếu, so sánh các sản phẩm nhận được với sản phẩm đã đặt trên đơn sau khi nhân viên ThinkPro xác nhận đơn hàng theo các tiêu chí: ảnh mẫu, mã sản phẩm, kích thước, màu sắc, chất liệu, v.v.
                    </Paragraph>
                    <Paragraph>
                        Khi kiểm tra hàng hóa, khách hàng chỉ kiểm tra bên ngoài chứ không mở lên sử dụng.
                    </Paragraph>
                    <Paragraph>
                        Tuyệt đối không bóc, mở các hộp sản phẩm có tem niêm phong, tem đảm bảo.
                    </Paragraph>
                    <Paragraph>
                        Không được cào lấy mã các sản phẩm có tích điểm, đổi quà.
                    </Paragraph>
                    <Paragraph>
                        <strong>Lưu ý:</strong> Với những sản phẩm nguyên seal sẽ phải thanh toán với Shipper (nếu có COD) mới được bóc mở.
                    </Paragraph>

                    <Title level={3}>Các bước xử lý khi hàng hóa nhận được không như đơn đặt hàng</Title>
                    <Paragraph>
                        Khi quý khách đồng kiểm, sản phẩm nhận được không như sản phẩm khách đặt trên đơn hàng. Xin hãy liên hệ với hotline <strong>1900.63.3579</strong> để được gặp bộ phận chăm sóc khách hàng xác nhận lại đơn hàng.
                    </Paragraph>
                    <Paragraph>
                        <strong>Trường hợp ThinkPro đóng sai đơn hàng:</strong> Khách có thể không nhận hàng, không thanh toán. Trong trường hợp đơn hàng đã thanh toán, khách hàng có thể yêu cầu gửi lại đơn mới hoặc không, ThinkPro sẽ hoàn lại tiền cho quý khách trong thời gian sớm nhất.
                    </Paragraph>
                    <Paragraph>
                        <strong>Trường hợp ThinkPro đóng hàng đúng theo đơn hàng:</strong> Nhưng khách hàng thay đổi nhu cầu, khách hàng có thể yêu cầu đổi trả và áp dụng chính sách đổi trả hàng hóa. Trường hợp này khách hàng sẽ phải thanh toán chi phí giao hàng (nếu có).
                    </Paragraph>

                    <Title level={3}>Các kênh thông tin tiếp nhận khiếu nại của khách hàng</Title>
                    <Paragraph>
                        <strong>Hotline:</strong> 1900.63.3579
                    </Paragraph>
                    <Paragraph>
                        <strong>Fanpage:</strong> ThinkPro - Hệ thống máy tính và Phụ kiện
                    </Paragraph>
                    <Paragraph>
                        <strong>Group Telegram:</strong> ThinkPro Community
                    </Paragraph>
                    <Paragraph>
                        <strong>Zalo:</strong> ThinkPro
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default InspectionPolicy;
