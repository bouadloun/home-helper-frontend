import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/add-job">Offer a Job</Link>
      </div>

      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
