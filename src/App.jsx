import React, { useState } from "react";
import styles from "./assets/styles/styles.scss";
import Header from "./components/organisms/header/Header.jsx";
import MainPage from "./components/templates/mainPage/MainPage";
import Footer from "./components/organisms/footer/footer";
import ModalsTemplate from "./components/organisms/modalTemp/ModalTemplate";

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <MainPage menu={menu} setMenu={setMenu} />
      <Footer />
    </>
  );
};

export default App;
