import React, { useEffect, useState } from "react";
import QuizBudget from "./budget/QuizBudget";
import QuizEmp from "./employment/QuizEmp";
import s from "./quiz.module.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import QuizIncome from "./income/QuizIncome";
import QuizOtherIncome from "./otherIncome/QuizOtherIncome";
import QuizEmp2 from "./emp2/Quiz.Emp2";
import QuizHowLong from "./howLong/QuizLong";
import QuizCurrWork from "./areYouWorking/QuizCurrWork";

const Quiz = ({ setIsQuiz }) => {
  const [employed, setEmployed] = useState([]);
  useEffect(() => setIsQuiz(true), []);

  return (
    <div className={`${s.quiz} container`}>
      <div className={s.lineWr}>
        <div className={s.line}></div>
      </div>
      <Routes>
        <Route
          element={<QuizBudget btnNum={employed} setBtnNum={setEmployed} />}
          path="budget"></Route>
        <Route element={<QuizEmp />} path="Emp"></Route>
        <Route element={<QuizIncome />} path="Income"></Route>
        <Route element={<QuizOtherIncome />} path="OtherIncome"></Route>
        <Route element={<QuizEmp2 />} path="Emp2"></Route>
        <Route element={<QuizHowLong />} path="HowLong"></Route>
        <Route element={<QuizCurrWork />} path="CurrWork"></Route>
      </Routes>
    </div>
  );
};

export default Quiz;
