import { Stack, Box, Typography, Link } from "@mui/material";
import { FaGithub } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

// My component imports
import { ProjectContext } from "../../contexts/projects";
import BaseButton from "../BaseButton/BaseButton";
import BannerWithSingleText from '../BannerWithSingleText/BannerWithSingleText';
import TagPill from '../TagPill/TagPill';


const ProjectDetails = ({}) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { projects, loading, error } = useContext(ProjectContext);

    const project = projects.filter(p => p.ID === Number(id));

    if (loading) {
        return <h1>Loading project...</h1>
    }

    if (!loading && project.length === 0) {
        navigate('/error');
        return;
    }

// todo: complete layout.
    return (
        <>
            <BannerWithSingleText title={project[0].title} />

            <Stack component="section" direction="column" display="flex" alignItems="center" spacing={5}>
                <Box component="header" display="flex" flexDirection="row">
                    {/* { tags.map((tag, index) => (
                            <TagPill
                                key={index}
                                name={tag.name}
                                colour={tag.colour} />
                    ))} */}
                </Box>
                <Stack component="main" direction="row" display="flex" spacing={1} sx={{ minWidth: "75vw"}}>
                    <Box variant="main" flex="0 0 75%">
                        <Typography variant="body1" sx={{ color: "primary.light" }}>
                            {project[0].description}
                        </Typography>
                    </Box>
                    <Box variant="section" display="flex" justifyContent="center" alignContent="center" flex="1">
                        <Typography variant="xlarge" sx={{ color: "primary.light" }}>
                            <Link href={project[0].url} underline="none" rel="noopener noreferrer" target="_blank"><FaGithub /></Link> 
                        </Typography>  
                    </Box>
                </Stack>

            </Stack>
        </>
    )
}

export default ProjectDetails;