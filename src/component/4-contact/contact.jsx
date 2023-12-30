import React from 'react';
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../animation/done.json'
import emailAnimation from '../animation/Animation - 1703816047148.json'


const Contact = () => {
    const [state, handleSubmit] = useForm("meqyjynl");

    return ( 
        <section className='contact-us' id="contact">
            <h2>
                <span className='icon-envelope-o'></span> Contact me
            </h2>
            <p>
                You can directly contact me via mail for any information.
            </p>

            <div className='d-flex justify-content-between '>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex '>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" id="email" required autoComplete='off'/>
                    <ValidationError   prefix="Email" field="email"  errors={state.errors}/>
                    </div>
                    <div style={{marginTop:"25px"}} className='d-flex'>
                    <label htmlFor="message">Your Message:</label>
                    <textarea required id="message" name='message'/>
                    <ValidationError  prefix="Message"  field="message"   errors={state.errors}/>
                    </div>
                    <button className='submit' disabled={state.submitting} type='submit'>
                    {state.submitting ? "submitting.." : "submit"}
                    </button>
                    {state.succeeded && (<p className='d-flex ' style={{marginTop:"1.7rem" , fontSize:"17px"}}>
                    <Lottie loop={false} style={{height:40}}  animationData={doneAnimation} />
                        Your message was successfully sent!</p>)}
                </form>
                <div className='email-animation '>
                <Lottie className='email-ani ' 
                        style={{height:350}}  
                        animationData={emailAnimation} />         
                </div>
            </div>
        </section>
     );
}
 
export default Contact;
