import AnimationFadeIn from "../../Animations/AnimationFadeIn/AnimationFadeIn";
import TextImageComponent from "../../Layouts/TextImageComponent/TextImageComponent";
import ListGridLayout from "../../Layouts/ListGridLayout/ListGridLayout";

const ProjectGrid = ({projects}) => {


    return (
        <ListGridLayout layoutType="column" itemSpacing={0}>
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
        </ListGridLayout>
    );
}

export default ProjectGrid;