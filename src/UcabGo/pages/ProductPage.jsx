import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getEnvVariables } from "../helpers";

export const ProductPage = () => {
  const { id } = useParams();

  const { VITE_API_URL } = getEnvVariables();

  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);
  const [count, setCount] = useState(1);

  const onAdd = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const onSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

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
          <textarea
            type="textarea"
            rows="2"
            className="form-control w-75"
            placeholder="Agregue una nota (sin cebolla, salsa extra, etc)"
            style={{ resize: "none" }}
          />
          <hr />
          <div className="row">
            <div className="text-center" style={{ width: "80px" }}>
              <button
                className="btn btn-danger rounded-circle"
                onClick={onSubstract}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
            <div className="text-center" style={{ width: "80px" }}>
              <h3>{count}</h3>
            </div>
            <div className="text-center" style={{ width: "80px" }}>
              <button
                className="btn btn-primary rounded-circle"
                onClick={onAdd}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="col-3 text-right">
              <h3>{data.product.price * count}$</h3>
            </div>
          </div>
          <br />

          <Link
            to={`/order/${id}`}
            className="btn btn-outline-success mr-2 w-75"
          >
            Agregar al Pedido (demo)
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
