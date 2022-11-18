import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Header } from "./components/Header";
import { InitialPage } from "./components/InitialPage";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const [page, setPage] = useState(true);

  return page ? (
    <InitialPage setPage={setPage} />
  ) : (
    <div className="App">
      <Header setPage={setPage} />
      <main className="container">
        <section className="form-section">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          {listTransactions.length > 0 ? (
            <TotalMoney listTransactions={listTransactions} />
          ) : null}
        </section>
        <section className="list-section">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
