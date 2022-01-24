import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function TransactionDetail() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { index } = useParams();
  const [Trans, setTrans] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setTrans(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);

  console.log(Trans);
  return (
    <div className="details">
      <h5>Transaction Detail Page</h5>
      {Object.keys(Trans) && <p>The date of the transaction was on {Trans.date} </p>}
      {Object.keys(Trans) && <p>The amount was for {Trans.name}</p>}
      {Object.keys(Trans) && <p>The amount was $ {Trans.amount}</p>}
      {Object.keys(Trans) && <p>The amount was from {Trans.from}</p>}
      <Link to={`/transaction/edit/${index}`}>
        <button>Edit This Transaction</button>
      </Link>
    </div>
  );
}
export default TransactionDetail;
