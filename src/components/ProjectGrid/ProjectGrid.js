import TextImageComponent from "../TextImageComponent/TextImageComponent";
import { Stack } from "@mui/material";

const ProjectGrid = ({projects}) => {


    return (
        <Stack direction="column" alignContent="center" justifyContent="center">
            {projects.map((project, index) => (
                <TextImageComponent 
                    key={index}
                    title={project.title}
                    text={project.description}
                    imageSize="medium"
                    buttonText="Read More"
                    buttonHref={`projects/${project.ID}`}
                />
            ))}
        </Stack>
    );
}

export default ProjectGrid;