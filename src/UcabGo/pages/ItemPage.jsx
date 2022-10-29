import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../helpers";

export const ItemPage = () => {
  const { id } = useParams();

  const { VITE_API_URL } = getEnvVariables();

  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);

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

          <Link
            to={`/store/${data.product.store}`}
            className="btn btn-outline-danger"
          >
            Atrás
          </Link>
        </>
      )}
    </>
  );
};
