import { useAuthStore } from "../../../hooks";

export const NavBar = () => {
  const { startLogout, user } = useAuthStore(
    window.localStorage.getItem("type")
  );

  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <div className="container-fluid">
        <span className="navbar-brand">
          <i className="fa-sharp fa-solid fa-house"></i>
          &nbsp; {user.name}
        </span>
        <div className="d-flex">
          <button onClick={startLogout} className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
