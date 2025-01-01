'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const ExchangePolicy: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        <Typography>
          {/* Header */}
          <Title level={2}>Chính sách đổi trả - ThinkPro</Title>
          <Divider />

          {/* Section I: Chính sách đổi trả laptop chính hãng */}
          <Title level={3}>I. Chính sách đổi trả laptop chính hãng</Title>
          <Paragraph>
            <b>30 ngày đầu kể từ thời điểm nhận máy:</b> Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất, ThinkPro sẽ hỗ trợ:
          </Paragraph>
          <Paragraph>
            • <b>1 đổi 1</b> sản phẩm mới với cùng tùy chọn màu và cấu hình. Nếu không còn hàng, Quý Khách hàng có thể đổi sang sản phẩm tương đương giá trị hoặc giá cao hơn (bù chi phí chênh lệch).
          </Paragraph>
          <Paragraph>
            • <b>Hoàn tiền</b>: ThinkPro kiểm tra tình trạng máy và thông báo giá trị thu lại trực tiếp.
          </Paragraph>
          <Paragraph>
            <b>Điều kiện:</b> Sản phẩm phải giữ nguyên 100% ngoại hình ban đầu, đầy đủ hộp, giấy tờ và thỏa mãn điều kiện bảo hành.
          </Paragraph>
          <Paragraph>
            <b>Trường hợp không lỗi:</b> Quý Khách hàng muốn trả lại/đổi sản phẩm, ThinkPro sẽ thông báo chi phí thu lại/đổi sang sản phẩm mới sau khi kiểm tra tình trạng.
          </Paragraph>

          <Paragraph>
            <b>30 ngày đầu:</b> Sản phẩm có lỗi do người sử dụng sẽ không được hỗ trợ đổi trả, chỉ hỗ trợ sửa chữa/thay thế linh kiện có tính phí.
          </Paragraph>

          {/* Section II: Chính sách đổi trả laptop nhập khẩu */}
          <Title level={3}>II. Chính sách đổi trả laptop nhập khẩu</Title>
          <Paragraph>
            <b>15 ngày đầu kể từ thời điểm nhận máy:</b> Sản phẩm lỗi do nhà sản xuất sẽ được hỗ trợ đổi mới hoặc hoàn tiền 100% nếu không còn hàng.
          </Paragraph>
          <Paragraph>
            <b>Điều kiện:</b> Sản phẩm phải giữ nguyên 100% ngoại hình ban đầu, đầy đủ hộp, giấy tờ liên quan.
          </Paragraph>
          <Paragraph>
            <b>Không lỗi:</b> ThinkPro sẽ thông báo trực tiếp về chi phí đổi sản phẩm.
          </Paragraph>
          <Paragraph>
            <b>Sau 15 ngày đầu:</b> ThinkPro hỗ trợ bảo hành sửa chữa tại Trung tâm Bảo hành hợp lệ, không áp dụng đổi trả cho các trường hợp không lỗi.
          </Paragraph>

          {/* Section III: Chính sách đổi trả phụ kiện */}
          <Title level={3}>III. Chính sách đổi trả phụ kiện</Title>
          <Paragraph>
            <b>15 ngày đầu:</b> Miễn phí đổi trả nếu sản phẩm gặp lỗi. Sau 15 ngày, ThinkPro áp dụng bảo hành theo chính sách của hãng.
          </Paragraph>
          <Paragraph>
            <b>Trường hợp lỗi phần mềm:</b> Không áp dụng đổi mới, ThinkPro sẽ hỗ trợ xử lý lỗi phần mềm miễn phí.
          </Paragraph>
          <Paragraph>
            <b>Đổi sản phẩm nguyên kiện:</b> Quý Khách hàng trả thêm phí tương đương 20% giá trị hóa đơn.
          </Paragraph>

          {/* Section IV: Chính sách hoàn tiền */}
          <Title level={3}>IV. Chính sách hoàn tiền</Title>
          <Paragraph>
            <b>15 ngày đầu:</b> Hoàn tiền 70% giá trị hóa đơn. Sau 15 ngày, trừ thêm 15% giá trị hóa đơn mỗi tháng.
          </Paragraph>
          <Paragraph>
            <b>Điều kiện:</b> Sản phẩm phải giữ nguyên ngoại hình ban đầu, đầy đủ hộp và phụ kiện.
          </Paragraph>
          <Paragraph>
            <b>Hàng khuyến mãi:</b> Nếu thất lạc, ThinkPro sẽ tính phí theo giá niêm yết.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default ExchangePolicy;
