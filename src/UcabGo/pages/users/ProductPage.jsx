import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../../helpers";

export const ProductPage = () => {
  const { id } = useParams();
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);

  return (
    <>
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <br />
          <img
            className="img animate__animated animate__fadeIn"
            style={{ width: "70vw", maxWidth: "60vh" }}
            src={data.product.img}
            alt={data.product.desc}
          />
          <hr />
          <h1>{data.product.name}</h1>
          <p>{data.product.desc}</p>

          <br />

          <Link
            to={`/make+order/${id}`}
            className="btn btn-outline-success mr-2 w-75"
          >
            Seleccionar
          </Link>
          <br />
          <br />

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
