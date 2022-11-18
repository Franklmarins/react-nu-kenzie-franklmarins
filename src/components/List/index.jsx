import React, { useState } from "react";
import { FilterButton } from "../Button";
import { Card } from "../Card";
import { NoCard } from "../NoCard";
import "./style.css";

export const List = ({ listTransactions, setListTransactions }) => {
  const [filter, setFilter] = useState("");

  const filtered = listTransactions.filter((transaction) =>
    transaction.type.includes(filter || transaction.type)
  );

  return (
    <>
      <div className="filter-div">
        <h3>Resumo financeiro</h3>
        <div>
          <FilterButton setFilter={setFilter} type="Todos" />
          <FilterButton setFilter={setFilter} type="Entradas" />
          <FilterButton setFilter={setFilter} type="Despesas" />
        </div>
      </div>

      <ul className="transactions-list">
        {listTransactions.length > 0 ? (
          filtered.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ))
        ) : (
          <>
            <h2 className="no-louch">
              Você ainda não possui nenhum lançamento
            </h2>
            <NoCard />
            <NoCard />
            <NoCard />
          </>
        )}
      </ul>
    </>
  );
};
