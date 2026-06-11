import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] =
    useState(null);

  useEffect(() => {
    getDestination();
  }, []);

  async function getDestination() {
    const response =
      await api.get(
        `/destinations/${id}`
      );

    setDestination(response.data);
  }

  if (!destination) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <h1>{destination.name}</h1>

      <p>{destination.description}</p>

      <h3>Country</h3>
      <p>{destination.country}</p>

      <h3>Category</h3>
      <p>{destination.category}</p>

      <h3>Budget</h3>
      <p>{destination.budget}</p>

      <h3>Rating</h3>
      <p>{destination.rating}</p>

      <h3>Price</h3>
      <p>₹ {destination.price}</p>
    </div>
  );
}

export default DestinationDetails;