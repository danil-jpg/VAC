import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import RangeSliderSec from "../../organisms/rangeSliderSec/rangeSliderSec";
import s from "./calculatorPage.module.scss";

const CalculatorPage = () => {
  return (
    <div>
      <PageTitle text={"Use our free calculator!"} />
      <RangeSliderSec className={s.calculatorPage} />
    </div>
  );
};

export default CalculatorPage;
