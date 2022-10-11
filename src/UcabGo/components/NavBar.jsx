import { Link, Navigate } from "react-router-dom";

export const NavBar = () => {
  const authStatus = "whatever";
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      {authStatus === "authenticated" ? (
        <span className="navbar-brand">
          <i className="fa-sharp fa-solid fa-house"></i>
          &nbsp; Juan
        </span>
      ) : (
        <Link to={`/login`} className="btn btn-outline-success">
          <span>Ingresar</span>
        </Link>
      )}

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
