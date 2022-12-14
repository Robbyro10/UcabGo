import { useMemo } from "react";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminStoreCard } from "../../components/stores/AdminStoreCard";

export const AdminStoresPage = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, [stores.length]);

  let sortedStores = [...stores];

  const storesAlphabetical = useMemo(
    () =>
      sortedStores.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      }),
    [sortedStores]
  );

  return (
    <div style={{ paddingLeft: "240px" }}>
      <h1 className="mt-3">Establecimientos ({sortedStores.length})</h1>
      <ul className="list-group mt-4">
        {storesAlphabetical.map((store) => (
          <AdminStoreCard key={store._id} {...store} />
        ))}
      </ul>
    </div>
  );
};
