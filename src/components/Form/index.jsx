import React from "react";
import { useState } from "react";
import { EnterValueButton } from "../Button";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptionInput, setDescriptionInput] = useState("");

  const [valueInput, setValueInput] = useState("");

  const [select, setSelect] = useState("entrada");

  return (
    <form
      className="container"
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
        setDescriptionInput("");
        setValueInput("");
      }}
    >
      <div>
        <>
          <Input
            description={"description"}
            descriptionInput={descriptionInput}
            setDescriptionInput={setDescriptionInput}
          />
          <span className="ex-span">Ex: Compra de roupas</span>
        </>
      </div>
      <div className="input-select-div">
        <>
          <Input
            description={"value"}
            valueInput={valueInput}
            setValueInput={setValueInput}
          />
        </>
        <>
          <Select select={select} setSelect={setSelect} />
        </>
      </div>
      <EnterValueButton />
    </form>
  );
};

export default Form;
