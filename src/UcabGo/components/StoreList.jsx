import { StoreCard } from "./StoreCard";
import { useUcabGoStore } from "../../hooks/useUcabGoStore";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../helpers";

export const StoreList = () => {
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/stores/`, fetcher);

  return (
    <>
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="container">
          <div className="row">
            {data.stores.map((store) => (
              <StoreCard key={store._id} {...store} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
