import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./assets/styles/styles.scss";
import Btn from "./components/atoms/Buttons/ButtonLiner/ButtonLiner.jsx";
import InputMail from "./components/atoms/Inputs/InputMail/InputMail.jsx";

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <div>
    <InputMail placeholder={"solid"}></InputMail>
  </div>
);
