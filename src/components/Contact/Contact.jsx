import React, { useRef }  from "react";
import './Contact.css';
import emailjs, { init } from "@emailjs/browser";

export function Contact() {

    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current)
            .then(() => {
                alert('Message sent');
                form.current.reset();
            }).catch(() => {
                alert('Message failed');
            });
    }

    return (
        <section id="contact">
            <div id="contact-container">
                <div id="contact-image">
                    <img src={process.env.PUBLIC_URL + "/images/contact_pic.jpg"} alt="pic by Diego Gennaro on Unsplash" />
                </div>
                <div id="contact-section">
                    <header id="contact-header">Get in touch</header>
                    <div id="contact-form-container">
                        <form id="contact-form" onSubmit={handleSubmit} ref={form}>
                            <input type="text" id="name" name="name" placeholder="Full Name" className="form-control" required />
                            <input type="email" id="email" name="email" placeholder="Email" className="form-control" required />
                            <textarea id="message" name="message" placeholder="Enter your message" className="form-control"></textarea>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                        <div id="contact-info">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fa fa-solid fa-camera-retro fa-3x"></i>
                                    </div>
                                    <div className="description">
                                        <p>giovannicabreramoreno@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fa fa-solid fa-magic fa-3x"></i>
                                    </div>
                                    <div className="description">
                                        <p>Las Palmas de Gran Canaria</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>            
    )
}