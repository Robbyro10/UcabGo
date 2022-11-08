import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const AdminClientCard = ({ name, phone, email, _id }) => {
  // const { startDeleteClient, setActiveClient } = useUcabGoStore();

  const client = { _id, name, phone, email };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // setActiveClient({ client });
        // startDeleteClient(_id);
      }
    });
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
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
            <button className="btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};
