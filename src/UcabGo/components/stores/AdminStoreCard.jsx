import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const AdminStoreCard = ({
  name,
  phone,
  rif,
  img,
  desc,
  email,
  location,
  _id,
  active,
}) => {
  const { deleteStore, activateStore } = useUcabGoStore();

  const handleClick = () => {
    if (active) {
      Swal.fire({
        title: "¿Desactivar el Establecimiento?",
        confirmButtonText: "Desactivar",
        showDenyButton: true,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteStore(_id);
        }
      });
    } else {
      Swal.fire({
        title: "¿Activar al Establecimiento?",
        confirmButtonText: "Activar",
        showDenyButton: true,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          activateStore(_id);
        }
      });
    }
  };

  return (
    <li className={"list-group-item " + (!active ? "text-muted" : "")}>
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-store"></i> &nbsp;
          <b>{name}</b>
          <p>
            <i className="fa-solid fa-envelope"></i> &nbsp;
            {email}
            <br />
            <i className="fa-solid fa-phone"></i> &nbsp;
            {phone}
            <br />
            <i className="fa-solid fa-location-dot"></i> &nbsp;
            {location}
            <br />
            <b>RIF:</b> {rif}
          </p>
          <small className="text-muted">Id: {_id}</small>
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 rounded"
            style={{ maxHeight: "170px", objectFit: "cover" }}
            src={img}
            alt={desc}
          />
        </div>
        <div className="col-fluid">
          <button className="btn mr-2" onClick={handleClick}>
            <i className="fa-solid fa-power-off"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
