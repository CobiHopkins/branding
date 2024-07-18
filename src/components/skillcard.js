import React from 'react';
import { Row, Card, Avatar } from 'antd';

const { Meta } = Card;

// todo
class SkillsCard extends React.Component {
    render() {
        const skillID = this.props.id;

        return (
            <Card 
                style={{width: 300, height: 350, padding: 10, backgroundColor: '#20242D', borderColor: '#20242D', borderRadius: 0, boxShadow: '0 0 3px #13151B', marginTop: 15, marginRight: 15, marginLeft: 15}}
                hoverable={false}
                >
                    <Row type='flex' justify={'center'}>
                        <Avatar size={75} src={this.props.src} shape='square' style={{marginTop: 20, marginBottom: 40}} />
                    </Row>
                    <Meta title={
                        <>
                            <p style={{color: 'white', fontSize: 17, fontWeight: 700, padding: 0, margin: 0}}>{this.props.title}</p>
                        </>
                    } description={
                        <>
                            <p style={{color: 'lightgray'}}>{this.props.desc}</p>
                        </>
                    } />
                </Card>
        )
    }
}

export default SkillsCard;