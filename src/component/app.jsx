import React, { useEffect, useState } from 'react';
import Header from './1-header/header';
import Hero from './2-hero/hero';
import Main from './3-main/main';
import Contact from './4-contact/contact';
import Footer from './5-footer/footer';

const App = () => {
    useEffect(()=>{
        window.addEventListener("scroll" , 
        ()=>{
            if(window.scrollY > 290){
                setShowBtn(true)
            }else{
                setShowBtn(false)
            }
        })
    } , [])
    const [showBtn , setShowBtn] = useState(false);
    return ( 
        <div id='up' className='container main-div'>
            
                <Header/>
                <Hero/>
                <div className='divider' />
                <Main/>
                <div className='divider' />
                <Contact/>
                <div className='divider' />
                <Footer />
                
                        <a style={{opacity : showBtn? 1 : 0  ,  transition: "0.3s"}} href="#up">
                        <button className='scrollTop icon-keyboard_arrow_up'></button>
                        </a>
        </div>
    );
}
export default App;