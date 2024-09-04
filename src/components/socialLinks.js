import React from 'react';
import { Divider } from 'antd';

import {
    GithubOutlined,
    XOutlined,
    LinkedinOutlined,
    CodepenOutlined
} from '@ant-design/icons';

const SocialLinks = ({links}) => {
    const renderIcons = (platform) => {
        switch (platform) {
            case 'github':
                return <GithubOutlined />;
            case 'linkedin':
                return <LinkedinOutlined />;
            case 'twitter':
                return <XOutlined />;
            case 'codepen':
                return <CodepenOutlined />
            default:
                return null;
        }
    }
    /*

    */

    return (
        <div className="social-links">
            {links.map(({platform, url}, index) => {
                return (
                    <>
                <a 
                    className="socialLink"
                    key={index}
                    href={url}
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label={platform}
                    >
                        {renderIcons(platform)}
                </a>
                </>
                )
            })}
        </div>
    )
}

/* <a className="socialLink" href='https://github.com/CobiHopkins' target='_blank' rel="noreferrer"><GithubOutlined /></a>
        <Divider type="vertical" style={{padding: 10}}/>
        <a className="socialLink" href='https://www.linkedin.com/in/cobihopkins/' rel="noreferrer"target='_blank'><LinkedinOutlined /></a>
        <Divider type="vertical" style={{padding: 10}}z />
        <a className="socialLink" href='https://twitter.com/CeeJaeRL' target='_blank' rel="noreferrer"><XOutlined /></a> */

export default SocialLinks;