import React from 'react';
import './footer.css'

const Footer = () => {
    return (  
        <footer className='d-flex justify-content-between'>
        <ul className='d-flex'>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <p>© 2023. All rights reserved Aya Ahmed.</p>
        </footer>
    );
}
 
export default Footer;