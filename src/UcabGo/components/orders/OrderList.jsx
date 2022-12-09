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
        <div className="text-muted text-center" style={{ marginTop: "20vh" }}>
          <h1>Oops!! no parecen haber pedidos...</h1>
          <p>Vuelve mas tarde...</p>
          <br />
          <img
            style={{ height: "10vh", opacity: "0.6" }}
            src="docs/assets/sad.png"
            alt="sad face"
          />
        </div>
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
