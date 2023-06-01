import React from "react";
import s from "./car.module.scss";

const Car = () => {
  return (
    <div className={`${s.carPage} container`}>
      <div className={s.left}></div>
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
        <div></div>
      </div>
    </div>
  );
};

export default Car;
