import { StoreCard } from "./StoreCard";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const StoreList = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, []);

  const activeStores = stores.filter((store) => store.active === true);

  return (
    <>
      {!stores ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="animate__animated animate__fadeIn">
          <div className="row">
            {activeStores.map((store) => (
              <StoreCard key={store._id} {...store} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
