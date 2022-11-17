import React from "react";
import "./style.css";

const Input = ({
  description,
  descriptionInput,
  setDescriptionInput,
  valueInput,
  setValueInput,
}) => {
  return description === "description" ? (
    <div className="input-div">
      <label htmlFor={description}>Descrição</label>
      <input
        type="text"
        value={descriptionInput}
        required
        id={description}
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescriptionInput(event.target.value)}
      ></input>
    </div>
  ) : (
    <div className="input-div value-div">
      <label htmlFor={description}>Valor</label>
      <input
        type="number"
        value={valueInput}
        required
        min={0}
        id={description}
        placeholder="1"
        onChange={(event) => setValueInput(event.target.value)}
      ></input>
    </div>
  );
};

export default Input;
