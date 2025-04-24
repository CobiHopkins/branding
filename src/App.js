import React from 'react';
import { Layout } from 'antd';
import './App.css';

import Nav from './components/navigation/nav';
import Home from './pages/Home/Home';

const { Header } = Layout;

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