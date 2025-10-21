import "./Projects.css";
import travelo from "../assets/project1_zw.png";
import traveloHover from "../assets/project1.png";
import resq from "../assets/resq_zw.png";
import resqHover from "../assets/resq.png";
import walkmydog from "../assets/honden_zw.png";
import walkmydogHover from "../assets/honden.png";
import rect from "../assets/black_rect.svg";

function Projects() {
	return (
		<div className="projects" id="projects">
			<h1>PROJECTS</h1>
			<div className="project-list">
				<div className="project-item">
					<div className="project-thumb">
						<img className="main" src={travelo} alt="Travelo project" />
						<img className="hover" src={traveloHover} alt="Travelo hover" />
					</div>
					<h3>Travelo</h3>
					<p>Figma - Html - CSS - JavaScript - MongoDB - Express.js</p>
				</div>

				<div className="project-item">
					<div className="project-thumb">
						<img className="main" src={resq} alt="ResQ project" />
						<img className="hover" src={resqHover} alt="ResQ hover" />
					</div>
					<h3>ResQ</h3>
					<p>Figma</p>
				</div>

				<div className="project-item">
					<div className="project-thumb">
						<img className="main" src={walkmydog} alt="WalkMyDog project" />
						<img className="hover" src={walkmydogHover} alt="WalkMyDog hover" />
					</div>
					<h3>WalkMyDog</h3>
					<p>Figma - Swift</p>
				</div>

				<div className="project-item">
					<img className="main" src={rect} alt="Coming soon" />
					<h3>Coming soon...</h3>
				</div>
			</div>
		</div>
	);
}

export default Projects;
