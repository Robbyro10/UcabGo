import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks";

export const NavBar = () => {
  const { startLogout, user } = useAuthStore(
    window.localStorage.getItem("type")
  );

  const handleClick = () => {
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
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <div className="container-fluid">
        <span className="navbar-brand">
          {user.type === "clients" ? (
            <i className="fa-sharp fa-solid fa-house"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-store"></i>
          )}
          &nbsp; {user.name}
        </span>
        <div className="d-flex">
          {user.type === "clients" && (
            <button className="btn btn-outline-success mr-3">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          )}

          <button onClick={handleClick} className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
