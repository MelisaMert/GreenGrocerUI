import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Card, Row, Col, Drawer } from 'antd';

const { Meta } = Card;

export class Products extends React.Component {
    constructor(){
        super();
        this.state={
        drawer: false
        }
    }
    render() {
        return (
            <>
            <Drawer
            title="Details Selected Product"
            placement="right"
            closable={false}
            onClose={() => this.setState({drawer: false})}
            visible={this.state.drawer}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
            <>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img alt="example" src="https://cdn.cimri.io/image/1000x1000/adetananas_231993609.jpg" />}
                        >
                            <Meta title="Pineapple" description="5 £" />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img style={{ height: '240px', width: '300' }} alt="example" src="https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30097437/30097437_0_MC/8796988506162_1528879621690.jpg" />}
                        >
                            <Meta title="Grape " description="10 £" />
                        </Card>
                    </Col>
                    
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img style={{ height: '240px', width: '260px' }} alt="example" src="https://www.aysetolga.com/wp-content/uploads/2017/03/muz-1.jpg" />}
                        >
                            <Meta title="Banana" description="5 £" />
                        </Card>
                    </Col>
                </Row>
                <div style={{ marginTop: '40px' }}></div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img style={{ height: '240px', width: '260px' }} alt="example" src="https://www.freepngimg.com/download/kiwi/35884-1-kiwi-fruit-clipart.png" />}
                        >
                            <Meta title="Kiwi" description="12 £" />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img style={{ height: '240px', width: '260px' }} alt="example" src="https://i.sozcu.com.tr/wp-content/uploads/2019/07/01/shutterstock_1027540888.jpg" />}
                        >
                            <Meta title="Melon" description="16 £" />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            style={{ width: 260, height: 340 }}
                            onClick={()=>this.setState({drawer: true})}
                            cover={<img style={{ height: '240px', width: '260px' }} alt="example" src="https://qph.fs.quoracdn.net/main-qimg-347d5f09ffeea5b3ed87164a62d3587c" />}
                        >
                            <Meta title="Apple" description="6 £" />
                        </Card>
                    </Col>
                </Row>
            </>
        </>
        );
    }
}


