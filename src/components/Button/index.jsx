import React from "react";
import "./style.css";

const FilterButton = ({ listTransactions, setListFiltered, type }) => {
  return type === "Todos" ? (
    <button
      className="filter-btn"
      onClick={() => {
        setListFiltered(listTransactions);
      }}
    >
      {type}
    </button>
  ) : type === "Entradas" ? (
    <button
      className="filter-btn"
      onClick={() => {
        setListFiltered(listTransactions.filter((e) => e.type === "entrada"));
      }}
    >
      {type}
    </button>
  ) : (
    <button
      className="filter-btn"
      onClick={() => {
        setListFiltered(listTransactions.filter((e) => e.type === "saida"));
      }}
    >
      {type}
    </button>
  );
};

export const EnterValueButton = () => {
  return (
    <button className="enter-btn" type="submit">
      Inserir valor
    </button>
  );
};

export const ExcludeButton = ({ exclude, transaction }) => {
  return (
    <button
      className="exclude-btn"
      onClick={() => {
        exclude(transaction);
      }}
    ></button>
  );
};

export const StartButton = () => {
  return <button className="start-btn">Inicio</button>;
};

export default FilterButton;
