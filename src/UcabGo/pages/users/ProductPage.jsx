import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { ArrowBack } from "../../components/ui/ArrowBack";
import { fetcher, getEnvVariables } from "../../helpers";

export const ProductPage = () => {
  const { id } = useParams();
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);

  return (
    <div style={{paddingTop: "80px"}}>
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          <div className="col text-center">
            <br />
            <img
              className="img animate__animated animate__fadeIn w-75 rounded"
              src={data.product.img}
              alt={data.product.desc}
              style={{ maxWidth: "600px" }}
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

            <ArrowBack route={`/store/${data.product.store}`} />
          </div>
        </div>
      )}
    </div>
  );
};
