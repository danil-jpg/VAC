import React, { useEffect, useState } from "react";
import QuizBudget from "./budget/QuizBudget";
import QuizBudget2 from "./budget2/QuizBudget";
import s from "./quiz.module.scss";

const Quiz = () => {
  const [employed, setEmployed] = useState([]);
  const [res, setRes] = useState(<QuizBudget btnNum={employed} setBtnNum={setEmployed} />);

  let ans = 1;
  console.log(employed);

  useEffect(() => {
    switch (employed) {
      case 1:
        console.log(1);
        // setRes(<QuizBudget btnNum={employed} setBtnNum={setEmployed} />);
        break;
      case 2:
        // setRes(<QuizBudget2 />);
        break;
      default:
    }
  }, []);

  return (
    <div className={`${s.quiz} container`}>
      <div className={s.lineWr}>
        <div className={s.line}></div>
      </div>
      {res}
    </div>
  );
};

export default Quiz;
