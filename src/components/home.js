import React from 'react';
import { Row } from 'antd';

// component imports
import HomeHeader from './homeheader';
import HomeAbout from './homeabout';
import ProjectGrid from './projectgrid';
import SkillsGrid from './skillsgrid';

function Home(props) {

    return (
        <div className='site-layout'>
            <HomeHeader />
            <Row type='flex' justify='center' style={{backgroundColor: '#FFFFFF'}}>
                <HomeAbout />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#2E4053', color: '#fff'}}>
                <h1 style={{fontSize: 80}}>PROJECTS</h1>
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#2E4053', padding: 20}}>
                <ProjectGrid />
            </Row>
            {/* <Row type='flex' justify='center' style={{ backgroundColor: '#20242D', padding: 20}}>
                <SkillsGrid />
            </Row> */}
        </div>
    );
}

export default Home;