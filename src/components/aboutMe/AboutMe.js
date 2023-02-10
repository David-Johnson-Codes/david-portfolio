//This is known as about
import '../../styles/aboutMe.css'
import David from "../../assets/David-Photo.jpg"

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque neque amet exercitationem eligendi eos aliquid odit tenetur hic, repellat impedit dolor doloribus error suscipit facere quae necessitatibus maiores nobis sequi! Hic voluptas maiores aliquam repellendus nisi, soluta quam aperiam sint?";
const paraOne = "My coding journey began with learning Python as a hobby in 2020. The first project I worked on was a simple bounce ball program. Since then, I've moved onto working with web development."
const paraTwo = "Web development impacts our daily lives and the use of sophisticated technology has peeked my interest. Thus, my enjoyment of problem solving and my ability to work well in a team will lead to success in this field.";
const paraThree = "Here are a few skills I've been working on recently:";

function AboutMe() {



    return (
        <div className="aboutMeContainer">

            <section className="aboutMeInfo">
                <h2 className={"aboutMeHeader"} id={"aboutMe"}>About Me</h2>
                <p className={"aboutMePara"}>{paraOne}</p>
                <p className={"aboutMePara"}>{paraTwo}</p>
                <p className={"aboutMePara"}>{paraThree}</p>
                <ul className={"aboutList"}>
                    <li className={"aboutListItem"}>Javascript</li>
                    <li className={"aboutListItem"}>HTML5</li>
                    <li className={"aboutListItem"}>CSS3</li>
                    <li className={"aboutListItem"}>Bootstrap</li>
                    <li className={"aboutListItem"}>React</li>
                    <li className={"aboutListItem"}>NextJS</li>
                </ul>
            </section>
            <div className={"photo"}>
                <img src={David} alt="David in forest" className={"photoDavid"} height={467} width={350} />
            </div>

        </div>
    );
}

export default AboutMe;