import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const NavBar = () => {
  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fa-sharp fa-solid fa-house"></i>
        &nbsp; {user.name}
      </span>

      <button onClick={startLogout} className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
