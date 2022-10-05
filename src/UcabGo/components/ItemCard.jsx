import { Link } from "react-router-dom";

export const ItemCard = ({ itemId, name, price, desc }) => {
  const itemImageUrl = `/assets/restaurants/${itemId.split("-")[1]}.jpg`;

  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-4">
          <img src={itemImageUrl} className="card-img-top" alt={name} />
        </div>
        <div className="col-8 mb-2">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <p>{price}</p>

          <Link to={`/order/${itemId}`} className="btn btn-outline-success">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
