import React, { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';

import emailjs from 'emailjs-com';

import ContactCard from '../../components/ContactCard';
import { toastNotify } from '../../utils/toast';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tvjrwlv', 'template_o6g11oj', form.current, 'Qufnd_gqTLLl2Bojt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        toastNotify('Message sent')
        e.target.reset();
    };
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

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' id='name' placeholder='Your Name' required />
                    <input type="email" name="email" id="email" placeholder='Your Email' />
                    <textarea name="contactMessage" id="contact-message" rows="10" placeholder='Your Message'>

                    </textarea>

                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;