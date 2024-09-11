import React from 'react';
import { Row } from 'antd';

// component imports
import HomeHeader from './homeheader';
import HomeAbout from './homeabout';
import SkillsGrid from '../skills/skillsgrid';
import QuoteBar from '../quote/quotebar';
import ProjectCard from '../projects/projectcard';

import hockeyVideo from '../../assets/videos/hockey_stop_video.mp4';

function Home(props) {

    return (
        <div className='site-layout'>
            <HomeHeader />
            <Row type='flex' justify='center' id="about" style={{backgroundColor: '#31333B', padding: 20}}>
                <HomeAbout />
            </Row>
            <Row type='flex' justify='center' id="skills" style={{ backgroundColor: '#31333B', color: 'white', minHeight: '100vh'}}>
                <SkillsGrid />
            </Row>
            <Row type='flex' justify='center' className="quote-bar">
                {/* Convert this video into a BackgroundVideo component. */}
                    <video autoPlay muted loop playsinline style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-100'}}>
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
    );
}

export default Home;