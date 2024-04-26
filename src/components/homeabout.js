import React from 'react';
import { Col, Divider } from 'antd';

function HomeAbout(props) {
    return (
        <>
            <Col span={9} style={{padding: 20, color: '#292929'}}>
                <h1><span style={{color: '#F33A6A'}}>// </span>My Hobbies</h1>
                <p style={{fontSize: '18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a enim semper, efficitur dui nec, tempor lorem. Curabitur feugiat laoreet purus sit amet sagittis. Nunc semper tellus et tortor rhoncus, vel porttitor libero mattis. Quisque in imperdiet arcu, id consectetur libero. Aliquam commodo velit sed arcu feugiat commodo. Etiam dictum semper hendrerit. Vivamus pretium rutrum urna, sed pharetra libero posuere eget. Nullam non faucibus neque. Duis consectetur massa sit amet nisi vestibulum luctus.</p>
            </Col>
            <Divider type="vertical" />
            <Col span={9} style={{padding: 20, color: '#292929'}}>
                <h1><span style={{color: '#F33A6A'}}>// </span>My Aspirations</h1>
                <p style={{fontSize: '18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a enim semper, efficitur dui nec, tempor lorem. Curabitur feugiat laoreet purus sit amet sagittis. Nunc semper tellus et tortor rhoncus, vel porttitor libero mattis. Quisque in imperdiet arcu, id consectetur libero. Aliquam commodo velit sed arcu feugiat commodo. Etiam dictum semper hendrerit. Vivamus pretium rutrum urna, sed pharetra libero posuere eget. Nullam non faucibus neque. Duis consectetur massa sit amet nisi vestibulum luctus.</p>
            </Col>
        </>
    );
}

export default HomeAbout;