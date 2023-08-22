import React from 'react'
import './Porfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import Website from "../../img/rossiowebsite.png"
import Youtube from "../../img/youtubecss.png"
import Amazon from "../../img/amazonweb.png"
import Home from "../../img/getthathome.png"
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
                    <img src={Home} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Amazon} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Youtube} alt="" />
                </SwiperSlide>
           </Swiper>
        </div>
  
  )
}

export default Portfolio
