import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewTransaction() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [Trans, setTrans] = useState([
    {
      date: "",
      name: "",
      amount: "",
      from: "",
    },
  ]);

  const HandleChange = (event) => {
    setTrans({ ...Trans, [event.target.name]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/transactions`, Trans).then(() => navigate(`/`));
  };

  return (
    <div className="New">
      <p>Add a new item</p>
      <form onSubmit={HandleSubmit}>
        <label className="label" for="date">
          Date
        </label>
        <br />
        <input type="text" value={Trans.date} name="date" placeholder="date" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="name">
          Name
        </label>
        <br />
        <input type="text" value={Trans.name} name="name" placeholder="name" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="amount">
          Amount
        </label>
        <br />
        <input type="number" value={Trans.amount} name="amount" placeholder="amount" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="from">
          Form
        </label>
        <br />
        <input type="text" value={Trans.from} name="from" placeholder="from" onChange={HandleChange} />
        <br />
        <br />
        <button type="submit">CREAT NEW ITEM</button>
      </form>
    </div>
  );
}

export default NewTransaction;
