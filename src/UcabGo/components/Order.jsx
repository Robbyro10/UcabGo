import React from "react";

export const Order = ({
  client,
  location,
  detail,
  product,
  time,
  payment,
  appearance,
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-cart-shopping"></i> &nbsp;
          <b>{product}</b>
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
          <p>
            <i className="fa-regular fa-clock"></i> &nbsp;
            {time} <p className="text-muted">{client}</p>
          </p>
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
