import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <p>Budget App</p>
      <Link to="/amount/new">
        <h6>NEW TRANSACTION</h6>
      </Link>
    </div>
  );
}

export default Nav;
