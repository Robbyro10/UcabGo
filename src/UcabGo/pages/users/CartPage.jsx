import { Link } from "react-router-dom";

export const CartPage = () => {
  return (
    <>
      <h1>Pedidos Realizados</h1>
      <h3>En Camino</h3>
      <p>
        <ul>
          <li>algo</li>
          <li>algo</li>
          <li>algo</li>
        </ul>
      </p>

      <h3>Ya entregados</h3>
      <p>
        <ul>
          <li>algo</li>
          <li>algo</li>
          <li>algo</li>
        </ul>
      </p>

      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </>
  );
};
