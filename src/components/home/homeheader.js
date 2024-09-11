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
                <Row className="hero-container" style={{ alignSelf: 'center'}}>
                    <Row type='flex' className="hero-image" justify='center'>
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
                    <Row className="header-text" type='flex' justify='center'>
                        <h1>Cobi Hopkins</h1>
                    </Row>
                    <Row className="header-text" type='flex' justify='center'>
                        <h3>Aspiring Full-Stack Web Developer</h3>
                    </Row>
                    <Row className="header-text" type='flex' justify='center'>
                        <SocialLinks links={socialMediaLinks}/>
                    </Row>
                    </Col>
                </Row>
            </Row>
    )
}

export default HomeHeader;