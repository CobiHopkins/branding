import React from 'react';
import Hero from "../components/Hero/Hero";
import Me from "../assets/me_green.jpg";

const HeroDescriptions = [
    "Let's collaborate and build accessible web applications",
    "I'm a web developer with a passion for design and user experience",
]

const Home = () => {
    return (
        <section id="home">
            <section className="fh-container centered-flex bg-gradient-ltb border-br25">
                <Hero 
                    avatar={Me}
                    avatarAltText="Cobi Hopkins created by an AI"
                    title="Hi, I'm Cobi Hopkins"
                    description={HeroDescriptions}    
                />
            </section>
        </section>
    );
}

export default Home;