import React from 'react';
import { Row, Col, Avatar } from 'antd';

import logo from '../../assets/me_plain_red_green.jpg';
import "./Hero.css";
import SocialLinks from '../socialLinks';


const socialMediaLinks = [
    { platform: 'github', url: 'https://github.com/Cobihopkins' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/Cobihopkins'},
    { platform: 'twitter', url: 'https://twitter.com/CeeJaeRL' }
]


function Hero() {

    return (
        <Row type='flex' justify='space-around' id="hero" style={{height: 'calc(100vh - 64px)', backgroundColor: '#20242D', color: 'white'}}>
            <Row className="hero-container" style={{ alignSelf: 'center'}}>
                    <Row type='flex' className="hero-image" justify='center'>
                            <Avatar id="heroImg" size={{
                                xs: 80,
                                sm: 100,
                                md: 120,
                                lg: 240,
                                xl: 360,
                                xxl: 480
                            }} src={logo} alt="A computer generated image of Cobi Hopkins"/>
                    </Row>
                    <Col style={{alignContent: "center", margin: "0px 40px"}}>
                    <Row className="header-text" type='flex' justify='center'>
                        <h1>Cobi Hopkins</h1>
                    </Row>
                    <Row className="header-text" type='flex' justify='center'>
                        <h3>Full-Stack Web Developer</h3>
                    </Row>
                    <Row className="header-text" type='flex' justify='center'>
                        <SocialLinks links={socialMediaLinks}/>
                    </Row>
                    </Col>
                    <Row>
                        <svg className="bg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#31333b" fillOpacity="1" d="M0,288L48,288C96,288,192,288,288,288C384,288,480,288,576,261.3C672,235,768,181,864,181.3C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </Row>
                </Row>
            </Row>
    )
}

export default Hero;