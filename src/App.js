import "./App.css";
import "./Components/Nav.css";
import "./Components/Transactions.css";
import Transactions from "./Components/Transactions.js";
import NewTransaction from "./Components/NewTransaction";
import EditTransaction from "./Components/EditTransaction";
import "./Components/NewTransaction.css";
// import "./Components/EditLog.css";
// import "./Components/LogDetails.css";
import Nav from "./Components/Nav";
// import LogsTitles from "./Components/LogsTitles";
import { Route, Routes } from "react-router-dom";
// import NewLog from "./Components/NewLog";
// import LogDetails from "./Components/LogDetails";
// import EditLog from "./Components/EditLog";
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Transactions />} />
          <Route path="/transaction/new" element={<NewTransaction />} />
          <Route path="/transaction/:index" element={<EditTransaction />} />
          {/*<Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<LogDetails />} />
          <Route path="/logs/:index/edit" element={<EditLog />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
