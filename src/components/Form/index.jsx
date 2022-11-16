import React from "react";
import { useState } from "react";
import Input from "../Input";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptionInput, setDescriptionInput] = useState("");

  const [valueInput, setValueInput] = useState("");

  const [select, setSelect] = useState("entrada");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setListTransactions([
          ...listTransactions,
          {
            description: descriptionInput,
            type: select,
            value: valueInput,
          },
        ]);
      }}
    >
      <div>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          value={descriptionInput}
          id="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescriptionInput(event.target.value)}
        ></input>
        <span>Ex: Compra de roupas</span>
      </div>

      <div>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          value={valueInput}
          id="value"
          min={0}
          placeholder="1"
          onChange={(event) => setValueInput(event.target.value)}
        ></input>
      </div>

      <div>
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
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
