import React from 'react';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
import { Card, Row, Col,  Button } from 'antd';
import { ADDED_TO_POUCH_ENG}  from '../data/constants';
import { ARTICHOKE_IMAGE_SRC_URL, BROCCOLI_IMAGE_SRC_URL, PEPPER_IMAGE_SRC_URL, ONION_IMAGE_SRC_URL, 
         GARLIC_IMAGE_SRC_URL, AUBERGINE_IMAGE_SRC_URL,TOMATO_IMAGE_SRC_URL,CUCUMBER_IMAGE_SRC_URL, 
         GARDEN_ROCKET_IMAGE_SRC_URL , SQUASH_IMAGE_SRC_URL, ROMAINE_IMAGE_SRC_URL, TABOULI_IMAGE_SRC_URL  } from '../data/image-url';
import { PINEAPPLE_PRODUCT_CONTENCT , GRAPE_PRODUCT_CONTENT, BANANA_PRODUCT_CONTENT, 
         KIWI_PRODUCT_CONTENT , MELON_PRODUCT_CONTENT, APPLE_PRODUCT_CONTENT } from '../data/product-content';

const { Meta } = Card;

export class Vagatables extends React.Component {
    constructor(){
        super();
        this.state={
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
               <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Artichoke", content: PINEAPPLE_PRODUCT_CONTENCT  })}
                            cover={<img className="card-image" alt="example" src={ARTICHOKE_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Artichoke" description= {<div>
                                  <Row>12 £</Row>
                                  <div className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>}/>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Broccoli", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={BROCCOLI_IMAGE_SRC_URL}/>}
                        >
                            <Meta title="Broccoli" description={<div>
                                  <Row>8 £</Row>
                                  <div className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>}/>
                        </Card>
                    </Col>
                 
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Aubergine", content: BANANA_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={AUBERGINE_IMAGE_SRC_URL}/>}
                        >
                            <Meta title="Aubergine" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                            <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
                <div className="div-margin"></div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Tomato" , content: KIWI_PRODUCT_CONTENT})} 
                            cover={<img className="card-image" alt="example" src={TOMATO_IMAGE_SRC_URL} />}
                        >
                        <Meta title="Tomato" description={<div>
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
                            onClick={() =>  this.cardOnClick({title:"Cucumber", content: APPLE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="Cucumber" src={CUCUMBER_IMAGE_SRC_URL}/>}
                        >
                            <Meta title="Cucumber" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button"  type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() =>  this.cardOnClick({title:"Pepper" , content:  MELON_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={PEPPER_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Pepper" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
                <div className="div-margin"></div>
                <Row>
                <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Garlic", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={GARLIC_IMAGE_SRC_URL}/>}
                            >
                            <Meta title="Garlic" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Squash", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={SQUASH_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Squash" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Onion", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={ONION_IMAGE_SRC_URL}/>}
                        >
                            <Meta title="Onion" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
                <div className="div-margin"></div>
                <Row>
                <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Garden Rocket", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={GARDEN_ROCKET_IMAGE_SRC_URL } />}
                        >
                            <Meta title="Garden Rocket" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className = "card"
                            onClick={() => this.cardOnClick({title:"Romaine", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={ROMAINE_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Romaine" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xxl={8}>
                        <Card
                            hoverable
                            className="card"
                            onClick={() => this.cardOnClick({title:"Tabouli", content: GRAPE_PRODUCT_CONTENT})}
                            cover={<img className="card-image" alt="example" src={TABOULI_IMAGE_SRC_URL} />}
                        >
                            <Meta title="Tabouli" description={<div>
                                  <Row>10 £</Row>
                                  <div className="card-meta-div-margin"></div>
                                  <Row>{<Button className="card-meta-button" type="primary">{ADDED_TO_POUCH_ENG}</Button>}</Row>
                            </div>} />
                        </Card>
                    </Col>
                </Row>
          </>
        );
    }
}


