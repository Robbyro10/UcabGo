import { useUcabGoStore } from "../../../hooks";
import { Order } from "./Order";

export const OrderList = () => {
  const { orders } = useUcabGoStore();
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
