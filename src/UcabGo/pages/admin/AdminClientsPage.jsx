import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminClientCard } from "../../components/clients/AdminClientCard";

export const AdminClientsPage = () => {
  const { startLoadingClients, clients } = useUcabGoStore();
  useEffect(() => {
    startLoadingClients();
  }, [clients.length]);

  let sortedClients = [...clients];

  sortedClients.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  return (
    <div style={{ paddingLeft: "240px" }}>
      <h1 className="mt-3">Clientes ({sortedClients.length})</h1>
      <ul className="list-group mt-4">
        {sortedClients.map((client) => (
          <AdminClientCard key={client._id} {...client} />
        ))}
      </ul>
    </div>
  );
};
