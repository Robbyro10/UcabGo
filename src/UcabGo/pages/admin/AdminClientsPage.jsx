import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminClientCard } from "../../components/clients/AdminClientCard";

export const AdminClientsPage = () => {
  const { startLoadingClients, clients } = useUcabGoStore();
  useEffect(() => {
    startLoadingClients();
  }, [clients.length]);

  return (
    <div style={{ paddingLeft: "240px" }}>
      <h1 className="mt-3">Establecimientos</h1>
      <ul className="list-group mt-4">
        {clients.map((client) => (
          <AdminClientCard key={client._id} {...client} />
        ))}
      </ul>
    </div>
  );
};
