import { Link } from "react-router-dom";

export const ItemCard = ({ id, name, price, desc }) => {
  const restaurantImageUrl = `/assets/restaurants/holy.jpg`;

  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-md-4">
          <img src={restaurantImageUrl} className="img-fluid" alt={name} />
        </div>
        <div className="col-md-8 mb-2">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <p>{price}</p>
          <button className="btn btn-success">Select</button>
        </div>
      </div>
    </div>
  );
};
