import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { data } from "../../Data";
import useSound from "use-sound";
import play from "../../sounds/play.mp3";
import correct from "../../sounds/correct.mp3";
import wait from "../../sounds/wait.mp3";
import wrong from "../../sounds/wrong.mp3";

const Quiz = ({ setStop, questionNo, setQuestionNo }) => {
  const [currentQues, setCurrentQues] = useState("");
  const [selectedAns, setSelectedAns] = useState("");
  const [className, setClassName] = useState("answer");

  // ADDING SOUNDS HERE --------->>
  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [waitPlease] = useSound(wait);
  const [wrongAns] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setCurrentQues(data[questionNo - 1]); // array index - 1
  }, [data, questionNo]);

  const handleClick = (ans) => {
    setSelectedAns(ans);
    setClassName("answer active");
    setTimeout(() => {
      waitPlease();
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    }, 3000);
    // next ques logic (change ques after 6 sec)----->>>
    setTimeout(() => {
      {
        if (ans.correct) {
          correctAns();
          setTimeout(() => {
            setQuestionNo((prev) => prev + 1);
          }, 4000);
        } else {
          wrongAns();
          setTimeout(() => {
            setStop(true);
          }, 3000);
        }
      }
    }, 6000);
  };

  return (
    <>
      <div className="quiz">
        <div className="ques">{currentQues.question}</div>
        <div className="answers">
          {currentQues.answers?.map((ans, index) => {
            return (
              <div
                className={selectedAns === ans ? className : "answer"}
                onClick={() => handleClick(ans)}
                key={index}
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
