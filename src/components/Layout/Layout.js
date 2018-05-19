import React from 'react';
import { Layout, Row, Col } from 'antd';

import Header from '../Header';
import Sidebar from '../Sidebar';

const { Content, Footer, Sider } = Layout;

const SiderDemo = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <Layout>
      <Header />
      <Content style={{ margin: '0 16px' }}>
        <Row gutter={8}>
          <Col span={16}>Main Content</Col>
          <Col span={8}>Right Bar</Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default SiderDemo;
