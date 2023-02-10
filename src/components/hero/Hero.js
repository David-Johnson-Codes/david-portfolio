import NavBar from "./NavBar.js"
import '../../styles/hero.css'
import Background from "./Background.js"



//intro contains background
//Hero will contain navbar, background(particles) and hero (aka intro)
const name = " David";

function Hero() {



    return (
        <div className={"heroContainer"}>
            {/*<img className={"heroImg"} src={"/images/background.jpg"} alt={"why"} />*/}
            <NavBar />
            <div className={"heroIntro"}>
                <Background />
                <h1 className={"heroHeader"}>
                    Hello, I'm
                    <span className={"heroSpan"}>
                        {name} {/*Fix this br use whitespace*/}
                    </span>

                </h1>
                <p className={"heroPara"}>
                    {"I'm a "}
                    <span className={"heroSpanPara"}>front-end </span>
                    web developer
                </p>
            </div>

        </div>
    );
}

export default Hero;
