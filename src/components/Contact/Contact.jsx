import React from "react";
import './Contact.css';

export function Contact() {

    return (
        <section id="contact">
            <div id="contact-container">
                <div id="contact-image">
                    <img src={process.env.PUBLIC_URL + "/images/contact_pic.jpg"} alt="pic by Diego Gennaro on Unsplash" />
                </div>
                <div id="contact-section">
                    <header>Get in touch</header>
                    <div id="contact-form-container">
                        <form id="contact-form">
                            <input type="text" id="name" placeholder="Full Name" class="form-control" required />
                            <input type="email" id="email" placeholder="Email" class="form-control" required />
                            <textarea id="message" placeholder="Enter your message" class="form-control"></textarea>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                        <div id="contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-solid fa-camera-retro fa-3x"></i>
                                    </div>
                                    <div class="description">
                                        <p>giovannicabreramoreno@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-solid fa-magic fa-3x"></i>
                                    </div>
                                    <div class="description">
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