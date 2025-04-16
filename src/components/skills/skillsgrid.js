import React, {useRef, useEffect} from 'react';
import { Row, Col } from 'antd';
import SkillsCard from './skillcard';
import AnimationFadeIn from '../animationFadeIn/animationFadeIn';

const skillData = [
    {id: 1, title: 'Git Version Control', desc: 'Proficient usage of Git for version control, including branching, merging, and resolving conflicts. Experienced with collaboration using GitHub.'},
    {id: 2, title: 'JavaScript', desc: 'Skilled in JavaScript for creating dynamic and interactive web applications. Experience with ES6+, frameworks like React, NextJS, and asynchronous programming.'},
    {id: 3, title: 'Backend Development', desc: 'Backend Development using NodeJS (Koa, Express, Next), Python Flask, and SQL.'},
    {id: 4, title: 'Python (ML/AI)', desc: 'Project experience using Python for backend web development and Machine Learning / AI.'},
    {id: 5, title: 'C# (.NET MAUI)', desc: 'Mobile Development using C# and .NET MAUI. Implementation using MVVM and Supabase.'},
    {id: 6, title: 'CSS3', desc: 'Project experience using CSS3 to develop a responsive UI.'}
];

function SkillsGrid() {

    /* Todo:
    *  1. Apply CSS values in a sheet instead of inline.
    *  2. Apply CSS to ensure mobile friendly.
    *  3. Check element compliance with WCAG Guidelines.
    */

        return (
            <>
                <Row type='flex' justify='center' style={{width: '100%'}}>
                    <h1 style={{fontSize: '40px'}}>Skills</h1>
                </Row>
                <Row style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', pb: 60, flexWrap: 1, maxWidth: '1050px', alignItems: 'stretch', paddingBottom: 20 }}>
                    {skillData.map((skill, index) => {
                        
                        return (
                                <AnimationFadeIn delay={index * 0.25}>
                                    <Col style={{ minHeight: 380 }}>
                                    <SkillsCard
                                        id={skill.id}
                                        title={skill.title}
                                        desc={skill.desc} />
                                    </Col>
                                </AnimationFadeIn>
                        )
                    })}
                </Row>
            </>
        );
}

export default SkillsGrid;