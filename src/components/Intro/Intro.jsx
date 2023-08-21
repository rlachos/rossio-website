import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png' 
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/Floating'
import { useContext } from "react";
import { themeContext } from '../../context';
import {motion} from 'framer-motion'

const Intro = () => {
     const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro" id="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Rossio Lachos</span>
                <span>
                    Computer Science engineer with marketing 
                    management background, passionate about 
                    web development and informatics
                </span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icons">
                <a href='https://github.com/rlachos' target="_blank">
                    <img src={Github} alt="" />
                </a>
               
                <a href='https://www.linkedin.com/in/rlachos/' target="_blank">
                <img src={LinkedIn} alt=""/>
                </a>
                
                <a href='https://instagram.com/rossio.lachos/' target="_blank">
                <img src={Instagram} alt="" />
                </a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
            />

            <motion.div 
              initial={{ top: "-4%", left: "74%" }}
              whileInView={{ left: "68%" }}
              transition={transition}
              style={{top:'-4%', left: '68%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            style={{top:'18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Computer' txt2='Engineer'/>
            </motion.div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
            background: '#C1F5FF', 
            top: '17rem',
            width:'21rem',
            height:'11rem',
            left: '-9rem'
            }}>

            </div>
        </div>

    </div>
    
  )
}

export default Intro
