'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        <Typography>
          {/* Header */}
          <Title level={2}>Chính sách bảo mật - ThinkPro</Title>

          <Divider />

          {/* Nội dung chính sách bảo mật */}
          <Paragraph>
            Nhằm đảm bảo an toàn cho website và bảo mật thông tin cho Khách hàng, ThinkPro đưa ra một số chính sách bảo mật thông tin cho Khách hàng (cá nhân & doanh nghiệp) khi mua hàng tại website thinkpro.vn.
          </Paragraph>

          <Paragraph>
            Bảo vệ dữ liệu cá nhân của Khách hàng là vấn đề quan tâm hàng đầu của ThinkPro. Chính sách bảo mật của ThinkPro dành cho Khách hàng là việc thu thập thông tin cũng như tôn trọng quyền riêng tư cá nhân của Khách hàng và tất cả người dùng trên trang web của ThinkPro. ThinkPro sẽ hỗ trợ Khách hàng trước khi đưa ra quyết định liên quan đến cung cấp dữ liệu cá nhân cho chúng tôi.
          </Paragraph>

          <Title level={3}>1. Mục đích thu thập thông tin</Title>
          <Paragraph>
            Việc thu thập thông tin trên website thinkpro.vn sẽ giúp chúng tôi:
          </Paragraph>
          <Paragraph>• Xử lý các vấn đề liên quan tới đơn hàng của Khách hàng, cụ thể: Xác nhận thanh toán và hỗ trợ dịch vụ.</Paragraph>
          <Paragraph>• Cung cấp nhanh chóng tới Khách hàng các thông tin về chương trình Khuyến mãi, cụ thể: Giới thiệu về các sản phẩm, dịch vụ mới của ThinkPro.</Paragraph>
          <Paragraph>• Hỗ trợ giải quyết các vấn đề liên quan tới khiếu nại, góp ý từ phía Khách hàng, cụ thể: Chăm sóc khách hàng.</Paragraph>
          <Paragraph>• Thu thập dữ liệu về hành trình khách hàng (lượt click, số lần xem trang, thời gian ở lại trang,...) nhằm thực hiện các hoạt động nghiên cứu, cải thiện và cung cấp tới Khách hàng trải nghiệm mua hàng tốt nhất.</Paragraph>

          <Title level={3}>2. Phạm vi thu thập thông tin</Title>
          <Paragraph>
            Những thông tin Khách hàng cung cấp sẽ được lưu trữ tại cơ sở dữ liệu của ThinkPro, điều này đồng nghĩa với việc Khách hàng đã hoàn toàn đồng ý và chấp thuận việc thông tin cá nhân Khách hàng cung cấp cho ThinkPro sẽ được lưu trữ lại trên hệ thống.
          </Paragraph>
          <Paragraph>Những thông tin được thu thập bao gồm:</Paragraph>
          <Paragraph>• Họ và tên</Paragraph>
          <Paragraph>• Số điện thoại</Paragraph>
          <Paragraph>• Địa chỉ</Paragraph>
          <Paragraph>• Email</Paragraph>
          <Paragraph>• Thông tin đăng nhập tài khoản (Tên đăng nhập, Mật khẩu đăng nhập)</Paragraph>

          <Title level={3}>3. Phạm vi sử dụng thông tin</Title>
          <Paragraph>
            ThinkPro có thể sử dụng dữ liệu để tùy biến và cải tiến nhằm phục vụ Khách hàng tốt hơn. ThinkPro không sử dụng thông tin của Khách hàng vào mục đích bất hợp pháp. ThinkPro được quyền cung cấp thông tin của Khách hàng cho Bên Thứ Ba trong các trường hợp nhưng không giới hạn:
          </Paragraph>
          <Paragraph>• Được khách hàng chấp thuận.</Paragraph>
          <Paragraph>• Dịch vụ của ThinkPro cung cấp yêu cầu sự tương tác với Bên Thứ Ba hoặc do Bên Thứ Ba cung cấp. Bên Thứ Ba cam kết sẽ bảo mật thông tin cá nhân của Khách hàng.</Paragraph>
          <Paragraph>• Theo yêu cầu của cơ quan có thẩm quyền và theo các quy định của pháp luật.</Paragraph>

          <Title level={3}>4. Cam kết bảo mật thông tin cá nhân khách hàng</Title>
          <Paragraph>
            Những rủi ro liên quan đến vấn đề cung cấp dữ liệu cá nhân (dù là cung cấp trực tiếp, qua điện thoại, qua mạng internet hay qua các phương tiện kỹ thuật khác) và không có hệ thống kỹ thuật nào an toàn tuyệt đối hay chống được tất cả các “hacker” và “tamper” (người xâm nhập trái phép để lục lọi thông tin). ThinkPro luôn nỗ lực tiến hành những biện pháp an ninh thích hợp đối với từng đặc tính của thông tin để ngăn chặn và giảm thiểu tối đa các rủi ro có thể khi Khách hàng sử dụng hệ thống ThinkPro.
          </Paragraph>
          <Paragraph>
            Tuy nhiên, có thể có những nhân tố vượt ngoài tầm kiểm soát của ThinkPro dẫn đến việc dữ liệu bị tiết lộ. Vì vậy, ThinkPro không chịu trách nhiệm bảo đảm dữ liệu luôn được duy trì ở tình trạng hoàn hảo hoặc không bị tiết lộ.
          </Paragraph>
          <Paragraph>
            Mọi thông tin cá nhân của Khách hàng sẽ được ThinkPro bảo mật, không tiết lộ ra ngoài. ThinkPro không bán hay trao đổi những thông tin này với bất kỳ một Bên Thứ Ba nào khác, trừ trường hợp được quy định trong Điều khoản Dịch vụ này.
          </Paragraph>
          <Paragraph>
            Trong quá trình sử dụng dịch vụ, Khách hàng đồng ý nhận tất cả thông báo từ ThinkPro liên quan tới dịch vụ qua thư điện tử hoặc điện thoại của Khách hàng.
          </Paragraph>
          <Paragraph>
            Các đường liên kết ngoài trang web của ThinkPro: trang web của ThinkPro có thể chứa các đường liên kết đến các trang web khác được đặt vào nhằm mục đích giới thiệu hoặc bổ sung thông tin liên quan để Khách hàng tham khảo. ThinkPro không chịu trách nhiệm về nội dung hay các hành vi của bất kỳ trang web nào khác.
          </Paragraph>

          <Title level={3}>5. Đơn vị thu thập và quản lý thông tin cá nhân</Title>
          <Paragraph>Công ty TNHH Công nghệ Think Việt Nam</Paragraph>
          <Paragraph>GPĐKKD: 0107273909 do sở KH&ĐT TP Hà Nội cấp ngày 09/03/2020</Paragraph>
          <Paragraph>Địa chỉ: 105/562 Đường Láng, Phường Láng Hạ, Quận Đống Đa, Hà Nội</Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
