import React from "react";
import Slider1 from "../../organisms/slider1/Slider1";
import DescrCenterSec from "../../organisms/descrCenterSec/descrCenterSec";
import s from "./mainPage.module.scss";
import TriangleSec from "../../organisms/triangleSec/TriangleSec";
import AdvantageTriSec from "../../organisms/advantageTriSec/AdvantageTriSec";
import Catalogue from "../../organisms/catalogueLink/CatalogueLink";
import HappyCustomers from "../../organisms/happyCustomers/happyCustomers";
import Slider2 from "../../organisms/slider2/Slider2";

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
    </>
  );
};

export default MainPage;
