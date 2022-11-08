import { StoreCard } from "./StoreCard";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";

export const StoreList = () => {
  const { startLoadingStores, stores } = useUcabGoStore();
  useEffect(() => {
    startLoadingStores();
  }, []);

  return (
    <>
      {!stores ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="container animate__animated animate__fadeIn">
          <div className="row">
            {stores.map((store) => (
              <StoreCard key={store._id} {...store} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
