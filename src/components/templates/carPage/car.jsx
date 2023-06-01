import React, { useEffect, useState, useRef } from "react";
import s from "./car.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";
import RangeSliderSec from "../../organisms/rangeSliderSec/rangeSliderSec";
import { register } from "swiper/element/bundle";
import { params } from "../../Utils/SwiperParams";

const Car = () => {
  const swiperRefDef = useRef(null);
  const swiperRefThumb = useRef(null);
  register();

  useEffect(() => {
    const swiperElThumb = swiperRefThumb.current;
    const swiperElDef = swiperRefDef.current;
    Object.assign(swiperElThumb, params);
    Object.assign(swiperElDef, params);
    swiperElDef.initialize();
    swiperElThumb.initialize();
  }, []);

  return (
    <div className={`${s.carPage} container`}>
      <div className={s.topPage}>
        <div className={s.left}>
          <p className={s.carTitle}>Porsche Panamera 4S</p>
          <p className={s.etc}>Watching now 8 people</p>
          <swiper-container
            init="false"
            class="sliderCar"
            ref={swiperRefDef}
            thumbs-swiper=".my-thumbs"
            controller-control=".my-thumbs">
            <swiper-slide>
              <img src={require("../../../assets/img/components/cars/carSl1Big.png")} />
            </swiper-slide>
            <swiper-slide>
              <img src={require("../../../assets/img/components/cars/carSlBig2.jpg")} />
            </swiper-slide>
            <swiper-slide>
              <img src={require("../../../assets/img/components/cars/carSl3.png")} />
            </swiper-slide>
            <swiper-slide>
              <img src={require("../../../assets/img/components/cars/carSl4.png")} />
            </swiper-slide>
          </swiper-container>
          <swiper-container
            init="false"
            ref={swiperRefThumb}
            space-between="10"
            navigation="true"
            class="my-thumbs"
            controller-control=".my-thumbs"
            slides-per-view="3.9"
            navig
            center-slide="true">
            <swiper-slide>
              <img
                src={require("../../../assets/img/components/cars/carSl.png")}
                className={s.thumbImg}
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src={require("../../../assets/img/components/cars/carSlBig2.jpg")}
                className={s.thumbImg}
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src={require("../../../assets/img/components/cars/carSl3.png")}
                className={s.thumbImg}
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src={require("../../../assets/img/components/cars/carSl4.png")}
                className={s.thumbImg}
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className={s.right}>
          <div className={s.rightTop}>
            <div className={s.priceBl}>
              <p className={s.titleBl}>Price</p>
              <p className={s.price}>34 000 $</p>
            </div>
            <div className={s.bodyBl}>
              <p className={s.titleBl}>Body</p>
              <p className={s.textBold}>Sedan</p>
            </div>
            <div className={s.bodyBl}>
              <p className={s.titleBl}>Year</p>
              <p className={s.textBold}>2018</p>
            </div>
            <div className={s.bodyBl}>
              <p className={s.titleBl}>Transmission</p>
              <p className={s.textBold}>Automatic</p>
            </div>
            <div className={s.bodyBl}>
              <p className={s.titleBl}>Kilometres</p>
              <p className={s.textBold}>20 000</p>
            </div>
          </div>
          <div className={s.rightCenter}>
            <p className={s.blockTitle}>Detail</p>
            <div className={s.centerLeft}>
              <p className={s.centerText}>Rear wheel drive</p>
              <p className={s.centerText}>6 cylinders</p>
              <p className={s.centerText}>11 l. per 100 km.</p>
              <p className={s.centerText}>Rear wheel drive</p>
            </div>
            <div className={s.centerRight}>
              <p className={s.centerText}>2500-4000 rpm</p>
              <p className={s.centerText}>0-100 in 2.7 s.</p>
              <p className={s.centerText}>Power steering</p>
              <p className={s.centerText}>2500-4000 rpm</p>
            </div>
          </div>
          <div className={s.rightBottom}>
            <p className={s.blockTitle}>Description</p>
            <p className={s.bottomText}>
              Porsche 911 - a sports car manufactured by the German company Porsche AG in the back
              of a two-door coupe or a convertible based on it, produced in different generations
              from 1964 to the present day.The 911 index was not originally planned for the timeless
              designation of different generations of the same car, and was no more than one of many
              similar in the through three-digit internal factory numbering of all Porsche models
              assigned to a very specific 1964 model.
            </p>
            <ButtonSolid className={s.btn} text="Request more information" />
          </div>
        </div>
      </div>
      <RangeSliderSec
        title="Calculate the installment plan for this car."
        descr=""
        className={s.carRangeSl}
        titleCl={s.titleCl}
        centerWr={s.sliderCenter}
        btnText="apply for this vehicle"
        btnBottomCl={s.sliderBtn}
      />
    </div>
  );
};

export default Car;
