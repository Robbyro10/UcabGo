import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getRestaurantById } from "../helpers/getRestaurantById";

export const RestaurantPage = () => {
  const { id } = useParams();

  const restaurant = getRestaurantById(id);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  if (!restaurant) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <h1>{restaurant.id}</h1>
      <button onClick={onBack} className="btn btn-outline-primary">
        Back
      </button>
    </>
  );
};
