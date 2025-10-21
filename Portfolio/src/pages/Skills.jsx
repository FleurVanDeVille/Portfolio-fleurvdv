import "./Skills.css";
import Figma from "../assets/figma.png";
import AdobeXD from "../assets/xd.png";
import AdobeIllustrator from "../assets/illustrator.png";
import AdobeInDesign from "../assets/indesign.png";
import AdobePhotoshop from "../assets/photoshop.png";
import AdobeAfterEffects from "../assets/after-effects.png";
import AdobePremierePro from "../assets/premiere-pro.png";
import Html from "../assets/html-5.png";
import Css from "../assets/css-3.png";
import ReactLogo from "../assets/science.png";

function Skills() {
	return (
		<div className="skills-page">
			<div className="skills-title">
				<h1>TOOLS & SKILLS</h1>
			</div>
			<div className="skills-container">
				<div className="skills-item">
					<img src={Figma} id="aboutmeimg" alt="About me" />
					<h3>Figma</h3>
				</div>
				<div className="skills-item">
					<img src={AdobeXD} id="aboutmeimg" alt="About me" />
					<h3>Adobe XD</h3>
				</div>
				<div className="skills-item">
					<img src={AdobeIllustrator} id="aboutmeimg" alt="About me" />
					<h3>Adobe Illustrator</h3>
				</div>
				<div className="skills-item">
					<img src={AdobeInDesign} id="aboutmeimg" alt="About me" />
					<h3>Adobe InDesign</h3>
				</div>
				<div className="skills-item">
					<img src={AdobePhotoshop} id="aboutmeimg" alt="About me" />
					<h3>Adobe Photoshop</h3>
				</div>
				<div className="skills-item">
					<img src={AdobeAfterEffects} id="aboutmeimg" alt="About me" />
					<h3>Adobe After Effects</h3>
				</div>
				<div className="skills-item">
					<img src={AdobePremierePro} id="aboutmeimg" alt="About me" />
					<h3>Adobe Premiere Pro</h3>
				</div>
				<div className="skills-item">
					<img src={Html} id="aboutmeimg" alt="About me" />
					<h3>Html</h3>
				</div>
				<div className="skills-item">
					<img src={Css} id="aboutmeimg" alt="About me" />
					<h3>CSS</h3>
				</div>
				<div className="skills-item">
					<img src={ReactLogo} id="aboutmeimg" alt="About me" />
					<h3>React</h3>
				</div>
			</div>
		</div>
	);
}

export default Skills;
