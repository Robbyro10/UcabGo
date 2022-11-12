import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
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
      <h1>Pedidos Realizados</h1>

      <h3>Pendientes</h3>

      <hr />
      <h3>Despachados por el Restaurante: </h3>

      <ArrowBack route={"/"} />
    </>
  );
};
