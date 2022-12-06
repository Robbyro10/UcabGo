import { useEffect } from "react";
import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

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
  clients,
  stores,
}) => {
  const client = clients.find((client) => client._id === user);
  const store = stores.find((store) => store._id === product.store);

  const { startDeleteOrder } = useUcabGoStore();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
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
            <small>{client.name}</small>
          </p>
          <p>{store.name}</p>
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
