import '../../styles/projects.css'
import Cards from "./Cards.js"


//Projects contains projects, projectCards and Cards


function Projects() {



    return (
        <div className={"projects"}>
            <h2 className={"projectsHeader"} id={"myProjects"}>
                My Projects
            </h2>

            <div className={"projectCards"}>
                <Cards />
            </div>
        </div>
    );
}

export default Projects;