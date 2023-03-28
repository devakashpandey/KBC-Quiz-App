import React, { useRef } from "react";
import "./User.css";
import startImg from "../../assets/startImg.png";

const User = ({ setUsername }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
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
          ref={inputRef}
        ></input>
        <button className="startBtn" onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  );
};

export default User;
