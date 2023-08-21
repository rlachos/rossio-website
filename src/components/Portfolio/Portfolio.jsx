import React from 'react'
import './Porfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Website from "../../img/rossiowebsite.png"
import "swiper/css";
import { useContext } from "react";
import { themeContext } from '../../context';
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
        <div className="portfolio" id="portfolio">
            {/*heading*/}
            <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
           <Swiper
           spaceBetween={30}
           slidesPerView={3}
           grabCursor={true}
           className="portfolio-slider"
           >
                <SwiperSlide>
                    <img src={Website} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Website} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Website} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Website} alt="" />
                </SwiperSlide>
           </Swiper>
        </div>
  
  )
}

export default Portfolio
