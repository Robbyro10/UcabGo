import { Link } from "react-router-dom";

export const CartPage = () => {
  return (
    <>
      <h1>Carrito</h1>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src="" alt="nombre del producto" />
        <div className="card-body">
          <h5 className="card-title">Nombre del producto</h5>
          <p className="card-text">Una descripcion cualquiera</p>
          <p className="card-text">
            Cantidad:
            <b> 5</b>
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </>
  );
};
