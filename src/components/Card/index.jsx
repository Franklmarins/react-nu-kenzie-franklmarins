import React from "react";

const Card = ({ transaction, index }) => {
  return (
    <li
      key={index}
      style={
        transaction.type === "entrada"
          ? { background: "green" }
          : { background: "grey" }
      }
    >
      <div>
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div>
        <span>{transaction.value}</span>
        <button>Excluir</button>
      </div>
    </li>
  );
};

export default Card;
