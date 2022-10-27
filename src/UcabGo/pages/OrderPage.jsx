import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUcabGoStore } from "../../hooks";
import { PedidoForm } from "../components";
import { getProductById } from "../helpers";

export const OrderPage = () => {
  const { id } = useParams();
  const { startLoadingProducts } = useUcabGoStore();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  const product = getProductById(id);

  return (
    <>
      <h1>Casi Listo!</h1>
      <hr />
      {!product ? <h1>Cargando...</h1> : <PedidoForm product={product} />}
    </>
  );
};
