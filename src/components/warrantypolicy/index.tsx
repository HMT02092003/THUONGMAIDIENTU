'use client';

import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const WarrantyPolicy: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: 2000, width: '100%', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        <Typography>
          {/* Header */}
          <Title level={2}>Chính sách bảo hành - ThinkPro</Title>

          <Divider />

          {/* Section 1: Bảo hành laptop */}
          <Title level={3}>Bảo hành laptop</Title>
          <Paragraph>
            Tất cả các sản phẩm do ThinkPro bán ra đều được bảo hành theo điều kiện bảo hành của hãng cung cấp. Hàng
            sản xuất, các thiết bị ngoại vi, quà tặng đi kèm sản phẩm đều không được bảo hành.
          </Paragraph>
          <Paragraph>
            • Sản phẩm bị hư hỏng do quá trình sử dụng (Gồm hao mòn ổ đĩa SSD, màn hình điểm, hỏng tác động bên trong
            hoặc bên ngoài...).
          </Paragraph>
          <Paragraph>• Các phần mềm bản quyền cài đặt theo máy.</Paragraph>
          <Paragraph>
            • Sản phẩm hết thời hạn bảo hành hoặc tem bảo hành sản phẩm được ghi trên màn hình theo serial của sản
            phẩm có trên website thinkpro.vn.
          </Paragraph>
          <Paragraph>
            • Không có tem bảo hành của Công ty/hãng phân phối/siêu âm xuất hoặc có nhưng tem bảo hành đã không hợp lệ
            do bị rách, bị mờ, bị dán đè hoặc có dấu hiệu tháo gỡ.
          </Paragraph>
          <Paragraph>
            • Số serial máy, vỏ sản phẩm hoặc linh kiện sản phẩm không hợp lệ (bị mờ hoặc đục mất, bị rách, bị tẩy xóa,
            bị thay đổi, bị đánh tráo...).
          </Paragraph>
          <Paragraph>
            • Sản phẩm bị hư do nguyên nhân bất khả kháng (lũ lụt, hỏa hoạn, ngoại lực, điện năng bất thường, sai điện
            áp quy định...).
          </Paragraph>
          <Paragraph>
            • Hư hỏng, mất dữ liệu: hệ điều hành và dữ liệu bị virus, do vận chuyển/cài đặt sai quy cách, linh kiện bị
            hư do khách hàng tự ý tháo lắp, thay đổi cấu trúc sản phẩm hoặc sửa chữa không đúng kỹ thuật.
          </Paragraph>
          <Paragraph>• Chúng tôi từ chối bảo hành sản phẩm đã can thiệp hoặc bị từ chối bảo hành từ ủy quyền của ThinkPro.</Paragraph>

          {/* Section 2: Bảo hành phụ kiện */}
          <Title level={3}>Bảo hành phụ kiện</Title>
          <Paragraph>
            • Bảo hành 1 năm (1 đổi 1 với các thiết bị như USB, Chuột, Cáp, Sạc, Sạc dự phòng, Bàn phím, Đế tản nhiệt,
            Tai nghe trừ các phụ kiện hãng như Apple, Thiết bị mạng, phần mềm, các phụ kiện không dây).
          </Paragraph>
          <Paragraph>• Bảo hành 1 năm (không đổi mới) đối với phụ kiện hãng chính hãng Apple.</Paragraph>
          <Paragraph>• Không bảo hành đối với Bàn di chuột, Vỏ ốp, Túi xách, Tai chống ồn, Tai chống nước, Tay cầm chơi game.</Paragraph>

          {/* Section 3: Thời gian nhận bảo hành */}
          <Title level={3}>Thời gian nhận bảo hành và trả bảo hành</Title>
          <Paragraph>
            Thời gian tiếp nhận bảo hành: Từ 8h00-12h00 và 14h00-18h00 tất cả các ngày trong tuần, từ Thứ Hai đến Chủ
            nhật.
          </Paragraph>
          <Paragraph>
            Thời gian trả bảo hành: Từ 8h00-12h00 và 14h00-18h00 tất cả các ngày trong tuần từ Thứ Hai đến Chủ nhật.
          </Paragraph>
          <Paragraph>
            • Thời gian trả bảo hành: Trong thời gian bảo hành sản phẩm cần được gửi đi hãng sản xuất hoặc đại lý bảo
            hành chính hãng nên thời gian trả bảo hành có thể kéo dài sớm hoặc lâu hơn tùy thuộc vào tình trạng bảo
            hành của hãng.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
