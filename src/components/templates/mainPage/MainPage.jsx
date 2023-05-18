import React from "react";
import Slider1 from "../../organisms/slider1/Slider1";
import DescrCenterSec from "../../organisms/descrCenterSec/descrCenterSec";
import s from "./mainPage.module.scss";
import TriangleSec from "../../organisms/triangleSec/TriangleSec";
import AdvantageTriSec from "../../organisms/advantageTriSec/AdvantageTriSec";

const MainPage = () => {
  return (
    <>
      <Slider1 />
      <DescrCenterSec className={s.mainPageDescr} />
      <TriangleSec />
      <AdvantageTriSec />
    </>
  );
};

export default MainPage;