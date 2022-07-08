import { Layout } from 'antd';
import React from 'react';
const { Header, Footer, Sider, Content } = Layout;

const CommondLayout = () => {

  return (
    <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
    </Layout>
  )
}

export default CommondLayout