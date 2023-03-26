import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { data } from "../../Data";

const Quiz = ({ setTimeOut, questionNo, setQuestionNo }) => {
  const [currentQues, setCurrentQues] = useState("");

  useEffect(() => {
    setCurrentQues(data[questionNo - 1]); // array index - 1
  }, [data, questionNo]);

  return (
    <>
      <div className="quiz">
        <div className="ques">{currentQues.question}</div>
        <div className="answers">
          {currentQues.answers.map((ans) => {
            return (
              <div className="answer">
                {ans.option}
                {ans.option_ans}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Quiz;
