import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFavorite,
} from "../features/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <button
            onClick={() =>
              dispatch(
                removeFavorite(item.id)
              )
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;