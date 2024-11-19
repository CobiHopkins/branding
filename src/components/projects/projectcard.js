import React, { useState } from 'react';

import { GithubOutlined } from '@ant-design/icons';

import SpaceImage from '../../assets/pexels-kubiceknov-924824.jpg';

import './projectcard.css';

const ProjectData = [
	{
		name: "Autism Assistance (Chrome Extension)",
		desc: "As part of my dissertation, I developed a Google Chrome extension to aid individuals with Autism whilst navigating the digital world. Throughout this project, I utilized several technologies including HTML, CSS, and JavaScript. The extension provides several features that can be used to improve accessibility, including a colour overlay for any site, an option to mute all browser tabs/windows, and the changing of the colour scheme for certain websites.",
		imgSrc: SpaceImage,
		url: "https://github.coventry.ac.uk/hopkin70/6001CEM-Chrome-Extension"
	},
	{
		name: "Rest API (NodeJS - Koa Backend)",
		desc: "A social media API developed as part of my university course using NodeJS. This project provided me with the opportunity to explore several frameworks and development tools including KoaJS for backend, Passport.js for authentication via JWTs, and RBAC for enabling different levels of access based on user roles (user, admin, moderator, etc). The development of this project gave me a deeper insight into how internal and public APIs are developed and consumed.",
		imgSrc: SpaceImage,
		url: "https://github.coventry.ac.uk/hopkin70/6003CEM_backend_cw"
	},
	{
		name: "MentalTracker App (Android App)",
		desc: "An Android application designed to support people with mental health issues. Developed using C# (.NET MAUI) using MVVM and Supabase. I gained experience working with PostgreSQL and applying valuable authentication procedures throughout this project. To most people, every day tasks are effortless. However, for people with mental health issues, these tasks can become chores and can be very difficult to achieve.",
		imgSrc: SpaceImage,
		url: "https://github.coventry.ac.uk/hopkin70/6002CEM_CobiHopkins"
	}
];

function ProjectCard() {
	
	const [selectedProject, setSelectedProject] = useState(0);

    //useEffect to add animations.
	
	return (
		<div className="projectCard" id="projects">
			<div className="projectCardImg">
				<img src={ProjectData[selectedProject].imgSrc} alt="Space with a large collection of stars."/>
			</div>
			<div className="projectCardContainer">
				<div className="projectCardHeader">
					<h2>{ProjectData[selectedProject].name}</h2>
				</div>
				<div className="projectCardBody">
					<p className="description">
						{ProjectData[selectedProject].desc}
					</p>
				</div>
				<div className="projectCardFooter">
					<div className="projectInfo">
						<a href={ProjectData[selectedProject].url} target="_blank" rel="noreferrer"><GithubOutlined /></a>
					</div>
				</div>
			</div>
			<div className="sideButtons">
				<div className={`sideBtn ${selectedProject === 0 ? "activeBtn" : undefined}`} onClick={() => setSelectedProject(0)}></div>
				<div className={`sideBtn ${selectedProject === 1 ? "activeBtn" : undefined}`} onClick={() => setSelectedProject(1)}></div>
				<div className={`sideBtn ${selectedProject === 2 ? "activeBtn" : undefined}`} onClick={() => setSelectedProject(2)}></div>
			</div>
		</div>
	)
}

export default ProjectCard;