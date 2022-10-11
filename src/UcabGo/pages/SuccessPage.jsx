import React from "react";
import { Link } from "react-router-dom";

export const SuccessPage = () => {
  return (
    <div className="col">
      <h1>Tu pedido esta en camino!!</h1>
      <Link to={`/`} className="btn btn-outline-primary">
        Volver
      </Link>
    </div>
  );
};
