import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Header } from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <section className="form-section">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
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
