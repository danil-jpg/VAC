import React from "react";
import s from "./quizBudget.module.scss";

const QuizBudget = ({ btnNum, setBtnNum }) => {
  console.log(btnNum);
  return (
    <div className="quiz-block">
      <p className="quiz-title">What's your budget?</p>
      <p className="quiz-descr">Find vehicle options that fit your budget.</p>
      <div className="quiz-btn-wr">
        <button className="quiz-btn" onClick={() => setBtnNum([...btnNum, 1])}>
          Under $250/Month
        </button>
        <button className="quiz-btn" onClick={() => setBtnNum([...btnNum, 2])}>
          $250-374/Month
        </button>
        <button className="quiz-btn" onClick={() => setBtnNum([...btnNum, 3])}>
          $374-500/Month
        </button>
        <button className="quiz-btn" onClick={() => setBtnNum([...btnNum, 4])}>
          Over $500/Month
        </button>
      </div>
      <button className="quiz-btn-cont">Continue</button>
    </div>
  );
};

export default QuizBudget;
