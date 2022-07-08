import { Layout } from 'antd';
import React from 'react';
const { Header, Footer, Sider, Content } = Layout;
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom';

const CommondLayout = () => {

  return (
    <Layout>
    <Header>Header</Header>
    <Content><Outlet /></Content>
    <Footer>Footer</Footer>
    </Layout>
  )
}

export default CommondLayout