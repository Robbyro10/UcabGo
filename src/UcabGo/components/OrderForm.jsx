import { useNavigate } from "react-router-dom";
import { getMenuItem } from "../helpers/getItemById";
import { getRestaurantById } from "../helpers/getRestaurantById";
import { SuccessPage } from "../pages/SuccessPage";

export const OrderForm = ({ itemId }) => {
  const navigate = useNavigate();

  const id = itemId.split("-")[0];
  const restaurant = getRestaurantById(id);
  const { name, desc, price } = getMenuItem(restaurant.menu, itemId);
  const itemImageUrl = `/assets/restaurants/${itemId.split("-")[1]}.jpg`;

  const onBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    navigate("/order/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="ubicacion" className="col-sm-2 col-form-label">
          Ubicacion
        </label>
        <div className="col-sm-10">
          <select className="form-control" required>
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
        <label htmlFor="ubicacion" className="col-sm-2 col-form-label">
          Descripcion
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Descripcion detallada de su ubicacion"
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
                name="paymentMethod"
                id="gridRadios1"
                value="Efectivo"
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
                name="paymentMethod"
                id="gridRadios2"
                value="Pago Movil"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Pago Movil
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="tarjeta"
                value="Tarjeta"
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
            required
          />
        </div>
      </div>
      <h3 className="h3 mt-5">Confirme su Pedido!</h3>
      <hr />
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={itemImageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            Total:
            <b> {price}</b>
          </p>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-success">
            Confirmar Pedido!
          </button>
          <button className="btn btn-danger ml-3" onClick={onBack}>
            Atras
          </button>
        </div>
      </div>
    </form>
  );
};
