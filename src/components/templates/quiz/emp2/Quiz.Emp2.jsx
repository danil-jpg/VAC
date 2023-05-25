import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";
import { result } from "../employment/QuizEmp.jsx";

const QuizEmp2 = ({ btnNum, setBtnNum }) => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  return (
    <div className="quiz-block">
      <p className="quiz-title">Tell us about your employment</p>
      <p className="quiz-descr">
        We won’t come visit but we need these details to confirm your employment status so you can
        get the best rates possible.
      </p>
      <div className="quiz-btn-wr quiz-input-wr">
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Employer"} />
        <Input
          style={{ width: "100%", marginTop: "10px" }}
          className={"input100%"}
          placeholder={"Title"}
        />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("../HowLong");
          }}>
          Continue
        </button>
        <button
          className="quiz-btn-back"
          onClick={() => {
            navigation(-1);
          }}>
          <img src={require("../../../../assets/img/components/Quiz/Arrow-Bottom.svg")} />
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizEmp2;
