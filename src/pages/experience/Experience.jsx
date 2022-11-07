import React from 'react';
import './Experience.css';
import Skill from '../../components/Skill';

const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <h3>My Experience</h3>
            <div className="my-skills">
                <h5>Web Development</h5>

                <div className="container skills-container">
                    <div className="frontend-skills">
                        <h3>Frontend Development</h3>
                        <div className="skill-content">
                            <Skill 
                                skill='HTML'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='CSS'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='Bootstrap'
                                level='Low Intermediate'
                            />
                            <Skill 
                                skill='JavaScript'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='ReactJS'
                                level='Low Experienced'
                            />
                            <Skill 
                                skill='React Native'
                                level='Basic'
                            />
                        </div>
                    </div>

                    <div className="backend-skills">
                    <h3>Backend Development</h3>
                        <div className="skill-content">
                            <Skill 
                                skill='NodeJS'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='PHP'
                                level='Basic'
                            />
                            <Skill 
                                skill='Python'
                                level='Basic'
                            />
                            <Skill 
                                skill='MongoDB'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='MySQL'
                                level='Low Intermediate'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="basic-knowledge">
                <h5>My Basic Knowledge</h5>

                <div className="container basic-knowledge-container">
                    <div className="knowledge">
                        <h3>About My Knowledge</h3>
                        <div className="knowledge-content">
                            <Skill 
                                skill='DSA'
                                level='High Intermediate'
                            />
                            <Skill 
                                skill='ADA'
                                level='Intermediate'
                            />
                            <Skill 
                                skill='PPL'
                                level='Low Intermediate'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="language">
                <h5>My Language Skills</h5>

                <div className="container basic-knowledge-container">
                    <div className="knowledge">
                        <h3>About My Language Skills</h3>
                        <div className="knowledge-content">
                            <Skill 
                                skill='English'
                                level='600+ Toeic 2 Skils'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;