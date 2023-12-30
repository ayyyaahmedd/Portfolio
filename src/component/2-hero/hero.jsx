import React from 'react';
import './hero.css'
import devAnimation from '../animation/dev.json'
import Lottie from 'lottie-react'
const Hero = () => {
  const myImg = process.env.PUBLIC_URL + '/woman-icon-modified.png';
    return (
        <section className='hero d-flex container' id="about">
        <div className="left-sec">
          <div className="avatar d-flex">
            <img src={myImg} alt="" className="d-inline" />
            <h2 className=" ms-4" >Aya Ahmed </h2>
          </div>
          <div className='txt'>
          <h3>Frontend developer </h3>
          <p>Self-motivated frontend web developer with a strong ambition to learn and discover the newest
            cutting-edge methodologies to build a high-performance websites. Skilled in using ReactJS, NextJS,
            HTML/HTML5, CSS/CSS3, Javascript, ECMA Script, Typescript, Bootstrap, Tailwind, JSON, 
            and a solid understanding of OOP, Web API, and Git.</p>
          </div>
          <div className='icons d-flex'>
        <a href="https://www.github.com/ayyyaahmedd" className="icon icon-github"></a>
        <a href="https://www.linkedin.com/in/aya-ahmed580" className="icon icon-linkedin"></a>
        </div>
        </div>
        
        <div className="right-sec">
        <Lottie className='dev-ani' animationData={devAnimation} />
        </div>
        </section>
      );
}
 
export default Hero;