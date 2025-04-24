import React from 'react';
import { Row } from 'antd';

// component imports
import Hero from '../../components/Hero/Hero';
import SkillsGrid from '../../components/skills/skillsgrid';
import QuoteBar from '../../components/quote/quotebar';
import ProjectCard from '../../components/projects/projectcard';
// import ScrollingBanner from '../../components/ScrollingBanner/ScrollingBanner';

import hockeyVideo from '../../assets/videos/hockey_stop_video.mp4';
import GraduationImage from '../../assets/me_graduation_july2024.jpg';
import AnimationFadeIn from '../../components/animationFadeIn/animationFadeIn';

import './home.css';

const moduleList = [
    "Web API Development",
    "Mobile Application Development",
    "Computer Security",
    "Dissertation",
    "Theory of Computation",
    "Machine Learning & AI"
]

const Home = () => {


    return (
        <div className='site-layout'>
            <Hero />
            <Row type='flex' justify='center' id="about" style={{backgroundColor: '#31333B', padding: 20}}>
                <div className="about">
                    <AnimationFadeIn delay={2}>
                    <div className="about-container">
                        <div className="about-image">
                                <img src={GraduationImage} alt="Cobi at his graduation holding his degree certificate."/>
                        </div>
                        <div className="about-text">
                                <p>
                                Hello! I'm a full-stack developer holding a First-class honours degree in Computer Science. With a specialization in Web Development, I am passionate about creating accessible and impactful web applications. Currently, I am actively seeking professional development opportunities where I can hone my skills and broaden my knowledge base. I have a particular interest in leveraging technology to assist individuals with disabilities, aiming to make the digital world more inclusive for everyone. Some noteable areas of study include: 
                                </p>
                            <ul>
                                {moduleList.map((module, index) => {
                                    return (
                                        <AnimationFadeIn delay={index * 0.5} key={index}>
                                            <li key={index}>{module}</li>
                                        </AnimationFadeIn>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    </AnimationFadeIn>
                </div>
            </Row>
            <Row type='flex' justify='center' id="skills" style={{ backgroundColor: '#31333B', color: 'white', minHeight: '100vh'}}>
                <SkillsGrid />
            </Row>
            <Row type='flex' justify='center' className="quote-bar">
                    <video className="video-background" autoPlay muted={true} loop playsInline>
                        <source src={hockeyVideo} type="video/mp4" />
                    </video>
                <QuoteBar />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#2E4053', color: '#fff'}}>
                <h1 style={{fontSize: 40}}>PROJECTS</h1>
            </Row>
            <Row type='flex' justify='center' style={{backgroundColor: "#2E4053", height: '500px', padding: '50'}}>
                <ProjectCard />
            </Row>
        </div>
    )
}

export default Home