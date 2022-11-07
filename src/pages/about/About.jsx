import React from 'react';
import './About.css'
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';
import AboutCard from '../../components/AboutCard';
import ReactReadMoreReadLess from "react-read-more-read-less";

import EditOption from '../../components/EditOption';

const About = (props) => {


    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-img">
                        <img src={ME} alt='Me' />
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <a href="#experience" className='about-card-wrapper'>
                            <AboutCard 
                                icon={<FaAward className='about-icon' />} 
                                title='Experience' 
                                detail='2 Month Intern at NOIS'
                            />
                        </a>
                        
                        {/* <a href="#education" className='about-card-wrapper'>
                            <AboutCard 
                                icon={<MdCastForEducation className='about-icon' />} 
                                title='Education' 
                                detail='Senior at HCMUT'
                            />
                        </a>
                        <a href="#project" className='about-card-wrapper'>
                            <AboutCard 
                                icon={<AiOutlineProject className='about-icon' />} 
                                title='Project' 
                                detail='3 Project Completed' 
                            />
                        </a> */}
                    </div>

                    <p>
                        <ReactReadMoreReadLess
                            charLimit={100}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                            readMoreClassName='read-more'
                            readLessClassName='read-less'
                        >
                            I like to play football, and I am a fan of one football club. 
                            I also like listening to music and reading books in my free
                            time. The topic of the book I like is Math, physics, and History. 
                            About the music is Pop and EDM.
                            I am confident in communication and enthusiastic about community activities. 
                            I can suffer the pressure as well as responsibility.
                        </ReactReadMoreReadLess>
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;