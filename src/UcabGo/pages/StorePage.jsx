import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { FabAddNew, ItemList, StoreModal } from "../components";
import { getProductsByStore, getStoreById } from "../helpers";

export const StorePage = () => {
  const { _id } = useParams();

  const store = getStoreById(_id);
  const products = getProductsByStore(store);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const onBack = () => {
    navigate("/ucabgo");
  };

  if (!store) {
    return <Navigate to="/ucabgo" />;
  }

  return (
    <>
      <h1>{store.name}</h1>

      <p>{store.desc}</p>
      <hr />
      <p>
        <b>Ubicacion: </b>
        {store.location}
      </p>
      <p>
        <b>Horario: </b>
        {store.horario}
      </p>

      {user.type !== "clients" && <FabAddNew />}

      <StoreModal store={store.name} />

      {!products ? (
        <h1>No hay items en este establecimiento</h1>
      ) : (
        <ItemList store={store} />
      )}

      <button onClick={onBack} className="btn btn-outline-primary mb-5">
        Atrás
      </button>
    </>
  );
};
