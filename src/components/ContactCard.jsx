import React from 'react';

const ContactCard = (props) => {
    return (
        <article className='contact-option'>
            {props.icon}
            <h4>{props.option}</h4>
            <h5>{props.address}</h5>
            <a href={props.to} target='_blank'>Contact Via {props.option}</a>
        </article>
    );
};

export default ContactCard;