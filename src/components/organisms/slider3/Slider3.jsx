import React, { useEffect, useRef } from "react";
import ButtonLiner from "../../atoms/Buttons/ButtonLiner/ButtonLiner";
import { register } from "swiper/element/bundle";
import { params } from "../../Utils/SwiperParams";
import s from "./slider3.module.scss";

const Slider3 = ({ text = "Interesting to read" }) => {
  const swiperRef = useRef(null);
  register();

  const swiperParams = {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {},
    },
  };

  useEffect(() => {
    const swiperEl2 = swiperRef.current;
    Object.assign(swiperEl2, swiperParams, params);
    swiperEl2.initialize();
  }, []);

  return (
    <div className={`${s.slider3} ${s.sliderMainPage} container`}>
      <div className={s.sliderTitlesWr}>
        <p className={s.sliderTitle}>{text}</p>
        <ButtonLiner text="all articles" className={`${s.btn} ${s.btnTop}`} />
      </div>

      <div className={s.sliderWr}>
        <swiper-container init="false" ref={swiperRef} class="slider3">
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/slider3/1.png")} />
              <div className={s.sliderDescrWr}>
                <p className={s.slideDate}>10 May, 2020</p>
                <p className={s.slideTitle}>
                  How to save on buying a car?Why is it better to buy from us
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/slider3/2.png")} />
              <div className={s.sliderDescrWr}>
                <p className={s.slideDate}>10 May, 2020</p>
                <p className={s.slideTitle}>
                  How to save on buying a car?Why is it better to buy from us
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/slider3/3.png")} />
              <div className={s.sliderDescrWr}>
                <p className={s.slideDate}>10 May, 2020</p>
                <p className={s.slideTitle}>
                  How to save on buying a car?Why is it better to buy from us
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/slider3/3.png")} />
              <div className={s.sliderDescrWr}>
                <p className={s.slideDate}>10 May, 2020</p>
                <p className={s.slideTitle}>
                  How to save on buying a car?Why is it better to buy from us
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
      <ButtonLiner text="all articles" className={`${s.btn} ${s.btnBottom}`} />
    </div>
  );
};

export default Slider3;
