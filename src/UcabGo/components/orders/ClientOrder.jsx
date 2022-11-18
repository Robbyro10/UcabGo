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
        <div className="col-md-4 col-12 text-center">
          <img className="img-fluid rounded mb-2" src={product.img} alt={product.desc} />
        </div>
        <div className="col">
        <p>
          <big>
          <b>{product.name} ({quantity})</b> 
          </big>
          <br />
            {location}, {detail} 
            <br />
            <small className="text-muted">{appearance}</small>
          </p>
        </div>
        {notes && (
          <div className="col">
            <p>Notas: {notes}</p>
          </div>
        )}
        <div className="col text-right">
          <i className="fa-regular fa-clock"></i> &nbsp; {time}
          <br /> 
          <p>
            <small className="text-muted">{day}</small>
          </p> 
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
