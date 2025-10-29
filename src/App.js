
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, yellow } from '@mui/material/colors';

import './App.css';


// Importing Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Error from "./pages/Error/Error";

// Import my Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { ProjectProvider } from './contexts/projects';

// Main theme for the application.
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