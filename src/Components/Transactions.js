import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";

function Transactions() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [Trans, setTrans] = useState([]);
  useEffect(() => {
    console.log("useEffect run");
    axios
      .get(`${URL}/transactions`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setTrans(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  const result = Trans.map((element, i) => {
    return (
      <div key={i} className="transaction">
        <p>{element.date} </p>
        <Link to={`/transaction/${i}`}>{element.name}</Link>
        <p>{element.amount}</p>
      </div>
    );
  });
  const total = Trans.reduce((a, b) => a + b.amount, 0);
  return (
    <div className="transactions">
      <h5>{`Bank Account Total: ${total}`}</h5>
      {result}
    </div>
  );
}
export default Transactions;
