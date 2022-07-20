import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';

import ContactCard from '../../components/ContactCard';
import './Contact.css'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch To</h5>
            <h2>Contact With Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <ContactCard 
                        icon={<HiOutlineMail className='contact-icon' />}
                        option='Email'
                        address='uoc.mainguyen1410@gmail.com'
                        to='mailto:uoc.mainguyen1410@gmail.com'
                    />

                    <ContactCard 
                        icon={<FaFacebookF className='contact-icon' />}
                        option='Facebook'
                        address='Mai Ước'
                        to='https://www.facebook.com/ifhmnc'
                    />
                </div>

                <form action="">
                    <input type="text" name='name' id='name' placeholder='Your Name' required />
                    <input type="email" name="email" id="email" placeholder='Your Email' />
                    <textarea name="contact-message" id="contact-message" rows="10" placeholder='Your Message'>

                    </textarea>

                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;