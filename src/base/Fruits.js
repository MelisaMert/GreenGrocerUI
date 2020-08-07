import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Card, Row, Col, Drawer, Button } from 'antd';
import { ADDED_TO_POUCH_ENG }  from '../data/constants';
import { PINEAPPLE_PRODUCT_CONTENCT , GRAPE_PRODUCT_CONTENT, BANANA_PRODUCT_CONTENT, 
         KIWI_PRODUCT_CONTENT , MELON_PRODUCT_CONTENT, APPLE_PRODUCT_CONTENT } from '../data/product-content';
import { PINAAPPLE_IMAGE_SRC_URl,  APPLE_IMAGE_SRC_URL, BANANA_IMAGE_SRC_URL, PEACH_IMAGE_SRC_URL,GRAPE_IMAGE_SRC_URL,
         WATER_MELON_IMAGE_SRC_URL, KIWI_IMAGE_SRC_URL, ORANGE_IMAGE_SRC_URL, MANDARIN_IMAGE_SRC_URL} from '../data/image-url';

const { Meta } = Card;
export class Fruits extends React.Component {
    constructor(){
        super();
        this.state={
        drawer: false,
        drawerProperty: {title: "", content: ""}
        }
        this.cardOnClick = this.cardOnClick.bind(this);
    }
    cardOnClick(value) {
        let drawerProperty = {title:"", content: ""};
        drawerProperty.title = value.title;
        drawerProperty.content = value.content;
        this.setState({drawer: true, drawerProperty})
    }
    render() {
        return (
        <>
            <Drawer
            title={this.state.drawerProperty.title}
            placement="right"
            closable={false}
            onClose={() => this.setState({drawer: false})}
            visible={this.state.drawer}
        >
         {this.state.drawerProperty.content}
         </Drawer>
            <>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Pineapple", content: PINEAPPLE_PRODUCT_CONTENCT  })}
                            cover={<img className="card-image" alt="example" src={PINAAPPLE_IMAGE_SRC_URl} />}
                        >
                            <Meta title="Pineapple" description={<div>
                                  <Row>12 £</Row>
                                  <div className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Grape", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={GRAPE_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Grape" description={<div>
                                  <Row>8 £</Row>
                                  <div className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Peach", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={PEACH_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Peach" description={<div>
                                  <Row>10 £</Row>
                                  <div  className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
                <div className="div-margin"/>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Kiwi" , content: KIWI_PRODUCT_CONTENT})} 
                            cover={<img className="card-image" alt="example" src={KIWI_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Kiwi" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>}/>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Melon" , content:  MELON_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={WATER_MELON_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Water Melon" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Apple", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={APPLE_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Apple" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button"  type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
               <div className="div-margin"/>
                <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Orange", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={ORANGE_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Orange" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button"type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Mandarin", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={MANDARIN_IMAGE_SRC_URL}/>}
                        >
                            <Meta title="Mandarin" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Banana", content: BANANA_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={BANANA_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Banana" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button sclassName="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
                <div className="div-margin"/>
                <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}></Col> 
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}></Col>
                </Row>
            </>
        </>
        );
    }
}


