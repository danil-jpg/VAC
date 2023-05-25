import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./quiz.module.scss";

const QuizCurrWork = ({}) => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  return (
    <div className="quiz-block">
      <p className="quiz-title">Tell us about your employment</p>
      <p className="quiz-descr">
        We won’t come visit but we need these details to confirm your employment status so you can
        get the best rates possible.
      </p>
      <div className="quiz-btn-wr ">
        <button
          className={`quiz-btn ${s.btn} ${btn === 1 ? s.btnActive : ""}`}
          onClick={() => {
            setBtn(1);
          }}>
          Yes
        </button>
        <button
          className={`quiz-btn ${s.btn} ${btn === 2 ? s.btnActive : ""}`}
          onClick={() => {
            setBtn(2);
          }}>
          No
        </button>
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

export default QuizCurrWork;
