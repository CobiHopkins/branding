import React, { useState } from 'react';

import { GithubOutlined } from '@ant-design/icons';
import './projectcard.css';

const ProjectData = [
	{
		name: "Autism Assistance (Chrome Extension)",
		desc: "As part of my dissertation, I developed a Google Chrome extension to aid individuals with Autism whilst navigating the digital world. Throughout this project, I utilized several technologies including HTML, CSS, and JavaScript. The extension provides several features that can be used to improve accessibility, including a colour overlay for any site, an option to mute all browser tabs/windows, and the changing of the colour scheme for certain websites.",
		imgSrc: "https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1", 
		url: "https://github.coventry.ac.uk/hopkin70/6001CEM-Chrome-Extension"
	},
	{
		name: "Rest Web API - NodeJS (Koa)",
		desc: "Suspendisse non ligula id lectus tincidunt accumsan. Donec sagittis elementum orci, sed efficitur nisl finibus et. Quisque mi felis, rutrum ac tristique quis, tristique non urna. Etiam ut ligula at lorem eleifend laoreet. Suspendisse mattis et lectus a eleifend. Vivamus suscipit urna vitae leo dictum aliquet. Integer in tellus lectus. Nulla facilisi.",
		imgSrc: "https://s.yimg.com/ny/api/res/1.2/VA9CA8yfqUvM9JDKMSJHig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxNA--/https://media.zenfs.com/en/aol_uk_yahoo_celebrity_us_477/f2626b27de5c3e8846c7e08bf1bf1d17",
		url: "https://github.coventry.ac.uk/hopkin70/6003CEM_backend_cw"
	},
	{
		name: "MentalTracker App - C# (.NET MAUI)",
		desc: "Aliquam a interdum arcu, vitae lacinia odio. Sed quam tellus, congue in arcu id, vestibulum lobortis neque. Maecenas rhoncus ac ante sit amet lobortis. Maecenas pharetra nibh nunc, quis tincidunt erat mattis sit amet. Aenean vehicula vulputate justo, eget mollis metus aliquam at. Morbi feugiat sollicitudin mauris vel bibendum.",
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
						<a href={ProjectData[selectedProject].url}><GithubOutlined /></a>
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