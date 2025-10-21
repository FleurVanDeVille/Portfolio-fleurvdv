import "./Home.css";
import homeImg from "../assets/home_img.png";
import { motion } from "framer-motion";

function Home() {
	const title = "WEB DESIGNER";
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.08,
			},
		},
	};

	const letter = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,     
			},
		},
	};

	return (
		<div className="home-page" id="home-page">
			<div className="hero">
				<motion.h1
					className="hero-title"
					variants={container}
					initial="hidden"
					animate="visible"
				>
					{title.split("").map((char, index) => (
						<motion.span key={index} variants={letter}>
							{char === " " ? "\u00A0" : char}
						</motion.span>
					))}
				</motion.h1>
			</div>
			<p id="naam">FLEUR VAN DE VILLE</p>
			<div className="image-container">
				<div className="grey-box"></div>

				<div className="text-overlay">
					<h3>WEB DESIGN</h3>
					<h3>GRAPHIC DESIGNER</h3>
					<h3>FRONTEND</h3>
				</div>

				<img src={homeImg} id="homeimg" alt="Home" />
			</div>

			<h3 id="getInTouch">GET IN TOUCH!</h3>
			<h3 id="email">VAN.DE.VILLE.FLEUR@GMAIL.COM</h3>
		</div>
	);
}

export default Home;
