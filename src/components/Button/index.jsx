import React from "react";
import "./style.css";

export const FilterButton = ({ setFilter, type }) => {
  return type === "Todos" ? (
    <button
      className="filter-btn"
      onClick={() => {
        setFilter("");
      }}
    >
      {type}
    </button>
  ) : type === "Entradas" ? (
    <button
      className="filter-btn"
      onClick={() => {
        setFilter("entrada");
      }}
    >
      {type}
    </button>
  ) : (
    <button
      className="filter-btn"
      onClick={() => {
        setFilter("saida");
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

export const StartButton = ({ setPage }) => {
  return (
    <button
      className="start-btn"
      onClick={() => {
        setPage(true);
      }}
    >
      Inicio
    </button>
  );
};

export const InitialButton = ({ setPage }) => {
  return (
    <button
      className="initial-btn"
      onClick={() => {
        setPage(false);
      }}
    >
      Iniciar
    </button>
  );
};
