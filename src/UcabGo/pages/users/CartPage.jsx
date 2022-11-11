import { Link } from "react-router-dom";

export const CartPage = () => {
  return (
    <>
      <h1>Pedidos Realizados</h1>
      <hr />
      <h3>En Camino</h3>

      <ul>
        <li>algo</li>
        <li>algo</li>
        <li>algo</li>
      </ul>

      <h3>Ya entregados</h3>

      <ul>
        <li>algo</li>
        <li>algo</li>
        <li>algo</li>
      </ul>

      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </>
  );
};
