import React from 'react';
import { Divider } from "@mui/material";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import SkillCard from "../../components/SkillCard/SkillCard";
import TextImageComponent from "../../components/TextImageComponent/TextImageComponent";

import { FaGitAlt, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpDuotone } from "react-icons/pi";

import Grading from "../../assets/undraw_grading.svg";
import Graduation from "../../assets/undraw_graduation.svg";

const AwardData = [
    {id: 1, title: "Highest Achieving Student", date: "2015 - 2016", provider: "Warwickshire College", description: "Was the highest achieving student on my Level 2 IT course."},
    {id: 2, title: "Student of the Year", date: "2017-2018", provider: "Warwickshire College", description: "Awarded for the quality of my work on my Level 3 IT course, whilst also supporting my peers."},
    {id: 3, title: "Outstanding Achievement", date: "2016-2018", provider: "Warwickshire College", description: "Awarded for achieving D*D*D on my Level 3 IT course."}
]

const HeroDescriptions = [
    "Let's collaborate and build accessible web applications",
    "I'm a web developer with a passion for design and user experience",
    "Commited to making technology more inclusive and accessible for everyone."
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
    return (
        <section id="home">
                <Hero 
                    title="Hey, I'm Cobi"
                    description={HeroDescriptions}    
                />
                <section className="skills">
                    <h2 style={{margin: 0, fontSize: 48, fontWeight: 100, color: "white", padding: 40}}>Skills</h2>
                    <main className="skill-container">
                        {SkillData.map((skill) => (
                            <SkillCard 
                                key={skill.id}
                                title={skill.name}
                                description={skill.description}
                                icon={skill.icon}
                            />
                        ))}
                    </main>
                </section>
                <section style={{
                    background: "linear-gradient(#1E1E1E, #242424)",
                    padding: "0px 20px"
                }}>
                    <TextImageComponent
                        title="Highest Achieving Student"
                        text="  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate mauris quis diam vulputate ultricies. Vestibulum ultrices arcu vitae libero sollicitudin eleifend sit amet auctor dolor. Aliquam ante dolor, varius nec molestie ac, dictum sollicitudin leo. Duis ut lorem et est gravida malesuada. Mauris a erat elit. Maecenas ornare nulla diam, nec pulvinar sapien molestie vitae. Pellentesque interdum, mi ut interdum suscipit, elit risus sodales nisi, ac luctus nunc ex eget massa. Aenean orci sapien, luctus quis porttitor et, porta et mauris. Integer consectetur sapien eget dui accumsan fringilla. Sed hendrerit ultrices elit id suscipit."
                        imageSrc={Grading}
                        imageAlt="Illustration"
                        imageOnLeft={true}
                    />

                </section>
        </section>
    );
}

export default Home;