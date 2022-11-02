import React from "react";
import { Order } from "./Order";
import { useAuthStore } from "../../../hooks";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../../helpers";

export const OrderList = () => {
  const { VITE_API_URL } = getEnvVariables();
  const { user } = useAuthStore();
  const { data, error } = useSWR(`${VITE_API_URL}/orders/${user.uid}`, fetcher);

  return (
    <>
      {!data || data.filteredOrders.length === 0 ? (
        <h3>Oops!! no parecen haber pedidos...</h3>
      ) : (
        <ul className="list-group">
          {data.filteredOrders.map((order) => (
            <Order key={order.id} {...order} />
          ))}
        </ul>
      )}
    </>
  );
};
