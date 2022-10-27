import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers";

export const ItemPage = () => {
  const { id } = useParams();

  const { data, error } = useSWR(
    `http://localhost:4000/api/products/${id}`,
    fetcher
  );

  const navigate = useNavigate();
  // const storeLink = `/store/${store._id}`;

  return (
    <>
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{data.product.name}</h1>
          <br />
          <img
            className="img"
            style={{ width: "70vw", maxWidth: "60vh" }}
            src={data.product.img}
            alt={data.product.desc}
          />
          <hr />
          <h2>Descripción</h2>
          <p>{data.product.desc}</p>
          <p>
            Precio: <b>{data.product.price}$</b>
          </p>
          <Link to={`/order/${id}`} className="btn btn-outline-success mr-2">
            Pedir
          </Link>

          <Link to={"/"} className="btn btn-outline-danger">
            Atrás
          </Link>
        </>
      )}
    </>
  );
};
