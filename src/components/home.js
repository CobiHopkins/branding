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
            <Row type='flex' justify='center' style={{backgroundColor: '#2E4053'}}>
                <HomeAbout />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#E6E6E6', padding: 20}}>
                <ProjectGrid />
            </Row>
            <Row type='flex' justify='center' style={{ backgroundColor: '#20242D', padding: 20}}>
                <SkillsGrid />
            </Row>
        </div>
    );
}

export default Home;