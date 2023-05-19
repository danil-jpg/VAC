import React, { useEffect, useRef } from "react";
import s from "./slider2.module.scss";
import { register } from "swiper/element/bundle";
import { params } from "../../Utils/SwiperParams";

const Slider2 = () => {
  const swiperRef = useRef(null);

  register();

  const swiperParamsSec = {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {},
    on: {
      init() {},
    },
  };

  useEffect(() => {
    const swiperEl2 = swiperRef.current;
    Object.assign(swiperEl2, swiperParamsSec, params);
    swiperEl2.initialize();
  }, []);

  return (
    <div className={`${s.section} container`}>
      <p className={s.title}>What our client say about us!</p>
      <div className={s.sliderWr}>
        <swiper-container ref={swiperRef} init="false" class="slider2">
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/cars/Rectangle.png")} />
              <div className={s.slideDescrWr}>
                <p className={s.slideTitle}>Laura Chaisson</p>
                <p className={s.slideDescr}>
                  In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco
                  nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo
                  exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem.
                  Lorem esse sint in nisi id esse.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/cars/Rectangle.png")} />
              <div className={s.slideDescrWr}>
                <p className={s.slideTitle}>Laura Chaisson</p>
                <p className={s.slideDescr}>
                  In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco
                  nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo
                  exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem.
                  Lorem esse sint in nisi id esse.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/cars/Rectangle.png")} />
              <div className={s.slideDescrWr}>
                <p className={s.slideTitle}>Laura Chaisson</p>
                <p className={s.slideDescr}>
                  In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco
                  nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo
                  exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem.
                  Lorem esse sint in nisi id esse.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <div className="swiper-button-next swiper-button-next2"></div>
        <div className="swiper-button-prev swiper-button-prev2"></div>
      </div>
    </div>
  );
};

export default Slider2;
