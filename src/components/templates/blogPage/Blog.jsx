import React, { useRef, useEffect } from "react";
import s from "./blog.module.scss";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import CarCard from "../../molecules/carCard/carCard";
import { register } from "swiper/element/bundle";
import { params } from "../../Utils/SwiperParams";

const Blog = () => {
  const swiperRef = useRef(null);
  register();

  const swiperParams = {
    loop: true,
    slidesPerView: 1,
    on: {
      init() {},
    },
    pagination: "bullet",
  };

  useEffect(() => {
    const swiperEl2 = swiperRef.current;
    Object.assign(swiperEl2, swiperParams, params);
    swiperEl2.initialize();
  }, []);

  return (
    <div className="Blog">
      <PageTitle text={"Our blog"} />
      <swiper-container init="false" ref={swiperRef} class="slider5">
        <swiper-slide>
          <div className={`${s.cardWr} container`}>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className={`${s.cardWr} container`}>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Blog;
