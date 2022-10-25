import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { RestaurantList, OrderList } from "../components";

export const UcabGoPage = () => {
  const { user } = useAuthStore();
  const catalogUrl = user.uid; // todo: this will take time...

  return (
    <>
      {user.type === "clients" ? (
        <>
          <h1>Haga su Pedido!</h1>
          <hr />
          <ul>
            <RestaurantList />
          </ul>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <h1>Lista de Pedidos</h1>
              </div>
              <div className="col mt-2">
                <Link
                  to="/restaurant/203948y3j9f40j2"
                  className="btn btn-primary"
                >
                  Catálogo
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <ul>
            <OrderList />
          </ul>
        </>
      )}
    </>
  );
};
