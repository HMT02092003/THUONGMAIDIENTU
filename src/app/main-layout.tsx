"use client";

import React from 'react';
import { Layout, Menu } from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';

const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    React.useEffect(() => {
        document.body.style.margin = '0';
      }, []);
      
    return (
        <Layout style={{ margin: 0, minHeight: '100vh' }}>
            <Header style={{backgroundColor:"white"}}>
                <HeaderPage />
            </Header>

            <Layout>
                <Content >
                    {/* phàn tử con render sau layout */}
                    {children}
                    {/* phàn tử con render sau layout */}
                </Content>
            </Layout>

            <Footer style={{ textAlign: 'center' }}>
                <FooterPage />
            </Footer>
        </Layout>
    );
};

export default MainLayout;
