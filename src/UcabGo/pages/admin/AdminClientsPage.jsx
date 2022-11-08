import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminClientCard } from "../../components/clients/AdminClientCard";

export const AdminClientsPage = () => {
  const { startLoadingClients, clients } = useUcabGoStore();
  useEffect(() => {
    startLoadingClients();
  }, [clients.length]);

  return (
    <div className="mt-4" style={{ paddingLeft: "240px" }}>
      {clients.map((client) => (
        <AdminClientCard key={client._id} {...client} />
      ))}
    </div>
  );
};
