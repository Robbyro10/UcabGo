import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminOrder } from "../../components/orders";

export const AdminOrdersPage = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  useEffect(() => {
    startLoadingOrders();
  }, [orders.length]);

  return (
    <div className="mt-3" style={{ paddingLeft: "240px" }}>
      <h1>Pedidos</h1>
      <ul className="list-group">
        {orders.map((order) => (
          <AdminOrder key={order.id} {...order} />
        ))}
      </ul>
    </div>
  );
};
