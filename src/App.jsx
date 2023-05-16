import React from "react";
import styles from "./assets/styles/styles.scss";
import Header from "./components/organisms/header/Header.jsx";
import MainPage from "./components/templates/mainPage/MainPage";

const App = () => {
  return (
    <>
      <Header />
      <MainPage></MainPage>
    </>
  );
};

export default App;
