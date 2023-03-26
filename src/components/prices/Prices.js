import React from "react";
import "./Prices.css";

const Prices = ({ prices, question }) => {
  return (
    <>
      <ul className="moneyList">
        {prices.map((item, index) => {
          return (
            <>
              <li
                className={
                  question === item.id
                    ? "moneyList-item active"
                    : "moneyList-item"
                }
              >
                <span className="number">{item.id} </span>
                <span className="symbol">-</span>
                {item.amount}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Prices;
