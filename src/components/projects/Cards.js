import '../../styles/projects.css'
import React, { Component } from 'react';
import ProjectCards from './ProjectCards';
import udevu from "../../assets/udevuWebsite.png"
import mmohype from "../../assets/MMOHYPE.png"
import lucas from "../../assets/lucas.jpg"
import ferret from "../../assets/ferret-rescue.jpg"

const webInfo = {
    'udevu':
    {
        'alt': "Udevu Website",
        'website': "https://udevu.dev/",
        'git': "https://github.com/joshstruve/UDEVU.DEV",
        'description': "A group project by UDEVU built with bootstrap to create a portal to our MeetUp group."
    },
    'MMOHYPE':
    {
        'alt': "MMOHYPE Website",
        'website': "https://shiny-cassata-b9fd0d.netlify.app/",
        'git': "https://github.com/David-Johnson-Codes/mmohype",
        'description': "An informative website for MMORPGs built with React with an emphasis on card components."
    },
    'lucas':
    {
        'alt': "Lucas Pizzeria Website",
        'website': "https://regal-crumble-07b28d.netlify.app/",
        'git': "https://github.com/David-Johnson-Codes/lucas-pizzeria",
        'description': "A template for a pizza ordering website built with NextJS, MongoDB, and CSS3."
    },
    'ferretRescue':
    {
        'alt': "Ferret Rescue Website",
        'website': "https://bespoke-biscuit-da1f0d.netlify.app/Adopt",
        'git': "https://github.com/David-Johnson-Codes/ferret-rescue",
        'description': "A simple website for ferret rescue to be donated to a local rescue built with NextJS."
    }
};

class Cards extends Component {
    render() {
        return (
            <div className={""}>
                <div className="row d-flex">
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                        <ProjectCards imgsrc={udevu} alt={webInfo.udevu.alt} title={"Udevu"} id={"something"} website={webInfo.udevu.website} git={webInfo.udevu.git} description={webInfo.udevu.description} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                        <ProjectCards imgsrc={mmohype} alt={webInfo.MMOHYPE.alt} title={"MMOHYPE"} website={webInfo.MMOHYPE.website} git={webInfo.MMOHYPE.git} description={webInfo.MMOHYPE.description} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                        <ProjectCards imgsrc={lucas} alt={webInfo.lucas.alt} title={"Lucas Pizzeria"} website={webInfo.lucas.website} git={webInfo.lucas.git} description={webInfo.lucas.description} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                        <ProjectCards imgsrc={ferret} alt={webInfo.ferretRescue.alt} title={"Ferret Rescue"} website={webInfo.ferretRescue.website} git={webInfo.ferretRescue.git} description={webInfo.ferretRescue.description} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;