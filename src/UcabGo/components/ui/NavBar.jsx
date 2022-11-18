import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSWR from "swr";
import { useAuthStore } from "../../../hooks";
import { fetcher, getEnvVariables } from "../../helpers";

export const NavBar = () => {
  const { startLogout, user } = useAuthStore(
    window.localStorage.getItem("type")
  );
  const orderUrl = `/orders/${user.uid}`;
  const catalogUrl = `/store/${user.uid}`;
  const { VITE_API_URL } = getEnvVariables();
  const { data, error } = useSWR(`${VITE_API_URL}/stores/${user.uid}`, fetcher);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Desea salir?",
      confirmButtonText: "Salir",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        startLogout();
      }
    });
  };

  return (
    <>
      {!data ? (
        <p>Cargando...</p>
      ) : (
        <nav
          className="navbar navbar-dark bg-dark mb-4 px-4 fixed-top"
          style={{ opacity: "0.96" }}
        >
          <div className="container-fluid">
            <span className="navbar-brand">
              <Link to="/profile" className="btn btn-outline-light">
                {user.type === "clients" ? (
                  <i className="fa-sharp fa-solid fa-house"></i>
                ) : (
                  <img
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    src={data.store.img}
                    alt={data.store.name}
                  />
                )}
                &nbsp; {user.name}
              </Link>
            </span>
            <div className="ms-auto">
              {user.type === "clients" ? (
                <Link to={orderUrl} className="btn btn-outline-success mr-3">
                  <i className="fa-solid fa-truck"></i>
                </Link>
              ) : (
                <Link to={catalogUrl} className="btn btn-outline-success mr-3">
                  <i className="fa-solid fa-bag-shopping"></i> &nbsp;
                  <span>Catálogo</span>
                </Link>
              )}

              <button onClick={handleLogout} className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                <span>Salir</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
