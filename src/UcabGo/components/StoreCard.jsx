import { Link } from "react-router-dom";

export const StoreCard = ({ _id, name, location, desc, horario, img }) => {
  const restaurantImageUrl = img;
  return (
    <div className="col-lg-4">
      <div className="card mb-3">
        <Link to={`/restaurant/${_id}`}>
          <img className="card-img-top" src={restaurantImageUrl} alt={name} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">Ubicacion: {location}</p>
          <p className="card-text">Horario: {horario}</p>
          <Link to={`/restaurant/${_id}`} className="btn btn-outline-primary">
            Seleccionar
          </Link>
        </div>
      </div>
    </div>
  );
};
