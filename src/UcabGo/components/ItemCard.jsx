import { Link } from "react-router-dom";
import { useAuthStore, useUcabGoStore, useUiStore } from "../../hooks";
import { getProductById } from "../helpers";
import { RestaurantModal } from "./RestaurantModal";

export const ItemCard = ({ _id, name, price, desc, bestSeller, img }) => {
  const itemImageUrl = img;
  const { openProductModal } = useUiStore();
  const { setActiveProduct, startDeleteEvent } = useUcabGoStore();
  const { user } = useAuthStore();

  const onEdit = () => {
    // Still figuring this out
    setActiveProduct({
      _id,
      name,
      price,
      desc,
    });
    openProductModal();
  };

  const handleDelete = () => {
    setActiveProduct({
      _id,
      name,
      price,
      desc,
    });
    startDeleteEvent({ _id });
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
            <p>{desc}</p>
            <p>{price}$</p>

            {user.type === "client" ? (
              <Link
                to={`/restaurant/item/${_id}`}
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
