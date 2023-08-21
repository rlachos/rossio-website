import React, { useContext } from "react";
import "./works.css";

import Rubyonrails from "../../img/rubyonrails2.png"
import Ruby from "../../img/ruby1.png"

import Jslogo from "../../img/js1.png"
import Reactlogo from "../../img/react1.png"

import Css from "../../img/css3.png"

import { themeContext } from "../../context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My
          </span>
          <span>Skills</span>
          <spane>
          Proficient in a wide range of technologies, including Ruby, 
          <br />
          Ruby on Rails, React, Java, HTML, CSS, and Insomnia, with
          <br />
          a focus on developing and consuming RESTful APIs to build 
          <br />
          robust web applications.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Rubyonrails} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jslogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactlogo} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Ruby} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
