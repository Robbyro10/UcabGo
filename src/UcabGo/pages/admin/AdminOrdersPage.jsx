import { useMemo } from "react";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminOrder } from "../../components/orders";

export const AdminOrdersPage = () => {
  const {
    startLoadingOrders,
    startLoadingClients,
    clients,
    orders,
    startLoadingStores,
    stores,
  } = useUcabGoStore();

  useEffect(() => {
    startLoadingOrders();
    startLoadingClients();
    startLoadingStores();
  }, [orders.length]);

  let sortedOrders = [...orders];

  const ordersAlphabetical = useMemo(
    () =>
      sortedOrders.sort(function (a, b) {
        if (a.user.name.toLowerCase() < b.user.name.toLowerCase()) return -1;
        if (a.user.name.toLowerCase() > b.user.name.toLowerCase()) return 1;
        return 0;
      }),
    [sortedOrders]
  );

  return (
    <div className="mt-3" style={{ paddingLeft: "240px" }}>
      <h1>Pedidos ({sortedOrders.length})</h1>
      <ul className="list-group">
        {ordersAlphabetical.map((order) => (
          <AdminOrder
            key={order.id}
            {...order}
            clients={clients}
            stores={stores}
          />
        ))}
      </ul>
    </div>
  );
};
