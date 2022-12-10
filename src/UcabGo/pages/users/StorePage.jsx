import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { ProductList } from "../../components/products";
import { FabAddNew, StoreModal, ArrowBack } from "../../components/ui";
import { fetcher, getEnvVariables } from "../../helpers";

export const StorePage = () => {
  const { _id } = useParams();

  const { VITE_API_URL } = getEnvVariables();

  const { data, error } = useSWR(`${VITE_API_URL}/stores/${_id}`, fetcher);
  const { startLoadingProducts, products, activeProduct } = useUcabGoStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startLoadingProducts();
  }, [products.length]);

  return (
    <div style={{ paddingTop: "80px" }}>
      {!data || !products ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{data.store.name}</h1>

          <p>{data.store.desc}</p>
          <hr />
          <div className="row">
            <div className="col">
              <p>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                &nbsp;&nbsp;
                {data.store.location}
              </p>
            </div>
            <div className="col">
              <p>
                <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                {data.store.phone}
              </p>
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

          <ArrowBack route={"/ucabgo"} />
        </>
      )}
    </div>
  );
};
