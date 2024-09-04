import React, {useRef, useEffect} from 'react';
import { Row, Col } from 'antd';
import SkillsCard from './skillcard';

const skillData = [
    {id: 1, title: 'Git Version Control', desc: 'Proficient usage of Git for version control, including branching, merging, and resolving conflicts. Experienced with collaboration using GitHub.'},
    {id: 2, title: 'JavaScript', desc: 'Skilled in JavaScript for creating dynamic and interactive web applications. Experience with ES6+, frameworks like React, NextJS, and asynchronous programming.'},
    {id: 3, title: 'Backend Development', desc: 'Backend Development using NodeJS (Koa, Express, Next) and Python Flask.'},
    {id: 4, title: 'Python (ML/AI)', desc: 'Project experience using Python for backend web development and Machine Learning / AI.'},
    {id: 5, title: 'C# (.NET MAUI)', desc: 'Mobile Development using C# and .NET MAUI. Implementation using MVVM and Supabase.'},
    {id: 6, title: 'CSS3', desc: 'Project experience using CSS3 to develop a responsive UI.'}
];

const applyAnimation = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.add('skill-animation');
    }
}

function SkillsGrid() {

    /* Todo:
    *  1. Apply CSS values in a sheet instead of inline.
    *  2. Apply CSS to ensure mobile friendly.
    *  3. Check element compliance with WCAG Guidelines.
    */

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(applyAnimation, {threshold: 0.20});
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
            observer.disconnect();
        }
    }, []);

        const skillsList = skillData.map(skill => {
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
                <Row className="skills-list" ref={containerRef}>
                    {skillsList}
                </Row>
            </>
        );
}

export default SkillsGrid;