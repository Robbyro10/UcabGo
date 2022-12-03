import React from "react";
import { appendErrors } from "react-hook-form";
import Swal from "sweetalert2";

export const AdminOrder = ({
  appearance,
  day,
  detail,
  id,
  status,
  location,
  notes,
  payment,
  time,
  quantity,
  product,
  user,
}) => {
  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // setActiveProduct({ product });
        // startDeleteProduct(id);
      }
    });
    console.log("Order soft deleted");
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <big>
            <b>{product.name}</b> ({quantity})
          </big>
          <p>
            {location}, {detail}
          </p>
          <p>
            {payment}&nbsp;
            <b>{product.price * quantity}$</b>
          </p>
          <p>
            <b>{status}</b>
          </p>
        </div>
        <div className="col">
          <p>{appearance}</p>
          {notes && <p>Notas: {notes}</p>}
        </div>

        <div className="col text-right">
          <p>{time}</p>
          <p>{day}</p>

          <p className="text-muted">
            <small>{user}</small>
          </p>
          <p>{product.store}</p>
        </div>
        <div className="col-fluid">
          <button className="btn" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
