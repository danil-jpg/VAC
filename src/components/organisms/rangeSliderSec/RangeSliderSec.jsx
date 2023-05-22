import React, { useState } from "react";
import RangeSliderBlock from "../../molecules/rangeSlider/RangeSliderBlock";
import s from "./rangeSliderSec.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";

const RangeSliderSec = () => {
  const [btnCl, setBtnCl] = useState([true, false, false]);

  return (
    <div className={`${s.sliderSection} container`}>
      <div className={s.topTextsWr}>
        <p className={s.title}>Let’s figure out how much you can afford</p>
        <p className={s.descr}>
          Before you start shopping, let’s figure out how much you can afford. Move the sliders to
          see how the loan duration and the total loan amount affect your monthly payments.
        </p>
      </div>
      <div className={s.sliderCenterWr}>
        <div className={s.sliderLeftWr}>
          <ul className={s.tabIndexWr}>
            <li
              className={`${btnCl[0] ? `${s.active}` : ""}`}
              onClick={(e) => {
                setBtnCl([true, false, false]);
              }}>
              Poor
            </li>
            <li
              className={`${btnCl[1] ? `${s.active}` : ""}`}
              onClick={(e) => {
                setBtnCl([false, true, false]);
              }}>
              Average
            </li>
            <li
              className={`${btnCl[2] ? `${s.active}` : ""}`}
              onClick={(e) => {
                setBtnCl([false, false, true]);
              }}>
              Good
            </li>
          </ul>
          <RangeSliderBlock
            text1="Loan Amount"
            initialNum={0}
            preValue="$"
            minVal={0}
            maxVal={150000}
            classWr={`${s.slideWr1}`}
          />
          <RangeSliderBlock
            text1="Loan Duration"
            initialNum={0}
            afterValue="month"
            minVal={0}
            maxVal={18}
            classWr={`${s.slideWr2}`}
          />
        </div>
        <div className={s.sliderRightWr}>
          <p className={s.titleLeft}>Bi-Weekly Payment</p>
          <p className={s.titleNumber}>$ 483</p>
          <p className={s.leftText}>Monthly Payment</p>
          <p className={s.leftNumber}>$ 966</p>
          <p className={`${s.leftText} ${s.leftText2}`}>Weekly Payment</p>
          <p className={`${s.leftNumber} ${s.leftNumber2}`}>$ 241</p>
          <ButtonSolid className={s.btn} text="Request a car" />
        </div>
      </div>
    </div>
  );
};

export default RangeSliderSec;
