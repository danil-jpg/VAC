import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";
import { result } from "../employment/QuizEmp.jsx";

const QuizIncome = ({ btnNum, setBtnNum }) => {
  const navigation = useNavigate();
  const [btn, setBtn] = useState(null);

  return (
    <div className="quiz-block">
      <p className="quiz-title">Enter your monthly income</p>
      <p className="quiz-descr">
        Your income details help us make sure your vehicle payments are easy and affordable. Before
        taxes and deductions.
      </p>
      <div className="quiz-btn-wr quiz-input-wr">
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Monthly income"} />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            switch (result) {
              case 1:
                navigation("../Emp2");
                break;
              case 2:
                navigation("../HowLong");
                break;
              case 3:
                navigation("../HowLong");
                break;
              case 4:
                navigation("../CurrWork");
                break;
              case 5:
                navigation("../HowLong");
                break;
              default:
                alert("error");
            }
            // setBtnNum([...btnNum, res]);
            // navigation("../")
          }}>
          Continue
        </button>
        <button
          className="quiz-btn-back"
          onClick={() => {
            navigation(-1);
          }}>
          <img src={require("../../../../assets/img/components/Quiz/Arrow-Bottom.svg")} />
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizIncome;
