import React from "react";
import { Order } from "./Order";
import { useAuthStore, useUcabGoStore } from "../../hooks";

export const OrderList = () => {
  const { orders } = useUcabGoStore();
  const { user } = useAuthStore();
  const filteredOrders = orders.filter((order) => order.store === user.name);
  return (
    <ul className="list-group">
      {filteredOrders?.map((order) => (
        <Order key={order._id} {...order} />
      ))}
    </ul>
  );
};
