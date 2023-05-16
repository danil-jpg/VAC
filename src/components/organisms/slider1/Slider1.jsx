import React, { useEffect } from "react";
import ButtonLiner from "../../atoms/Buttons/ButtonLiner/ButtonLiner";
import s from "./slider.module.scss";
import { register } from "swiper/element/bundle";

const Slider1 = () => {
  register();

  const params = {
    // array with CSS styles
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
		  }
		  
		  .swiper-button-prev {
			position: absolute;
			left: 5px;
			top: 47%;
			transform: rotate(180deg)
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
    <div className={s.slider1}>
      <div className={`${s.slider1Content} container`}>
        <p className={s.sliderText}>The easiest way to buy a car in Canada</p>
        <div className={s.sliderSl}>
          <swiper-container init="false" class="slider1">
            <swiper-slide>
              <div className={s.slideWr}>
                <img src={require("../../../assets/img/components/slider1/car1.png")} />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={s.slideWr}>
                <img src={require("../../../assets/img/components/slider1/car1.png")} />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={s.slideWr}>
                <img src={require("../../../assets/img/components/slider1/car1.png")} />
              </div>
            </swiper-slide>
          </swiper-container>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <ButtonLiner text="Request a suv" className={s.btnNonStandart} />
      </div>
    </div>
  );
};

export default Slider1;
