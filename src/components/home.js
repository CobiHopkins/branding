import React from 'react';
import { Row, Col, Button } from 'antd';

function Home(props) {

    return (
        <div className='site-layout'>
            <Row type='flex' justify='space-around' style={{height: 'calc(100vh - 64px)'}}>
                <Col style={{ alignSelf: 'center'}}>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <h1 style={{fontSize: '60px', margin: '0px'}}>Cobi Hopkins</h1>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <p style={{ fontSize: '16px'}}>Aspiring Full-Stack Web Developer</p>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <Col justify='center' style={{ margin: '10px'}}>
                            <Button type='primary' size='large' style={{ backgroundColor: '#2E4053'}}>Download CV</Button>
                        </Col>
                        <Col justify='center' style={{ margin: '10px'}}>
                            <Button type='primary' size='large' style={{ backgroundColor: '#F33A6A'}}>GitHub</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Home;