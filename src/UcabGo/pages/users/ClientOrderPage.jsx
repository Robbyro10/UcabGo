import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { ClientOrderList } from "../../components/orders";
import { ArrowBack } from "../../components/ui/ArrowBack";

export const ClientOrderPage = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  const { user } = useAuthStore();
  useEffect(() => {
    startLoadingOrders();
  }, []);

  const pendingOrders = orders.filter(
    (order) => order.user._id == user.uid && order.status == "Pendiente"
  );

  const dispatchedOrders = orders.filter(
    (order) => order.user._id == user.uid && order.status == "Despachado"
  );

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>Pedidos Realizados: </h1>
      <hr />

      <h3 className="pb-3">Pendientes:</h3>

      {!pendingOrders.length ? (
        <p className="text-muted">No tienes pedidos pendientes.</p>
      ) : (
        <ClientOrderList orders={pendingOrders} />
      )}

      <br />
      <h3 className="pb-3">Ya Entregados: </h3>

      {!dispatchedOrders.length ? (
        <p className="text-muted">No has hecho pedidos.</p>
      ) : (
        <ClientOrderList orders={dispatchedOrders} />
      )}

      <ArrowBack route={"/"} />
    </div>
  );
};
