import React from "react";
import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="container total-money-div">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3>
        R${" "}
        {listTransactions
          .map((transaction) => transaction.value)
          .reduce((previus, current) => Number(previus) + Number(current), 0)}
      </h3>
    </div>
  );
};

export default TotalMoney;
