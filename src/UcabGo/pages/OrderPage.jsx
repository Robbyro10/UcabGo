import { useNavigate, useParams } from "react-router-dom";
import { PedidoForm } from "../components";

export const OrderPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Casi Listo!</h1>
      <hr />

      <PedidoForm id={id} />
    </>
  );
};
