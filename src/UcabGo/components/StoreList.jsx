import { StoreCard } from "./StoreCard";
import { useUcabGoStore } from "../../hooks/useUcabGoStore";
import useSWR from "swr";
import { fetcher } from "../helpers";

export const StoreList = () => {
  const { data, error } = useSWR("http://localhost:4000/api/stores/", fetcher);

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
