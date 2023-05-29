import React, { useEffect, useState } from "react";
import styles from "./assets/styles/styles.scss";
import Header from "./components/organisms/header/Header.jsx";
import MainPage from "./components/templates/mainPage/MainPage";
import Footer from "./components/organisms/footer/footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TermsPage from "./components/templates/TermsPage/TermsPage";
import PolicyPage from "./components/templates/policyPage/PolicyPage";
import ModalMenu from "./components/organisms/modalMenu/ModalMenu";
import CalculatorPage from "./components/templates/culculatorPage/CalculatorPage";
import VideoPage from "./components/templates/videoPage/VideoPage";
import Blog from "./components/templates/blogPage/blog";
import Quiz from "./components/templates/quiz/Quiz";
import QuizBudget from "./components/templates/quiz/budget/QuizBudget";
import Article from "./components/templates/articlePage/article";
import E400 from "./components/templates/404/404";
import Loan from "./components/templates/loan/Loan";

const App = () => {
  const [menu, setMenu] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header setMenu={setMenu} setIsQuiz={setIsQuiz} />
        <Routes>
          <Route index element={<MainPage index />}></Route>
          <Route path="Terms" element={<TermsPage />}></Route>
          <Route path="Policy" element={<PolicyPage />}></Route>
          <Route path="Calculator" element={<CalculatorPage />}></Route>
          <Route path="Video" element={<VideoPage />}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Article" element={<Article />}></Route>
          <Route path="404" element={<E400 />}></Route>
          <Route path="Loan" element={<Loan />}></Route>
          <Route path="Quiz/*" element={<Quiz setIsQuiz={setIsQuiz} />}></Route>
        </Routes>
        <Footer quiz={isQuiz} />
        <ModalMenu menu={menu} setMenu={setMenu} setIsQuiz={setIsQuiz} />
      </BrowserRouter>
    </>
  );
};

export default App;
