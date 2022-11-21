import React from "react";
import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="total-money-div">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3>
        {listTransactions
          .reduce(
            (previus, current) =>
              current.type === "entrada"
                ? previus + Number(current.value)
                : previus - Number(current.value),
            0
          )
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </h3>
    </div>
  );
};
