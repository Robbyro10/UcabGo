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
    (order) => order.user == user.uid && order.status == "Pendiente"
  );
  const dispatchedOrders = orders.filter(
    (order) => order.user == user.uid && order.status == "Despachado"
  );
  // console.log(pendingOrders);
  // console.log(dispatchedOrders);

  return (
    <>
      <h1>Pedidos Realizados: </h1>

      <h3 className="pb-3">Pendientes</h3>

      <ClientOrderList orders={pendingOrders} />

      <hr />
      <h3 className="pb-3">Despachados por el Restaurante: </h3>

      <ClientOrderList orders={dispatchedOrders} />

      <ArrowBack route={"/"} />
    </>
  );
};
