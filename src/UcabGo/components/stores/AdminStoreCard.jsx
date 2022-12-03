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
}) => {
  //   const { startDeleteStore, setActiveStore } = useUcabGoStore();

  const store = { _id, name, phone, desc, email, img, rif, location };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // setActiveStore({ store });
        // startDeleteStore(_id);
      }
    });
  };

  return (
    <li className="list-group-item">
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
            className="img-fluid img-thumbnail"
            style={{ maxHeight: "170px" }}
            src={img}
            alt={desc}
          />
        </div>
        <div className="col-fluid">
          <button className="btn mr-2" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
