import { useParams } from "react-router-dom";
import useSWR from "swr";
import { OrderForm } from "../../components/orders";
import { fetcher, getEnvVariables } from "../../helpers";

export const OrderPage = () => {
  const { id } = useParams();
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/products/${id}`, fetcher);

  return (
    <>
      <h1>¡Casi Listo!</h1>
      <hr />
      {!data ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          <div className="col-8">
            <OrderForm product={data.product} />
          </div>
          <div className="col-4">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src="/assets/Zellelogo.svg.png"
                alt="zelle logo"
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Correo:</b> jgh2748@gmail.com
                </p>
                <p className="card-text">
                  <b>Asunto:</b> Pago UcabGO
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pago Móvil</h4>
                <p className="card-text">
                  <b>Banco:</b> Bancaribe
                </p>
                <p className="card-text">
                  <b>Cédula:</b> V-29625836
                </p>
                <p className="card-text">
                  <b>Celular:</b> 0412-3349273
                </p>
                <p className="card-text">
                  <b>Monto:</b> &nbsp;
                  {data.product.price * 9.02} Bs
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
