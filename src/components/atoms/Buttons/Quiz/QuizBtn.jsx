import React from "react";

const QuizBtn = ({ arr = [] }) => {
  return arr.map((el) => {
    return (
      <button
        key={`${el.num}/${el.text}`}
        className={`quiz-btn ${el.btn === el.num ? "quiz-btn-active" : ""}`}
        onClick={() => {
          el.setBtn(el.num);
        }}>
        {el.text}
      </button>
    );
  });
};

export default QuizBtn;
