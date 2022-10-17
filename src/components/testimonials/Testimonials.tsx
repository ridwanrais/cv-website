import React from "react";
import "./testimonials.css";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      photo: "src/assets/dummyPhoto2.jpg",
      name: "Yor Forger",
      review:
        "I know it’s not the right time for this… but why don’t we get married? If you’d like why don’t we stay together",
    },
    {
      id: 2,
      photo: "src/assets/dummyPhoto3.jpg",
      name: "Anya Forger",
      review: "Papa is the world’s biggest liar. But… he’s a cool liar",
    },
    {
      id: 3,
      photo: "src/assets/dummyPhoto4.png",
      name: "Bond Forger",
      review: "Woof woof!",
    },
  ];

  // const swiperModules: SwiperModule[] = [Pagination];

  return (
    <section>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container w-[40%] pb-10 md:w-3/5 sm:w-[90%]"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map(({ id, photo, name, review }) => {
          return (
            <SwiperSlide
              key={id}
              className="testimonial bg-color-primary-variant text-center p-8 rounded-[2rem] select-none"
            >
              <div className="client__avatar w-16 aspect-square overflow-hidden rounded-[50%] mx-auto mb-4 border-[0.4rem] border-color-primary-variant">
                <img src={photo} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review text-color-light font-light block w-4/5 mt-3 mx-auto sm:w-container-width-sm">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
