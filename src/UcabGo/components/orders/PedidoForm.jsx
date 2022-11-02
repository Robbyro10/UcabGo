import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { getDay, getTime } from "../../helpers";

export const PedidoForm = ({ product }) => {
  const navigate = useNavigate();
  const time = getTime();
  const day = getDay();

  const { user } = useAuthStore();
  const { startSavingOrder } = useUcabGoStore();
  // const itemImageUrl = product.img;

  const [formValues, setFormValues] = useState({
    location: "Modulos",
    detail: "",
    payment: "",
    appearance: "",
    product: product.id,
    user,
    time,
    day,
  });

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await startSavingOrder(formValues);
    navigate("/ucabgo");
    Swal.fire("Enviado!!", "Tu pedido ha sido registrado.", "success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="ubicacion" className="col-sm-2 col-form-label">
          Ubicación
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="location"
            value={formValues.location}
            onChange={onInputChanged}
            required
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
        <label htmlFor="Descripcion" className="col-sm-2 col-form-label">
          Descripción
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Descripción detallada de su ubicación"
            name="detail"
            value={formValues.detail}
            onChange={onInputChanged}
            required
          />
        </div>
      </div>

      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">
            Método de Pago
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="Efectivo"
                onChange={onInputChanged}
                required
              />
              <label className="form-check-label">Efectivo</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="Pago Móvil"
                onChange={onInputChanged}
              />
              <label className="form-check-label">Pago Movil</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="Tarjeta"
                onChange={onInputChanged}
              />
              <label className="form-check-label">Tarjeta</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="Zelle"
                onChange={onInputChanged}
              />
              <label className="form-check-label">Zelle</label>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="form-group row">
        <label htmlFor="apariencia" className="col-sm-2 col-form-label">
          Apariencia
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Ej. vestimenta, pantalón, morral, etc."
            name="appearance"
            value={formValues.appearance}
            onChange={onInputChanged}
            required
          />
        </div>
      </div>
      <h3 className="h3 mt-5">¡Confirme su Pedido!</h3>
      <hr />
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.img} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.desc}</p>
          <p className="card-text">
            Total:
            <b> {product.price}$</b>
          </p>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
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
