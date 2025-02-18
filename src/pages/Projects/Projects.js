import { useContext } from 'react';
import { ProjectContext } from '../../contexts/projects';
import { Stack, Box, Typography } from '@mui/material';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import BannerWithSingleText from '../../components/BannerWithSingleText/BannerWithSingleText';

const Projects = () => {

    const { projects, loading, error } = useContext(ProjectContext);

    return (
        <Stack component="section" direction="column" spacing={5} alignItems="center" sx={{ marginTop: 5}}>
            <BannerWithSingleText title="Welcome to my projects" />
            <Box component="section">
                { loading && 
                <Typography variant="body1" sx={{ color: 'primary.light' }}>
                    Loading Projects...
                </Typography> }
                { projects && <ProjectGrid projects={projects} /> }
            </Box>
        </Stack>
    );
}

export default Projects;