import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../helpers";

export const ItemPage = () => {
  const { _id } = useParams();

  const { name, desc, price, img } = getProductById(_id);
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Item Page</h1>
      <br />
      <img
        className="img-thumbnail mb-5"
        style={{ width: "70vw" }}
        src={img}
        alt={desc}
      />
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>
        <b>{price}</b>
      </p>
      <Link to={`/order/${_id}`} className="btn btn-outline-success mr-2">
        Select
      </Link>

      <button onClick={onBack} className="btn btn-outline-danger">
        Back
      </button>
    </>
  );
};
