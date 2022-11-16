import React from "react";
import Card from "../Card";
import { useState } from "react";

const List = ({ listTransactions }) => {
  const [listFiltered, setListFiltered] = useState(listTransactions);

  return (
    <section>
      <div>
        <h3>Resumo financeiro</h3>
        <div>
          <button
            onClick={() => {
              setListFiltered(listTransactions);
            }}
          >
            Todos
          </button>
          <button
            onClick={() => {
              setListFiltered(
                listTransactions.filter((e) => e.type === "entrada")
              );
            }}
          >
            Entradas
          </button>
          <button
            onClick={() => {
              setListFiltered(
                listTransactions.filter((e) => e.type === "saida")
              );
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {listFiltered.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default List;
