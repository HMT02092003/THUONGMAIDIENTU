import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


const PaymentSuccess: React.FC = () => {
    const router = useRouter();
    const handleBackHome = () => {
        router.push('/home');
    };

    const handleViewOrders = () => {
        window.location.href = '/orders';
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Result
                status="success"
                title="Thanh toán thành công!"
                subTitle="Cảm ơn bạn đã mua hàng. Chúng tôi đã nhận được thanh toán của bạn."
                icon={<SmileOutlined />}
                extra={[
                    <Button type="primary" key="home" onClick={handleBackHome}>
                        Quay lại trang chủ
                    </Button>,
                    <Button key="orders" onClick={handleViewOrders}>
                        Xem lịch sử đơn hàng
                    </Button>,
                ]}
            />
        </div>
    );
};

export default PaymentSuccess;
