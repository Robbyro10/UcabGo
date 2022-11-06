import { Link } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { OrderList } from "../../components/orders";
import { StoreList } from "../../components/stores";

export const UcabGoPage = () => {
  const { user } = useAuthStore();
  const catalogUrl = `/store/${user.uid}`;

  return (
    <>
      {user.type === "clients" ? (
        <>
          <h1>¡Haga su Pedido!</h1>
          <hr />
          <ul>
            <StoreList />
          </ul>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Lista de Pedidos</h1>
              </div>
              <div className="text-align-right mt-2">
                <Link to={catalogUrl} className="btn btn-primary">
                  Catálogo
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <OrderList />
        </>
      )}
    </>
  );
};
