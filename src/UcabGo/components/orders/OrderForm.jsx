import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { getDay, getTime } from "../../helpers";

export const OrderForm = ({ product }) => {
  const navigate = useNavigate();
  const time = getTime();
  const day = getDay();
  const { user } = useAuthStore();
  const { startSavingOrder } = useUcabGoStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ defaultValues: { quantity: 1 } });

  const { startRegister } = useAuthStore();

  const onSubmit = (data) => {
    data.time = time;
    data.day = day;
    data.status = "Pendiente";
    data.product = product.id;
    data.user = user;
    startSavingOrder(data);
    Swal.fire("Enviado!!", "Tu pedido ha sido registrado.", "success");
    navigate("/ucabgo");
  };

  const quantity = watch("quantity");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <label htmlFor="ubicacion" className="col-lg-2 col-form-label">
          Ubicación
        </label>
        <div className="col-lg-10">
          <select
            className="form-control"
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
      </div>

      <div className="form-group row">
        <label htmlFor="Descripcion" className="col-lg-2 col-form-label">
          Descripción
        </label>
        <div className="col-lg-10">
          <input
            type="text"
            className="form-control"
            placeholder="Descripción detallada de su ubicación"
            {...register("detail", { required: true })}
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="ubicacion" className="col-lg-2 col-form-label">
          Pago
        </label>
        <div className="col-lg-10">
          <select
            className="form-control"
            {...register("payment", { required: true })}
          >
            <option>Efectivo</option>
            <option>Zelle</option>
            <option>Pago Móvil</option>
            <option>Tarjeta</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="apariencia" className="col-lg-2 col-form-label">
          Apariencia
        </label>
        <div className="col-lg-10">
          <input
            type="text"
            className="form-control"
            placeholder="Ej. vestimenta, pantalón, morral, etc."
            {...register("appearance", { required: true })}
          />
        </div>
      </div>
      <h3 className="h3 mt-5">¡Complete su Pedido!</h3>
      <hr />

      <div className="row">
        <div className="col">
          <div className="form-group row">
            <label className="col col-form-label">Notas:</label>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Ej. sin tomate, extra salsa, etc."
                rows="5"
                style={{ resize: "none" }}
                {...register("notes")}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col col-form-label">Cantidad:</label>
            <div className="col-lg-12">
              <select className="form-control" {...register("quantity")}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3 mt-3">
            <img
              className="card-img-top"
              src={product.img}
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.desc}</p>
              <p className="card-text">
                Total:
                <b> {product.price * quantity}$</b> o{" "}
                <b>{(product.price * quantity * 10.55).toFixed(2)}Bs</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-lg-10">
          <button type="submit" className="btn btn-success">
            ¡Confirmar Pedido!
          </button>
          <Link className="btn btn-danger ml-3" to={`/store/${product.store}`}>
            Cancelar
          </Link>
        </div>
      </div>
    </form>
  );
};
