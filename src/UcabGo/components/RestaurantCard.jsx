import { Link } from "react-router-dom";

export const RestaurantCard = ({ id, name, location, desc, horario, menu }) => {
  const restaurantImageUrl = `/assets/restaurants/${id}.jpg`;
  return (
    <div className="col-lg-4 col-xs-10">
      <div className="card mb-3">
        <img className="card-img-top" src={restaurantImageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">Ubicacion: {location}</p>
          <p className="card-text">Horario: {horario}</p>
          <Link to={`/restaurant/${id}`} className="btn btn-outline-primary">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
