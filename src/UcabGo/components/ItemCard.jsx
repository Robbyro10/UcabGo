import { Link } from "react-router-dom";
import { useAuthStore, useUcabGoStore, useUiStore } from "../../hooks";

export const ItemCard = ({ id, name, price, desc, bestSeller, img }) => {
  const itemImageUrl = img;
  const { openProductModal } = useUiStore();
  const { setActiveProduct, startDeleteProduct } = useUcabGoStore();
  const { user } = useAuthStore();

  const onEdit = () => {
    // Still figuring this out
    setActiveProduct({
      id,
      name,
      price,
      desc,
      img,
    });
    openProductModal();
  };

  const handleDelete = () => {
    setActiveProduct({
      id,
      name,
      price,
      desc,
      img,
    });
    startDeleteProduct(id);
  };

  return (
    <>
      <div className="card mb-4" style={{ width: "60rem" }}>
        {bestSeller === "true" && (
          <div className="card-header">Mas Vendido!</div>
        )}
        <div className="row">
          <div className="col-4">
            <img src={itemImageUrl} className="card-img-top" alt={name} />
          </div>
          <div className="col-8 mb-2 mt-2">
            <h2 className="card-title">{name}</h2>
            {user.type !== "clients" && <p>{desc}</p>}
            <p>{price}$</p>

            {user.type === "clients" ? (
              <Link
                to={`/store/item/${id}`}
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
