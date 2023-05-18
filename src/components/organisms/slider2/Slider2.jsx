import React, { useEffect } from "react";
import ButtonLiner from "../../atoms/Buttons/ButtonLiner/ButtonLiner";
import s from "./slider2.module.scss";
import { register } from "swiper/element/bundle";

const Slider2 = () => {
  register();

  const params = {
    injectStyles: [
      `
		  .swiper-button-next , .swiper-button-prev{
			  background-image: url(${require("../../../assets/img/components/slider1/arrow.png")});
			  width: 53px;
			  height: 53px;
		  }
		  
		  .swiper-button-next {
			  position: absolute;
			  right: 5px;
			  top: 47%;
  
			  @media screen and (max-width: 1200px) {
				  right: 60px;
			  };
  
			  @media screen and (max-width: 767px) {
				  right: 0px;
				  top: 51%;
				  width: 35px;
				  height: 35px;
				  background-size: contain;
			  }
			}
			
			.swiper-button-prev {
			  position: absolute;
			  left: 5px;
			  top: 47%;
			  transform: rotate(180deg);
  
			  @media screen and (max-width: 1200px) {
				  left: 60px;
			  };
  
			  @media screen and (max-width: 767px) {
				  left: 0px;
				  top: 51%;
				  width: 35px;
				  height: 35px;
				  background-size: contain;
			  }
			}
				`,
    ],
  };

  const swiperParams = {
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
    const swiperEl = document.querySelector(".slider1");

    Object.assign(swiperEl, swiperParams, params);
    swiperEl.initialize();
  }, []);

  return (
    <div className={`${s.section} container`}>
      <p className={s.title}>What our client say about us!</p>
      <div className={s.sliderWr}>
        <swiper-container init="false" class="slider1">
          <swiper-slide>
            <div className={s.slideWr}>
              <img src={require("../../../assets/img/components/cars/Rectangle.png")} />
              <div className={s.sliderDescr}>
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
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Slider2;
