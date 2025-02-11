import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import './App.css';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Error from "./pages/Error/Error";
import { grey, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: yellow
  },
  typography: {
    large: {
      fontSize: 32,
      fontWeight: 300,
    },
    xlarge: {
      fontSize: 48,
      fontWeight: 300,
    },
    xxlarge: {
      fontSize: 72,
      fontWeight: 300,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;