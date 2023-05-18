import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav id="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        {isLoggedIn && <Link to="/add-job">Offer a Job</Link>}
      </div>

      {!isLoggedIn && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <a>{user && `Hello ${user.name}`}</a>
          <button onClick={logOutUser}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
