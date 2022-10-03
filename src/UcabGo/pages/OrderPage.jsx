import { useParams } from "react-router-dom";

export const OrderPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Almost Done!</h1>
      <hr />
      <p>{id}</p>
    </>
  );
};
