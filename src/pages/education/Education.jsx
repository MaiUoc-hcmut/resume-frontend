import React from 'react';
import './Education.css';
import Skill from '../../components/Skill';

const Education = () => {
    return (
        <section id='education'>
            <h3>Education And Certified</h3>

            <div className="container education-and-certified-container">
                <div className="education">
                    <h3>Education</h3>

                    <div className="education-content">
                        <Skill
                            skill='GPA'
                            level={6.8}
                        />
                    </div>
                </div>

                <div className="certified">
                    <h3>Certified</h3>

                    <div className="certified-content"></div>
                </div>
            </div>
        </section>
    );
};

export default Education;