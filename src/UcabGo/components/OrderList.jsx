import React from "react";
import { Order } from "./Order";

export const OrderList = () => {
  // const { orders } = useUcabGoStore();
  // const { user } = useAuthStore();
  // const filteredOrders = orders.filter(
  //   (order) => order.restaurant === user.name
  // );
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Order />
      </li>
    </ul>
  );
};
