import React from 'react';
import { Col, Row,   Divider } from 'antd';
import degreeCap from '../assets/academic-degree-1.png';

function HomeAbout(props) {
    return (
        // <>
        //     <Col span={9} style={{padding: 20, color: '#292929'}}>
        //         <h1><span style={{color: '#F33A6A'}}>// </span>My Hobbies</h1>
        //         <p style={{fontSize: '18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a enim semper, efficitur dui nec, tempor lorem. Curabitur feugiat laoreet purus sit amet sagittis. Nunc semper tellus et tortor rhoncus, vel porttitor libero mattis. Quisque in imperdiet arcu, id consectetur libero. Aliquam commodo velit sed arcu feugiat commodo. Etiam dictum semper hendrerit. Vivamus pretium rutrum urna, sed pharetra libero posuere eget. Nullam non faucibus neque. Duis consectetur massa sit amet nisi vestibulum luctus.</p>
        //     </Col>
        //     <Divider type="vertical" />
        //     <Col span={9} style={{padding: 20, color: '#292929'}}>
        //         <h1><span style={{color: '#F33A6A'}}>// </span>My Aspirations</h1>
        //         <p style={{fontSize: '18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a enim semper, efficitur dui nec, tempor lorem. Curabitur feugiat laoreet purus sit amet sagittis. Nunc semper tellus et tortor rhoncus, vel porttitor libero mattis. Quisque in imperdiet arcu, id consectetur libero. Aliquam commodo velit sed arcu feugiat commodo. Etiam dictum semper hendrerit. Vivamus pretium rutrum urna, sed pharetra libero posuere eget. Nullam non faucibus neque. Duis consectetur massa sit amet nisi vestibulum luctus.</p>
        //     </Col>
        // </>

        <Col>
            <Row style={{marginLeft: '-20px'}}>
                <h1 style={{fontSize: 40, color: 'white'}}><span style={{color: '#F33A6A'}}>//</span> About</h1>
            </Row>
            <Row style={{margin: 0}}>
                <p style={{ fontSize: '18px', fontWeight: 400, margin: 0, maxWidth: 800, color: '#7e7e7e', padding: 10 }}>
                    Hello! I'm a recent graduate from Coventry University, holding a First-class honours degree in Computer Science. With a specialization in Web Development, I am passionate about creating accessible and impactful web applications. Currently, I am actively seeking professional development opportunities where I can hone my skills and broaden my knowledge base. I have a particular interest in leveraging technology to assist individuals with disabilities, aiming to make the digital world more inclusive for everyone.
                </p>
            </Row>
        </Col>
    );
}

export default HomeAbout;