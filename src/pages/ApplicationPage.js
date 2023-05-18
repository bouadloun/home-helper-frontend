import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function ApplicationPage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div>
      {user && <h1>Yay {user.name}! Your contact info has been sent.</h1>}
      <Link to="/">Return to homepage</Link>
    </div>
  );
}

export default ApplicationPage;
