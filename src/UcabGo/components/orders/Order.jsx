import React from "react";
import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const Order = ({
  user,
  location,
  detail,
  product,
  time,
  payment,
  appearance,
  day,
  id,
  quantity,
  notes,
}) => {
  if (!user) {
    return;
  }

  const { startDeleteOrder, dispatchOrder, startLoadingOrders } =
    useUcabGoStore();

  const handleDispatch = () => {
    Swal.fire({
      title: "¿Marcar como Despachado?",
      confirmButtonText: "Sí",
      showDenyButton: true,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatchOrder(id);
        startLoadingOrders();
      }
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: "¿Cancelar Pedido?",
      confirmButtonText: "Sí",
      showDenyButton: true,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteOrder(id);
      }
    });
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-cart-shopping"></i> &nbsp;
          <b>
            {product.name} ({quantity})
          </b>
          <p>
            &nbsp;
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            &nbsp;&nbsp;
            {location}, {detail}
            <br />
          </p>
          <p className="text-muted">
            {payment}
            <br />
            <small>{appearance}</small>
          </p>
        </div>
        {notes && (
          <div className="col">
            <p>Notas: {notes}</p>
          </div>
        )}
        <div className="col text-right">
          <i className="fa-regular fa-clock"></i> &nbsp;
          {time} <br /> <small className="text-muted">{day}</small>
          <p className="text-muted">{user.name}</p>
          <button onClick={handleDispatch} className="btn">
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="btn" onClick={handleCancel}>
            <i className="fa-solid fa-ban"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
