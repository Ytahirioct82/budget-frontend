import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";

function Transactions() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [Trans, setTrans] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setTrans(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  const HandleDelete = (event) => {
    axios.delete(`${URL}/transactions/${event.target.id}`, Trans[event.target.id]);
    setTrans(Trans.filter((obj, i) => i != event.target.id));
  };
  const result = Trans.map((element, i) => {
    return (
      <div key={i} className="transaction">
        <p>{element.date} </p>
        <Link to={`/transaction/${i}`}>{element.name}</Link>
        <p>{element.amount}</p>
        <button id={i} onClick={HandleDelete}>
          Remove
        </button>
      </div>
    );
  });
  const total = Trans.reduce((a, b) => a + Number(b.amount), 0);

  return (
    <div className="transactions">
      <h5>{`Bank Account Total: $${total}`}</h5>
      {result}
    </div>
  );
}
export default Transactions;
