import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizBtn from "../../../atoms/Buttons/Quiz/QuizBtn";

const QuizOtherIncome = () => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  const arr = [
    {
      text: "Long-term disability",
      setBtn: setBtn,
      btn: btn,
      num: 1,
    },
    {
      text: "Spousal support / Alimony",
      setBtn: setBtn,
      btn: btn,
      num: 2,
    },
    {
      text: "Child support",
      setBtn: setBtn,
      btn: btn,
      num: 3,
    },
    {
      text: "Social assistance / Welfare",
      setBtn: setBtn,
      btn: btn,
      num: 4,
    },
    {
      text: "Maternity leave",
      setBtn: setBtn,
      btn: btn,
      num: 5,
    },
    {
      text: "Baby bonus / Child tax",
      setBtn: setBtn,
      btn: btn,
      num: 6,
    },
    {
      text: "Unemployed / EI",
      setBtn: setBtn,
      btn: btn,
      num: 7,
    },
    {
      text: "Other / Not listed",
      setBtn: setBtn,
      btn: btn,
      num: 8,
    },
  ];

  return (
    <div className="quiz-block">
      <p className="quiz-title">How do you earn income?</p>
      <p className="quiz-descr">
        Your employment status will help determine the best vehicle and financing options for you.
      </p>
      <div className="quiz-btn-wr">
        <QuizBtn arr={arr} />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("../Income");
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

export default QuizOtherIncome;
