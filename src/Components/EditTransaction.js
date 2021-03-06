import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditTransaction() {
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

  const HandleChange = (event) => {
    setTrans({ ...Trans, [event.target.name]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    !Object.values(Trans).includes("") &&
      axios.put(`${URL}/transactions/${index}`, Trans).then(() => navigate(`/transaction/details/${index}`));
  };

  return (
    <div className="New">
      <p>Edit this item</p>
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
        <button type="submit">Edit NEW ITEM</button>
      </form>
    </div>
  );
}

export default EditTransaction;
