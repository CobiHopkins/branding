import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class ProjectCard extends React.Component {

    render() {
        const projectID = this.props.id;

        return (
            <Card 
                style={{maxWidth: 350, borderRadius: 0}}
                cover={<img style={{borderRadius: 0, maxHeight: 350, objectFit: "cover"}} alt={`Project ${projectID}`} src={this.props.url} to={`/project/${projectID}`} />}
                hoverable={true}
                >
                    <Meta style={{paddingTop: 10, paddingBottom: 10}} title={this.props.title} description={this.props.desc} />
                </Card>
        )
    }
}

export default ProjectCard;