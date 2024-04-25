import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Nav from './components/nav';
import Home from './components/home';
import Projects from './components/projects';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Header style={{ backgroundColor: '#20242D'}}>
        <Nav />
      </Header>

      <Content>
        <Switch>
          <Route path='/' children={<Home />} exact />
          <Route path='/projects' children={<Projects />} />
        </Switch>
      </Content>
    </Router>
  )
}

export default App;