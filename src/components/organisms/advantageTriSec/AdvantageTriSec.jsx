import React from "react";
import s from "./advantageTriSec.module.scss";
import AdvantageTri from "../advantageTri/AdvantageTri.jsx";

const AdvantageTriSec = () => {
  return (
    <div className={`${s.section} container`}>
      <p className={s.title}>Advantages of working with us</p>
      <AdvantageTri
        arr={[
          {
            title: "Vehicle Delivery",
            descr:
              "We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.",
            svg: require("../../../assets/img/components/advantagesTriangle/map.svg"),
            rotate: false,
          },
          {
            title: "Auto Financing",
            descr:
              "We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%",
            svg: require("../../../assets/img/components/advantagesTriangle/list.svg"),
            rotate: true,
          },
          {
            title: "Huge Inventory",
            descr:
              "We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you",
            svg: require("../../../assets/img/components/advantagesTriangle/car.svg"),
            rotate: false,
          },
        ]}
      />
    </div>
  );
};

export default AdvantageTriSec;
