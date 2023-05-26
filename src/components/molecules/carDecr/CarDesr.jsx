import React from "react";
import s from "./carDescr.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";

const CarDesr = ({ title, descr, img }) => {
  return (
    <div className={s.carWr}>
      <div className={s.left}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{descr}</p>
        <ButtonSolid className={s.btn} text="Request a Car" />
      </div>
      <div className={s.right}>
        <img
          className={s.imgWr}
          src={require("../../../assets/img/components/cars/Chevrolet.png")}
        />
      </div>
    </div>
  );
};

export default CarDesr;
