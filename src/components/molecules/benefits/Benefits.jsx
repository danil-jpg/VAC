import React from "react";
import s from "./benefits.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";

const Benefits = () => {
  return (
    <div className={`${s.benefit} container`}>
      <div className={s.left}>
        <p className={s.title}>Benefits of getting an auto loan with VAC</p>
        <p className={s.descr}>
          For many people getting a reasonable auto loan is the best way for them to get a new car.
          However, the benefits of getting the right loan go beyond just being able to drive a nice
          vehicle.
        </p>
        <p className={s.descrBold}>
          When you work with VAC, there are never any hidden costs or fees! We lay out all the terms
          and conditions so that you know exactly what details of the loan are before you sign
          anything.
        </p>
        <ButtonSolid text="Request a Car" className={s.btn} />
      </div>
      <div className={s.right}>
        <img src={require("../../../assets/img/components/cars/Ford.webp")} />
      </div>
    </div>
  );
};

export default Benefits;
