import "./skillscard.css";
import React from 'react';
import { Row, Card, Avatar } from 'antd';
import logo from '../../assets/academic-degree-1.png';

const { Meta } = Card;

// todo
const SkillsCard = ({ id, title, desc, src = logo }) => {

    return (
        <Card 
            className="skill-card"
            hoverable={false} key={id}
            >
                <Row type='flex' justify={'center'}>
                    <Avatar size={75} src={src} shape='square' style={{marginTop: 20, marginBottom: 40}} alt="An SVG image of a blue and white graduation cap encased in a white circle." />
                </Row>
                <Meta title={
                    <>
                        <p style={{color: 'white', fontSize: 17, fontWeight: 700, padding: 0, margin: 0}}>{title}</p>
                    </>
                } description={
                    <>
                        <p style={{color: 'lightgray'}}>{desc}</p>
                    </>
                } />
            </Card>
    )

}

SkillsCard.defaultProps = {
    src: logo
}

export default SkillsCard;