import React from 'react';
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiMessageSquareDetail } from 'react-icons/bi';
import { FaComment } from 'react-icons/fa';
import { useState } from 'react';



const Navbar = () => {

    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a 
                href='#'
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a 
                href='#about' 
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <BiUser />
            </a>
            <a 
                href='#testimonial'
                onClick={() => setActiveNav('#testimonial')}
                className={activeNav === '#testimonial' ? 'active' : ''}
            >
                <FaComment />
            </a>
            <a 
                href='#contact'
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Navbar;