import React from 'react';
import { FaAward } from 'react-icons/fa';

const AboutCard = (props) => {
    return (
        <article className='about-card' onClick={props.onClick}>
            {props.icon}
            <h5>{props.title}</h5>
            <small>{props.detail}</small>
        </article>
    );
};

export default AboutCard;