import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import Melanie from "../../img/melanie.png"
import Daniela from "../../img/daniela.png"
import Abraham from "../../img/abraham.png"
import Juana from "../../img/juana.png"



const Testimonial = () => {
  const clients = [
    {
      img: Melanie,
      review:
        "I'm pleased to wholeheartedly recommend Rocio Lachos, a standout professional I had the privilege of collaborating with during the successful Asia-Pacific Economic Cooperation (APEC) forum assembly in Peru. Rocio's exceptional project management skills were pivotal in ensuring the conferences' success.",
    },
    {
      img: Abraham,
      review:
        "Recomiendo ampliamente a Rossio como profesional altamente competente y profesional. Orientada a brindar soluciones de forma proactiva y eficiente con alto grado de responsabilidad.",
    },
    {
      img: Daniela,
      review:
        "I worked with Rossio while i was doing my internship on SUNARP (a gubernamental institution), i was able to see that she is a really hard and smart worker, she always liked to bring new idea to improve the area that we belonged, she was always pushing her self to be better every day",
    },
    {
      img: Juana,
      review:
        "Rossio is a great professional, very well prepared in different areas, from software development to social media management. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Coworkers and Mentors</span>
        <span> recomendations </span>
        <span>about me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
