import { useUcabGoStore } from "../../../hooks";
import { Order } from "./Order";

export const OrderList = () => {
  const { orders } = useUcabGoStore();

  return (
    <>
      {!orders || orders.length === 0 ? (
        <h3 className="text-muted">Oops!! no parecen haber pedidos...</h3>
      ) : (
        <ul className="list-group">
          {orders.map((order) => (
            <Order key={order.id} {...order} />
          ))}
        </ul>
      )}
    </>
  );
};
