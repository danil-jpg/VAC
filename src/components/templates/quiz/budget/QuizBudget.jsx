import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./quizBudget.module.scss";
import QuizBtn from "../../../atoms/Buttons/Quiz/QuizBtn";

const QuizBudget = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  useEffect(() => {
    setLineWidth(0);
  }, []);

  const arr = [
    {
      text: "Under $250/Month",
      setBtn: setBtn,
      btn: btn,
      num: 1,
    },
    {
      text: "$250-374/Month",
      setBtn: setBtn,
      btn: btn,
      num: 2,
    },
    {
      text: "$374-500/Month",
      setBtn: setBtn,
      btn: btn,
      num: 3,
    },
    {
      text: "Over $500/Month",
      setBtn: setBtn,
      btn: btn,
      num: 4,
    },
  ];

  return (
    <div className="quiz-block">
      <p className="quiz-title">What's your budget?</p>
      <p className="quiz-descr">Find vehicle options that fit your budget.</p>
      <div className="quiz-btn-wr">
        <QuizBtn arr={arr} />
      </div>
      <button
        className="quiz-btn-cont"
        onClick={() => {
          // setBtnNum([...btnNum, res]);
          navigation("../Emp");
          setLineWidth(lineWidth + 9);
        }}>
        Continue
      </button>
    </div>
  );
};

export default QuizBudget;
