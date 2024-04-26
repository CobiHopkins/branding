import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

// todo
class SkillsCard extends React.Component {
    render() {
        const skillID = this.props.id;

        return (
            <Card 
                style={{width: 250}}
                hoverable={false}
                >
                    <Meta title={this.props.title} description={this.props.desc} />
                </Card>
        )
    }
}

export default SkillsCard;