import "./Home.css";

// Import third-party components, functions, etc.
import { useContext } from 'react';
import { Box, Typography, Stack } from "@mui/material";

// Import external icons and assets.
import { FaGitAlt, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpDuotone } from "react-icons/pi";

// Import internal components, contexts, assets, and functions.
import Hero from "../../components/Hero/Hero";
import SkillCard from "../../components/SkillCard/SkillCard";
import TextImageComponent from "../../components/TextImageComponent/TextImageComponent";
import ThreeTierCard from '../../components/ThreeTierCard/ThreeTierCard';
import BaseButton from "../../components/BaseButton/BaseButton";
import AnimationFadeIn from "../../components/AnimationFadeIn/AnimationFadeIn";
import AnimatedLoadingBalls from "../../components/AnimatedLoadingBalls/AnimatedLoadingBalls";

import { ProjectContext } from '../../contexts/projects';

const AwardData = [
    {id: 1, title: "Highest Achieving Student", date: "2015 - 2016", description: "Achieved the Highest Achieving Student Award in a Level 2 IT course with a grade of Distinction*. Throughout the course, I studied a wide range of hardware and software modules, gaining a comprehensive understanding of both the theoretical and practical aspects of IT. This included in-depth learning about computer components, system architecture, and troubleshooting techniques. My ability to excel across these varied topics not only highlights my technical skills but also my commitment to mastering complex concepts, positioning me for continued success in the IT field.", imageSrc: "/assets/pexels-enginakyurt-2098578.jpg", imageAlt: "Blue and Yellow smokey environment with a golden trophy of a person in the center. (Image from Pexels)"},
    {id: 2, title: "Student of the Year", date: "2017-2018", description: "I was honored to receive the Student of the Year award, a recognition of my dedication, excellence in academics, and contributions to the learning environment. Throughout my studies, I focused on key areas such as computer systems, networking, mathematics for IT, and web/games development, consistently achieving high grades across all subjects. In addition to my academic success, I was recognized for my support of peers, always offering help and guidance when needed, and striving to create a collaborative, positive learning atmosphere. My willingness to go above and beyond what was required was instrumental in earning this prestigious award, reflecting my passion for IT and commitment to both personal and community growth.", imageSrc: "/assets/pexels-ds-stories-7267576.jpg", imageAlt: "A light blue background with a square block in the center with a coin-like trophy on top with the number 1 in the center ring. (Image from Pexels)"},
    {id: 3, title: "Outstanding Achievement", date: "2016-2018", description: "I was proud to receive the \"Outstanding Achievement\" award for my exceptional performance in the BTEC Level 3 course, where I achieved D*D*D, the equivalent of A*A*A at A-Levels. In addition to the 18 modules required for the course, I took the initiative to study an extra module purely out of personal interest, demonstrating my passion for IT and my eagerness to learn beyond the curriculum. Throughout the course, I consistently ranked at the top of the class, tackling complex problems and, on occasion, pushing beyond the boundaries of support that my lecturers could offer. This award reflects not only my academic excellence but also my dedication to pushing the boundaries of my knowledge and skills.", imageSrc: "/assets/pexels-n-voitkevich-6532374.jpg", imageAlt: "A yellow background with sparkly circles and two tilted trophies laying down. (Image from Pexels)"}
]

const HeroDescriptions = [
    "Let's collaborate and build accessible web applications",
    "I'm a web developer with a passion for design and user experience",
    "Commited to making technology more inclusive and accessible"
]

const SkillData = [
    {id: 1, name: "Git", description: "Version Control", icon: FaGitAlt},
    {id: 2, name: "JavaScript", description: "Vanilla, React", icon: IoLogoJavascript},
    {id: 3, name: "Python", description: "Scikit-Learn, NumPy, Pandas", icon: FaPython},
    {id: 4, name: "C#", description: ".NET MAUI", icon: PiFileCSharpDuotone},
    {id: 5, name: "HTML5", description: "Front-End Development", icon: FaHtml5},
    {id: 6, name: "CSS3", description: "SCSS, Bootstrap, Tailwind", icon: FaCss3Alt},
    {id: 7, name: "Figma", description: "UI Design", icon: FaFigma},
    {id: 8, name: "Databases", description: "SQL / NoSQL", icon: FaDatabase},
]

const Home = () => {

    const { projects, loading } = useContext(ProjectContext);

    return (
        <>
                <Hero 
                    title="Hey, I'm Cobi"
                    description={HeroDescriptions}
                    allowDescriptionAnimation={true}
                />
                <Box component="section" className="skills">

                    <Typography variant="h2" sx={{ mb: 2, color: "primary.light", textAlign: 'center' }}>Skills</Typography>
                    <Box component="main" className="skill-container">
                        {SkillData.map((skill, index) => (
                            <AnimationFadeIn delay={index * 0.25}>
                            <SkillCard 
                                key={skill.id}
                                title={skill.name}
                                description={skill.description}
                                icon={skill.icon}
                            />
                            </AnimationFadeIn>
                        ))}
                    </Box>
                </Box>
                <Box component="section" className="text-image-container">
                    {AwardData.map((award, index) => (
                        <AnimationFadeIn delay={1.5}>
                            <TextImageComponent
                                key={award.id}
                                title={award.title}
                                subtitle={award.date}
                                text={award.description}
                                imageSrc={award.imageSrc}
                                imageAlt={award.imageAlt}
                                imageOnRight={award.id % 2 === 0 ? false : true}
                                imageSize="large"
                            />
                        </AnimationFadeIn>
                    ))}
                </Box>
                <Box component="section" display="flex" flexDirection="column" alignItems="center" sx={{
                    margin: "40px 0px"
                }}>
                    <Typography variant="h2" color="primary.light" sx={{ textAlign: 'center' }}>Recent Projects</Typography>
                    <Stack direction="row" spacing={0} alignContent="center" justifyContent="center" flexWrap="wrap" sx={{ margin: "20px 0px"}}>
                    { loading && 
                    <Stack direction="column" alignContent="center" justifyContent="center" sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" color="primary">Loading Projects...</Typography>
                        <AnimatedLoadingBalls pxSize={20} />
                    </Stack> }
                        {projects &&
                            projects.slice(0, 3).map((project, index) => (
                                <AnimationFadeIn delay={index}>
                                <ThreeTierCard
                                    key={project.ID}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    footerLinkHref={`/projects/${project.ID}`}
                                    footerLinkText={`Read more about ${project.title}`}
                                />
                                </AnimationFadeIn>
                            ))
                        }
                    </Stack>
                    <BaseButton component="a" href="projects" variant="outlined" color="secondary" text="View More" />
                </Box>
        </>
    );
}

export default Home;