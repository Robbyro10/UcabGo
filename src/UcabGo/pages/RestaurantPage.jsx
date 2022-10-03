import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ItemList } from "../components";
import { getRestaurantById } from "../helpers/getRestaurantById";

export const RestaurantPage = () => {
  const { id } = useParams();

  const restaurant = getRestaurantById(id);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  if (!restaurant) {
    return <Navigate to="/ucabgo" />;
  }

  const restaurantImageUrl = `/assets/restaurants/${id}.jpg`;

  return (
    <>
      <h1>{restaurant.name}</h1>

      <p>{restaurant.desc}</p>
      <hr />
      <p>{restaurant.location}</p>
      <p>{restaurant.horario}</p>

      <ItemList restaurant={restaurant} />

      {/* {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))} */}
      <button onClick={onBack} className="btn btn-outline-primary">
        Back
      </button>
    </>
  );
};
