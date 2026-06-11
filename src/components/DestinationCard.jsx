import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function DestinationCard({
  destination,
  onDelete,
}) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <h3>{destination.name}</h3>

      <p>🌍 {destination.country}</p>

      <p>🏷 {destination.category}</p>

      <p>⭐ {destination.rating}</p>

      <div className="card-actions">
        <Link
          className="view-btn"
          to={`/destinations/${destination.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-destination/${destination.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(destination.id)
          }
        >
          Delete
        </button>
      </div>

      <button
        className="favorite-btn"
        onClick={() =>
          dispatch(
            addFavorite(destination)
          )
        }
      >
        ❤ Add Favorite
      </button>
    </div>
  );
}

export default DestinationCard;