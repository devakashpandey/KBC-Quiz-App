import { useEffect, useState } from "react";
import "./App.css";
import Prices from "./components/prices/Prices";
import Quiz from "./components/quiz/Quiz";

function App() {
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const prices = [
    { id: 16, amount: "₹ 7 Crore" },
    { id: 15, amount: "₹ 1 Crore" },
    { id: 14, amount: "₹ 50,00,000" },
    { id: 13, amount: "₹ 25,00,000" },
    { id: 12, amount: "₹ 12,50,000" },
    { id: 11, amount: "₹ 6,40,000" },
    { id: 10, amount: "₹ 3,20,000" },
    { id: 9, amount: "₹ 1,60,000" },
    { id: 8, amount: "₹ 80,000" },
    { id: 7, amount: "₹ 40,000" },
    { id: 6, amount: "₹ 20,000" },
    { id: 5, amount: "₹ 10,000" },
    { id: 4, amount: "₹ 5,000" },
    { id: 3, amount: "₹ 3,000" },
    { id: 2, amount: "₹ 2,000" },
    { id: 1, amount: "₹ 1,000" },
  ];

  useEffect(() => {
    questionNo > 1 &&
      setEarned(prices.find((money) => money.id === questionNo - 1).amount);
  }, [prices, questionNo]);

  return (
    <div className="app">
      <div className="left-container">
        {stop ? (
          <h1 className="earned">You Earned:{earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Quiz
                setStop={setStop}
                setQuestionNo={setQuestionNo}
                questionNo={questionNo}
              />
            </div>
          </>
        )}
      </div>

      <div className="money-side">
        <Prices prices={prices} questionNo={questionNo} />
      </div>
    </div>
  );
}

export default App;
