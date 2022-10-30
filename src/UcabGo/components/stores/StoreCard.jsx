import { Link } from "react-router-dom";

export const StoreCard = ({ _id, name, location, desc, img }) => {
  const storeImgUrl = img;
  return (
    <div className="col-lg-4">
      <div className="card mb-3">
        <Link to={`/store/${_id}`}>
          <img className="card-img-top" src={storeImgUrl} alt={name} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">Ubicacion: {location}</p>
          <Link to={`/store/${_id}`} className="btn btn-outline-primary">
            Seleccionar
          </Link>
        </div>
      </div>
    </div>
  );
};
