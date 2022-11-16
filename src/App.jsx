import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <List listTransactions={listTransactions} />
      <TotalMoney listTransactions={listTransactions} />
    </div>
  );
};

export default App;
