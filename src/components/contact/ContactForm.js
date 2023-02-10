import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/contact.css'
//import styled from "styled-components";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            '<your info here>',//you'll need your info here from emailjs
            '<your info here>',//you'll need your info here from emailjs
            form.current,
            '<your info here>'//you'll need your info here from emailjs
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <form ref={form} onSubmit={sendEmail}>
            <div className={"inputContainer"}>

                <input aria-label="Name" className="contactFields contactInput" type="text" name="user_name" placeholder="Name" />

                <input aria-label="Email" className="contactFields contactInput" type="email" name="user_email" placeholder="Email" />
            </div>
            <textarea aria-label="Message" className="contactFields contactTextArea" name="message" placeholder="Message" />
            <input className="submitForm" type="submit" value="Submit" />
        </form>

    );
};

export default ContactUs;
