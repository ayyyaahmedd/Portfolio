import React, { useEffect, useState } from 'react';
import './header.css'

const Header = () => {
    const[showModel , setShowModel] = useState(false)
    const[theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light")
    useEffect(()=>{
        // document.body.classList.toggle(theme)
        if(theme==="light"){
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    },[theme])

    return ( 
        <header className=" d-flex align-items-center justify-content-between">
            <button className='menu ' onClick={()=>{setShowModel(true)}} >
                <span className=' icon-menu d-flex justify-content-center align-items-center'></span>
            </button>
            <div/>
        <nav>
            <ul className='d-flex align-items-center'>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <button onClick={()=>{
            localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")
            setTheme (localStorage.getItem("currentMode")) 
        }} className='mode d-flex justify-content-center align-items-center '>
            {theme === "dark" ? (<span className='icon-moon'></span> ) : (<span className='icon-sun' style={{color:"yellow"}}></span>)}
        </button>


        {showModel && (
            <div className="menuDetails" style={{zIndex : 9999}}>
            <ul className='model' >
                <li className='text-end'><button className='icon-close' onClick={()=>{setShowModel(false)}} /></li>
                <li><a href="#about" onClick={()=>{setShowModel(false)}}>About</a></li>
                <li><a href="#projects" onClick={()=>{setShowModel(false)}}>Projects</a></li>
                <li><a href="#contact" onClick={()=>{setShowModel(false)}}>Contact</a></li>
            </ul>
        </div>
        )}
        </header>
    );
}

export default Header;
<>
</>