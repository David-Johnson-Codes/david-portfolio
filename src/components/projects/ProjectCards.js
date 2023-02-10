import '../../styles/projects.css'
import 'bootstrap/dist/css/bootstrap.min.css';


//some notes about using this card. Must install Bootstrap with
//npm install react-bootstrap bootstrap
//code for the card using boot strap comes from
//https://react-bootstrap.github.io/components/cards/
//Since this component takes one picture url, I'll have to figure out how to change images without
//having to make x amount of card components.


const ProjectCards = props => {
    return (
        <div className="card text-left shadow">
            <div className="overflow">
                <a href="#">
                    <img src={props.imgsrc} alt={props.alt} className={"cardImgTop"} />
                </a>
            </div>
            <div className="card-body">
                <h3 className="cardHeader card-title">
                    {props.title}
                </h3>
                <p className={"card-text text-secondary"} id={"cardPara"}>
                    {props.description}
                </p>
                <div className={"btnContainer"}>
                    <a target="_blank" href={props.website} className={"anchorButton first"}>View Live Site</a>
                    <a target="_blank" href={props.git} className={"anchorButton second"}>View GitHub Repo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;

/*
    <h4 className="card-title">
                    <h4 className="card-text text-secondary cardText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita, aliquid nam nulla earum non maiores ad commodi omnis ipsa!
                    </h4>
                    <a href="#" className="btn btn-outline-success">Github</a>
                </h4>

*/