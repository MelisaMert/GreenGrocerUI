
import React from 'react';
import { GREEN_GROCER_LOGO } from '../data/image-url';
import { Layout, Menu, Breadcrumb, Input, Row} from 'antd';
import { ShoppingCartOutlined ,StockOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route , Link}  from  'react-router-dom';
import { Categories } from './Categories';  
import { Products } from './Products';
import { Customers } from './Customers';
import { Fruits } from './Fruits';
import { Vagatables } from './Vagatables';
import { Line } from '@ant-design/charts';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }
  onCollapse=collapsed => {
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
  <Router>
  <Layout>
  <Header style={{ zIndex: 1, width: '100%' }}>
      <div className="logo">
         <img className="greengrocerimg" src={GREEN_GROCER_LOGO} />
      </div>
      <div className="container">
      <Row>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1">
        </Menu.Item>
        <Menu.Item key="2">
          <div className="search">
          <Search className="search-input" placeholder="  Search ..." onSearch={value => console.log(value)} enterButton />
          </div>
       </Menu.Item> 
        <Menu.Item key = "3">
      </Menu.Item>
      </Menu>
      </Row>
    </div>
    </Header>
  <Layout>
      <Sider collapsible collapsed={this.state.collapsed}  onCollapse={this.onCollapse} width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item icon={<ShoppingCartOutlined />}><Link to="/fruits">Fruits</Link></Menu.Item>
          <Menu.Item icon={<ShoppingCartOutlined />}><Link to="/vegatables">Vegatables</Link></Menu.Item>
          <Menu.Item icon={<StockOutlined/> }>Stocks</Menu.Item>
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
           <Route exact strict path = "/customers" csomponent={Customers} />
           <Route exact strict path = "/products" component={Products}/>
           <Route exact strict path="/categories" component={Categories} />
           <Route exact strict path="/fruits" component={Fruits} />
           <Route exact strict path="/vegatables" component={Vagatables} />
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