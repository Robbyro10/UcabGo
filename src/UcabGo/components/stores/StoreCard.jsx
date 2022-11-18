import { Link } from "react-router-dom";

export const StoreCard = ({ _id, name, location, desc, img }) => {
  const storeImgUrl = img;
  return (
    <div className="col-md-4">
      <div
        className="card mb-3"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Link to={`/store/${_id}`}>
          <img
            className="card-img-top"
            src={storeImgUrl}
            alt={name}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text" style={{ minHeight: "3rem" }}>
            {desc}
          </p>
          <p className="card-text">
            <i className="fa-sharp fa-solid fa-location-dot"></i> {location}
          </p>
          <Link to={`/store/${_id}`} className="btn btn-outline-primary">
            Seleccionar
          </Link>
        </div>
      </div>
    </div>
  );
};
