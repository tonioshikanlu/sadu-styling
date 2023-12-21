import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
        <h1 className="contact-header-text">Contact</h1>
        <img src="https://images.unsplash.com/photo-1602070945737-067cfd04174c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sadu" className="contact-header-image" />

        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-section">
                <div className="contact-column">
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+1 (667) 228-1329</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>
                        <a href='mailto:contact@sadustyling.com'>
                    contact@sadustyling.com
                  </a> </p>
                    </div>
                </div>
                <div className="contact-column">
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>Washington DC, USA (-5 GMT)</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href='https://www.instagram.com/sadustyling/' target='_blank' rel='noopener noreferrer'>
                            <p>@sadustyling</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;