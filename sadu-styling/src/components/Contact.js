import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
        <h1 className="contact-header-text">Contact</h1>
        <img src="https://images.unsplash.com/photo-1608461864721-b8f50c91c147?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sadu" className="contact-header-image" />

        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Details</h1>
            </div>
            <div className="contact-section">
                <div className="contact-column">
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+1-667-223-3698</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>contact@sadustyling.com</p>
                    </div>
                </div>
                <div className="contact-column">
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>Alexandria, VA, USA (+4 GMT)</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>@sadu_styling</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;