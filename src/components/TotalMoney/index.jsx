import React from "react";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div>
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
