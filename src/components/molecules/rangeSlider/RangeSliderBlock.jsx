import React, { useState } from "react";
import Range from "rc-slider";
import s from "./rangeSlider.module.scss";
import "rc-slider/assets/index.css";

const RangeSliderBlock = ({
  text1,
  initialNum,
  preValue = "",
  afterValue = "",
  minVal,
  maxVal,
  classWr,
}) => {
  const [sliderVal, setSliderVal] = useState(initialNum);

  return (
    <div className={classWr}>
      <div className={s.sliderWr}>
        <p className={s.sliderText}>{text1}</p>
        <div className={s.sliderNumber}>
          <span>{preValue}</span>
          <span className={s.sliderNumberCenter}>{sliderVal}</span>
          <span>{afterValue}</span>
        </div>
      </div>
      <Range
        min={minVal}
        max={maxVal}
        step={1}
        defaultValue={initialNum}
        onChange={(e) => setSliderVal(e.valueOf())}
      />
    </div>
  );
};

export default RangeSliderBlock;
