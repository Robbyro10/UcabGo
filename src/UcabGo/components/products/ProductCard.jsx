import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore, useUiStore } from "../../../hooks";
import { StoreModal } from "../ui/StoreModal";

export const ProductCard = ({ id, name, price, desc, img, store }) => {
  const { openProductModal } = useUiStore();
  const { setActiveProduct, startDeleteProduct, activeProduct } =
    useUcabGoStore();
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
          <div className="col-4">
            <img
              src={img}
              className="card-img-top h-100"
              alt={name}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-8 mb-2 mt-2">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
            <p>{price}$</p>
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
