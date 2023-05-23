import React, { useState } from "react";
import styles from "./assets/styles/styles.scss";
import Header from "./components/organisms/header/Header.jsx";
import MainPage from "./components/templates/mainPage/MainPage";
import Footer from "./components/organisms/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsPage from "./components/templates/TermsPage/TermsPage";
import PolicyPage from "./components/templates/policyPage/PolicyPage";
import ModalMenu from "./components/organisms/modalMenu/ModalMenu";
import CalculatorPage from "./components/templates/culculatorPage/CalculatorPage";

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header menu={menu} setMenu={setMenu} />
        <Routes>
          <Route index element={<MainPage index />}></Route>
          <Route path="Terms" element={<TermsPage />}></Route>
          <Route path="Policy" element={<PolicyPage />}></Route>
          <Route path="Calculator" element={<CalculatorPage />}></Route>
        </Routes>
        <Footer />
        <ModalMenu menu={menu} setMenu={setMenu} />
      </BrowserRouter>
    </>
  );
};

export default App;
