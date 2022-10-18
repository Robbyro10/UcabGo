import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ItemList, RestaurantModal } from "../components";
import { getRestaurantById } from "../helpers/getRestaurantById";

export const RestaurantPage = () => {
  const { id } = useParams();

  const restaurant = getRestaurantById(id);

  const navigate = useNavigate();

  const onBack = () => {
    navigate("/ucabgo");
  };

  if (!restaurant) {
    return <Navigate to="/ucabgo" />;
  }

  const [adding, setAdding] = useState(false);

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

      <button className="btn btn-primary mb-3" onClick={() => setAdding(true)}>
        Agregar Item
      </button>

      {adding === true && <RestaurantModal />}

      {!restaurant.menu ? (
        <h1>No hay items en este restaurante</h1>
      ) : (
        <ItemList restaurant={restaurant} />
      )}

      <button onClick={onBack} className="btn btn-outline-primary">
        Back
      </button>
    </>
  );
};
