import Home from "../images/pic1.avif";

function HomePage() {
  return (
    <div>
      <h1>House Helper</h1>
      <img className="main-image" src={Home} alt="Home" />
      <p>
        Easily book local professionals and helpers for fast and affordable
        solutions within your community with just a few taps. 📱
      </p>

      <div className="about-us">
        <div className="about-us-section">
          <b className="about-us-title">POST</b>
          <p className="about-us-text">
            Create a task ad by describing your task, adding pictures, selecting
            a date/time, and specifying required tools or equipment. Set your
            budget and post your ad for free, connecting with potential helpers
            who can assist you.
          </p>
        </div>
        <div className="about-us-section">
          <b className="about-us-title">SELECT</b>
          <p className="about-us-text">
            Receive a variety of offers from nearby professional Home Helpers
            promptly, allowing you to choose the best-priced option for your
            task by comparing their profiles.
          </p>
        </div>
        <div className="about-us-section">
          <b className="about-us-title">BOOK and GET IT DONE</b>
          <p className="about-us-text">
            Effortlessly arrange and accomplish tasks by booking local
            professionals and getting them done promptly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
