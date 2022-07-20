import React from 'react';

import TestimonialCard from '../../components/TestimonialCard';
import Image from '../../assets/Image';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review About Me</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials-container">
                <TestimonialCard 
                    avatar={Image.Avatar}
                    name='Nguyen Van A'
                    review='I think this guy is so aweful, he is one of the most kindest people i ever met.
                    His service is very very good, I got A for DSA thanks to the assignment this guy did for me.'
                />

                <TestimonialCard 
                    avatar={Image.Avatar}
                    name='Nguyen Van A'
                    review='I think this guy is so aweful, he is one of the most kindest people i ever met.
                    His service is very very good, I got A for DSA thanks to the assignment this guy did for me.'
                />

                <TestimonialCard 
                    avatar={Image.Avatar}
                    name='Nguyen Van A'
                    review='I think this guy is so aweful, he is one of the most kindest people i ever met.
                    His service is very very good, I got A for DSA thanks to the assignment this guy did for me.'
                />
            </div>
        </section>
    );
};

export default Testimonial;