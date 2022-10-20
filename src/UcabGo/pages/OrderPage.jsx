import { useNavigate, useParams } from "react-router-dom";
import { OrderForm } from "../components/OrderForm";

export const OrderPage = () => {
  const { _id } = useParams();
  return (
    <>
      <h1>Casi Listo!</h1>
      <hr />

      <OrderForm id={_id} />
    </>
  );
};
