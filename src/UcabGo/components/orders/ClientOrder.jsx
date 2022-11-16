import React from "react";

export const ClientOrder = ({
  location,
  notes,
  appearance,
  quantity,
  day,
  time,
  detail,
  product,
}) => {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleCancel = () => {
    console.log("cancel");
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-cart-shopping"></i> &nbsp;
          <b>Producto ({quantity})</b>
          <p>
            &nbsp;
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            &nbsp;&nbsp; {location}, {detail}
            <br />
          </p>
          <p className="text-muted">
            <small>{appearance}</small>
          </p>
        </div>
        {notes && (
          <div className="col">
            <p>Notas: {notes}</p>
          </div>
        )}
        <div className="col text-right">
          <i className="fa-regular fa-clock"></i> &nbsp; {time}
          <br /> <small className="text-muted">{day}</small>
          <p className="text-muted">usuario</p>
          <button onClick={handleEdit} className="btn">
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button className="btn" onClick={handleCancel}>
            <i className="fa-solid fa-ban"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
