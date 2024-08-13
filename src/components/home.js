import React from 'react';
import { Row } from 'antd';

// component imports
import HomeHeader from './homeheader';
import HomeAbout from './homeabout';
import SkillsGrid from './skillsgrid';
import QuoteBar from './quotebar';

import hockeyVideo from '../assets/videos/hockey_stop_video.mp4';

function Home(props) {

    return (
        <div className='site-layout'>
            <HomeHeader />
            <Row type='flex' justify='center' style={{backgroundColor: '#31333B', padding: 20}}>
                <HomeAbout />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#31333B', color: 'white', minHeight: '100vh'}}>
                <SkillsGrid />
            </Row>
            <Row type='flex' justify='center' className="quote-bar">
                {/* Convert this video into a BackgroundVideo component. */}
                    <video autoPlay muted loop style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-100'}}>
                        <source src={hockeyVideo} type="video/mp4" />
                    </video>
                <QuoteBar />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#2E4053', color: '#fff'}}>
                <h1 style={{fontSize: 80}}>PROJECTS</h1>
            </Row>
            <Row type='flex' justify='center' style={{backgroundColor: '#e6e6e6', height: '500px', padding: '50'}}>
                <h1>Hello World</h1>
            </Row>
        </div>
    );
}

export default Home;