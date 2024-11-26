import React from 'react';
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import AwardCard from "../../components/AwardCard/AwardCard";

import Me from "../../assets/me_green.jpg";

const AwardData = [
    {id: 1, title: "Highest Achieving Student", date: "2015 - 2016", provider: "Warwickshire College", description: "Was the highest achieving student on my Level 2 IT course."},
    {id: 2, title: "Student of the Year", date: "2017-2018", provider: "Warwickshire College", description: "Awarded for the quality of my work on my Level 3 IT course, whilst also supporting my peers."},
    {id: 3, title: "Outstanding Achievement", date: "2016-2018", provider: "Warwickshire College", description: "Awarded for achieving D*D*D on my Level 3 IT course."}
]

const HeroDescriptions = [
    "Let's collaborate and build accessible web applications",
    "I'm a web developer with a passion for design and user experience",
]

const Home = () => {
    return (
        <section id="home">
            <section className="fh-container centered-flex bg-gradient-ltb border-br150">
                <Hero 
                    avatar={Me}
                    avatarAltText="Cobi Hopkins created by an AI"
                    title="Hi, I'm Cobi Hopkins"
                    description={HeroDescriptions}    
                />
            </section>
            <section className="award-container">
                <main className="centered-flex border-brl100 bg-24 padding-20">
                    {AwardData.map((award) => {
                        return (
                            <AwardCard 
                                key={award.id}
                                title={award.title}
                                date={award.date}
                                provider={award.provider}
                                description={award.description}
                            />
                        );
                    })}
                </main>
            </section>
            <section className="about-container">
                <section className="padding-20 bg-gradient-ltb-alt">
                    <header className="about-header centered-flex">
                        <h1 className="txt-white" style={{textAlign: "center"}}>About Me</h1>
                    </header>
                    <main className="about-main">
                        <p className="txt-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mattis velit, ut accumsan sem. Nulla cursus velit eget dolor convallis placerat. Sed imperdiet dui id urna elementum, nec viverra quam efficitur. Pellentesque vel erat sollicitudin, faucibus arcu ac, consectetur ipsum. Aenean scelerisque id nibh ut varius. Integer sed sem vitae elit eleifend mattis. Sed gravida ullamcorper ligula, ut convallis tellus ullamcorper ut. Maecenas et dui pellentesque, gravida leo vel, lacinia tellus. In hendrerit volutpat augue, in pulvinar leo sollicitudin vitae. Donec nec diam odio. Suspendisse potenti. Donec cursus aliquam orci, vel feugiat massa sagittis eu.
                        </p>
                    </main>
                </section>
            </section>
        </section>
    );
}

export default Home;