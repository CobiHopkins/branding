import React, { useState } from 'react';

import { GithubOutlined } from '@ant-design/icons';
import './projectcard.css';

const ProjectData = [
	{
		name: "Autism Assistance (Chrome Extension)",
		desc: "As part of my dissertation, I developed a Google Chrome extension to aid individuals with Autism whilst navigating the digital world. Throughout this project, I utilized several technologies including HTML, CSS, and JavaScript. The extension provides several features that can be used to improve accessibility, including a colour overlay for any site, an option to mute all browser tabs/windows, and the changing of the colour scheme for certain websites.",
		imgSrc: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		name: "Rest Web API - NodeJS (Koa)",
		desc: "A social media API developed as part of my university course using NodeJS. This project provided me with the opportunity to explore several frameworks and development tools including KoaJS for backend, Passport.js for authentication via JWTs, and RBAC for enabling different levels of access based on user roles (user, admin, moderator, etc). The development of this project gave me a deeper insight into how internal and public APIs are developed and consumed.",
		imgSrc: "https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		url: "https://github.coventry.ac.uk/hopkin70/6003CEM_backend_cw"
	},
	{
		name: "MentalTracker App - C# (.NET MAUI)",
		desc: "An Android application designed to support people with mental health issues. Developed using C# (.NET MAUI) using MVVM and Supabase. I gained experience working with PostgreSQL and applying valuable authentication procedures throughout this project.",
		imgSrc: "https://img.businessoffashion.com/resizer/v2/https%3A%2F%2Fprod-bof-media.s3.eu-west-1.amazonaws.com%2Fimport%2Fprofiles%2Fasset%2F1577151615231141%2Fselena-gomez-1577151796839511.png?auth=2bce9aee8e40b2c4f3f4b0ff0cfaad50f37b150110fdbf537787be9ce979a8ab&height=350",
		url: "https://github.coventry.ac.uk/hopkin70/6002CEM_CobiHopkins"
	}
];

function ProjectCard() {
	
	const [selectedProject, setSelectedProject] = useState(0);

    //useEffect to add animations.
	
	return (
		<div className="projectCard" id="projects">
			<div className="projectCardImg">
				<img src={ProjectData[selectedProject].imgSrc} alt="#"/>
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
				<div className="sideBtn" onClick={() => setSelectedProject(0)}></div>
				<div className="sideBtn activeBtn" onClick={() => setSelectedProject(1)}></div>
				<div className="sideBtn" onClick={() => setSelectedProject(2)}></div>
			</div>
		</div>
	)
}

export default ProjectCard;