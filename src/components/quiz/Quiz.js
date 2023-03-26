import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <div className="ques">What is my name?</div>
        <div className="answers">
          <div className="answer ">A : rahul</div>
          <div className="answer">B : akash</div>
          <div className="answer">C : shubham</div>
          <div className="answer ">D : golu</div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
