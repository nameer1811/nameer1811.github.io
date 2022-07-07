import React from "react";
import "./recommendations.css";
import ML1 from "../../assets/ML1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: ML1,
    name: "Coworker Name",
    review: "lorem ipsum dolor sit amet consectetur",
  },
  {
    avatar: ML1,
    name: "Coworker Name",
    review: "lorem ipsum dolor sit amet consectetur",
  },
  {
    avatar: ML1,
    name: "Coworker Name",
    review: "lorem ipsum dolor sit amet consectetur",
  },
  {
    avatar: ML1,
    name: "Coworker Name",
    review: "lorem ipsum dolor sit amet consectetur",
  },
];

const Recommendations = () => {
  return (
    <section id="recommendations">
      <div className="section__title">
        <h1>Recommendations</h1>
      </div>

      <Swiper
        className="container test__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__av">
                <img src={avatar} alt="recommendation" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendations;
