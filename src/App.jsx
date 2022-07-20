import React from "react";
import './App.css'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Testimonial from './pages/testimonial/Testimonial';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import Navbar from './pages/navbar/Navbar';
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Project from "./pages/projects/Project";

const App = () => {

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Education />
            <Project />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}

export default App;