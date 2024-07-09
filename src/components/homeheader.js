import React from 'react';
import { Row, Col, Button, Divider, Avatar } from 'antd';
import logo from '../assets/me_plain_red_green.jpg';
import {
    GithubOutlined,
    XOutlined,
    DiscordOutlined,
    DownloadOutlined,
    LinkedinOutlined
} from '@ant-design/icons';

function HomeHeader(props) {
    return (
        <Row type='flex' justify='space-around' style={{minHeight: 'calc(100vh - 64px)', backgroundColor: '#20242D', color: 'white'}}>
                <Col style={{ alignSelf: 'center'}}>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <Avatar size={{
                            xs: 80,
                            sm: 100,
                            md: 120,
                            lg: 240,
                            xl: 360,
                            xxl: 480
                        }} src={logo}/>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <h1 style={{fontSize: '60px', fontWeight: 800, margin: '0px'}}>Cobi Hopkins</h1>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <h3 style={{ fontSize: '20px', fontWeight: 400, textTransform: 'uppercase', color: '#F33A6A'}}>Aspiring Full-Stack Web Developer</h3>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        <p style={{ fontSize: '18px', fontWeight: 400, margin: 0, maxWidth: 800, color: '#7e7e7e', padding: 10 }}>
                        Hello! I'm a recent graduate from Coventry University, holding a First-class honours degree in Computer Science. With a specialization in Web Development, I am passionate about creating accessible and impactful web applications. Currently, I am actively seeking professional development opportunities where I can hone my skills and broaden my knowledge base. I have a particular interest in leveraging technology to assist individuals with disabilities, aiming to make the digital world more inclusive for everyone.
                        </p>
                    </Row>
                    <Row type='flex' justify='center' style={{margin: '0px'}}>
                        {/* <Col justify='center' style={{ margin: '10px'}}>
                            <Button type='primary' size='large' style={{ backgroundColor: '#2E4053'}}>Download CV<DownloadOutlined /></Button>
                        </Col> */}
                        <Col justify='center' style={{ margin: '10px'}}>
                            <a href='https://github.com/CobiHopkins' target='_blank' style={{ fontSize: 40, color: '#fff'}}><GithubOutlined /></a>
                            <Divider type="vertical" style={{padding: 10}}/>
                            <a href='https://www.linkedin.com/in/cobihopkins/' target='_blank' style={{ fontSize: 40, color: '#fff'}}><LinkedinOutlined /></a>
                            <Divider type="vertical" style={{padding: 10}}z />
                            <a href='https://twitter.com/CeeJaeRL' target='_blank' style={{ fontSize: 40, color: '#fff'}}><XOutlined /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
    )
}

export default HomeHeader;