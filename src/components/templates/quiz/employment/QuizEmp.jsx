import React, { useState } from "react";
import s from "./quizBudget.module.scss";
import { useNavigate } from "react-router-dom";
import QuizBtn from "../../../atoms/Buttons/Quiz/QuizBtn";
let result;

const QuizEmp = () => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  const arr = [
    {
      text: "Employed",
      setBtn: setBtn,
      btn: btn,
      num: 1,
    },
    {
      text: "Self-Employed",
      setBtn: setBtn,
      btn: btn,
      num: 2,
    },
    {
      text: "Student",
      setBtn: setBtn,
      btn: btn,
      num: 3,
    },
    {
      text: "Retired / Pension",
      setBtn: setBtn,
      btn: btn,
      num: 4,
    },
    {
      text: "Other",
      setBtn: setBtn,
      btn: btn,
      num: 5,
    },
  ];

  return (
    <div className="quiz-block">
      <p className="quiz-title">What's your employment status?</p>
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
            result = btn;

            switch (btn) {
              case 1:
                navigation("../Income");
                break;
              case 2:
                navigation("../Income");
                break;
              case 3:
                navigation("../Income");
                break;
              case 4:
                navigation("../Income");
                break;
              case 5:
                navigation("../OtherIncome");
                break;
              default:
                alert("error");
            }
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
export { result };
export default QuizEmp;
