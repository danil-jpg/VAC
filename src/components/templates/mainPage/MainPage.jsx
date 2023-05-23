import React from "react";
import Slider1 from "../../organisms/slider1/Slider1";
import DescrCenterSec from "../../organisms/descrCenterSec/descrCenterSec";
import s from "./mainPage.module.scss";
import TriangleSec from "../../organisms/triangleSec/TriangleSec";
import AdvantageTriSec from "../../organisms/advantageTriSec/AdvantageTriSec";
import Catalogue from "../../organisms/catalogueLink/CatalogueLink";
import HappyCustomers from "../../organisms/happyCustomers/happyCustomers";
import Slider2 from "../../organisms/slider2/Slider2";
import RangeSliderSec from "../../organisms/rangeSliderSec/rangeSliderSec";
import Slider3 from "../../organisms/slider3/Slider3";
import ModalMenu from "../../organisms/modalMenu/ModalMenu";

const MainPage = () => {
  return (
    <>
      <Slider1 />
      <DescrCenterSec className={s.mainPageDescr} />
      <TriangleSec />
      <AdvantageTriSec />
      <Catalogue />
      <HappyCustomers />
      <Slider2 />
      <RangeSliderSec />
      <Slider3 />
    </>
  );
};

export default MainPage;
