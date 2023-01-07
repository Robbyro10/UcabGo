import React from "react";
import { ClientOrder } from "./ClientOrder";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks";

export const ClientOrderList = ({ orders }) => {
  const { stores, startLoadingStores, startLoadingOrders } = useUcabGoStore();

  useEffect(() => {
    startLoadingStores();
    // startLoadingOrders();
  }, []);

  return (
    <ul className="list-group animate__animated animate__fadeIn">
      {orders.map((order) => (
        <ClientOrder
          key={order.id}
          store={stores.find((store) => store._id === order.product.store)}
          {...order}
        />
      ))}
    </ul>
  );
};
