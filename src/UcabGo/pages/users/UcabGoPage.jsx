import { useAuthStore } from "../../../hooks";
import { OrderList } from "../../components/orders";
import { StoreList } from "../../components/stores";

export const UcabGoPage = () => {
  const { user } = useAuthStore();

  return (
    <div style={{ paddingTop: "80px" }}>
      {user.type === "clients" ? (
        <>
          <h1>¡Haga su Pedido!</h1>
          <hr />
          <StoreList />
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <h1>Pedidos Pendientes</h1>
            </div>
          </div>
          <hr />
          <OrderList />
        </>
      )}
    </div>
  );
};
