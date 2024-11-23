// src/components/layout/MainLayout.tsx
"use client";

import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import HeaderPage from './header';
import FooterPage from './footer';

const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (

        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#1890ff', color: 'white', display: 'flex', alignItems: 'center' }}>
                <HeaderPage />
            </Header>

            <Layout>
                <Layout style={{ padding: '24px' }}>
                    <Content style={{ background: '#fff', padding: 24 }}>
                        {/* phàn tử con render sau layout */}
                        {children}
                        {/* phàn tử con render sau layout */}
                    </Content>
                </Layout>
            </Layout>

            <Footer style={{ textAlign: 'center' }}>
                <FooterPage />
            </Footer>
        </Layout>
    );
};

export default MainLayout;
