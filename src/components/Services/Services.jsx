import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
const Services = () => {

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };



    return (
        <div className="services"  id="services">
            {/* left side */}       
            <div className="awesome">
                {/* dark mode */}
                <span >My Awesome</span>
                <span>services</span>
                <span>
                Lorem ispum is simpley dummy text of    printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{    background: "#ABF1FF94" }}></div>
            </div>
          {/* right */}
      <div className="cards">
      {/* first card */}
      <motion.div
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
      >
        <div className="card1">
            <img src={HeartEmoji} alt="" />
            <h1>Developer</h1>
            <h2>Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd</h2>
            <button className="c-button">LEARN MORE</button>
        </div>
        
      </motion.div>
      {/* second card */}
      <motion.div
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
      >
        <div className="card2">
            <img src={Glasses} alt="" />
            <h1>Developer</h1>
            <h2>Html, Css, JavaScript, React, Nodejs, Express</h2>
            <button className="c-button">LEARN MORE</button>
        </div>
      </motion.div>
      {/* 3rd */}
      <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
      >
        
           <div className="card3">
            <img src={Humble} alt="" />
            <h1>Developer</h1>
            <h2>"Lorem ispum dummy text are usually use in section where we need some random text"</h2>
            <button className="c-button">LEARN MORE</button>
        </div>
            
          
        </motion.div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)"}}
      ></div>
    </div>
 </div>
    )
};
export default Services;