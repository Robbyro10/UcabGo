import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const AdminProductCard = ({ name, desc, store, price, img, id }) => {
  const { startDeleteProduct } = useUcabGoStore();

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log(id);
    Swal.fire({
      title: "¿Seguro?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteProduct(id);
      }
    });
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            <i className="fa-solid fa-bag-shopping"></i> &nbsp;
            <b>{name}</b>
            <p>{store?.name}</p>
            <small>{desc}</small>
            <p>
              <b>{price}$</b>
              <br />
            </p>
          </div>
          <div className="col-4">
            <img
              className="img-fluid img-thumbnail"
              style={{ maxHeight: "170px" }}
              src={img}
              alt={desc}
            />
          </div>
          <div className="col-2">
            <button className="btn" onClick={handleEdit}>
              <i className="fa-solid fa-pencil"></i>
            </button>
            <br />
            <button className="btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};
