import React, { useState } from "react";
import FilterButton from "../Button";
import Card from "../Card";
import { NoCard } from "../NoCard";
import "./style.css";

const List = ({ listTransactions, setListTransactions }) => {
  const [listFiltered, setListFiltered] = useState(listTransactions);

  return (
    <>
      <div className="filter-div">
        <h3>Resumo financeiro</h3>
        <div>
          <FilterButton
            listTransactions={listTransactions}
            setListFiltered={setListFiltered}
            type="Todos"
          />
          <FilterButton
            listTransactions={listTransactions}
            setListFiltered={setListFiltered}
            type="Entradas"
          />
          <FilterButton
            listTransactions={listTransactions}
            setListFiltered={setListFiltered}
            type="Despesas"
          />
        </div>
      </div>

      <ul className="transactions-list">
        {listTransactions.length > 0 ? (
          listTransactions.map((transaction, index) => (
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

export default List;
