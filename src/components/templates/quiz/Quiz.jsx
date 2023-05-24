import React, { useEffect, useState } from "react";
import QuizBudget from "./budget/QuizBudget";
import QuizEmp from "./employment/QuizEmp";
import s from "./quiz.module.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Quiz = ({ setIsQuiz }) => {
  const [employed, setEmployed] = useState([]);
  //   const [res, setRes] = useState(<QuizBudget btnNum={employed} setBtnNum={setEmployed} />);
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
        <Route element={<p>text</p>} path="/1"></Route>
      </Routes>
    </div>
  );
};

export default Quiz;
