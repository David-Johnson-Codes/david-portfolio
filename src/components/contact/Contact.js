import '../../styles/contact.css'
import ContactUs from "./ContactForm.js"

function Contact() {

    return (
        <div className={"contact"}>
            <h2 className={"contactHeader"} id={"contactMe"}>Contact</h2>
            <p className={"contactPara"}>
                Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </p>
            <ContactUs />
        </div>
    );
}

export default Contact;