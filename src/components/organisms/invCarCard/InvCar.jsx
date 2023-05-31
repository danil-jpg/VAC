import React from "react";
import s from "./invCar.module.scss";

const InvCar = ({ classname, img, title, price }) => {
  return (
    <div className={`${s.slide} ${classname}`}>
      <img className={s.img} src={img} />
      <div className={s.textWr}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>{price}</p>
        <div className={s.paramsWr}>
          <p className={s.param}>2012 year</p>
          <p className={`${s.param} ${s.parCenter}`}>Sedan</p>
          <p className={`${s.param} ${s.paramEnd}`}>Transmission</p>
          <p className={s.param}>Kilometres </p>
        </div>
      </div>
    </div>
  );
};

export default InvCar;
