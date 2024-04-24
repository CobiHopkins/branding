import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <>
            <div className='brand' />
            <Menu theme='dark' style={{backgroundColor: '#2E4053'}} mode='horizontal' defaultSelectedKeys={1}>
                <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key='2'><Link to='/projects'>Projects</Link></Menu.Item>
            </Menu>
        </>
    )
}

export default Nav;