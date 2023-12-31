import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
        <h1 className="contact-header-text">CONTACT</h1>
        <img src="https://images.unsplash.com/photo-1623609163841-5e69d8c62cc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRyZXNzfGVufDB8fDB8fHww" alt="sadu" className="contact-header-image" />

        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-section contact-flex-container">
                <div className="contact-column">
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+1 (240) 685-6718</p>
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