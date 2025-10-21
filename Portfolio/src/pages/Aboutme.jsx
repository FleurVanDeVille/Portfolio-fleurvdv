import "./Aboutme.css";
import aboutmeimg from "../assets/aboutme_img.png";

function Aboutme() {
    return (
        <div className="aboutme-page" id="aboutme-page">
            <div className="aboutme-text">
                <h1>ABOUT ME</h1>
                <p>Hi! I’m Fleur Van De Ville, and I’m a 20-year-old Multimedia and 
                    Creative Technology student. I’m passionate about design, 
                    especially web design. With experience in programming, I can work 
                    well with technical teams to bring designs to life. Outside of my 
                    studies, I love volleyball and traveling, which constantly inspire 
                    my creative work. I spent a year in the US pursuing my dreams, which 
                    taught me independence, flexibility, and the value of new insights. I’m 
                    driven, curious, and always ready for new challenges that combine 
                    creativity with technology!</p>
            </div>
            <div className="image-container">
                <img src={aboutmeimg} id="aboutmeimg" alt="About me" />
            </div>
        </div>
    );
}

export default Aboutme;
