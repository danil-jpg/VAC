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
import QuizWhere from "./where/QuizWhere";
import QuizWhen from "./when/QuizWhen";
import QuizPreLast from "./preLastStep/QuizPreLast";

const Quiz = ({ setIsQuiz }) => {
  const [lineWidth, setLineWidth] = useState(9);
  const [employed, setEmployed] = useState([]);
  useEffect(() => setIsQuiz(true), []);

  return (
    <div className={`${s.quiz} container`}>
      <div className={s.lineWr}>
        <div className={`line`} style={{ width: `${lineWidth}%` }}></div>
      </div>
      <Routes>
        <Route
          element={
            <QuizBudget
              setLineWidth={setLineWidth}
              lineWidth={lineWidth}
              btnNum={employed}
              setBtnNum={setEmployed}
            />
          }
          path="budget"></Route>
        <Route
          element={<QuizEmp setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="Emp"></Route>
        <Route
          element={<QuizIncome setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="Income"></Route>
        <Route
          element={<QuizOtherIncome setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="OtherIncome"></Route>
        <Route
          element={<QuizEmp2 setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="Emp2"></Route>
        <Route
          element={<QuizHowLong setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="HowLong"></Route>
        <Route
          element={<QuizCurrWork setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="CurrWork"></Route>
        <Route
          element={<QuizWhere setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="WhereDoYouLive"></Route>
        <Route
          element={<QuizWhen setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="WhenWereYouBorn"></Route>
        <Route
          element={<QuizPreLast setLineWidth={setLineWidth} lineWidth={lineWidth} />}
          path="Congrats"></Route>
      </Routes>
    </div>
  );
};

export default Quiz;
