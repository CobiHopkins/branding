import React from 'react';
import { Row, Col } from 'antd';
import SkillsCard from './skillcard';

class SkillsGrid extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            skills: [
                {id: 1, title: 'Frontend Development', desc: 'Frontend Development using HTML, CSS, and JavaScript frameworks such as React, Angular, and Vue.js'},
                {id: 2, title: 'Database Management', desc: 'Database management using SQL and NoSQL databases such as MySQL, MongoDB, and PostgreSQL'},
                {id: 3, title: 'Backend Development', desc: 'Backend Development using NodeJS (Koa, Express, Next, Knex, DiscordJS), Python Flask, and.'}
            ]
        };
    }

    componentDidMount() {
        return;
    }

    render() {
        if (!this.state.skills.length) {
            return <h3>Loading Skills...</h3>;
        }

        const skillsList = this.state.skills.map(skill => {
            return (
                <div style={{padding: '10px'}} key={'skill_' + skill.id}>
                    <Col span={8}>
                        <SkillsCard {...skill} />
                    </Col>
                </div>
            )
        });

        return (
            <Row type='flex' justify='center'>
                {skillsList}
            </Row>
        )
    }
}

export default SkillsGrid;