import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUcabGoStore } from "../../hooks";
import { getProductById } from "../helpers";

export const ItemPage = () => {
  const { id } = useParams();
  const { startLoadingProducts } = useUcabGoStore();
  useEffect(() => {
    startLoadingProducts();
  }, []);

  const product = getProductById(id);
  const navigate = useNavigate();
  // const storeLink = `/store/${store._id}`;

  return (
    <>
      {!product ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{product.name}</h1>
          <br />
          <img
            className="img"
            style={{ width: "70vw", maxWidth: "60vh" }}
            src={product.img}
            alt={product.desc}
          />
          <hr />
          <h2>Descripción</h2>
          <p>{product.desc}</p>
          <p>
            Precio: <b>{product.price}$</b>
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
