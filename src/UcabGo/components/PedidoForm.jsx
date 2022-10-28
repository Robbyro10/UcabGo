import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore } from "../../hooks";
import { getProductById } from "../helpers";
import { getTime } from "../helpers";

export const PedidoForm = ({ product }) => {
  const navigate = useNavigate();
  const time = getTime();

  const { user } = useAuthStore();
  // const itemImageUrl = product.img;

  const [formValues, setFormValues] = useState({
    location: "Modulos",
    detail: "",
    pago: "",
    apariencia: "",
    product: product.id,
    user,
    time,
  });

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    // navigate("/order/success");
    console.log(formValues);
    Swal.fire("Listo!", "Tu pedido ha sido realizado.", "success");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="ubicacion" className="col-sm-2 col-form-label">
          Ubicacion
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="location"
            value={formValues.location}
            onChange={onInputChanged}
            required
          >
            <option>Modulos</option>
            <option>Laboratorios</option>
            <option>Feria</option>
            <option>Solarium</option>
            <option>Cincuentenario</option>
            <option>Cafetin</option>
            <option>Canchas</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="Descripcion" className="col-sm-2 col-form-label">
          Descripcion
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Descripcion detallada de su ubicacion"
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
            Metodo de Pago
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pago"
                value="Efectivo"
                onChange={onInputChanged}
                required
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Efectivo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pago"
                value="Pago Movil"
                onChange={onInputChanged}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Pago Movil
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pago"
                value="tarjeta"
                onChange={onInputChanged}
              />
              <label className="form-check-label" htmlFor="tarjeta">
                Tarjeta
              </label>
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
            id="apariencia"
            placeholder="Ej. vestimenta, pantalon, etc."
            name="apariencia"
            value={formValues.apariencia}
            onChange={onInputChanged}
            required
          />
        </div>
      </div>
      <h3 className="h3 mt-5">Confirme su Pedido!</h3>
      <hr />
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.name} alt={product.name} />
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
            Confirmar Pedido!
          </button>
          <Link className="btn btn-danger ml-3" to={`/store/${product.store}`}>
            Cancelar
          </Link>
        </div>
      </div>
    </form>
  );
};
