import React from "react";
import { ClientOrder } from "./ClientOrder";

export const ClientOrderList = ({ orders }) => {
  console.log(orders);
  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row">
        <ul className="list-group">
          {orders.map((order) => (
            <ClientOrder key={order.id} {...order} />
          ))}
        </ul>
      </div>
    </div>
  );
};
