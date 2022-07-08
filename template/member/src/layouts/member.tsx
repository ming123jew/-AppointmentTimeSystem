import { Layout } from 'antd';
import React from 'react';
const { Header, Footer, Sider, Content } = Layout;
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom';

const MemberLayout = () => {

  return (
    <Layout>
    <Header>Header2</Header>
    <Content><Outlet /></Content>
    <Footer>Footer2</Footer>
    </Layout>
  )
}

export default MemberLayout