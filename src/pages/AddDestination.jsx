import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddDestination() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      country: "",
      category: "",
      image: "",
      description: "",
      rating: "",
      budget: "",
      price: ""
    });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.post(
      "/destinations",
      formData
    );

    navigate("/destinations");
  }

  return (
    <div className="form-container">

      <h2>Add Destination</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <input
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <button
          className="submit-btn"
        >
          Add Destination
        </button>

      </form>
    </div>
  );
}

export default AddDestination;