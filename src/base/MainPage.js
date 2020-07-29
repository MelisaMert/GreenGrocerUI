
import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Layout, Menu, Breadcrumb,Row,Col,Card, Tooltip } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,ShoppingCartOutlined ,StockOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import { Switch, Router } from 'react-router'
import { Products } from './Products';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class MainPage extends React.Component {
 state= {
   collapsed: false
 };
 onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
 render() {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    title: {
      visible: true,
      text: 'Green Grocer',
    },
    xField: 'year',
    yField: 'value',
  };
 return (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          Products
        </Menu.Item>
        <Menu.Item key="2">
          Categories
        </Menu.Item>
        <Menu.Item key="3" 
        className="customer">
          Customers
        </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Fruits">
            <Menu.Item key="1">Fruits - 1</Menu.Item>
            <Menu.Item key="2">Fruits - 2</Menu.Item>
            <Menu.Item key="3">Fruits - 3</Menu.Item>
            <Menu.Item key="4">Fruits - 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Vegetables">
            <Menu.Item key="5">Vegetables - 1</Menu.Item>
            <Menu.Item key="6">Vegatables - 2</Menu.Item>
            <Menu.Item key="7">Vegatables - 3</Menu.Item>
            <Menu.Item key="8">Vegatables - 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<StockOutlined />} title="Stocks">
            <Menu.Item key="9">Stocks - 1</Menu.Item>
            <Menu.Item key="10">Stocks - 2</Menu.Item>
            <Menu.Item key="11">Stocks - 3</Menu.Item>
            <Menu.Item key="12">Stocks - 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 500,
          }}
        >
           <Line {...config} chartRef={this.ref} />
        </Content>
        <Footer style={{ marginTop:"10px" ,textAlign: 'center' }}>Green Grocer App ©2020 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </Layout>
 );
}
}