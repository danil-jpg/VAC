import React, { useState } from "react";
import styles from "./assets/styles/styles.scss";
import Header from "./components/organisms/header/Header.jsx";
import MainPage from "./components/templates/mainPage/MainPage";
import Footer from "./components/organisms/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsPage from "./components/templates/TermsPage/TermsPage";

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header menu={menu} setMenu={setMenu} />
        <Routes>
          <Route index element={<MainPage index menu={menu} setMenu={setMenu} />}></Route>
          <Route path="Terms" element={<TermsPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
