import "./Resume.css"
import ResumeImg from "./Resume.png"

function Resume(){
    return(
        <div className="Resume">
            <header className="Resume-header">
                My Resume
            </header>
            <p className="Resume-Para">See a preview of my resume below and a link to the most up to date version of my resume:</p>
            <hr className="Resume-hr"></hr>
            <a className="Resume-Button" href= "https://docs.google.com/document/d/1kAh-jHbJfAML0TQ8X9UeDCTkSDaN5GiY/edit?usp=sharing&ouid=108877786211028580908&rtpof=true&sd=true">Full Resume</a>
            <hr className="Resume-hr"></hr>
            <img className="Resume-IMG" src={ResumeImg} alt="Alec Odell's Resume"></img>
        </div>

    );
}

export default Resume;