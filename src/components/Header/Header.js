import React from 'react';
import { Layout, Icon, Avatar, Row, Col, Badge } from 'antd';

const { Header } = Layout;

const MainHeader = () => (
  <Header style={{ background: '#fff', padding: 0 }}>
    <div>
      <Row gutter={16} type="flex" justify="center">
        <Col span={6} style={{ padding: 5 }}>Therapsy</Col>
        <Col span={6}><Avatar size="large" icon="user" /> Bienvenido</Col>
        <Col span={6}>
          <Badge count={5}>
            <Icon type="bell" style={{ fontSize: 20 }} />
          </Badge>
        </Col>
      </Row>
    </div>
  </Header>
);

export default MainHeader;
