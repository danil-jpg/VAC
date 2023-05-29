import React from "react";
import s from "./catalogue.module.scss";
import ChooseYourDream from "../../molecules/chooseYourDream/ChooseYourDream";

const Catalogue = () => {
  return (
    <div className={`${s.section} container`}>
      <img src={require("../../../assets/img/components/cars/Cars.webp")} />
      <ChooseYourDream />
    </div>
  );
};

export default Catalogue;
