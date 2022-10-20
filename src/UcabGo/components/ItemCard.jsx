import { Link } from "react-router-dom";

export const ItemCard = ({ _id, name, price, desc, bestSeller }) => {
  const itemImageUrl = `/assets/restaurants/${_id.split("-")[1]}.jpg`;

  const userType = "client"; //change to set admin mode

  return (
    <div className="card mb-4" style={{ width: "60rem" }}>
      {bestSeller === "true" && <div className="card-header">Mas Vendido!</div>}
      <div className="row">
        <div className="col-4">
          <img src={itemImageUrl} className="card-img-top" alt={name} />
        </div>
        <div className="col-8 mb-2 mt-2">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <p>{price}</p>

          {userType === "client" ? (
            <Link
              to={`/restaurant/item/${_id}`}
              className="btn btn-outline-success"
            >
              Más
            </Link>
          ) : (
            <button className="btn btn-outline-primary">Editar</button>
          )}
        </div>
      </div>
    </div>
  );
};
