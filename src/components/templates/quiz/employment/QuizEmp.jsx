import React from "react";
import s from "./quizBudget.module.scss";
import { useNavigate } from "react-router-dom";

const QuizEmp = () => {
  const navigation = useNavigate();
  // console.log(btnNum);
  let res = "";
  return (
    <div className="quiz-block">
      <p className="quiz-title">What's your employment status?</p>
      <p className="quiz-descr">
        Your employment status will help determine the best vehicle and financing options for you.
      </p>
      <div className="quiz-btn-wr">
        <button className="quiz-btn" onClick={() => (res = 1)}>
          Employed
        </button>
        <button className="quiz-btn" onClick={() => (res = 2)}>
          Self-Employed
        </button>
        <button className="quiz-btn" onClick={() => (res = 3)}>
          Student
        </button>
        <button className="quiz-btn" onClick={() => (res = 4)}>
          Retired / Pension
        </button>
        <button className="quiz-btn" onClick={() => (res = 5)}>
          Other
        </button>
      </div>
      <button
        className="quiz-btn-cont"
        onClick={() => {
          // setBtnNum([...btnNum, res]);
        }}>
        Continue
      </button>
    </div>
  );
};

export default QuizEmp;
