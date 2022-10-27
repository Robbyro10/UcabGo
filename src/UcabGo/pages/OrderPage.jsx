import { useParams } from "react-router-dom";
import useSWR from "swr";
import { PedidoForm } from "../components";
import { fetcher } from "../helpers";

export const OrderPage = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `http://localhost:4000/api/products/${id}`,
    fetcher
  );

  return (
    <>
      <h1>Casi Listo!</h1>
      <hr />
      {!data ? <h1>Cargando...</h1> : <PedidoForm product={data.product} />}
    </>
  );
};
