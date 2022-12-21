import { useMemo } from "react";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminClientCard } from "../../components/clients/AdminClientCard";

export const AdminClientsPage = () => {
  const { startLoadingClients, clients } = useUcabGoStore();
  useEffect(() => {
    startLoadingClients();
  }, [clients.length]);

  const sortedClients = [...clients];

  const clientsAlphabetical = useMemo(
    () =>
      sortedClients.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      }),
    [sortedClients]
  );

  return (
    <div style={{ paddingLeft: "240px" }}>
      <h1 className="mt-3">Clientes ({sortedClients.length})</h1>
      <ul className="list-group mt-4">
        {clientsAlphabetical.map((client) => (
          <AdminClientCard key={client._id} {...client} />
        ))}
      </ul>
    </div>
  );
};
