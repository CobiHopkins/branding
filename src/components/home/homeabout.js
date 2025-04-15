import React, {useRef, useEffect} from 'react';

import './about.css';
import GraduationImage from '../../assets/me_graduation_july2024.jpg';

import AnimationFadeIn from '../animationFadeIn/animationFadeIn';

const applyAnimation = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.add('about-animation');
    }
}

const moduleList = [
    "Web API Development",
    "Mobile Application Development",
    "Computer Security",
    "Dissertation",
    "Theory of Computation",
    "Machine Learning & AI"
]


function HomeAbout() {

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(applyAnimation, {threshold: 0.20});

        const currentRef = containerRef.current; 
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        }
    }, []);

    return (

        <div class="about">
            <div class="about-container">
                <div class="about-image">
                    <img src={GraduationImage} alt="Cobi at his graduation holding his degree certificate."/>
                </div>
                <div class="about-text">
                    <p>
                    Hello! I'm a full-stack developer holding a First-class honours degree in Computer Science. With a specialization in Web Development, I am passionate about creating accessible and impactful web applications. Currently, I am actively seeking professional development opportunities where I can hone my skills and broaden my knowledge base. I have a particular interest in leveraging technology to assist individuals with disabilities, aiming to make the digital world more inclusive for everyone. Some noteable areas of study include: 
                    </p>
                    <ul>
                        {moduleList.map((module, index) => {
                            return (
                                <AnimationFadeIn delay={index * 0.5}>
                                    <li>{module}</li>
                                </AnimationFadeIn>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default HomeAbout;