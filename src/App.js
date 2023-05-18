import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import Navbar from "./components/Navbar";
import AddJobPage from "./pages/AddJobPage";
import ApplicationPage from "./pages/ApplicationPage";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />{" "}
            </IsAnon>
          }
        />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={
            <IsPrivate>
              <AddJobPage />
            </IsPrivate>
          }
        />
        <Route
          path="/application"
          element={
            <IsPrivate>
              <ApplicationPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
