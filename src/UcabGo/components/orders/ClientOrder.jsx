import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useUcabGoStore } from "../../../hooks";

export const ClientOrder = ({
  location,
  store,
  notes,
  appearance,
  quantity,
  day,
  time,
  detail,
  product,
  status,
  id,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      notes,
      location,
      detail,
      appearance,
    },
  });

  const { startDeleteOrder, startSavingOrder } = useUcabGoStore();

  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = (data) => {
    Swal.fire({
      title: "¿Guardar Cambios?",
      confirmButtonText: "Guardar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEdit(false);

        data.id = id;
        startSavingOrder(data);
      }
    });
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
    <li
      className={
        "list-group-item " + (status === "Despachado" ? "text-muted" : "")
      }
    >
      <div className="row pr-2 pb-2">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <big>
                  <i className="fa-solid fa-bag-shopping"></i> &nbsp;
                  {!product.active ? (
                    <del>{product.name}</del>
                  ) : (
                    <b>
                      {product.name} ({quantity})
                    </b>
                  )}
                </big>
                <br />
                <div className="form-group mb-1 mt-1">
                  <select
                    className={
                      "form-control-sm form-control" +
                      (!isEdit ? "-plaintext" : "")
                    }
                    disabled={!isEdit}
                    {...register("location", { required: true })}
                  >
                    <option>Módulos</option>
                    <option>Laboratorios</option>
                    <option>Feria</option>
                    <option>Solarium</option>
                    <option>Cincuentenario</option>
                    <option>Cafetín</option>
                    <option>Canchas</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-group mb-1">
                  <input
                    className={
                      "form-control-sm form-control" +
                      (!isEdit ? "-plaintext" : "")
                    }
                    readOnly={!isEdit}
                    type="text"
                    {...register("detail", { required: true })}
                  />
                </div>
                <div className="form-group mb-1">
                  <input
                    className={
                      "form-control-sm form-control" +
                      (!isEdit ? "-plaintext" : "")
                    }
                    readOnly={!isEdit}
                    {...register("appearance", { required: true })}
                  />
                </div>
                {!store ? (
                  <small className="text-muted">Cargando...</small>
                ) : (
                  <small className="text-muted">
                    <i className="fa-solid fa-store"></i> &nbsp;
                    <b>{store.name}</b>
                  </small>
                )}
              </div>
              {notes && (
                <div className="col">
                  <small>Notas:</small>
                  <input
                    className={
                      "mt-2 form-control-sm form-control" +
                      (!isEdit ? "-plaintext" : "")
                    }
                    readOnly={!isEdit}
                    {...register("notes")}
                  />
                </div>
              )}
              {isEdit && (
                <div className="col">
                  <br />
                  <button
                    type="submit"
                    value="submit"
                    onClick={handleSubmit}
                    className="btn btn-success mr-1 mb-1"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setIsEdit(!isEdit)}
                    className="btn btn-danger mb-1"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="col-fluid text-right">
          <i className="fa-regular fa-clock"></i> &nbsp; {time}
          <br />
          <p>
            <small className="text-muted">{day}</small>
          </p>
          {status === "Pendiente" && (
            <>
              {" "}
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="btn"
                disabled={isEdit}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button className="btn" onClick={handleCancel}>
                <i className="fa-solid fa-ban"></i>
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </li>
  );
};
