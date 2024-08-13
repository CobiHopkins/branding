import React from 'react';
import { Row } from 'antd';

// component imports
import HomeHeader from './homeheader';
import HomeAbout from './homeabout';
import SkillsGrid from './skillsgrid';
import QuoteBar from './quotebar';

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
            <Row type='flex' justify='center' style={{backgroundColor: '#E6E6E6', padding: 40}}>
                <QuoteBar quote="The good thing about science is that it's true whether or not you believe in it." author="Neil deGrasse Tyson" />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#2E4053', color: '#fff'}}>
                <h1 style={{fontSize: 80}}>PROJECTS</h1>
            </Row>
        </div>
    );
}

export default Home;