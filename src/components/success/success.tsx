import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/src/cssfolder/PaymentSuccess.css';  // Import the CSS file

const PaymentSuccess: React.FC = () => {
  const router = useRouter();
  
  const handleBackHome = () => {
    router.push('/home');
  };

  const handleViewOrders = () => {
    window.location.href = '/orders';
  };

  return (
    <div className="payment-success-container">
      <Result
        className="payment-success-result"
        status="success"
        title="Thanh toán thành công!"
        subTitle="Cảm ơn bạn đã mua hàng. Chúng tôi đã nhận được thanh toán của bạn."
        icon={<SmileOutlined />}
        extra={[
          <Button 
            type="primary" 
            key="home" 
            onClick={handleBackHome} 
            className="payment-success-button"
          >
            Quay lại trang chủ
          </Button>,
          <Button 
            key="orders" 
            onClick={handleViewOrders} 
            className="payment-success-button"
          >
            Xem lịch sử đơn hàng
          </Button>,
        ]}
      />
    </div>
  );
};

export default PaymentSuccess;
