import React from 'react';
import { Row, Col } from 'antd';
import SkillsCard from './skillcard';

class SkillsGrid extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            skills: [
                {id: 1, title: 'Git Version Control', desc: 'Proficient usage of Git for version control, including branching, merging, and resolving conflicts. Experienced with collaboration using GitHub.'},
                {id: 2, title: 'JavaScript', desc: 'Skilled in JavaScript for creating dynamic and interactive web applications. Experience with ES6+, frameworks like React and Next, and asynchronous programming.'},
                {id: 3, title: 'Backend Development', desc: 'Backend Development using NodeJS (Koa, Express, Next, Knex, DiscordJS), Python Flask, and.'},
                {id: 4, title: 'Python (ML/AI)', desc: 'Front-end development using HTML, CSS, and JavaScript frameworks such as React, Angular, Vue.js.'},
                {id: 5, title: 'C# (.NET MAUI)', desc: 'Mobile Development using C# and .NET MAUI. Implementation using MVVM and Supabase.'},
                {id: 6, title: 'Discord Bots', desc: 'Experience with developing bots for Discord server management using DiscordJS (NodeJS), and Python'}
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
            <>
                <Row type='flex' justify='center' style={{width: '100%'}}>
                    <h1 style={{fontSize: '40px'}}>Skills</h1>
                </Row>
                <Row type='flex' justify='center' style={{paddingBottom: 60, flexWrap: 1, maxWidth: 1050}}>
                    {skillsList}
                </Row>
            </>
        )
    }
}

export default SkillsGrid;