import React from 'react';
import { Col, Row } from 'antd';

import ProjectCard from './projectcard';

class ProjectGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {id: 1, title: 'React Portfolio', desc: 'An online portfolio developed using React and AntDesign.', url: 'https://pics.craiyon.com/2023-09-28/90b974cf7e98420c82cc317f1ead6f34.webp'},
                { id: 2, title: 'CeeJae-Bot', desc: 'A Discord bot for server moderation purposes developed using NodeJS and DiscordJS.', url: 'https://i.pinimg.com/originals/45/fc/04/45fc047a4d037ea0e090b341a46ff4e9.jpg'},
                {id: 3, title: 'Autism Assistance', desc: 'A Google Chrome extension developed for people with Autism using Vanilla JavaScript.', url: 'https://previews.123rf.com/images/enterline/enterline1502/enterline150200020/36560712-an-illustration-of-puzzle-pieces-with-symbolic-autism-awareness-colors-and-shapes-gradient-mesh-in.jpg?fj=1'}
            ]
        };
    }

    componentDidMount() {
        return;
    }

    render() {
        if (!this.state.projects.length) {
            return <h3>Loading Projects...</h3>;
        }

        const projectList = this.state.projects.map(project => {
            return (
                <div style={{padding: '10px'}} key={'project_' + project.id}>
                    <Col span={8}>
                        <ProjectCard {...project} />
                    </Col>
                </div>
            )
        });

        return (
            <Row type='flex' justify='center'>
                {projectList}
            </Row>
    );
    }
}

export default ProjectGrid;