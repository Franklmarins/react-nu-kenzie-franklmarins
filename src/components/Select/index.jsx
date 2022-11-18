import React from "react";
import "./style.css";

export const Select = ({ select, setSelect }) => {
  return (
    <div className="select-div">
      <label htmlFor="type">Tipo de valor</label>
      <select
        id="type"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
    </div>
  );
};
