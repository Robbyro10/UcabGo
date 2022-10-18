import { Link, useNavigate, useParams } from "react-router-dom";

export const ItemPage = () => {
  const { itemId } = useParams();

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Item Page</h1>
      <p>{itemId}</p>
      <Link to={`/order/${itemId}`} className="btn btn-outline-success">
        Select
      </Link>

      <button onClick={onBack} className="btn btn-outline-danger">
        Back
      </button>
    </>
  );
};
