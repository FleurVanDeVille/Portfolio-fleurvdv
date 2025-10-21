import logo from "../assets/logo-wit.svg";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer" id="footer">
			<div className="footer-left">
				<img src={logo} className="footer-logo" alt="logo" />
			</div>

			<div className="footer-right">
				<div className="contact-info">
					<h3>VAN.DE.VILLE.FLEUR@GMAIL.COM</h3>
					<h3>+32 475 52 82 09</h3>
					<a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://be.linkedin.com/in/fleur-van-de-ville-096467253&ved=2ahUKEwiwsuX8qbWQAxXZ1QIHHfpAFaQQFnoECBwQAQ&usg=AOvVaw0EFRD6DZ1_5NptVg2OiUT5">LINKEDIN</a>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="name">
					<h1>FLEUR VAN DE VILLE</h1>
				</div>
				<div className="back">
					<a href="/">Back to top!</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
