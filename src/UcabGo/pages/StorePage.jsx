import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { useAuthStore, useUcabGoStore } from "../../hooks";
import { FabAddNew, ItemList, StoreModal } from "../components";
import { fetcher, getProductsByStore, getStoreById } from "../helpers";

export const StorePage = () => {
  const { _id } = useParams();

  const { data, error } = useSWR(
    `http://localhost:4000/api/stores/${_id}`,
    fetcher
  );
  // console.log(data);
  // const store = getStoreById(_id);
  const { startLoadingProducts, products } = useUcabGoStore();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const onBack = () => {
    navigate("/ucabgo");
  };

  // if (!store) {
  //   return <Navigate to="/ucabgo" />;
  // }

  useEffect(() => {
    startLoadingProducts();
  }, []);

  return (
    <>
      {!data || !products ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{data.store.name}</h1>

          <p>{data.store.desc}</p>
          <hr />
          <p>
            <b>Ubicacion: </b>
            {data.store.location}
          </p>
          <p>
            <b>Teléfono: </b>
            {data.store.phone}
          </p>

          {user.type !== "clients" && <FabAddNew />}

          <StoreModal store={data.store.name} />

          {!products ? (
            <h1>No hay items en este establecimiento</h1>
          ) : (
            <ItemList store={data.store} />
          )}

          <button onClick={onBack} className="btn btn-outline-primary mb-5">
            Atrás
          </button>
        </>
      )}
    </>
  );
};
