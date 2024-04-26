import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class ProjectCard extends React.Component {

    render() {
        const projectID = this.props.id;

        return (
            <Card 
                style={{maxWidth: 350}}
                cover={<img alt={`Project ${projectID}`} src={this.props.url} to={`/project/${projectID}`} />}
                hoverable={true}
                >
                    <Meta title={this.props.title} description={this.props.desc} />
                </Card>
        )
    }
}

export default ProjectCard;