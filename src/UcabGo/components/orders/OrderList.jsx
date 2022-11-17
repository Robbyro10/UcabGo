import { useEffect } from "react";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { Order } from "./Order";

export const OrderList = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startLoadingOrders(user.uid);
  }, [orders.length]);

  const filteredOrders = orders.filter((order) => order.status === "Pendiente");

  return (
    <>
      {!filteredOrders || filteredOrders.length === 0 ? (
        <h3 className="text-muted">Oops!! no parecen haber pedidos...</h3>
      ) : (
        <ul className="list-group">
          {filteredOrders.map((order) => (
            <Order key={order.id} {...order} />
          ))}
        </ul>
      )}
    </>
  );
};
