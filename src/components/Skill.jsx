import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skill = (props) => {
    return (
        <article className='skill-detail'>
            <BsFillPatchCheckFill className='skill-detail-icon' />
            <div>
                <h4>{props.skill}</h4>
                <small className='text-light'>{props.level}</small>
            </div>
        </article>
    );
};

export default Skill;