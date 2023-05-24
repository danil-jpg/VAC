import React from "react";
import s from "./carCard.module.scss";

const CarCard = () => {
  return (
    <div className={s.slideWr}>
      <img src={require("../../../assets/img/components/slider3/1.png")} />
      <div className={s.sliderDescrWr}>
        <p className={s.slideDate}>10 May, 2020</p>
        <p className={s.slideTitle}>How to save on buying a car?Why is it better to buy from us</p>
      </div>
    </div>
  );
};

export default CarCard;
