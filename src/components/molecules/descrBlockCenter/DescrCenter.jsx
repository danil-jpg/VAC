import React from "react";
import s from "./descrCenter.module.scss";

const Descr = ({ className = "" }) => {
  return (
    <div className={`${s.descrWr} ${className}`}>
      <p className={s.descrTitle}>How does it work?</p>
      <p className={s.subDescr}>From your Phone to your Home</p>
      <p className={s.descr}>
        We make it easy for you to buy your dream car from your phone without ever having to step
        into a dealership! We deliver your vehicle to your home for you to test drive before you
        sign anything.
      </p>
    </div>
  );
};

export default Descr;
