import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Nav from './components/navigation/nav';
import Home from './components/home/home';

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Header style={{ backgroundColor: '#20242D', padding: 0}}>
        <Nav />
      </Header>

      <Home />
    </>
  )
}

export default App;