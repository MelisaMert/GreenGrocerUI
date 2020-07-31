
import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { ShoppingCartOutlined ,StockOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import { BrowserRouter as Router, Route , Link}  from  'react-router-dom';
import { Categories } from './Categories';
import { Products } from './Products';
import { Customers } from './Customers';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const Product = ({match}) => {
// return (<h1>Product Page {match.params.id}</h1>)
// };
export class MainPage extends React.Component {
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
  <Router>
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
         <Link to="/products">Products</Link> 
        </Menu.Item>
        <Menu.Item key="2">
          <Link to= "/Categories">Categories </Link>
        </Menu.Item>
        <Menu.Item key="3" className="customer">
          <Link to="/customers">Customers</Link>
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
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 500,
          }}
        >
        <Route exact  strict path = "/" render ={
            () => {
                  return (<Line {...config} chartRef={this.ref} />);
             } } />
           <Route exact strict path = "/customers" component={Customers} />
           <Route exact strict path = "/products" component={Products}/>
           <Route exact strict path="/categories" component={Categories} />
           {/* <Route exact  strict path = "/product/:id" component={Product}  /> */}
        </Content>
        <Footer style={{ marginTop:"10px" ,textAlign: 'center' }}>Green Grocer App ©2020 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </Layout>
  </Router>
 );
}
}