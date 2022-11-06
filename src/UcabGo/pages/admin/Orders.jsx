import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const Orders = () => {
  const { startLoadingOrders, orders } = useUcabGoStore();
  useEffect(() => {
    startLoadingOrders();
  }, []);

  return <div style={{ paddingLeft: "240px" }}>{JSON.stringify(orders)}</div>;
};
