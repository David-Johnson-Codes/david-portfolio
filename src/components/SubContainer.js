import AboutMe from "./aboutMe/AboutMe.js"
import Projects from "./projects/Projects.js"
import Contact from "./contact/Contact.js"
import Footer from "./footer/Footer.js"
import '../styles/subContainer.css'


function SubContainer() {

    return (
        <div className={"sub"}>
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default SubContainer;