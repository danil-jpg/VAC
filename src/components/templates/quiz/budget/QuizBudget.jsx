import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from "./quizBudget.module.scss";

const QuizBudget = ({ btnNum, setBtnNum }) => {
  const navigation = useNavigate();

  let res = "";
  return (
    <div className="quiz-block">
      <p className="quiz-title">What's your budget?</p>
      <p className="quiz-descr">Find vehicle options that fit your budget.</p>
      <div className="quiz-btn-wr">
        <button
          className="quiz-btn"
          onClick={(e) => {
            res = 1;
            e.target.style.border = "1px solid black";
          }}>
          Under $250/Month
        </button>
        <button
          className="quiz-btn"
          onClick={(e) => {
            res = 2;
            e.target.style.border = "1px solid black";
          }}>
          $250-374/Month
        </button>
        <button
          className="quiz-btn"
          onClick={(e) => {
            res = 3;
            e.target.style.border = "1px solid black";
          }}>
          $374-500/Month
        </button>
        <button
          className="quiz-btn"
          onClick={(e) => {
            res = 4;
            e.target.style.border = "1px solid black";
          }}>
          Over $500/Month
        </button>
      </div>
      <button
        className="quiz-btn-cont"
        onClick={() => {
          //   setBtnNum([...btnNum, res]);
          navigation("../Emp");
        }}>
        Continue
      </button>
    </div>
  );
};

export default QuizBudget;
