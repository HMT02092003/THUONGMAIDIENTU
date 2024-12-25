'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const ShippingPolicy: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        <Typography>
          {/* Header */}
          <Title level={2}>Chính sách vận chuyển - ThinkPro</Title>
          <Divider />

          {/* Section I: Chính sách vận chuyển và giao nhận */}
          <Title level={3}>Chính sách vận chuyển và giao nhận</Title>
          <Paragraph>
            ThinkPro hỗ trợ vận chuyển toàn quốc dưới 2 hình thức:
          </Paragraph>
          <Paragraph>
            <b>Giao hàng tận nơi, thanh toán khi nhận hàng (COD)</b>
          </Paragraph>
          <Paragraph>
            Đối với hình thức này, Quý khách sẽ cần thanh toán 100% phí vận chuyển phát sinh trong quá trình vận chuyển (Sẽ có thông báo trước khi gửi hàng) và thực hiện đặt cọc trước cho đơn hàng như sau:
          </Paragraph>
          <Paragraph>
            • Đối với đơn hàng dưới 10.000.000đ: Quý khách không cần đặt cọc
          </Paragraph>
          <Paragraph>
            • Đối với đơn hàng từ 10.000.000đ trở lên: Quý khách sẽ cần đặt cọc theo hướng dẫn ở bước Thanh toán nếu đặt trên website hoặc theo hướng dẫn của Chuyên viên bán hàng nếu mua trực tiếp.
          </Paragraph>
          <Paragraph>
            ThinkPro sẽ hỗ trợ Quý khách phí thu hộ và bảo hiểm đơn hàng.
          </Paragraph>
          <Paragraph>
            ThinkPro có trách nhiệm hỗ trợ Quý khách trong toàn bộ quá trình vận chuyển cho tới khi Quý khách hàng nhận sản phẩm.
          </Paragraph>
          <Paragraph>
            <b>Giao hàng tận nơi, thanh toán trước 100%</b>
          </Paragraph>
          <Paragraph>
            Đối với hình thức này, Quý khách sẽ được miễn phí vận chuyển phát sinh trong quá trình giao hàng.
          </Paragraph>
          <Paragraph>
            Quý khách vui lòng thanh toán trước 100% giá trị đơn hàng.
          </Paragraph>
          <Paragraph>
            ThinkPro sẽ hỗ trợ Quý khách phí bảo hiểm đơn hàng.
          </Paragraph>
          <Paragraph>
            ThinkPro có trách nhiệm hỗ trợ Quý khách trong toàn bộ quá trình vận chuyển cho tới khi Quý khách hàng nhận sản phẩm.
          </Paragraph>

          {/* Section II: Đối tác vận chuyển */}
          <Title level={3}>Đối tác vận chuyển</Title>
          <Paragraph>
            <b>Qua đơn vị chuyển phát</b>
          </Paragraph>
          <Paragraph>
            ThinkPro hỗ trợ gửi hàng qua các đơn vị chuyển phát uy tín hàng đầu như: VNPost, Viettel Post, Nhất Tín Logistics, … ThinkPro chịu trách nhiệm tới khi sản phẩm tới tay Quý Khách (Quý khách vui lòng kiểm tra sản phẩm khi nhận hàng).
          </Paragraph>
          <Paragraph>
            Trong trường hợp sản phẩm bị rơi vỡ, móp méo, trầy xước hoặc sản phẩm không đúng như thông tin ban đầu mà ThinkPro cung cấp tới Quý khách, Quý khách vui lòng không nhận hàng và thông báo lại với ThinkPro. ThinkPro sẽ có trách nhiệm giải quyết với bên vận chuyển để không ảnh hưởng tới quyền lợi của Khách hàng. Trường hợp sau khi đã nhận hàng mà sản phẩm có phát sinh những vấn đề trên (rơi vỡ, móp méo, trầy xước… hoặc tác động vật lý từ môi trường) ThinkPro sẽ không thể hỗ trợ Quý khách xử lý.
          </Paragraph>
          <Paragraph>
            <b>Nhà xe</b>
          </Paragraph>
          <Paragraph>
            ThinkPro không hỗ trợ vận chuyển qua nhà xe, trong trường hợp Quý khách yêu cầu vận chuyển qua nhà xe thì nhà xe phải do Quý khách chỉ định. Trong trường hợp phát sinh vấn đề trong quá trình vận chuyển, ThinkPro không hỗ trợ xử lý.
          </Paragraph>

          {/* Section III: Ship nội thành Hà Nội và Hồ Chí Minh */}
          <Title level={3}>Ship nội thành Hà Nội và Hồ Chí Minh</Title>
          <Paragraph>
            ThinkPro hỗ trợ vận chuyển nội thành Hà Nội và TP Hồ Chí Minh hoàn toàn miễn phí nếu khách hàng thanh toán trước giá trị đơn hàng.
          </Paragraph>
          <Paragraph>
            <b>Ship ngoại thành Hà Nội và TP Hồ Chí Minh:</b> Nếu Quý khách thanh toán trước 100% sẽ được hỗ trợ miễn phí toàn bộ chi phí vận chuyển. Đối với các đơn hàng ở khu vực ngoại thành Hà Nội và TP Hồ Chí Minh, ThinkPro hỗ trợ Quý khách giao hàng tại nhà có tính phí (5.000đ/1km).
          </Paragraph>

          {/* Section IV: Thời gian vận chuyển */}
          <Title level={3}>Thời gian vận chuyển</Title>
          <Paragraph>
            <b>Đối với các đơn hàng nội thành Hà Nội và TP Hồ Chí Minh:</b> ThinkPro hỗ trợ giao hàng trong vòng 1-4 giờ với những sản phẩm đang có sẵn hàng tại cửa hàng. Đối với những sản phẩm không sẵn hàng/không sẵn tại khu vực Quý khách cần giao hàng, ThinkPro sẽ có thông báo tới Quý khách về thời gian giao hàng cụ thể.
          </Paragraph>
          <Paragraph>
            <b>Đối với các đơn hàng ở các tỉnh:</b> ThinkPro giao hàng thông qua các đơn vị vận chuyển trên toàn quốc. Thời gian giao hàng thông thường từ 1-4 ngày tùy theo khu vực. Trong dịp lễ/tết, thời gian vận chuyển có thể bị trì hoãn, ThinkPro sẽ thông báo cụ thể tới Quý khách sau khi gửi hàng.
          </Paragraph>
          <Paragraph>
            <b>Đối với các đơn hàng ngoại thành Hà Nội và TP Hồ Chí Minh:</b> Với những đơn hàng nằm ngoài khu vực nội thành, ThinkPro hỗ trợ giao hàng trong ngày nếu Quý khách đặt trước 12h00 sáng. Đối với những đơn hàng đặt sau thời gian này, ThinkPro sẽ chủ động liên hệ và hẹn lịch giao hàng cụ thể tới Quý khách hàng.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default ShippingPolicy;
