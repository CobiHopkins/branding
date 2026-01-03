import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./styles/themes";

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

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
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