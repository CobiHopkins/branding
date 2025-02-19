import { Stack } from "@mui/material";

import AnimationFadeIn from "../AnimationFadeIn/AnimationFadeIn";
import TextImageComponent from "../TextImageComponent/TextImageComponent";

const ProjectGrid = ({projects}) => {


    return (
        <Stack direction="column" alignContent="center" justifyContent="center">
            {projects.map((project, index) => (
                <AnimationFadeIn delay={index * 0.25}>
                    <TextImageComponent 
                        key={index}
                        title={project.title}
                        text={project.description}
                        imageSize="medium"
                        buttonText="Read More"
                        buttonHref={`projects/${project.ID}`}
                    />
                </AnimationFadeIn>
            ))}
        </Stack>
    );
}

export default ProjectGrid;