import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Transactions() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [Trans, setTrans] = useState([]);

  useEffect(() => {
    console.log(URL);
    axios
      .get(`${URL}/transactions`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setTrans(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  console.log(Trans);
  const HandleDelete = (event) => {
    axios.delete(`${URL}/transactions/${event.target.id}`, Trans[event.target.id]);
    setTrans(Trans.filter((obj) => obj.id != event.target.id));
  };
  const result = Trans.map((element, i) => {
    return (
      <div key={i} className="transaction">
        <p>{element.date} </p>
        <Link to={`/transaction/details/${element.id}`}>{element.name}</Link>
        <p>{element.amount}</p>
        <button id={element.id} onClick={HandleDelete}>
          Remove
        </button>
      </div>
    );
  });
  const total = Trans.reduce((a, b) => a + Number(b.amount), 0);

  let sum = "white";
  if (total < 0) {
    sum = "red";
  }
  if (total > 1000) {
    sum = "green";
  }

  return (
    <div className="transactions">
      <h5>
        Bank Account Total: <span className={sum}>{`$${total}`}</span>
      </h5>
      {result}
    </div>
  );
}
export default Transactions;
