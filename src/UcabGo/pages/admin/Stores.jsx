import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const Stores = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, []);

  return <div style={{ paddingLeft: "240px" }}>{JSON.stringify(stores)}</div>;
};
