import { useEffect } from "react";
import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const AdminClientCard = ({ name, phone, email, _id, active }) => {
  const { deleteClient, activateClient } = useUcabGoStore();

  const handleClick = () => {
    if (active) {
      Swal.fire({
        title: "¿Desactivar el Cliente?",
        confirmButtonText: "Desactivar",
        showDenyButton: true,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteClient(_id);
        }
      });
    } else {
      Swal.fire({
        title: "¿Activar al Cliente?",
        confirmButtonText: "Activar",
        showDenyButton: true,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          activateClient(_id);
        }
      });
    }
  };

  return (
    <li className={"list-group-item " + (!active ? "text-muted" : "")}>
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-user"></i> &nbsp;
          <b>{name}</b>
          <p>
            <i className="fa-solid fa-envelope"></i> &nbsp;
            {email}
            <br />
            <i className="fa-solid fa-phone"></i> &nbsp;
            {phone}
          </p>
          <small className="text-muted">Id: {_id}</small>
        </div>
        <div className="col-2">
          <button className="btn" onClick={handleClick}>
            <i className="fa-solid fa-power-off"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
