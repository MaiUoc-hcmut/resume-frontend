import React from 'react';

const TestimonialCard = (props) => {
    return (
        <article className='testimonial-item'>
            <div className="reviewer-avatar">
                <img src={props.avatar} alt="Avatar" />
            </div>
            <h5 className="reviewer-name">{props.name}</h5>
            <small className="review">
                {props.review}
            </small>
        </article>
    );
};

export default TestimonialCard;