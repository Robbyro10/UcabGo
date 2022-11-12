import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { ArrowBack } from "../../components/ui/ArrowBack";
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
        <div className="col text-center">
          <br />
          <img
            className="img animate__animated animate__fadeIn w-75 rounded"
            src={data.product.img}
            alt={data.product.desc}
          />
          <hr />
          <h1>{data.product.name}</h1>
          <p>
            {data.product.desc} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error assumenda ut expedita at non voluptas. Nam
            repudiandae quam velit. Veniam corporis, similique totam aliquam et
            quis quia accusantium iusto fuga?
          </p>

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
      )}
    </>
  );
};
