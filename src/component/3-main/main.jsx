import React, { useState } from 'react';
import './main.css'
import { myProjects } from '../myproducts';
import { AnimatePresence, motion } from "framer-motion";


const Main = () => {

  const [active , setActive] = useState("all")

  const [arr ,setArr] = useState(myProjects)
    return (
        <section className='main d-flex' id="projects">
          <div className='main-left-sec d-flex'>
            <button onClick={()=>{
              setActive("all")
              setArr(myProjects)
            }} className={active === "all" ? "active" :null}>All Projects</button>
            <button onClick={()=>{
              setActive("css")
              const newArr = myProjects.filter((item)=>{
                return item.category === "css" })
              setArr(newArr)
              }} 
              className={active === "css" ? "active" : null}>Html & Css</button>

            <button onClick={()=>{
              setActive("javascript")
              const newArr = myProjects.filter((item)=>{
                return item.category === "javascript" })
              setArr(newArr)
              }} 
              className={active === "javascript" ? "active" : null}>Javascript</button>

            <button onClick={()=>{
              setActive("React")
              const newArr = myProjects.filter((item)=>{
                return item.category === "React" })
              setArr(newArr)
              }} 
              className={active === "React" ? "active" : null}>React</button>
          </div>

          <div className="main-right-sec d-flex">
          <AnimatePresence>
            
            {arr.map((item)=>{
              return(
                <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring" , damping:8 , stiffness:50}}
                key={item.imgPath} className='car1d'>
              <img width={266} height={130} src={item.imgPath} alt="" />
              <div style={{width: "266px"}} className="card-detail">
                <h4>{item.projectTitle}</h4>
                <p>{item.projectDescription}</p>
                <div className="card-icon d-flex justify-content-between">
                  <div>
                  <a href={item.preview}  target='_blank' className="icon-link me-3" />
                  <a href={item.projectLink} target='_blank' className="icon-github" />
                  </div>
              </div>
              </div>
            </motion.article>
              )
            })}
                      </AnimatePresence> 
          </div>
        </section>
      );
}
 
export default Main;