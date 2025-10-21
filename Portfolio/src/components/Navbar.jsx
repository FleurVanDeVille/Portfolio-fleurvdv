import logo from "../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />
			<div className="nav-search">
				<div className="nav">
					<a href="#projects">Projects</a>
					<a href="#aboutme-page">About me</a>
					<a href="#footer">Contact</a>
				</div>
			</div>
		</header>
	);
} 

export default Navbar;