import { Order } from "./Order";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../../helpers";
import { useEffect } from "react";

export const OrderList = () => {
  // const { VITE_API_URL } = getEnvVariables();
  const { user } = useAuthStore();
  const { startLoadingOrders, orders } = useUcabGoStore();

  // const { data, error } = useSWR(`${VITE_API_URL}/orders/${user.uid}`, fetcher);

  // const [orders, setOrders] = useState(data);

  return (
    <>
      {!orders || orders.length === 0 ? (
        <h3>Oops!! no parecen haber pedidos...</h3>
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
