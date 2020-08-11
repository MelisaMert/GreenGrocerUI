
import React from 'react';
import { GREEN_GROCER_LOGO} from '../data/image-url';
import { REGISTER_LOGIN_TEXT_ENGLISH } from '../data/constants';
import { Layout, Menu, Breadcrumb, Input} from 'antd';
import { ShoppingCartOutlined ,StockOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route , Link}  from  'react-router-dom';
import { Categories } from './Categories';  
import { Products } from './Products';
import { Customers } from './Customers';
import { Fruits } from './Fruits';
import { Vagatables } from './Vagatables';
import { Register} from './Register';
import { Dashboard} from './Dashboard';
import { ShoppingBag } from './ShoppingBag';
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
    this.getFooterContent = this.getFooterContent.bind(this);
  }
  onCollapse=collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  getFooterContent() {
    return <span>Green Grocer App ©2020 Created by Ant UED</span>
  }
  render() {
  return (
  <Router>
  <Layout>
    <Header className="header">
        <div className="logo">
           <Link to="/dashboard"><img className="greengrocerimg" src={GREEN_GROCER_LOGO} /></Link>
        </div>
         <div>
          <Search className="search" placeholder=" Search ..." onSearch={value => console.log(value)} enterButton />
         </div>
        <div className="div-register">
           <span className="div-register-span"><Link to="/register" style={{color: "white"}}>{REGISTER_LOGIN_TEXT_ENGLISH}</Link></span>
        </div>
        <div className="div-shopping-bag-image">
             <Link to="/shoppingbag"><ShoppingCartOutlined className="shopping-car-outlined"/></Link>
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
      <Layout  className="layout">
        <Breadcrumb className="breadcrumb" />
        <Content
          className="site-layout-background"
          style={{ padding: 24, margin: 0, minHeight: 520 }}
          > 
           <Route exact strict path = "/" component={Dashboard}/>
           <Route exact strict path = "/dashboard" component={Dashboard}/>
           <Route exact strict path = "/customers" csomponent={Customers} />
           <Route exact strict path = "/products" component={Products}/>
           <Route exact strict path="/categories" component={Categories} />
           <Route exact strict path="/fruits" component={Fruits} />
           <Route exact strict path="/vegatables" component={Vagatables} />
           <Route exact strict path="/register" component={Register}/>
           <Route exact strict path="/shoppingbag" component={ShoppingBag} />
        </Content>
        <Footer className="footer">{this.getFooterContent()}</Footer>
      </Layout>
    </Layout>
  </Layout>
  </Router>
 );
}
}