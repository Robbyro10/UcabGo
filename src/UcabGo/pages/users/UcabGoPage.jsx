import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore, useUcabGoStore } from "../../../hooks";
import { OrderList } from "../../components/orders";
import { StoreList } from "../../components/stores";

export const UcabGoPage = () => {
  const { user } = useAuthStore();

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
              <h1>Pedidos Pendientes</h1>
            </div>
          </div>
          <hr />
          <OrderList />
        </>
      )}
    </>
  );
};
