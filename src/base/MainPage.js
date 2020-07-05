
import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Layout, Menu, Breadcrumb,Row,Col,Card } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,ShoppingCartOutlined ,StockOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  
export default class MainPage extends React.Component {
 state= {
   collapsed: false
 };
 onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
 
 render() {
 return (
<Layout>
    <Header className="header">
      <div className="logo" />
     
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className="menuItem1" key="1">
            <img className="menu-header-logo-img" src="https://thumbs.dreamstime.com/b/greengrocery-vector-line-icon-section-badge-signboard-banner-72483550.jpg"/>
            {/* GreenGrocer */}
        </Menu.Item>
        <Menu.Item className="menuItem2" key="2">Products</Menu.Item>
        <Menu.Item className="menuItem3" key="3">Categories</Menu.Item>
        <Menu.Item className="menuItem4" key="4">Stocks</Menu.Item>
        <Menu.Item className="menuItem5" key="5">Customers</Menu.Item>
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
            <Menu.Item key="5">Vegetables - 2</Menu.Item>
            <Menu.Item key="6">Vegetables - 2</Menu.Item>
            <Menu.Item key="7">Vegetables - 2</Menu.Item>
            <Menu.Item key="8">Vegetables - 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<StockOutlined />} title="Stocks">
            <Menu.Item key="9">Stock - 1</Menu.Item>
            <Menu.Item key="10">Stock - 1</Menu.Item>
            <Menu.Item key="11">Stock - 1</Menu.Item>
            <Menu.Item key="12">Stock - 1</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
       <Card title="Fruits">
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid hoverable={false} style={gridStyle}>
         Content
       </Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>

     </Card>
     <Card title="Vagatables">
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid hoverable={false} style={gridStyle}>
         Content
       </Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
       <Card.Grid style={gridStyle}>Content</Card.Grid>
     </Card>
        </Content>
        <Footer style={{ marginTop:"10px" ,textAlign: 'center' }}>Green Grocer App ©2020 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </Layout>
 )
}
}