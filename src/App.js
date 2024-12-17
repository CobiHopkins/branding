import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App;