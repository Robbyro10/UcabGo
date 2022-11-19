import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const ClientOrder = ({
  location,
  notes,
  appearance,
  quantity,
  day,
  time,
  detail,
  product,
  status,
  id
}) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      notes,
      location,
      quantity,
      appearance,
    },
  });

  const {startDeleteOrder, stores, startLoadingStores} = useUcabGoStore();
  useEffect(() => {
    startLoadingStores()
  }, [])
  
  const store = stores.find( store => store._id === product.store)

  const handleEdit = () => {
    console.log("edit");
  };

  const handleCancel = () => {
    Swal.fire({
      title: "¿Cancelar Pedido?",
      confirmButtonText: "Sí",
      showDenyButton: true,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteOrder(id);
      }
    });
  };

  return (
    <li className={"list-group-item " + (status === 'Despachado' ? 'text-muted' : '')}>
      <div className="row">
        <div className="col">
        <p>
          <big>
          <b>{product.name} ({quantity})</b>
          </big>
          <br />
            {location}, {detail} 
            <br />
            <small className="text-muted">{appearance}</small>
            <br />
            {!store ? <small className="text-muted">Cargando...</small> 
            : <small className="text-muted"><b>{store.name}</b></small>}
            
          </p>
        </div>
        {notes && (
          <div className="col text-center">
            <p>Notas: {notes}</p>
          </div>
        )}
        <div className="col-fluid text-right">
          <i className="fa-regular fa-clock"></i> &nbsp; {time}
          <br /> 
          <p>
            <small className="text-muted">{day}</small>
          </p> 
          {status === 'Pendiente' && <> <button onClick={handleEdit} className="btn">
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button className="btn" onClick={handleCancel}>
            <i className="fa-solid fa-ban"></i>
          </button> </>}
          
        </div>
      </div>
    </li>
  );
};
