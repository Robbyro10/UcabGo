import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const Clients = () => {
  const { startLoadingClients, clients } = useUcabGoStore();
  useEffect(() => {
    startLoadingClients();
  }, []);

  return <div style={{ paddingLeft: "240px" }}>{JSON.stringify(clients)}</div>;
};
