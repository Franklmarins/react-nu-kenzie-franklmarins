import React from "react";
import { useState } from "react";

const Input = ({ type, description }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <label htmlFor={description}></label>
      <input
        type={type}
        value={input}
        id={description}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      ;
    </>
  );
};

export default Input;
