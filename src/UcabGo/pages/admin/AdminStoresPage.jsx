import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminStoreCard } from "../../components/stores/AdminStoreCard";

export const AdminStoresPage = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, [stores.length]);

  return (
    <div style={{ paddingLeft: "240px" }}>
      <h1 className="mt-3">Establecimientos</h1>
      <ul className="list-group mt-4">
        {stores.map((store) => (
          <AdminStoreCard key={store._id} {...store} />
        ))}
      </ul>
    </div>
  );
};
