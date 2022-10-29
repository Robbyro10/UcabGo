import { useParams } from "react-router-dom";
import useSWR from "swr";
import { PedidoForm } from "../components";
import { fetcher, getEnvVariables } from "../helpers";

export const OrderPage = () => {
  const { id } = useParams();
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);

  return (
    <>
      <h1>Casi Listo!</h1>
      <hr />
      {!data ? <h1>Cargando...</h1> : <PedidoForm product={data.product} />}
    </>
  );
};
