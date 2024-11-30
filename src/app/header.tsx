import React from 'react'
import { Flex } from 'antd';
import { ConfigProvider, Input, Button, Space, Row, Col, Carousel } from 'antd';
const { Search } = Input;
import {
  EnvironmentOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';



const HeaderPage = () => {
  const router = useRouter();
  
  return (
    <>
      <Row style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <Row style={{ display: "flex", height: "80px", alignItems: "center" }}>
          <Col span={2}><img src="/logo/logo.png" alt="" style={{ flexShrink: '0', height: '2.5rem', width:"80px" }} /></Col>
          <Col span={7}><ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: '#f5f5f5',
                  colorBorder: '#f5f5f5',
                }
              }
            }}>
            <Search size='large' placeholder="input search text" allowClear style={{ width: 350  }} />
          </ConfigProvider>
          </Col>
          <Col span={3}><ConfigProvider
            theme={{
              components: {
                Button: {
                  colorBorder: 'transparent',
                  defaultHoverBorderColor: 'transparent',
                  defaultHoverColor: 'black',
                  defaultShadow: '0',
                  defaultHoverBg: '#f5f5f5'
                }
              }
            }}>
            <Button style={{ marginLeft: '30px' }}><img src="/icon/phone-call.png" alt="" style={{ width: 18 }} />1900.63.3579</Button>
          </ConfigProvider>
          </Col>
          <Col span={3}><ConfigProvider
            theme={{
              components: {
                Button: {
                  colorBorder: 'transparent',
                  defaultHoverBorderColor: 'transparent',
                  defaultHoverColor: 'black',
                  defaultShadow: '0',
                  defaultHoverBg: '#f5f5f5'
                }
              }
            }}>
            <Button style={{ marginLeft: '20px' }}><img src="/icon/gps.png" alt="" style={{ width: 25 }} />Địa chỉ cửa hàng</Button>
          </ConfigProvider>
          </Col>
          <Col span={3}><ConfigProvider
            theme={{
              components: {
                Button: {
                  colorBorder: 'transparent',
                  defaultHoverBorderColor: 'transparent',
                  defaultHoverColor: 'black',
                  defaultShadow: '0',
                  defaultHoverBg: '#f5f5f5'
                }
              }
            }}>
            <Button style={{ marginLeft: '40px' }}><img src="/icon/online-support.png" alt="" style={{ width: 21 }} />Khiếu nại</Button>
          </ConfigProvider>
          </Col>
          <Col span={3}><ConfigProvider
            theme={{
              components: {
                Button: {
                  colorBorder: 'transparent',
                  defaultHoverBorderColor: 'transparent',
                  defaultHoverColor: 'black',
                  defaultShadow: '0',
                  defaultHoverBg: '#f5f5f5'
                }
              }
            }}>
            <Button style={{ marginLeft: '20px' }}><img src="/icon/news.png" alt="" style={{ width: 18 }} />Tin công nghệ</Button>
          </ConfigProvider>
          </Col>
          <Col span={2} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' shape='circle' size='large' variant='filled' style={{ marginRight: '10px' }}><img src="/icon/user.png" alt="" style={{ width: 15 }} /></Button>
          </Col>
          <Col span={1} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' shape='circle' size='large' variant='filled' onClick={()=>{router.push('/shoppingCart')}}><img src="/icon/grocery-store.png" alt="" style={{ width: 17 }} /></Button>
          </Col>
        </Row>
      </Row>
      <Row style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: '2px' }}>
        <Row style={{ paddingTop: '10px', paddingBottom: '10px', display: "flex", height: "80px", alignItems: "center" }}>
          <Col style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button color='default' variant='text' style={{ height: '60px' }}><img src="\icon\options-lines.png" alt="" style={{ width: 17 }} />Danh Mục</Button>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </>
  )
}

export default HeaderPage