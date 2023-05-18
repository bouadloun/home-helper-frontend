import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_SERVER_URL;

function AddJobPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    axios.get(`${API_URL}/api/categories`).then((response) => {
      console.log("response.data", response.data);
      setCategories(response.data);
    });
  }, []);

  function categoryToHTML(category) {
    return (
      <option value={category._id} key={category._id}>
        {category.name}
      </option>
    );
  }
  function onSelectCategoryChange(e) {
    // step 1: get the category id that was clicked in the browser
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the body of the POST request
    const requestBody = {
      title,
      description,
      budget,
      category,
      user: user._id,
    };

    axios
      .post(`${API_URL}/api/add-job`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        setBudget("");
        setCategory("");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AuthPage">
      <h1 className="auth-title">Add New Job</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="auth-input"
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="auth-input"
          type="number"
          name="budget"
          value={budget}
          placeholder="Budget"
          onChange={(e) => setBudget(e.target.value)}
        />

        <select
          className="auth-input"
          onChange={onSelectCategoryChange}
          placeholder="Category"
        >
          {/* step 3: transform data into html */}
          {categories.map(categoryToHTML)}
          <option value="" selected disabled hidden>
            Choose category
          </option>
        </select>

        <button className="auth-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddJobPage;
