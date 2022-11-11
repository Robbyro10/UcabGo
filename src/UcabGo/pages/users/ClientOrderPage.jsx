import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const ClientOrderPage = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  const { user } = useAuthStore();
  useEffect(() => {
    startLoadingOrders();
  }, []);
  const userOrders = orders.filter(
    (order) => order.user == user.uid && order.status == "Pendiente"
  );
  console.log(userOrders);

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

      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </>
  );
};
