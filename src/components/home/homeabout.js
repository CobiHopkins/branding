import './about.css';
import GraduationImage from '../../assets/me_graduation_july2024.jpg';
import AnimationFadeIn from '../animationFadeIn/animationFadeIn';

const moduleList = [
    "Web API Development",
    "Mobile Application Development",
    "Computer Security",
    "Dissertation",
    "Theory of Computation",
    "Machine Learning & AI"
]


function HomeAbout() {

    return (

        <div class="about">
            <AnimationFadeIn delay={2}>
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
            </AnimationFadeIn>
        </div>

    );
}

export default HomeAbout;