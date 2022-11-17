import React from "react";
import { ExcludeButton } from "../Button";

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
        <ExcludeButton exclude={exclude} transaction={transaction} />
      </div>
    </li>
  );
};

export default Card;
