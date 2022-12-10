import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore, useUiStore } from "../../../hooks";
import { StoreModal } from "../ui/StoreModal";

export const ProductCard = ({ id, name, price, desc, img, store }) => {
  const { openProductModal } = useUiStore();
  const { setActiveProduct, startDeleteProduct } = useUcabGoStore();
  const { user } = useAuthStore();
  const product = { id, name, price, desc, img, store };

  const onEdit = () => {
    setActiveProduct({ product });
    openProductModal();
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Desea eliminar el producto?",
      confirmButtonText: "Eliminar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveProduct({ product });
        startDeleteProduct(id);
      }
    });
  };

  return (
    <>
      <div
        className="card mb-4"
        style={{
          width: "60rem",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div className="row">
          <div className="col-sm-4">
            <img
              src={img}
              className="card-img h-100"
              alt={name}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col m-2 mb-4">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
            <p>
              <big>{price}$</big>
            </p>
            {user.type === "admins" && <p>{store.name}</p>}

            {user.type === "clients" ? (
              <Link
                to={`/store/product/${id}`}
                className="btn btn-outline-success"
              >
                Más
              </Link>
            ) : (
              <>
                <button
                  className="btn btn-outline-primary mr-3"
                  onClick={onEdit}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
