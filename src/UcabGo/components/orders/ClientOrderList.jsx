import React from "react";
import { ClientOrder } from "./ClientOrder";

export const ClientOrderList = ({ orders }) => {
  return (
      <ul className="list-group animate__animated animate__fadeIn">
        {orders.map((order) => (
          <ClientOrder key={order.id} {...order} />
        ))}
      </ul>
  );
};
