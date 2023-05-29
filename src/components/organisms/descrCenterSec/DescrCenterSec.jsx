import Descr from "../../molecules/descrBlockCenter/DescrCenter.jsx";
import React from "react";
import s from "./descrCenterSec.module.scss";

const DescrCenterSec = ({ className }) => {
  return (
    <div className={s.descrSecWr}>
      <img src={require("../../../assets/img/components/slider1/car2.webp")} className={s.img1} />
      <img src={require("../../../assets/img/components/slider1/car1.webp")} className={s.img2} />
      <Descr className={className} />
    </div>
  );
};

export default DescrCenterSec;
