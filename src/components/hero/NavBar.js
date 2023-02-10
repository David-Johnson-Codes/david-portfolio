import '../../styles/hero.css'
import { useState } from 'react'

function NavBar() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <span className={"navSpan"}>DAVIDJOHNSON.DEV</span>

            <ul id={"navbar"}
                className={toggle ? '#navbar active' : '#navbar'}>

                <li><a href="#aboutMe" className='active'>About</a></li>
                <li><a href="#myProjects">Projects</a></li>
                <li><a href="#contactMe">Contact</a></li>
            </ul>
            <div className={"navHamburger"}>
                <i
                    onClick={handleToggle}
                    className={toggle ? 'fas fa-times' : 'fas fa-bars'
                    } ></i>
            </div>

        </nav>
    );
}

export default NavBar;