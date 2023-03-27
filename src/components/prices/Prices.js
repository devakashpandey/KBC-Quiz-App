import React from "react";
import "./Prices.css";

const Prices = ({ prices, questionNo }) => {
  return (
    <>
      <ul className="moneyList">
        {prices.map((item, index) => {
          return (
            <div key={index}>
              <li
                className={
                  questionNo === item.id
                    ? "moneyList-item active"
                    : "moneyList-item"
                }
              >
                <span className="number">{item.id} </span>
                <span className="symbol">-</span>
                {item.amount}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Prices;
