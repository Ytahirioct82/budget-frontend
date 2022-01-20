import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/">
        <p>Budget App</p>
      </Link>
      <Link to="/transaction/new">
        <h6>NEW TRANSACTION</h6>
      </Link>
    </div>
  );
}

export default Nav;
