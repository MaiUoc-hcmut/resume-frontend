import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';


const HeaderSocial = () => {
    return (
        <div className='header-socials'>
            <a href='https://www.facebook.com/ifhmnc' target='_blank'><BsFacebook /></a>
            <a href='https://github.com/MaiUoc-hcmut' target='_blank'><BsGithub /></a>
            <a href='https://www.linkedin.com/' target='_blank'><BsLinkedin /></a>
        </div>
    );
};

export default HeaderSocial;