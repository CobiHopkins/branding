import React from 'react';
import { Row, Col, Avatar } from 'antd';

import logo from '../../assets/me_plain_red_green.jpg';
import "./homeheader.css";
import SocialLinks from '../socialLinks';


const socialMediaLinks = [
    { platform: 'github', url: 'https://github.com/Cobihopkins' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/Cobihopkins'},
    { platform: 'twitter', url: 'https://twitter.com/CeeJaeRL' }
]


function HomeHeader() {

    return (
        <Row type='flex' justify='space-around' id="hero" style={{minHeight: 'calc(100vh - 64px)', backgroundColor: '#20242D', color: 'white'}}>
                <Row style={{ alignSelf: 'center'}}>
                    <Row type='flex' justify='center' style={{margin: '0px 40px'}}>
                            <Avatar id="heroImg" size={{
                                xs: 80,
                                sm: 100,
                                md: 120,
                                lg: 240,
                                xl: 360,
                                xxl: 480
                            }} src={logo}/>
                    </Row>
                    <Col style={{alignContent: "center", margin: "0px 40px"}}>
                    <Row class="header-text" type='flex' justify='center'>
                        <h1 style={{fontSize: '60px', fontWeight: 800, margin: '0px'}}>Cobi Hopkins</h1>
                    </Row>
                    <Row class="header-text" type='flex' justify='center'>
                        <h3 style={{ fontSize: '20px', fontWeight: 400, textTransform: 'uppercase', color: '#F33A6A'}}>Aspiring Full-Stack Web Developer</h3>
                    </Row>
                    <Row class="header-text" type='flex' justify='center'>
                        <SocialLinks links={socialMediaLinks}/>
                    </Row>
                    </Col>
                </Row>
            </Row>
    )
}

export default HomeHeader;