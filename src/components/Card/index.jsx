import React from "react";
import { ExcludeButton } from "../Button";
import "./style.css";

const Card = ({
  transaction,
  index,
  listTransactions,
  setListTransactions,
}) => {
  const exclude = (item) => {
    const newList = listTransactions.filter(
      (transaction) => item != transaction
    );

    setListTransactions(newList);
  };

  return (
    <li
      className="container"
      key={index}
      style={
        transaction.type === "entrada"
          ? { borderLeft: "4px solid green" }
          : { borderLeft: "4px solid grey" }
      }
    >
      <div className="title-description-card">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="value-btn-card">
        <span>
          {Number(transaction.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <ExcludeButton exclude={exclude} transaction={transaction} />
      </div>
    </li>
  );
};

export default Card;
