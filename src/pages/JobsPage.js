import { useState, useEffect } from "react";
import axios from "axios";

function JobsPage() {
  const [allJobs, setAllJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  // useEffect guarantees that the code inside of it only runs ONCE
  // when the page loads.
  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("http://localhost:5005/api/jobs").then((response) => {
      console.log("response.data", response.data);
      setAllJobs(response.data);
      setDisplayJobs(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5005/api/categories").then((response) => {
      console.log("response.data", response.data);
      setCategories(response.data);
    });
  }, []);

  // step 1: retrieve data
  //   const handleRole = (e) => setRole(e.target.value);

  function jobObjectToHTML(job) {
    return (
      <li key={job._id}>
        <div>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Budget: {job.budget}</p>
        </div>
      </li>
    );
  }

  // step 2: define how data is transformed to html
  function categoryToHTML(category) {
    return (
      <option value={category._id} key={category._id}>
        {category.name}
      </option>
    );
  }

  function onSelectChange(e) {
    // step 1: get the category id that was clicked in the browser
    const selectedCategory = e.target.value;
    console.log(selectedCategory);

    // look at the list of ALL jobs and put only the relevant ones
    // into a new temporary variable "filteredJobs"
    const filteredJobs = allJobs.filter(
      (job) => job.category === selectedCategory
    );

    // update the value of "displayJobs" to the value of "filteredJobs"
    setDisplayJobs(filteredJobs);
    // 1. remove all jobs from "jobs" state variable that are not of "selectedCategory"
  }

  return (
    <div>
      <label className="selectRole" for="select-role">
        Select a category
      </label>
      <select className="dropdown-role" onChange={onSelectChange}>
        {/* step 3: transform data into html */}
        {categories.map(categoryToHTML)}
      </select>

      <h1 className="auth-title">Jobs</h1>
      <ul>{displayJobs.map(jobObjectToHTML)}</ul>
    </div>
  );
}

export default JobsPage;
