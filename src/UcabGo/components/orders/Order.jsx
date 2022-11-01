import React from "react";

export const Order = ({
  user,
  location,
  detail,
  product,
  time,
  payment,
  appearance,
  day,
}) => {
  if (!user) {
    return <h1> cargando...</h1>;
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-cart-shopping"></i> &nbsp;
          <b>{product.name}</b>
          <p>
            &nbsp;
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            &nbsp;&nbsp;
            {location}, {detail}
            <br />
          </p>
          <p className="text-muted">
            {payment}
            <br />
            <small>{appearance}</small>
          </p>
        </div>
        <div className="col-auto text-right">
          <i className="fa-regular fa-clock"></i> &nbsp;
          {time} <br /> <small className="text-muted">{day}</small>
          <p className="text-muted">{user.name}</p>
          <button className="btn">
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="btn">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
