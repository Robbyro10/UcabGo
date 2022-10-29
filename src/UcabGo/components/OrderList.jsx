import React from "react";
import { Order } from "./Order";
import { useAuthStore, useUcabGoStore } from "../../hooks";
import useSWR from "swr";
import { fetcher } from "../helpers";

export const OrderList = () => {
  const { data, error } = useSWR(`http://localhost:4000/api/orders/`, fetcher);
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
