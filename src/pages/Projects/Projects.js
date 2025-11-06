import { useContext, useState } from 'react';
import { ProjectContext } from '../../contexts/projects';
import { Stack, Box, Typography } from '@mui/material';
import ProjectGrid from "../../components/DataDisplay/ProjectGrid/ProjectGrid";
import BannerWithSingleText from '../../components/Layouts/BannerWithSingleText/BannerWithSingleText';
import AnimatedLoadingBalls from '../../components/Animations/AnimatedLoadingBalls/AnimatedLoadingBalls';
import ListGridLayout from '../../components/Layouts/ListGridLayout/ListGridLayout';

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