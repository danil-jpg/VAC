import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";
import { result } from "../employment/QuizEmp.jsx";

const QuizHowLong = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  return (
    <div className="quiz-block">
      <p className="quiz-title">How long have you been earning this income?</p>
      <p className="quiz-descr">
        We won’t come visit but we need these details to confirm your employment status so you can
        get the best rates possible.
      </p>
      <div className="quiz-btn-wr quiz-input-wr">
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Months"} />
      </div>
      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("../WhereDoYouLive");
            setLineWidth(lineWidth + 9);
          }}>
          Continue
        </button>
        <button
          className="quiz-btn-back"
          onClick={() => {
            setLineWidth(lineWidth - 9);
            navigation(-1);
          }}>
          <img src={require("../../../../assets/img/components/Quiz/Arrow-Bottom.svg")} />
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizHowLong;
