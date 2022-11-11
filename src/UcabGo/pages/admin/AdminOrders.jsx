import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const AdminOrders = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  useEffect(() => {
    startLoadingOrders();
  }, [orders.length]);

  return <div style={{ paddingLeft: "240px" }}>{JSON.stringify(orders)}</div>;
};
