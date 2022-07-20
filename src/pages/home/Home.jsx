import React from 'react';
import './Home.css'
import CTA from '../../components/CTA';
import ME from '../../assets/me.jpg';
import HeaderSocial from '../../components/HeaderSocial';

const Home = () => {
    return (
        <header>
            <div className="container home-container">
                <h5>Hello, I am</h5>
                <h2>Mai Nguyen Uoc</h2>
                <h5 className='text-light'>MERN Stack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt='Me' />
                </div>

                <a href='#contact' className='scroll-down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Home;