import { Link } from "react-router-dom";

function ApplicationPage() {
  const username = "Sasha";
  return (
    <div>
      <h1>Yay {username}! Your contact info has been sent.</h1>
      <Link to="/">Return to homepage</Link>
    </div>
  );
}

export default ApplicationPage;
