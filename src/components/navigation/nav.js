import React from 'react';

import './nav.css';
function Nav() {
    return (
        
        <div className="navbar">
            <div className="navbar-container">
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>
        
        // <>
        //     <div className='brand' />
        //     <Menu theme='dark' style={{backgroundColor: '#20242D', fontSize: 18}} mode='horizontal' defaultSelectedKeys={1}>
        //         <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
        //         <Menu.Item key='2'><Link to='#about'>About</Link></Menu.Item>
        //     </Menu>
        // </>
    )
}

export default Nav;