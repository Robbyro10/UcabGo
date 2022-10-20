import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../helpers";

export const ItemPage = () => {
  const { _id } = useParams();

  const { name, desc, price } = getProductById(_id);
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Item Page</h1>
      <p>{name}</p>
      <p>{desc}</p>
      <p>{price}</p>
      <Link to={`/order/${_id}`} className="btn btn-outline-success">
        Select
      </Link>

      <button onClick={onBack} className="btn btn-outline-danger">
        Back
      </button>
    </>
  );
};
