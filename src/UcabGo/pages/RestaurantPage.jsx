import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { FabAddNew, ItemList, RestaurantModal } from "../components";
import { getProductsByRestaurant, getRestaurantById } from "../helpers";

export const RestaurantPage = () => {
  const { _id } = useParams();

  const restaurant = getRestaurantById(_id);
  const products = getProductsByRestaurant(restaurant);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const onBack = () => {
    navigate("/ucabgo");
  };

  if (!restaurant) {
    return <Navigate to="/ucabgo" />;
  }

  return (
    <>
      <h1>{restaurant.name}</h1>

      <p>{restaurant.desc}</p>
      <hr />
      <p>
        <b>Ubicacion: </b>
        {restaurant.location}
      </p>
      <p>
        <b>Horario: </b>
        {restaurant.horario}
      </p>

      {user.type !== "clients" && <FabAddNew />}

      <RestaurantModal restaurant={restaurant.name} />

      {!products ? (
        <h1>No hay items en este restaurante</h1>
      ) : (
        <ItemList restaurant={restaurant} />
      )}

      <button onClick={onBack} className="btn btn-outline-primary mb-5">
        Atrás
      </button>
    </>
  );
};
