import Hero from "./hero/Hero.js"
import SubContainer from "./SubContainer.js";
import '../styles/mainContainer.css'

function MainContainer() {

    return (
        <div className={"intro"}>
            <Hero />
            <SubContainer />
        </div>
    );
}

export default MainContainer;