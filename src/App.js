
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import defaultTheme from "./styles/definitions/default.json";

import './App.css';


// Importing Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import Error from "./pages/Error/Error";

// Import my Components
import ProjectDetails from './components/DataDisplay/ProjectDetails/ProjectDetails';
import NavBar from './components/Navigation/NavBar/NavBar';
import Footer from './components/Layouts/Footer/Footer';
import { ProjectProvider } from './contexts/projects';

// Main theme for the application.
const theme = createTheme(defaultTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ProjectProvider>
    </ThemeProvider>
  )
}

export default App;