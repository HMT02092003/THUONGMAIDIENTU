'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const PolicyPayment: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
                <Typography>
                    {/* Header */}
                    <Title level={2}>Chính sách thanh toán - ThinkPro</Title>

                    <Divider />

                    {/* Nội dung chính sách thanh toán */}
                    <Title level={3}>I. Thanh toán tiền mặt</Title>
                    <Paragraph>
                        <strong>Tại cửa hàng:</strong>
                        Quý khách có thể đến mua hàng và thanh toán trực tiếp tại các chuỗi cửa hàng thuộc hệ thống ThinkPro.
                    </Paragraph>
                    <Paragraph>
                        <strong>Tại địa chỉ giao nhận hàng:</strong>
                        Thanh toán cho nhân viên giao hàng trực tiếp của ThinkPro.
                    </Paragraph>

                    <Title level={3}>II. Thanh toán trực tuyến trên thinkpro.vn</Title>
                    <Paragraph>
                        <strong>Các phương thức thanh toán</strong>
                    </Paragraph>
                    <Paragraph>
                        <strong>Thanh toán qua thẻ ATM nội địa:</strong>
                        ThinkPro hỗ trợ mua hàng bằng thẻ ATM nội địa của 40 ngân hàng trong nước kết nối với cổng thanh toán VNPT EPAY. Hình thức thanh toán đơn giản, dễ sử dụng, trực quan và an toàn chỉ trong ba bước:
                    </Paragraph>
                    <Paragraph>Bước 1: Nhập thông tin thẻ.</Paragraph>
                    <Paragraph>Bước 2: Xác thực khách hàng.</Paragraph>
                    <Paragraph>Bước 3: Thanh toán và nhận ngay kết quả.</Paragraph>
                    <Paragraph>
                        Ngoài ra, để thanh toán bằng thẻ ngân hàng nội địa, thẻ của Quý khách phải được đăng ký sử dụng tính năng thanh toán trực tuyến, hoặc ngân hàng điện tử của Ngân hàng.
                    </Paragraph>
                    <Paragraph>
                        Giao dịch được ghi nhận là thành công khi bạn nhận được thông báo từ hệ thống cổng thanh toán trả về trạng thái “Giao dịch thành công”.
                    </Paragraph>
                    <Paragraph>
                        <strong>Thanh toán qua thẻ Visa/ Master/ JCB/ American Express/ Union Pay:</strong>
                        Sau khi chọn hình thức thanh toán qua thẻ Visa/ Master/ JCB/ American Express/ Union Pay, hệ thống chuyển sang giao diện thanh toán của VNPT EPAY. Quý khách sẽ tiến hành điền các thông tin theo hướng dẫn để hoàn tất việc đặt hàng.
                    </Paragraph>
                    <Paragraph>
                        <strong>Thanh toán trực tuyến qua Cổng thanh toán VNPAY-QR:</strong>
                        Sau khi Quý khách lựa chọn hình thức thanh toán qua VNPAY QR, hệ thống sẽ chuyển sang giao diện thanh toán của VNPT EPAY. Quý khách tiến hành mở App ngân hàng, quét mã QR trên để hoàn tất việc đặt hàng.
                    </Paragraph>

                    <Title level={3}>III. Thanh toán quẹt thẻ ATM, Visa, MasterCard</Title>
                    <Paragraph>
                        <strong>Tại cửa hàng:</strong>
                        Cà thẻ trực tiếp tại các chuỗi cửa hàng thuộc hệ thống ThinkPro. Tất cả hệ thống cửa hàng ThinkPro đều hỗ trợ quẹt thẻ ATM, Visa, MasterCard.
                    </Paragraph>
                    <Paragraph>
                        <strong>Tại nhà/ nơi nhận hàng:</strong>
                        Quý khách vui lòng yêu cầu trước để Chuyên viên bán hàng đem theo máy hỗ trợ thanh toán và quẹt thẻ.
                    </Paragraph>

                    <Title level={3}>IV. Quy định về thời gian hoàn trả tiền</Title>
                    <Paragraph>
                        <strong>Thẻ ATM nội địa:</strong>
                        Thời gian hoàn tiền: 7 - 10 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph>
                        <strong>Thẻ tín dụng:</strong>
                        Thời gian hoàn tiền: 7 - 15 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph>
                        <strong>VNPAY-QR:</strong>
                        Thời gian hoàn tiền: 5 - 7 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph>
                        ThinkPro sẽ hỗ trợ liên hệ ngân hàng giải quyết nếu Khách hàng không nhận được tiền trong thời gian quy định.
                    </Paragraph>

                    <Paragraph>
                        Nếu Quý khách có bất kỳ câu hỏi nào về chính sách thanh toán, vui lòng liên hệ ThinkPro để được hỗ trợ.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default PolicyPayment;
