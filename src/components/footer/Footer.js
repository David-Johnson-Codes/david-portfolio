import '../../styles/footer.css'

function Footer() {



    return (
        <div className={"footer"}>
            <p className={"footerPara"}>
                &#169; David Johnson
            </p>
            <div className={"divIcon"}>
                <a aria-label="Linkedin link" target="_blank" href="https://www.linkedin.com/in/david-johnson-ba620494">
                    <i className={"fab fa-linkedin"} aria-hidden="true" />
                </a>
                <a aria-label="Github link" target="_blank" href="https://github.com/David-Johnson-Codes">
                    <i className={"fa-brands fa-github"} />
                </a>

            </div>

        </div >
    );
}

export default Footer;