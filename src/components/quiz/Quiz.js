import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { data } from "../../Data";

const Quiz = ({ setStop, questionNo, setQuestionNo }) => {
  const [currentQues, setCurrentQues] = useState("");
  const [selectedAns, setSelectedAns] = useState("");
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setCurrentQues(data[questionNo - 1]); // array index - 1
  }, [data, questionNo]);

  const handleClick = (ans) => {
    setSelectedAns(ans);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    }, 3000);
    setTimeout(() => {
      {
        if (ans.correct) {
          setQuestionNo((prev) => prev + 1);
        } else {
          setStop(true);
        }
      }
    }, 6000);
  };

  return (
    <>
      <div className="quiz">
        <div className="ques">{currentQues.question}</div>
        <div className="answers">
          {currentQues.answers?.map((ans) => {
            return (
              <div
                className={selectedAns === ans ? className : "answer"}
                onClick={() => handleClick(ans)}
              >
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
