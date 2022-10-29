import React from "react";
import { Order } from "./Order";
import { useAuthStore, useUcabGoStore } from "../../hooks";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../helpers";

export const OrderList = () => {
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/orders/`, fetcher);
  const { user } = useAuthStore();

  return (
    <>
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <ul className="list-group">
          {data.orders.map((order) => (
            <Order key={order.id} {...order} />
          ))}
        </ul>
      )}
    </>
  );
};
