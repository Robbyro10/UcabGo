import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminStoreCard } from "../../components/stores/AdminStoreCard";

export const AdminStoresPage = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, [stores.length]);

  return (
    <div className="mt-4" style={{ paddingLeft: "240px" }}>
      {stores.map((store) => (
        <AdminStoreCard key={store._id} {...store} />
      ))}
    </div>
  );
};
