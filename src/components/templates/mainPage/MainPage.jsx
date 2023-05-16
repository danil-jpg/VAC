import React from "react";
import Slider1 from "../../organisms/slider1/Slider1";
import DescrCenterSec from "../../organisms/descrCenterSec/descrCenterSec";
import s from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <Slider1 />
      <DescrCenterSec className={s.mainPageDescr} />
    </>
  );
};

export default MainPage;
