import { useContext } from 'react';
import { ProjectContext } from '../../contexts/projects';
import { Stack, Box, Typography } from '@mui/material';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import BannerWithSingleText from '../../components/BannerWithSingleText/BannerWithSingleText';
import AnimatedLoadingBalls from '../../components/AnimatedLoadingBalls/AnimatedLoadingBalls';

const Projects = () => {

    const { projects, loading } = useContext(ProjectContext);

    return (
        <Stack component="section" direction="column" spacing={5} alignItems="center" sx={{ marginTop: 5}}>
            <BannerWithSingleText title="Welcome to my projects" />
            <Box component="section">
                { loading && 
                    <Stack direction="column" alignContent="center" justifyContent="center" sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary">Loading Projects...</Typography>
                        <AnimatedLoadingBalls />
                    </Stack> }
                { projects && <ProjectGrid projects={projects} /> }
            </Box>
        </Stack>
    );
}

export default Projects;