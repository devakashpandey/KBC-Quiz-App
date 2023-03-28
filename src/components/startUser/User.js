import React from "react";
import "./User.css";
import startImg from "../../assets/startImg.png";

const User = () => {
  return (
    <>
      <div className="start">
        <div className="start-img">
          <img src={startImg} alt="myimg" />
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          className="startInput"
        ></input>
        <button className="startBtn">Start</button>
      </div>
    </>
  );
};

export default User;
