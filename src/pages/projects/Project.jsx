import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Image from '../../assets/Image';
import './Project.css'

const Project = () => {
    return (
        <section id='project'>
            <h3>Project</h3>

            <div className="container project-container">
                <ProjectCard 
                    image={Image.Ecommerce}
                    name='ZFashion'
                />

                <ProjectCard 
                    image={Image.Ecommerce}
                    name='ZFashion'
                />

                <ProjectCard 
                    image={Image.Ecommerce}
                    name='ZFashion'
                />
            </div>
        </section>
    );
};

export default Project;