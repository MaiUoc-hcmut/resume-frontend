import React from 'react';

const ProjectCard = (props) => {
    return (
        <article className='project-card'>
            <img src={props.image} alt="Project thumbnail" className='project-image' />
            <h4>{props.name}</h4>

            <div className="demo">
                <a href='https://github.com/' target='_blank' className='btn'>Github</a>
                <a href='https://github.com/' target='_blank' className='btn btn-primary'>Demo</a>
            </div>
        </article>
    );
};

export default ProjectCard;