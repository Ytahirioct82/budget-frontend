import Transactions from "./Components/Transactions.js";
import NewTransaction from "./Components/NewTransaction";
import EditTransaction from "./Components/EditTransaction";
import TransactionDetail from "./Components/TransactionDetail.js";
import "./Components/Transactions.css";
import "./Components/TransactionDetail.css";
import "./Components/NewTransaction.css";
import "./Components/Nav.css";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Transactions />} />
          <Route path="/transaction/new" element={<NewTransaction />} />
          <Route path="/transaction/details/:index" element={<TransactionDetail />} />
          <Route path="/transaction/edit/:index" element={<EditTransaction />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
