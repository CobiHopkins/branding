import React, {useRef, useEffect} from 'react';

import './about.css';
import GraduationImage from '../../assets/me_graduation_july2024.jpg';

const applyAnimation = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.add('about-animation');
    }
}


function HomeAbout() {

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(applyAnimation, {threshold: 0.20});
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
            observer.disconnect();
        }
    }, []);

    return (

        <div class="about">
            <div class="about-container" ref={containerRef}>
                <div class="about-image">
                    <img src={GraduationImage} alt="Cobi at his graduation holding his degree certificate." />
                </div>
                <div class="about-text">
                    <p>
                    Hello! I'm a recent graduate from Coventry University, holding a First-class honours degree in Computer Science. With a specialization in Web Development, I am passionate about creating accessible and impactful web applications. Currently, I am actively seeking professional development opportunities where I can hone my skills and broaden my knowledge base. I have a particular interest in leveraging technology to assist individuals with disabilities, aiming to make the digital world more inclusive for everyone. Some noteable areas of study are: 
                    </p>
                    <ul>
                        <li>Web API Development</li>
                        <li>Mobile Application Development</li>
                        <li>Computer Security</li>
                        <li>Dissertation</li>
                        <li>Theory of Computation</li>
                        <li>Machine Learning & AI</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default HomeAbout;