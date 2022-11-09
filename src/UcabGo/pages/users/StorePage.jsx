import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { ProductList } from "../../components/products";
import { FabAddNew, StoreModal } from "../../components/ui";
import { fetcher, getEnvVariables } from "../../helpers";

export const StorePage = () => {
  const { _id } = useParams();

  const { VITE_API_URL } = getEnvVariables();

  const { data, error } = useSWR(`${VITE_API_URL}/stores/${_id}`, fetcher);
  // const store = getStoreById(_id);
  const { startLoadingProducts, products, activeProduct } = useUcabGoStore();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const onBack = () => {
    navigate("/ucabgo");
  };

  useEffect(() => {
    startLoadingProducts();
  }, [products.length]);

  return (
    <>
      {!data || !products ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{data.store.name}</h1>

          <p>{data.store.desc}</p>
          <hr />
          <div className="row">
            <div className="col">
              <h6>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                &nbsp;&nbsp;
                {data.store.location}
              </h6>
            </div>
            <div className="col">
              <h6>
                <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                {data.store.phone}
              </h6>
            </div>
            <div className="col">
              <p>
                <b>RIF: </b>
                {data.store.rif}
              </p>
            </div>
          </div>

          {user.type !== "clients" && <FabAddNew />}

          <StoreModal store={data.store.name} {...activeProduct} />

          <ProductList store={data.store} />

          <button onClick={onBack} className="btn btn-outline-primary mb-5">
            Atrás
          </button>
        </>
      )}
    </>
  );
};
