import React from 'react';
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiMessageSquareDetail } from 'react-icons/bi';
import { FaComment } from 'react-icons/fa';
import { useState, useEffect } from 'react';



const Navbar = () => {
    let current = '';
    const defaultTitle = 'Mai Uoc'
    const [activeNav, setActiveNav] = useState('#')
    const [title, setTitle] = useState('')

    
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        })
        setActiveNav(`#${current}`)
    })
    

    useEffect(() => {
        if(activeNav === '#') setTitle('Home')
        else if(activeNav === '#about') setTitle('About Me')
        else if(activeNav === '#testimonial') setTitle('Testimonials')
        else if(activeNav === '#contact') setTitle('Contact Me')
        document.title = `${defaultTitle} | ${title}`
    }, [title, activeNav])

    return (
        <nav>
            <a 
                href='#'
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a 
                href='#about' 
                className={
                    (activeNav === '#about' 
                    || activeNav === '#experience' 
                    || activeNav === '#education' 
                    || activeNav === '#project') ? 'active' : ''}
            >
                <BiUser />
            </a>
            <a 
                href='#testimonial'
                className={activeNav === '#testimonial' ? 'active' : ''}
            >
                <FaComment />
            </a>
            <a 
                href='#contact'
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Navbar;